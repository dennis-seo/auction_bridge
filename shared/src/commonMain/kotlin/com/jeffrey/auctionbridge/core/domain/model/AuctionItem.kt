package com.jeffrey.auctionbridge.core.domain.model

data class AuctionItem(
    val id: String,
    val category: AuctionCategory,
    val priceText: String,
    val failedCount: Int,
    val latitude: Double,
    val longitude: Double,
    val address: String,
    val areaSquareMeter: Double,
)
