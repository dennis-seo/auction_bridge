@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.feature.main.MainUiState
import com.jeffrey.auctionbridge.feature.map.MapUiState
import com.jeffrey.auctionbridge.feature.map.appraisalText
import com.jeffrey.auctionbridge.feature.map.markerSubInfo
import com.jeffrey.auctionbridge.feature.map.minBidText
import com.jeffrey.auctionbridge.feature.map.shortBidEndDate
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel

/**
 * React 측에서 소비하는 JS-친화 DTO 들.
 * Kotlin StateFlow / List / Long 등 JsExport 불가 타입을 단순 String/Array/Int 로 정규화.
 */

@JsExport
class CategoryInfoDto internal constructor(
    val id: String,
    val displayName: String,
    val emoji: String,
    val ongoingCount: Int,
    val themeColorHex: String,        // "#RRGGBB" — CSS 에 그대로 사용
    val isEnabled: Boolean,
    val span: String,                 // "Featured" / "Half" / "Wide"
)

@JsExport
class MainUiStateDto internal constructor(
    val categories: Array<CategoryInfoDto>,
    val isLoggedIn: Boolean,
    val userName: String?,
    val transientMessage: String?,
)

internal fun CategoryInfo.toDto(): CategoryInfoDto {
    val rgb = (themeColorArgb and 0xFFFFFFL).toString(16).padStart(6, '0').uppercase()
    return CategoryInfoDto(
        id = category.id,
        displayName = displayName,
        emoji = emoji,
        ongoingCount = ongoingCount,
        themeColorHex = "#$rgb",
        isEnabled = isEnabled,
        span = span.name,
    )
}

internal fun MainUiState.toDto(): MainUiStateDto = MainUiStateDto(
    categories = categories.map { it.toDto() }.toTypedArray(),
    isLoggedIn = isLoggedIn,
    userName = userName,
    transientMessage = transientMessage,
)

// ---------- Map 관련 DTO ----------

@JsExport
class AuctionItemDto internal constructor(
    val id: String,
    val categoryId: String,
    val categoryDisplayName: String,
    val priceText: String,
    val failedCount: Int,
    val latitude: Double,
    val longitude: Double,
    val address: String,
    val areaSquareMeter: Double,
    // ---- 서버 연동 시 채워지는 부가 표시 ----
    val appraisalText: String?,        // "1.2억" 또는 null
    val minBidText: String?,           // "0.8억" 또는 null
    val bidEndShort: String?,          // "12/14" 또는 null
    val markerSubInfo: String?,        // "마감 12/14 · 유찰 3" 또는 null
    val status: String?,               // ongoing/sold/...
    val thumbnailUrl: String?,
)

@JsExport
class MapUiStateDto internal constructor(
    val items: Array<AuctionItemDto>,
    val selectedItem: AuctionItemDto?,
    val centerLat: Double,
    val centerLng: Double,
    val kakaoLevel: Int,           // 카카오 SDK level 로 변환된 값 — React 가 그대로 setLevel 에 전달
    val isLocationLoading: Boolean,
    val locationFallbackUsed: Boolean,
)

internal fun AuctionItem.toDto(): AuctionItemDto = AuctionItemDto(
    id = id,
    categoryId = category.id,
    categoryDisplayName = category.displayName,
    priceText = priceText,
    failedCount = failedCount,
    latitude = latitude,
    longitude = longitude,
    address = address,
    areaSquareMeter = areaSquareMeter,
    appraisalText = appraisalText(),
    minBidText = minBidText(),
    bidEndShort = shortBidEndDate(),
    markerSubInfo = markerSubInfo(),
    status = status,
    thumbnailUrl = thumbnailUrl,
)

internal fun MapUiState.toDto(): MapUiStateDto = MapUiStateDto(
    items = items.map { it.toDto() }.toTypedArray(),
    selectedItem = selectedItem?.toDto(),
    centerLat = cameraState.center.latitude,
    centerLng = cameraState.center.longitude,
    kakaoLevel = zoomToKakaoLevel(cameraState.zoom),
    isLocationLoading = isLocationLoading,
    locationFallbackUsed = locationFallbackUsed,
)
