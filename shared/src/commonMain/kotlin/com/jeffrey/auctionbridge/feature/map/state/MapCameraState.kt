package com.jeffrey.auctionbridge.feature.map.state

import com.jeffrey.auctionbridge.feature.map.controller.LatLng

data class MapCameraState(
    val center: LatLng,
    val zoom: Int,
) {
    companion object {
        // zoom 10 ≈ Kakao level 5 (≈1km, 동 단위)
        val Default: MapCameraState = MapCameraState(center = LatLng.SeongnamCityHall, zoom = 10)
    }
}

/**
 * VM 의 zoom (높을수록 가까이, Google Maps 스타일 1~14) →
 * Kakao 지도 level (높을수록 멀리, Kakao 스타일 1~14) 로 변환.
 *
 * Android/Web actual 모두 카카오 SDK 를 사용하므로 같은 변환 규칙을 따른다.
 */
fun zoomToKakaoLevel(zoom: Int): Int = (15 - zoom).coerceIn(1, 14)
