package com.jeffrey.auctionbridge.feature.map

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
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
                    _uiState.update { it.copy(items = items) }
                }
            }
        }
        // 권한 요청 결과를 기다리는 동안 fallback 으로 시작 (Seoul 시청).
        // 권한 승인 시 RequestLocationPermissionOnce → onLocationPermissionGranted 가
        // 호출되어 실제 위치로 이동.
        _uiState.update { it.copy(cameraState = MapCameraState.Default, locationFallbackUsed = true) }
    }

    fun onLocationPermissionGranted() {
        viewModelScope.launch { centerOnUserOrFallback(animate = false) }
    }

    fun onMapReady(controller: MapController) {
        mapController = controller
        // 최초 ready 시 현재 카메라 상태로 즉시 동기화
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

    private fun adjustZoom(delta: Int) {
        val current = _uiState.value.cameraState
        val newZoom = (current.zoom + delta).coerceIn(1, 14)
        if (newZoom == current.zoom) return
        val newCam = current.copy(zoom = newZoom)
        _uiState.update { it.copy(cameraState = newCam) }
        mapController?.moveTo(newCam.center, newZoom, animate = true)
    }

    private suspend fun centerOnUserOrFallback(animate: Boolean) {
        _uiState.update { it.copy(isLocationLoading = true) }
        val current = locationProvider.current()
        val target = current ?: LatLng.SeongnamCityHall
        // 모든 시나리오 (현재 위치 / fallback) 모두 zoom 10 ≈ Kakao level 5 (≈1km, 동 단위)
        val zoom = 10
        _uiState.update {
            it.copy(
                cameraState = MapCameraState(center = target, zoom = zoom),
                isLocationLoading = false,
                locationFallbackUsed = current == null,
            )
        }
        mapController?.moveTo(target, zoom, animate = animate)
    }
}
