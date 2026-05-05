package com.jeffrey.auctionbridge.feature.map.controller

/**
 * 지도가 ready된 뒤 상위로 노출되는 명령형 핸들.
 * 화면 코드에서 "내 위치 FAB" 등 외부 트리거로 카메라를 움직일 때 사용한다.
 *
 * 플랫폼 actual KakaoMapView 내부에서 인스턴스화되어 onMapReady 로 전달된다.
 */
interface MapController {
    fun moveTo(latLng: LatLng, zoom: Int? = null, animate: Boolean = true)
}
