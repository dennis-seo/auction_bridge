package com.jeffrey.auctionbridge.feature.map.controller

import com.jeffrey.auctionbridge.feature.map.components.moveKakaoMap
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel

internal class WebMapController(
    private val jsMap: JsAny,
) : MapController {
    override fun moveTo(latLng: LatLng, zoom: Int?, animate: Boolean) {
        // panTo 가 부드러운 이동, animate=false 라도 phase 1 은 동일하게 panTo 사용.
        // VM 의 zoom (높을수록 가까이) → Kakao level (높을수록 멀리) 로 변환 후 setLevel.
        // zoom 미지정 시 0 을 넘겨 setLevel 을 건너뛴다.
        val kakaoLevel = if (zoom != null) zoomToKakaoLevel(zoom) else 0
        moveKakaoMap(jsMap, latLng.latitude, latLng.longitude, kakaoLevel)
    }
}
