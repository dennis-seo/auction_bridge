package com.jeffrey.auctionbridge.feature.map.controller

data class LatLng(
    val latitude: Double,
    val longitude: Double,
) {
    companion object {
        /** Mock 데이터/기본 fallback 중심점 — 성남시청. */
        val SeongnamCityHall: LatLng = LatLng(37.4202, 127.1268)
    }
}
