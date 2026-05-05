package com.jeffrey.auctionbridge.feature.map.controller

import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel
import com.kakao.vectormap.KakaoMap
import com.kakao.vectormap.LatLng as KakaoLatLng
import com.kakao.vectormap.camera.CameraAnimation
import com.kakao.vectormap.camera.CameraUpdateFactory

internal class AndroidMapController(
    private val kakaoMap: KakaoMap,
) : MapController {

    override fun moveTo(latLng: LatLng, zoom: Int?, animate: Boolean) {
        val target = KakaoLatLng.from(latLng.latitude, latLng.longitude)
        // VM 의 zoom (높을수록 가까이) → Kakao level (높을수록 멀리) 변환
        val update = if (zoom != null) {
            CameraUpdateFactory.newCenterPosition(target, zoomToKakaoLevel(zoom))
        } else {
            CameraUpdateFactory.newCenterPosition(target)
        }
        if (animate) {
            kakaoMap.moveCamera(update, CameraAnimation.from(400))
        } else {
            kakaoMap.moveCamera(update)
        }
    }
}
