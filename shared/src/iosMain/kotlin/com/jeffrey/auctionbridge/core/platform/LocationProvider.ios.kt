package com.jeffrey.auctionbridge.core.platform

import com.jeffrey.auctionbridge.feature.map.controller.LatLng

internal class IosLocationProvider : LocationProvider {
    override suspend fun current(): LatLng? = null
}
