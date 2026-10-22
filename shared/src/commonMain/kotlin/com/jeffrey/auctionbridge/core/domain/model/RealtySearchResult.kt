package com.jeffrey.auctionbridge.core.domain.model

/**
 * 목록 검색(진행중/매각결과 공용) 항목 도메인 모델.
 *
 * [AuctionItem] 은 지도 표시를 전제로 좌표를 non-null 로 강제해 좌표 없는 매물을 버리므로
 * 재사용하지 않는다 — 목록 검색은 geocoding 미완료 매물도 노출해야 한다.
 *
 * 매각결과 탭 항목은 result → [status], 낙찰가 → [salePrice],
 * 낙찰가율(apsl_scfb_ratio, % 스케일) → [salePriceRatio] 로 매핑된다.
 * 진행중 탭 항목은 [salePrice]/[salePriceRatio] 가 항상 null.
 */
data class RealtySearchItem(
    val id: String,
    val title: String?,
    val address: String?,
    /** 서버 카테고리 key — apartment / villa / officetel / house / commercial / land / etc */
    val propertyCategory: String?,
    /** scheduled / ongoing / sold / failed / cancelled */
    val status: String?,
    /** 감정가 (원). */
    val appraisalPrice: Long?,
    /** 최저 입찰가 (원). */
    val minBidPrice: Long?,
    /** 입찰 마감(진행중) 또는 개찰일(매각결과) ISO-8601 문자열. */
    val bidEndAt: String?,
    val failedCount: Int,
    val thumbnailUrl: String?,
    /** 건물(전용) 면적 ㎡. */
    val bldSqms: Double?,
    /** 토지 면적 ㎡. */
    val landSqms: Double?,
    /** 온비드 재산구분명 — "압류재산" / "국유재산" 등. */
    val prptDivNm: String?,
    /** 낙찰가 (원). 매각결과 항목에만 존재. */
    val salePrice: Long?,
    /** 감정가 대비 낙찰가율 (% 스케일, 예: 87.3). 매각결과 항목에만 존재. */
    val salePriceRatio: Double?,
)

/** 검색 1페이지 결과. [hasMore] 로 무한스크롤 계속 여부 판단. */
data class RealtySearchPage(
    val items: List<RealtySearchItem>,
    val total: Int,
    val hasMore: Boolean,
)
