package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MapMarker

/**
 * 플랫폼별 카카오 지도 렌더링 진입점.
 *
 * - Android: AndroidView 로 com.kakao.vectormap.MapView 래핑
 * - WasmJs: index.html 의 #kakao-map div 위치/크기를 동기화 + JS SDK 호출
 *           (Phase 1 은 시각만, 입력 위임은 Phase 2)
 * - iOS:    Phase 1 미지원 (placeholder 텍스트)
 */
@Composable
expect fun KakaoMapView(
    modifier: Modifier = Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    onMarkerClick: (MapMarker) -> Unit,
    onMapReady: (MapController) -> Unit = {},
)
