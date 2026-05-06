package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MapMarker

/**
 * 플랫폼별 카카오 지도 렌더링 진입점.
 *
 * - Android: AndroidView 로 com.kakao.vectormap.MapView 래핑
 * - iOS:    Phase 1 미지원 (placeholder 텍스트)
 *
 * 클러스터 모드 동작은 [com.jeffrey.auctionbridge.feature.map.MapViewModel] 의
 * applyClustering 결과에 따라 상위에서 결정 — 호출자가 markers / clusters 중 하나만 채워 보낸다.
 */
@Composable
expect fun KakaoMapView(
    modifier: Modifier = Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    clusters: List<CityCluster> = emptyList(),
    onMarkerClick: (MapMarker) -> Unit,
    onClusterClick: (cityKey: String) -> Unit = {},
    /** 사용자가 휠/핀치/드래그-줌 등으로 직접 줌을 바꿨을 때 — VM cameraState 동기화용. */
    onZoomChanged: (kakaoLevel: Int) -> Unit = {},
    onMapReady: (MapController) -> Unit = {},
)
