package com.jeffrey.auctionbridge.feature.search

import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory

/**
 * 목록 검색 필터. 모든 필드 미설정(null/빈 셋) = 전체 검색.
 *
 * 가격은 최저 입찰가(min_bid_price) 기준 원 단위, 면적은 전용(건물) 면적 ㎡ 기준.
 * 매각결과 탭은 서버가 지역/카테고리 필터만 지원 — 나머지 필드는 무시된다.
 */
data class SearchFilter(
    val regionSido: String? = null,
    val regionSigungu: String? = null,
    val categories: Set<AuctionCategory> = emptySet(),
    /** 최저 입찰가 하한 (원). */
    val minPrice: Long? = null,
    /** 최저 입찰가 상한 (원). */
    val maxPrice: Long? = null,
    val minFailedCount: Int? = null,
    val maxFailedCount: Int? = null,
    /** 전용 면적 하한 (㎡). */
    val minAreaSqm: Double? = null,
    /** 전용 면적 상한 (㎡). */
    val maxAreaSqm: Double? = null,
) {
    /**
     * 활성화된 필터 그룹 수 — 필터 버튼 배지("필터 2")용.
     * 지역 / 카테고리 / 가격 / 유찰 횟수 / 면적 5개 그룹을 각각 1로 센다.
     */
    val activeCount: Int
        get() {
            var count = 0
            if (regionSido != null || regionSigungu != null) count++
            if (categories.isNotEmpty()) count++
            if (minPrice != null || maxPrice != null) count++
            if (minFailedCount != null || maxFailedCount != null) count++
            if (minAreaSqm != null || maxAreaSqm != null) count++
            return count
        }
}

/**
 * 정렬 옵션. [id] 는 서버 /api/v1/realty 의 canonical sort 값과 1:1.
 * 매각결과 탭은 서버 sort 어휘가 다르므로 repository 가 opbd_at_desc 계열로 변환.
 */
enum class SearchSort(val id: String, val displayName: String) {
    NEWEST("newest", "최신순"),
    DEADLINE("deadline", "마감임박순"),
    PRICE_ASC("price_asc", "최저가 낮은순"),
    PRICE_DESC("price_desc", "최저가 높은순"),
    RATIO_ASC("ratio_asc", "할인율 높은순"),
    FAILED_COUNT("failed_count", "유찰 많은순");

    companion object {
        fun fromId(id: String): SearchSort? = entries.firstOrNull { it.id == id }
    }
}

/** 검색 화면 상단 탭 — 진행중 매물 vs 매각결과. */
enum class SearchTab(val id: String, val displayName: String) {
    ONGOING("ongoing", "진행중"),
    RESULTS("results", "매각결과");

    companion object {
        fun fromId(id: String): SearchTab? = entries.firstOrNull { it.id == id }
    }
}
