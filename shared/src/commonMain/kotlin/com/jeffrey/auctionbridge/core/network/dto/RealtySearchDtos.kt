package com.jeffrey.auctionbridge.core.network.dto

import com.jeffrey.auctionbridge.core.domain.model.RealtySearchItem
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * 서버 GET /api/v1/realty (목록 검색) / GET /api/v1/bid-results (매각결과) 응답 모델.
 * 서버가 새 필드를 추가해도 깨지지 않도록 id 류를 제외하고 모두 nullable.
 */
@Serializable
data class RealtySearchResponse(
    val items: List<RealtySearchItemDto> = emptyList(),
    val total: Int = 0,
    val offset: Int = 0,
    val limit: Int = 0,
)

@Serializable
data class RealtySearchItemDto(
    val id: Long,
    val source: String? = null,
    val status: String? = null,
    val title: String? = null,
    @SerialName("cltr_mng_no") val cltrMngNo: String? = null,
    @SerialName("prpt_div_nm") val prptDivNm: String? = null,
    @SerialName("dsps_mthod_nm") val dspsMthodNm: String? = null,
    val address: String? = null,
    @SerialName("region_sido") val regionSido: String? = null,
    @SerialName("region_sigungu") val regionSigungu: String? = null,
    val lat: Double? = null,
    val lng: Double? = null,
    @SerialName("appraisal_price") val appraisalPrice: Long? = null,
    @SerialName("min_bid_price") val minBidPrice: Long? = null,
    @SerialName("min_bid_price_text") val minBidPriceText: String? = null,
    @SerialName("apsl_lowst_ratio") val apslLowstRatio: Double? = null,
    @SerialName("bid_begin_at") val bidBeginAt: String? = null,
    @SerialName("bid_end_at") val bidEndAt: String? = null,
    @SerialName("failed_count") val failedCount: Int? = null,
    @SerialName("thumbnail_url") val thumbnailUrl: String? = null,
    @SerialName("property_category") val propertyCategory: String? = null,
    @SerialName("land_sqms") val landSqms: Double? = null,
    @SerialName("bld_sqms") val bldSqms: Double? = null,
)

@Serializable
data class BidResultsResponse(
    val items: List<BidResultItemDto> = emptyList(),
    val total: Int = 0,
    val offset: Int = 0,
    val limit: Int = 0,
)

@Serializable
data class BidResultItemDto(
    @SerialName("auction_id") val auctionId: Long,
    @SerialName("cltr_mng_no") val cltrMngNo: String? = null,
    @SerialName("asset_type") val assetType: String? = null,
    @SerialName("property_category") val propertyCategory: String? = null,
    val title: String? = null,
    val address: String? = null,
    @SerialName("region_sido") val regionSido: String? = null,
    @SerialName("region_sigungu") val regionSigungu: String? = null,
    @SerialName("prpt_div_nm") val prptDivNm: String? = null,
    @SerialName("thumbnail_url") val thumbnailUrl: String? = null,
    @SerialName("appraisal_price") val appraisalPrice: Long? = null,
    @SerialName("min_bid_price") val minBidPrice: Long? = null,
    /** sold / failed / cancelled */
    val result: String? = null,
    @SerialName("winning_bid_amount") val winningBidAmount: Long? = null,
    /** 감정가 대비 낙찰가율 (% 스케일, 예: 75.29) */
    @SerialName("apsl_scfb_ratio") val apslScfbRatio: Double? = null,
    @SerialName("lowst_scfb_ratio") val lowstScfbRatio: Double? = null,
    @SerialName("valid_bidder_count") val validBidderCount: Int? = null,
    @SerialName("opbd_at") val opbdAt: String? = null,
    @SerialName("failed_count") val failedCount: Int? = null,
)

/** 목록 검색 항목 → 도메인. 진행 매물이므로 sale* 필드는 항상 null. */
fun RealtySearchItemDto.toDomain(): RealtySearchItem = RealtySearchItem(
    id = id.toString(),
    title = title,
    address = address,
    propertyCategory = propertyCategory,
    status = status,
    appraisalPrice = appraisalPrice,
    minBidPrice = minBidPrice,
    bidEndAt = bidEndAt,
    failedCount = failedCount ?: 0,
    thumbnailUrl = thumbnailUrl,
    bldSqms = bldSqms,
    landSqms = landSqms,
    prptDivNm = prptDivNm,
    salePrice = null,
    salePriceRatio = null,
)

/**
 * 매각결과 항목 → 도메인. 같은 카드 UI 를 쓰기 위해 진행 매물과 동일 모델로 매핑 —
 * result → status, winning_bid_amount → salePrice, apsl_scfb_ratio → salePriceRatio,
 * 개찰일(opbd_at) → bidEndAt (결과 탭에서는 D-day 미노출, 날짜 표기용).
 */
fun BidResultItemDto.toDomain(): RealtySearchItem = RealtySearchItem(
    id = auctionId.toString(),
    title = title,
    address = address,
    propertyCategory = propertyCategory,
    status = result,
    appraisalPrice = appraisalPrice,
    minBidPrice = minBidPrice,
    bidEndAt = opbdAt,
    failedCount = failedCount ?: 0,
    thumbnailUrl = thumbnailUrl,
    bldSqms = null,
    landSqms = null,
    prptDivNm = prptDivNm,
    salePrice = winningBidAmount,
    salePriceRatio = apslScfbRatio,
)
