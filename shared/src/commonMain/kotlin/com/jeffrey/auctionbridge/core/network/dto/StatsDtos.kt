package com.jeffrey.auctionbridge.core.network.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * 서버 GET /api/v1/auctions/stats 응답.
 *
 * 자산타입(realty/vehicle/movable) 별 그룹과, 그 안의 카테고리별 count 를 반환한다.
 * 메인 페이지 카드의 "진행 중 N건" 표시를 실측 값으로 갱신할 때 사용.
 */
@Serializable
data class AuctionStatsResponseDto(
    val total: Int = 0,
    val groups: List<AssetGroupStatDto> = emptyList(),
)

@Serializable
data class AssetGroupStatDto(
    @SerialName("asset_type") val assetType: String,
    val label: String? = null,
    val total: Int = 0,
    val categories: List<CategorySubStatDto> = emptyList(),
)

@Serializable
data class CategorySubStatDto(
    val key: String,
    val label: String? = null,
    val count: Int = 0,
)
