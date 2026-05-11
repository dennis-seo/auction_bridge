@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.feature.map.MapViewModel
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

/**
 * MapViewModel 의 JS-친화 래퍼.
 *
 * - subscribe(callback) 으로 상태 변경 구독
 * - onMapReady(moveHandler) 로 React 의 카메라 이동 함수를 VM 에 연결 (MapController 인터페이스 익명 구현)
 * - onMarkerClick / onMyLocationClick / onZoomIn / onZoomOut / clearSelection / onLocationPermissionGranted 로 액션 전달
 */
@JsExport
class MapViewModelJs internal constructor(
    private val vm: MapViewModel,
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    fun subscribe(onState: (MapUiStateDto) -> Unit): () -> Unit {
        val job: Job = scope.launch {
            vm.uiState.collect { state -> onState(state.toDto()) }
        }
        return { job.cancel() }
    }

    /**
     * React 측 map 이 ready 되면 호출.
     * @param moveHandler (lat, lng, kakaoLevel, animate) — kakaoLevel 0 이면 줌 변경 없이 panTo.
     */
    fun onMapReady(moveHandler: (Double, Double, Int, Boolean) -> Unit) {
        val controller = object : MapController {
            override fun moveTo(latLng: LatLng, zoom: Int?, animate: Boolean) {
                val level = if (zoom != null) zoomToKakaoLevel(zoom) else 0
                moveHandler(latLng.latitude, latLng.longitude, level, animate)
            }
        }
        vm.onMapReady(controller)
    }

    fun onMarkerClick(itemId: String) {
        vm.onMarkerClick(itemId)
    }

    /** 좌표 그룹 마커 클릭 — N건 매물이 모두 좌측 패널에 표시된다. */
    fun onGroupClick(groupKey: String) {
        vm.onGroupClick(groupKey)
    }

    fun onMyLocationClick() {
        vm.onMyLocationClick()
    }

    fun onZoomIn() {
        vm.onZoomIn()
    }

    fun onZoomOut() {
        vm.onZoomOut()
    }

    fun clearSelection() {
        vm.clearSelection()
    }

    /** 우하단 에러 오버레이 닫기. */
    fun dismissError() {
        vm.dismissError()
    }

    fun onLocationPermissionGranted() {
        vm.onLocationPermissionGranted()
    }

    /** 사용자가 휠/핀치/제스처로 지도 자체에서 줌을 바꿨을 때 호출. */
    fun onMapZoomChanged(kakaoLevel: Int) {
        vm.onMapZoomChanged(kakaoLevel)
    }

    /** 클러스터 말풍선 클릭 — 해당 시 centroid 로 이동 + 줌 인. */
    fun onClusterClick(cityKey: String) {
        vm.onClusterClick(cityKey)
    }

    fun dispose() {
        scope.cancel()
    }
}
