@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.domain.model.RealtySearchItem
import com.jeffrey.auctionbridge.feature.search.SearchFilter
import com.jeffrey.auctionbridge.feature.search.SearchUiState
import com.jeffrey.auctionbridge.feature.search.appraisalText
import com.jeffrey.auctionbridge.feature.search.areaText
import com.jeffrey.auctionbridge.feature.search.ddayLabel
import com.jeffrey.auctionbridge.feature.search.minBidText
import com.jeffrey.auctionbridge.feature.search.saleRatioText
import com.jeffrey.auctionbridge.feature.search.statusLabel

/**
 * 검색 화면용 JS DTO 들.
 * Long → Double (원 단위, 2^53 한참 미만), List/Set → Array, 표시 문자열은 여기서 사전 계산.
 */

@JsExport
class SearchItemDto internal constructor(
    val id: String,
    val title: String?,
    val address: String?,
    /** 서버 카테고리 key — apartment / villa / ... */
    val propertyCategory: String?,
    val status: String?,               // ongoing/sold/failed/... (raw, 매각결과는 result 값)
    val statusLabel: String?,          // "입찰 진행중" / "낙찰" / "유찰" / ...
    val appraisalPrice: Double?,       // 감정가 raw (원)
    val minBidPrice: Double?,          // 최저 입찰가 raw (원)
    val appraisalText: String?,        // "1.2억" 또는 null
    val minBidText: String?,           // "0.8억" 또는 null
    val bidEndAt: String?,             // ISO-8601 원본 (매각결과는 개찰일)
    val ddayLabel: String?,            // "D-3" / "D-Day", 지난 날짜면 null — RESULTS 탭은 UI 미노출
    val failedCount: Int,
    val thumbnailUrl: String?,
    val areaText: String?,             // "전용 84.9㎡" 또는 null
    val prptDivNm: String?,            // "압류재산" 등 재산구분명
    val salePrice: Double?,            // 낙찰가 raw (원) — 매각결과 전용
    val salePriceRatio: Double?,       // 낙찰가율 % raw — 매각결과 전용
    val saleRatioText: String?,        // "낙찰가율 87%" 또는 null
)

@JsExport
class SearchFilterDto internal constructor(
    val regionSido: String?,
    val regionSigungu: String?,
    val categoryIds: Array<String>,
    val minPrice: Double?,
    val maxPrice: Double?,
    val minFailedCount: Int?,
    val maxFailedCount: Int?,
    val minAreaSqm: Double?,
    val maxAreaSqm: Double?,
    /** 활성 필터 그룹 수 — 필터 버튼 배지용. */
    val activeCount: Int,
)

@JsExport
class SearchUiStateDto internal constructor(
    val tabId: String,                 // "ongoing" / "results"
    val filter: SearchFilterDto,
    val sortId: String,                // "newest" / "deadline" / ...
    val sortLabel: String,             // "최신순" / "마감임박순" / ...
    val items: Array<SearchItemDto>,
    /** 조건에 맞는 전체 건수 — "총 N건" 헤더용. */
    val total: Int,
    val hasMore: Boolean,
    /** 첫 페이지 로딩 중 — 전체 스켈레톤 분기용. */
    val isLoading: Boolean,
    /** 추가 페이지 로딩 중 — 리스트 하단 인디케이터용. */
    val isLoadingMore: Boolean,
    val isFilterSheetOpen: Boolean,
    /** 검색 호출 실패 메시지. null 이면 정상. UI 는 우하단 오버레이로 노출. */
    val errorMessage: String?,
)

internal fun RealtySearchItem.toDto(): SearchItemDto = SearchItemDto(
    id = id,
    title = title,
    address = address,
    propertyCategory = propertyCategory,
    status = status,
    statusLabel = statusLabel(),
    appraisalPrice = appraisalPrice?.toDouble(),
    minBidPrice = minBidPrice?.toDouble(),
    appraisalText = appraisalText(),
    minBidText = minBidText(),
    bidEndAt = bidEndAt,
    ddayLabel = ddayLabel(),
    failedCount = failedCount,
    thumbnailUrl = thumbnailUrl,
    areaText = areaText(),
    prptDivNm = prptDivNm,
    salePrice = salePrice?.toDouble(),
    salePriceRatio = salePriceRatio,
    saleRatioText = saleRatioText(),
)

internal fun SearchFilter.toDto(): SearchFilterDto = SearchFilterDto(
    regionSido = regionSido,
    regionSigungu = regionSigungu,
    categoryIds = categories.map { it.id }.toTypedArray(),
    minPrice = minPrice?.toDouble(),
    maxPrice = maxPrice?.toDouble(),
    minFailedCount = minFailedCount,
    maxFailedCount = maxFailedCount,
    minAreaSqm = minAreaSqm,
    maxAreaSqm = maxAreaSqm,
    activeCount = activeCount,
)

internal fun SearchUiState.toDto(): SearchUiStateDto = SearchUiStateDto(
    tabId = tab.id,
    filter = filter.toDto(),
    sortId = sort.id,
    sortLabel = sort.displayName,
    items = items.map { it.toDto() }.toTypedArray(),
    total = total,
    hasMore = hasMore,
    isLoading = isLoading,
    isLoadingMore = isLoadingMore,
    isFilterSheetOpen = isFilterSheetOpen,
    errorMessage = errorMessage,
)
