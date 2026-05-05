package com.jeffrey.auctionbridge.feature.map.components

import android.util.Log
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.viewinterop.AndroidView
import com.jeffrey.auctionbridge.feature.map.controller.AndroidMapController
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MapMarker
import com.kakao.vectormap.KakaoMap
import com.kakao.vectormap.KakaoMapReadyCallback
import com.kakao.vectormap.LatLng as KakaoLatLng
import com.kakao.vectormap.MapLifeCycleCallback
import com.kakao.vectormap.MapView
import com.kakao.vectormap.label.Label
import com.kakao.vectormap.label.LabelOptions
import com.kakao.vectormap.label.LabelStyle
import com.kakao.vectormap.label.LabelStyles
import com.kakao.vectormap.label.LabelTextBuilder
import com.kakao.vectormap.label.LabelTextStyle

@Composable
actual fun KakaoMapView(
    modifier: Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    onMarkerClick: (MapMarker) -> Unit,
    onMapReady: (MapController) -> Unit,
) {
    val currentOnMarkerClick by rememberUpdatedState(onMarkerClick)
    val currentOnMapReady by rememberUpdatedState(onMapReady)
    val currentMarkers by rememberUpdatedState(markers)

    var mapView by remember { mutableStateOf<MapView?>(null) }
    var kakaoMap by remember { mutableStateOf<KakaoMap?>(null) }
    val markerLabels = remember { mutableMapOf<String, Label>() }

    AndroidView(
        modifier = modifier,
        factory = { ctx ->
            MapView(ctx).also { view ->
                mapView = view
                view.start(
                    object : MapLifeCycleCallback() {
                        override fun onMapDestroy() {
                            Log.d("KakaoMapView", "onMapDestroy")
                        }
                        override fun onMapError(error: Exception) {
                            Log.e("KakaoMapView", "onMapError", error)
                        }
                    },
                    object : KakaoMapReadyCallback() {
                        override fun onMapReady(map: KakaoMap) {
                            kakaoMap = map
                            map.setOnLabelClickListener { _, _, label ->
                                val id = label.tag as? String
                                val matched = id?.let { mid -> currentMarkers.firstOrNull { it.id == mid } }
                                if (matched != null) {
                                    currentOnMarkerClick(matched)
                                    true
                                } else {
                                    false
                                }
                            }
                            currentOnMapReady(AndroidMapController(map))
                        }
                    },
                )
            }
        },
    )

    // markers 변경 시 LabelLayer 동기화
    LaunchedEffect(kakaoMap, markers) {
        val map = kakaoMap ?: return@LaunchedEffect
        val layer = map.labelManager?.layer ?: return@LaunchedEffect

        val newIds = markers.map { it.id }.toSet()
        // 제거: 이전 라벨 중 새 리스트에 없는 것
        markerLabels.entries.removeAll { (id, label) ->
            if (id !in newIds) {
                layer.remove(label)
                true
            } else false
        }

        // 추가: 새 마커 중 기존에 없는 것 — 2줄 라벨 (카테고리 / 가격)
        for (marker in markers) {
            if (markerLabels.containsKey(marker.id)) continue
            // 윗줄: 카테고리 (밝은 앰버 + 검정 외곽선으로 그림자 효과)
            // 아랫줄: 가격 (흰색 + 검정 외곽선)
            val categoryStyle = LabelTextStyle.from(
                /* size = */ 22,
                /* color = */ Color(0xFFFFD740).toArgb(),
                /* strokeSize = */ 3,
                /* strokeColor = */ Color.Black.toArgb(),
            )
            val priceStyle = LabelTextStyle.from(
                /* size = */ 28,
                /* color = */ Color.White.toArgb(),
                /* strokeSize = */ 3,
                /* strokeColor = */ Color.Black.toArgb(),
            )
            val styles = map.labelManager?.addLabelStyles(
                LabelStyles.from(
                    LabelStyle.from().setTextStyles(categoryStyle, priceStyle),
                ),
            ) ?: continue
            val options = LabelOptions
                .from(KakaoLatLng.from(marker.position.latitude, marker.position.longitude))
                .setStyles(styles)
                .setTexts(
                    LabelTextBuilder().setTexts(marker.categoryLabel, marker.priceLabel),
                )
            val label = layer.addLabel(options) ?: continue
            label.tag = marker.id
            markerLabels[marker.id] = label
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            mapView?.finish()
            mapView = null
            kakaoMap = null
            markerLabels.clear()
        }
    }
}
