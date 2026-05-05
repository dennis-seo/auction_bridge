package com.jeffrey.auctionbridge.core.navigation

import kotlinx.serialization.Serializable

@Serializable
data object MainRoute

@Serializable
data class MapRoute(val categoryId: String)

@Serializable
data class DetailRoute(val itemId: String)
