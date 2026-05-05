package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.layout.positionInWindow
import androidx.compose.ui.platform.LocalDensity
import com.jeffrey.auctionbridge.feature.map.controller.MapController
import com.jeffrey.auctionbridge.feature.map.controller.WebMapController
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MapMarker
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel
import kotlinx.browser.document
import org.w3c.dom.HTMLElement

private const val MAP_DIV_ID = "kakao-map"

/**
 * Web 용 actual.
 *
 * Phase 1 — 시각만 노출:
 * - index.html 의 <div id="kakao-map"> 위치/크기를 onGloballyPositioned 로 추적해
 *   Compose Layout 에 맞게 갱신한다.
 * - z-index 는 0 유지 (Compose canvas 뒤). Compose canvas 가 모든 입력을 흡수하므로
 *   드래그/줌/마커 클릭은 Phase 1 에서 동작하지 않는다.
 *   → Phase 2: pointer event delegation 추가 예정.
 */
@Composable
actual fun KakaoMapView(
    modifier: Modifier,
    cameraState: MapCameraState,
    markers: List<MapMarker>,
    onMarkerClick: (MapMarker) -> Unit,
    onMapReady: (MapController) -> Unit,
) {
    val density = LocalDensity.current
    var jsMap by remember { mutableStateOf<JsAny?>(null) }
    val overlays = remember { mutableMapOf<String, JsAny>() }

    Box(
        modifier = modifier.onGloballyPositioned { coords ->
            val el = document.getElementById(MAP_DIV_ID) as? HTMLElement ?: return@onGloballyPositioned
            val pos = coords.positionInWindow()
            val sizePx = coords.size
            with(density) {
                // px 그대로 적용 — Compose density 와 브라우저 density 는 동일 (CSS px == compose px / density)
                el.style.position = "absolute"
                el.style.left = "${pos.x.toInt()}px"
                el.style.top = "${pos.y.toInt()}px"
                el.style.width = "${sizePx.width}px"
                el.style.height = "${sizePx.height}px"
                el.style.display = "block"
                // z-index -1: 항상 Compose canvas 뒤 (UI 오버레이가 가려지지 않도록)
                el.style.zIndex = "-1"
            }
            // 이미 생성된 map 이면 사이즈 변화 반영 (refresh 후 0x0 → 정상 크기 복구 케이스 포함)
            jsMap?.let { relayoutKakaoMap(it) }
        },
    ) {
        // Compose 캔버스 측에는 빈 상자만 그림 — 실제 픽셀은 div 가 담당.
    }

    // SDK 로드 후 Map 인스턴스 생성
    LaunchedEffect(Unit) {
        kakaoMapsLoad {
            val container = document.getElementById(MAP_DIV_ID) as? HTMLElement
            if (container == null) {
                console_warn("[KakaoMap] #$MAP_DIV_ID div 를 찾지 못했습니다.")
                return@kakaoMapsLoad
            }
            // SDK 가 캐시된 채 새로고침되면 onGloballyPositioned 보다 이 콜백이 먼저 발화하여
            // display:none 인 0x0 div 위에 map 이 생성될 수 있다 → 사전에 강제 표시 + fullscreen.
            // onGloballyPositioned 가 이후 정확한 Compose 레이아웃 좌표로 재배치 + relayout 호출.
            container.style.display = "block"
            container.style.position = "absolute"
            container.style.left = "0"
            container.style.top = "0"
            container.style.right = "0"
            container.style.bottom = "0"
            val map = createKakaoMap(
                container = container,
                lat = cameraState.center.latitude,
                lng = cameraState.center.longitude,
                level = zoomToKakaoLevel(cameraState.zoom),
            )
            jsMap = map
            relayoutKakaoMap(map) // 생성 직후에도 한 번 더 — 일부 캐시 시나리오 안전장치
            onMapReady(WebMapController(map))
            console_log("[KakaoMap] map ready (Phase 1: 시각만, 입력은 Phase 2 — TODO)")
        }
    }

    // markers diff → overlays 갱신
    LaunchedEffect(jsMap, markers) {
        val map = jsMap ?: return@LaunchedEffect
        val newIds = markers.map { it.id }.toSet()
        // 제거
        overlays.entries.removeAll { (id, ov) ->
            if (id !in newIds) {
                removeCustomOverlay(ov)
                true
            } else false
        }
        // 추가
        for (marker in markers) {
            if (overlays.containsKey(marker.id)) continue
            val html = """<div class="auction-bubble">""" +
                """<div class="category">${marker.categoryLabel}</div>""" +
                """<div class="price">${marker.priceLabel}</div>""" +
                """</div>"""
            val ov = addCustomOverlay(map, marker.position.latitude, marker.position.longitude, html)
            overlays[marker.id] = ov
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            // map div 를 화면 밖으로 보내 시각 제거 (재사용 가능 상태 유지)
            val el = document.getElementById(MAP_DIV_ID) as? HTMLElement
            el?.style?.display = "none"
            // overlays 정리
            for ((_, ov) in overlays) removeCustomOverlay(ov)
            overlays.clear()
            jsMap = null
        }
    }
}

@JsFun("""(msg) => { console.log(msg); }""")
private external fun console_log(msg: String)

@JsFun("""(msg) => { console.warn(msg); }""")
private external fun console_warn(msg: String)
