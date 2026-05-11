package com.jeffrey.auctionbridge.feature.map

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.config.AppFlags
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MarkerGroup
import com.jeffrey.auctionbridge.feature.map.state.kakaoLevelToZoom
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel
import kotlin.math.roundToLong
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MapViewModel(
    categoryId: String,
    private val auctionRepository: AuctionRepository,
    private val locationProvider: LocationProvider,
    private val flags: AppFlags,
) : ViewModel() {

    private val category: AuctionCategory? = AuctionCategory.fromId(categoryId)
    private val _uiState = MutableStateFlow(MapUiState())
    val uiState: StateFlow<MapUiState> = _uiState.asStateFlow()

    private var mapController: MapController? = null

    init {
        if (category != null) {
            viewModelScope.launch {
                auctionRepository.getAuctionItems(category)
                    .catch { e ->
                        if (e is CancellationException) throw e
                        // 운영 빌드(showErrors=false) 에서는 에러 토스트 노출 안 함 — 지도엔 마커 없이 0건 상태.
                        val msg = if (flags.showErrors) humanReadableError(e) else null
                        _uiState.update {
                            it.copy(
                                isLoadingItems = false,
                                errorMessage = msg,
                            )
                        }
                    }
                    .collect { items ->
                        _uiState.update {
                            applyClustering(
                                it.copy(
                                    items = items,
                                    isLoadingItems = false,
                                    errorMessage = null,
                                ),
                            )
                        }
                    }
            }
        } else {
            // 알 수 없는 카테고리 — 더 이상 데이터가 오지 않으므로 로딩 종료.
            _uiState.update { it.copy(isLoadingItems = false) }
        }
        _uiState.update {
            applyClustering(
                it.copy(cameraState = MapCameraState.Default, locationFallbackUsed = true),
            )
        }
    }

    /** 사용자가 에러 오버레이를 닫을 때 호출. */
    fun dismissError() {
        _uiState.update { it.copy(errorMessage = null) }
    }

    private fun humanReadableError(e: Throwable): String {
        val type = e::class.simpleName ?: "Error"
        val msg = e.message?.takeIf { it.isNotBlank() }
        return if (msg != null) "$type: $msg" else type
    }

    fun onLocationPermissionGranted() {
        viewModelScope.launch { centerOnUserOrFallback(animate = false) }
    }

    fun onMapReady(controller: MapController) {
        mapController = controller
        val cam = _uiState.value.cameraState
        controller.moveTo(cam.center, cam.zoom, animate = false)
    }

    fun onMarkerClick(itemId: String) {
        val selected = _uiState.value.items.firstOrNull { it.id == itemId } ?: return
        _uiState.update { it.copy(selectedItem = selected) }
    }

    /**
     * 새 마커 클릭 핸들러 — 좌표 기반 그룹 단위로 선택. 같은 좌표의 N건이 모두
     * 좌측 패널 리스트에 들어간다.
     */
    fun onGroupClick(groupKey: String) {
        val group = _uiState.value.markerGroups.firstOrNull { it.groupKey == groupKey } ?: return
        _uiState.update { it.copy(selectedGroup = group, selectedItem = group.items.first()) }
    }

    fun clearSelection() {
        _uiState.update { it.copy(selectedItem = null, selectedGroup = null) }
    }

    fun onMyLocationClick() {
        viewModelScope.launch { centerOnUserOrFallback(animate = true) }
    }

    fun onZoomIn() {
        adjustZoom(delta = +1)
    }

    fun onZoomOut() {
        adjustZoom(delta = -1)
    }

    /**
     * 사용자가 지도 자체에서 휠/핀치 등으로 줌을 변경한 경우 호출.
     * VM 내부 cameraState.zoom 을 SDK 가 통보한 level 로 동기화하고 클러스터 모드 재평가.
     *
     * 카메라 이동(controller.moveTo) 은 호출하지 않는다 — 이미 SDK 가 화면을 그 zoom 으로 그리고 있으므로 루프 방지.
     */
    fun onMapZoomChanged(kakaoLevel: Int) {
        val newZoom = kakaoLevelToZoom(kakaoLevel)
        val current = _uiState.value
        if (current.cameraState.zoom == newZoom) return
        _uiState.update {
            applyClustering(it.copy(cameraState = it.cameraState.copy(zoom = newZoom)))
        }
    }

    /**
     * 클러스터 말풍선 클릭 시 — 해당 시의 centroid 로 카메라 이동 + 줌 인.
     * (개별 매물이 보이는 수준인 [CLUSTER_KAKAO_LEVEL_THRESHOLD] - 1 = 카카오 level 7 까지 진입)
     */
    fun onClusterClick(cityKey: String) {
        val cluster = _uiState.value.clusters.firstOrNull { it.cityKey == cityKey } ?: return
        val target = LatLng(cluster.centerLat, cluster.centerLng)
        val newZoom = kakaoLevelToZoom(CLUSTER_KAKAO_LEVEL_THRESHOLD - 1)
        val newCam = MapCameraState(center = target, zoom = newZoom)
        _uiState.update { applyClustering(it.copy(cameraState = newCam)) }
        mapController?.moveTo(target, newZoom, animate = true)
    }

    private fun adjustZoom(delta: Int) {
        val current = _uiState.value.cameraState
        val newZoom = (current.zoom + delta).coerceIn(1, 14)
        if (newZoom == current.zoom) return
        val newCam = current.copy(zoom = newZoom)
        _uiState.update { applyClustering(it.copy(cameraState = newCam)) }
        mapController?.moveTo(newCam.center, newZoom, animate = true)
    }

    private suspend fun centerOnUserOrFallback(animate: Boolean) {
        _uiState.update { it.copy(isLocationLoading = true) }
        val current = locationProvider.current()
        val target = current ?: LatLng.SeongnamCityHall
        val zoom = 10
        _uiState.update {
            applyClustering(
                it.copy(
                    cameraState = MapCameraState(center = target, zoom = zoom),
                    isLocationLoading = false,
                    locationFallbackUsed = current == null,
                ),
            )
        }
        mapController?.moveTo(target, zoom, animate = animate)
    }

    /**
     * cameraState.zoom 또는 items 변경 시 호출되는 derived state 계산.
     * - kakaoLevel >= [CLUSTER_KAKAO_LEVEL_THRESHOLD] 이면 클러스터 모드로 진입하고
     *   items 를 시(市) 단위로 묶은 [CityCluster] 리스트를 함께 채워둔다.
     * - 그 외에는 clusterMode=false, clusters=emptyList.
     */
    private fun applyClustering(state: MapUiState): MapUiState {
        val kakaoLevel = zoomToKakaoLevel(state.cameraState.zoom)
        val shouldCluster = kakaoLevel >= CLUSTER_KAKAO_LEVEL_THRESHOLD
        return if (shouldCluster) {
            state.copy(
                clusterMode = true,
                clusters = buildClusters(state.items),
                // 클러스터 모드일 때는 개별 그룹 마커를 그리지 않으므로 비움.
                markerGroups = emptyList(),
            )
        } else {
            val newGroups = buildMarkerGroups(state.items)
            // 현재 선택된 그룹이 새 그룹 목록에 더 이상 없으면 선택 해제.
            val newSelected = state.selectedGroup?.let { sel ->
                newGroups.firstOrNull { it.groupKey == sel.groupKey }
            }
            state.copy(
                clusterMode = false,
                clusters = if (state.clusters.isEmpty()) state.clusters else emptyList(),
                markerGroups = newGroups,
                selectedGroup = newSelected,
            )
        }
    }

    /**
     * 같은 좌표의 매물을 하나의 [MarkerGroup] 으로 묶는다.
     * 키는 lat/lng 를 [COORD_KEY_DECIMALS] 자리수로 반올림한 값 ─ 서버가 동(洞) 단위로
     * 동일 좌표를 부여하는 경우 한 단지 내 여러 호실이 한 그룹으로 묶임.
     */
    private fun buildMarkerGroups(items: List<AuctionItem>): List<MarkerGroup> {
        if (items.isEmpty()) return emptyList()
        val factor = 1.0
            .let { var f = it; repeat(COORD_KEY_DECIMALS) { f *= 10 }; f }
        // LinkedHashMap 으로 첫 등장 순서 유지 — 마커 추가/제거 diff 안정성 향상.
        val grouped = LinkedHashMap<String, MutableList<AuctionItem>>()
        for (item in items) {
            val keyLat = (item.latitude * factor).roundToLong()
            val keyLng = (item.longitude * factor).roundToLong()
            val key = "${keyLat}_$keyLng"
            grouped.getOrPut(key) { mutableListOf() }.add(item)
        }
        return grouped.map { (key, list) ->
            MarkerGroup(
                groupKey = key,
                latitude = list.first().latitude,
                longitude = list.first().longitude,
                items = list.toList(),
            )
        }
    }

    private fun buildClusters(items: List<AuctionItem>): List<CityCluster> {
        if (items.isEmpty()) return emptyList()
        // 시 추출이 실패한 매물은 클러스터 대상에서 제외 — 줌아웃 상태에서도 그대로 표시되진 않지만
        // 데이터 품질 이슈가 있는 매물을 강제로 한 그룹에 욱여넣지 않기 위함.
        val grouped = items
            .mapNotNull { item -> extractCityKey(item.address)?.let { it to item } }
            .groupBy({ it.first }, { it.second })

        return grouped.map { (cityKey, group) ->
            val avgLat = group.sumOf { it.latitude } / group.size
            val avgLng = group.sumOf { it.longitude } / group.size
            CityCluster(
                cityKey = cityKey,
                centerLat = avgLat,
                centerLng = avgLng,
                itemCount = group.size,
                itemIds = group.map { it.id },
            )
        }
    }

    internal companion object {
        /**
         * 카카오 SDK level 기준 — 이 값 이상으로 줌아웃되면 클러스터 모드로 전환.
         * level 8 ≈ 약 5km 반경. 시(市) 한두 개가 화면에 들어오는 수준.
         */
        const val CLUSTER_KAKAO_LEVEL_THRESHOLD = 8

        /**
         * 좌표 그룹핑 키 산출 시 사용할 소수점 자릿수.
         * 5자리 ≈ 약 1m 정밀도 — 서버가 같은 단지에 부여한 동일 좌표를 한 그룹으로 묶기에 충분하고,
         * 서로 다른 단지(수십 m 이상 차이)는 분리됨.
         */
        private const val COORD_KEY_DECIMALS = 5
    }
}
