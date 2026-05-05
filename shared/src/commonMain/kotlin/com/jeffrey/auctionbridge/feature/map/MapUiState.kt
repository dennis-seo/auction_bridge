package com.jeffrey.auctionbridge.feature.map

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState

data class MapUiState(
    val items: List<AuctionItem> = emptyList(),
    val selectedItem: AuctionItem? = null,
    val cameraState: MapCameraState = MapCameraState.Default,
    val isLocationLoading: Boolean = false,
    val locationFallbackUsed: Boolean = false,
)
