package com.jeffrey.auctionbridge.core.platform

import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import kotlinx.coroutines.CompletableDeferred

/**
 * Web 한정 위치 캐시.
 *
 * navigator.geolocation 은 Compose 합성/렌더보다 먼저 호출해두면 결과를
 * 백그라운드로 받아둘 수 있어, MapScreen 이 마운트될 시점엔 이미 완료(혹은 거의)된 상태로
 * 즉시 사용 가능하다. main.kt 부팅 시점에 [prefetchWebUserLocation] 을 호출한다.
 */
private var cached: CompletableDeferred<LatLng?>? = null

fun prefetchWebUserLocation() {
    if (cached != null) return
    val d = CompletableDeferred<LatLng?>()
    cached = d
    try {
        getCurrentPositionJs(
            onSuccess = { lat, lng -> d.complete(LatLng(lat, lng)) },
            onError = { d.complete(null) },
        )
    } catch (_: Throwable) {
        d.complete(null)
    }
}

internal class WebLocationProvider : LocationProvider {
    override suspend fun current(): LatLng? {
        // prefetch 이미 호출되었다면 그 결과를 await; 아니면 지금 시작.
        prefetchWebUserLocation()
        return cached!!.await()
    }
}

/**
 * navigator.geolocation.getCurrentPosition 래퍼.
 * 브라우저는 호출 시점에 권한 다이얼로그를 자체적으로 노출한다.
 */
@JsFun(
    """(onSuccess, onError) => {
        if (!navigator.geolocation) {
            onError();
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => onSuccess(pos.coords.latitude, pos.coords.longitude),
            () => onError(),
            { enableHighAccuracy: false, timeout: 7000, maximumAge: 60000 }
        );
    }""",
)
private external fun getCurrentPositionJs(
    onSuccess: (Double, Double) -> Unit,
    onError: () -> Unit,
)
