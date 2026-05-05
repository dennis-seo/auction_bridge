package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MapMarker

@Composable
actual fun KakaoMapView(
    modifier: Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    onMarkerClick: (MapMarker) -> Unit,
    onMapReady: (MapController) -> Unit,
) {
    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.Center,
    ) {
        Text("iOS 지도 미지원 — TODO")
    }
}
