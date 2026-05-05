package com.jeffrey.auctionbridge.core.platform

import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import kotlinx.coroutines.CompletableDeferred

/**
 * Web 한정 위치 캐시.
 *
 * navigator.geolocation 호출은 React 마운트보다 일찍 시작하면 합성 시점엔 이미 완료된 상태.
 * 앱 진입점 (예: webApp main.tsx 의 useEffect 또는 shared 의 createXxx 팩토리 호출 시점) 에서
 * [prefetchWebUserLocation] 을 호출.
 */
private var cached: CompletableDeferred<LatLng?>? = null

@JsExport
fun prefetchWebUserLocation() {
    if (cached != null) return
    val d = CompletableDeferred<LatLng?>()
    cached = d
    try {
        getCurrentPositionJs(
            { lat, lng -> d.complete(LatLng(lat, lng)); Unit },
            { d.complete(null); Unit },
        )
    } catch (_: Throwable) {
        d.complete(null)
    }
}

internal class WebLocationProvider : LocationProvider {
    override suspend fun current(): LatLng? {
        prefetchWebUserLocation()
        return cached!!.await()
    }
}

/**
 * Kotlin/JS 에서 navigator.geolocation.getCurrentPosition 호출.
 * `js("...")` 인라인 — 콜백 클로저로 결과 수신.
 */
@Suppress("UNUSED_VARIABLE", "UNUSED_PARAMETER")
private fun getCurrentPositionJs(
    onSuccess: (Double, Double) -> Unit,
    onError: () -> Unit,
) {
    val s = onSuccess
    val e = onError
    js(
        """
        if (!navigator.geolocation) {
            e();
        } else {
            navigator.geolocation.getCurrentPosition(
                function (pos) { s(pos.coords.latitude, pos.coords.longitude); },
                function () { e(); },
                { enableHighAccuracy: false, timeout: 7000, maximumAge: 60000 }
            );
        }
        """,
    )
}
