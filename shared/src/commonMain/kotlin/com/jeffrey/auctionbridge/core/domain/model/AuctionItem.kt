package com.jeffrey.auctionbridge.core.domain.model

/**
 * 지도/리스트 공용 매물 표시 모델.
 *
 * 서버 [/api/v1/auctions] 응답의 list-항목과 거의 1:1 매핑.
 * Mock 모드에서는 일부 서버-only 필드가 null 일 수 있다.
 */
data class AuctionItem(
    val id: String,
    val category: AuctionCategory,
    val priceText: String,
    val failedCount: Int,
    val latitude: Double,
    val longitude: Double,
    val address: String,
    // ---- 서버 연동 시 채워지는 부가 정보 ----
    /**
     * 매물 제목 — 서버 onbid 원본에서 보통 "{도로명/지번 주소} {아파트명} 제{N}동 제{N}층 제{N}호" 형태.
     * 동일 좌표(같은 단지) 매물을 호수 단위로 구분할 때 사용.
     */
    val title: String? = null,
    /** 감정가 (원). 없으면 null. */
    val appraisalPrice: Long? = null,
    /** 최저 입찰가 (원). 없으면 null. */
    val minBidPrice: Long? = null,
    /** 입찰 마감 ISO-8601 문자열 (서버 타임존). 표시 직전 포맷. */
    val bidEndAt: String? = null,
    /** scheduled / ongoing / sold / failed / cancelled */
    val status: String? = null,
    /** 썸네일 URL (없으면 null). */
    val thumbnailUrl: String? = null,
)
