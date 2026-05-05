package com.jeffrey.auctionbridge.core.platform

import com.jeffrey.auctionbridge.feature.map.controller.LatLng

/**
 * 플랫폼별 현재 위치 조회.
 *
 * 권한이 없거나 사용자가 거부하면 null 을 반환한다.
 * 호출 측은 null 시 fallback (예: 서울 시청)으로 카메라를 옮긴다.
 *
 * 구현 클래스는 각 플랫폼 platformModule 에서 등록한다.
 */
interface LocationProvider {
    suspend fun current(): LatLng?
}
