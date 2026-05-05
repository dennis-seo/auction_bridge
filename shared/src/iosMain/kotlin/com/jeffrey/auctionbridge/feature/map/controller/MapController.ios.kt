package com.jeffrey.auctionbridge.feature.map.controller

internal class IosNoopMapController : MapController {
    override fun moveTo(latLng: LatLng, zoom: Int?, animate: Boolean) {
        // iOS 미지원 (Phase 1)
    }
}
