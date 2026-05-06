package com.jeffrey.auctionbridge.feature.map

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.kakaoLevelToZoom
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MapViewModel(
    categoryId: String,
    private val auctionRepository: AuctionRepository,
    private val locationProvider: LocationProvider,
) : ViewModel() {

    private val category: AuctionCategory? = AuctionCategory.fromId(categoryId)
    private val _uiState = MutableStateFlow(MapUiState())
    val uiState: StateFlow<MapUiState> = _uiState.asStateFlow()

    private var mapController: MapController? = null

    init {
        category?.let { cat ->
            viewModelScope.launch {
                auctionRepository.getAuctionItems(cat).collect { items ->
                    _uiState.update { applyClustering(it.copy(items = items)) }
                }
            }
        }
        _uiState.update {
            applyClustering(
                it.copy(cameraState = MapCameraState.Default, locationFallbackUsed = true),
            )
        }
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

    fun clearSelection() {
        _uiState.update { it.copy(selectedItem = null) }
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
            state.copy(clusterMode = true, clusters = buildClusters(state.items))
        } else {
            // 클러스터 모드 종료 시 reference equality 보존을 위해 빈 리스트로 명시
            if (!state.clusterMode && state.clusters.isEmpty()) state
            else state.copy(clusterMode = false, clusters = emptyList())
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
    }
}
