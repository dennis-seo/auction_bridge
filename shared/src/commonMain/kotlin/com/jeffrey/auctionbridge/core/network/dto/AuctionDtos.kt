package com.jeffrey.auctionbridge.core.network.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * 서버 GET /api/v1/auctions 응답 모델.
 * 필요한 필드만 선택적으로 반영 (서버가 새 필드를 추가해도 깨지지 않도록 모두 nullable).
 */
@Serializable
data class AuctionListResponse(
    val items: List<AuctionListItemDto> = emptyList(),
    val truncated: Boolean = false,
)

@Serializable
data class AuctionListItemDto(
    val id: Long,
    val source: String? = null,
    @SerialName("asset_type") val assetType: String? = null,
    @SerialName("property_category") val propertyCategory: String? = null,
    val status: String? = null,
    val title: String? = null,
    val address: String? = null,
    val lat: Double? = null,
    val lng: Double? = null,
    @SerialName("region_sido") val regionSido: String? = null,
    @SerialName("region_sigungu") val regionSigungu: String? = null,
    @SerialName("appraisal_price") val appraisalPrice: Long? = null,
    @SerialName("min_bid_price") val minBidPrice: Long? = null,
    @SerialName("fee_rate") val feeRate: Double? = null,
    @SerialName("bid_end_at") val bidEndAt: String? = null,
    @SerialName("thumbnail_url") val thumbnailUrl: String? = null,
    @SerialName("failed_count") val failedCount: Int? = null,
    @SerialName("land_sqms") val landSqms: Double? = null,
    @SerialName("bld_sqms") val bldSqms: Double? = null,
)
