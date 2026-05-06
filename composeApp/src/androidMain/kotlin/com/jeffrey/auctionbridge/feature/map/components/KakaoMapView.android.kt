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
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
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

private const val CLUSTER_TAG_PREFIX = "cluster:"

@Composable
actual fun KakaoMapView(
    modifier: Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    clusters: List<CityCluster>,
    onMarkerClick: (MapMarker) -> Unit,
    onClusterClick: (cityKey: String) -> Unit,
    onZoomChanged: (kakaoLevel: Int) -> Unit,
    onMapReady: (MapController) -> Unit,
) {
    val currentOnMarkerClick by rememberUpdatedState(onMarkerClick)
    val currentOnClusterClick by rememberUpdatedState(onClusterClick)
    val currentOnZoomChanged by rememberUpdatedState(onZoomChanged)
    val currentOnMapReady by rememberUpdatedState(onMapReady)
    val currentMarkers by rememberUpdatedState(markers)

    var mapView by remember { mutableStateOf<MapView?>(null) }
    var kakaoMap by remember { mutableStateOf<KakaoMap?>(null) }
    val markerLabels = remember { mutableMapOf<String, Label>() }
    // 클러스터는 cityKey + count 합성키로 관리 — 카운트가 바뀌면 새로 그린다.
    val clusterLabels = remember { mutableMapOf<String, Label>() }

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
                            // 라벨 클릭 — tag prefix 로 마커/클러스터 분기
                            map.setOnLabelClickListener { _, _, label ->
                                val tag = label.tag as? String
                                when {
                                    tag == null -> false
                                    tag.startsWith(CLUSTER_TAG_PREFIX) -> {
                                        currentOnClusterClick(tag.removePrefix(CLUSTER_TAG_PREFIX))
                                        true
                                    }
                                    else -> {
                                        val matched = currentMarkers.firstOrNull { it.id == tag }
                                        if (matched != null) {
                                            currentOnMarkerClick(matched)
                                            true
                                        } else {
                                            false
                                        }
                                    }
                                }
                            }
                            // 카메라 이동 종료(=줌/패닝 결과 확정) 시 VM 에 현재 zoomLevel 통보 →
                            // 임계 통과 시 클러스터 모드 토글.
                            map.setOnCameraMoveEndListener { _, cameraPosition, _ ->
                                currentOnZoomChanged(cameraPosition.zoomLevel)
                            }
                            currentOnMapReady(AndroidMapController(map))
                        }
                    },
                )
            }
        },
    )

    // markers 변경 시 LabelLayer 동기화 (개별 매물)
    LaunchedEffect(kakaoMap, markers) {
        val map = kakaoMap ?: return@LaunchedEffect
        val layer = map.labelManager?.layer ?: return@LaunchedEffect

        val newIds = markers.map { it.id }.toSet()
        markerLabels.entries.removeAll { (id, label) ->
            if (id !in newIds) {
                layer.remove(label)
                true
            } else false
        }

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
        val subStyle = LabelTextStyle.from(
            /* size = */ 20,
            /* color = */ Color(0xFFE0E0E0).toArgb(),
            /* strokeSize = */ 3,
            /* strokeColor = */ Color.Black.toArgb(),
        )
        for (marker in markers) {
            if (markerLabels.containsKey(marker.id)) continue
            val sub = marker.subInfo
            val labelStyle = if (sub != null) {
                LabelStyle.from().setTextStyles(categoryStyle, priceStyle, subStyle)
            } else {
                LabelStyle.from().setTextStyles(categoryStyle, priceStyle)
            }
            val styles = map.labelManager?.addLabelStyles(LabelStyles.from(labelStyle)) ?: continue
            val texts = if (sub != null) {
                LabelTextBuilder().setTexts(marker.categoryLabel, marker.priceLabel, sub)
            } else {
                LabelTextBuilder().setTexts(marker.categoryLabel, marker.priceLabel)
            }
            val options = LabelOptions
                .from(KakaoLatLng.from(marker.position.latitude, marker.position.longitude))
                .setStyles(styles)
                .setTexts(texts)
            val label = layer.addLabel(options) ?: continue
            label.tag = marker.id
            markerLabels[marker.id] = label
        }
    }

    // clusters 변경 시 LabelLayer 동기화 (시 단위 묶음)
    LaunchedEffect(kakaoMap, clusters) {
        val map = kakaoMap ?: return@LaunchedEffect
        val layer = map.labelManager?.layer ?: return@LaunchedEffect

        val newKeys = clusters.map { "${it.cityKey}#${it.itemCount}" }.toSet()
        clusterLabels.entries.removeAll { (key, label) ->
            if (key !in newKeys) {
                layer.remove(label)
                true
            } else false
        }

        val cityNameStyle = LabelTextStyle.from(
            /* size = */ 20,
            /* color = */ Color(0xFFFFD740).toArgb(),
            /* strokeSize = */ 3,
            /* strokeColor = */ Color.Black.toArgb(),
        )
        val countStyle = LabelTextStyle.from(
            /* size = */ 34,
            /* color = */ Color.White.toArgb(),
            /* strokeSize = */ 3,
            /* strokeColor = */ Color.Black.toArgb(),
        )
        for (cluster in clusters) {
            val key = "${cluster.cityKey}#${cluster.itemCount}"
            if (clusterLabels.containsKey(key)) continue
            val labelStyle = LabelStyle.from().setTextStyles(cityNameStyle, countStyle)
            val styles = map.labelManager?.addLabelStyles(LabelStyles.from(labelStyle)) ?: continue
            val texts = LabelTextBuilder().setTexts(cluster.cityKey, cluster.itemCount.toString())
            val options = LabelOptions
                .from(KakaoLatLng.from(cluster.centerLat, cluster.centerLng))
                .setStyles(styles)
                .setTexts(texts)
            val label = layer.addLabel(options) ?: continue
            label.tag = "$CLUSTER_TAG_PREFIX${cluster.cityKey}"
            clusterLabels[key] = label
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            mapView?.finish()
            mapView = null
            kakaoMap = null
            markerLabels.clear()
            clusterLabels.clear()
        }
    }
}
