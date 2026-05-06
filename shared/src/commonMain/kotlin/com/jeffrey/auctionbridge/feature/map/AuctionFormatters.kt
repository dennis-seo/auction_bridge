package com.jeffrey.auctionbridge.feature.map

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem

/**
 * AuctionItem 의 표시용 보조 포맷터.
 *
 * 의존성을 줄이려고 kotlinx-datetime 을 끌어오지 않고 ISO-8601 문자열의 "YYYY-MM-DD"
 * 부분만 가벼운 substring 파싱으로 처리한다. 시·분 단위가 필요해지면 정식 도입 권장.
 */

/** "MM/DD" 또는 null (포맷 불일치/null). */
fun AuctionItem.shortBidEndDate(): String? {
    val raw = bidEndAt ?: return null
    if (raw.length < 10) return null
    val month = raw.substring(5, 7)
    val day = raw.substring(8, 10)
    return "$month/$day"
}

/** "1.2억" 형태. 0 이거나 null 이면 null. */
private fun Long?.toEokOrNull(): String? {
    val v = this ?: return null
    if (v <= 0) return null
    val eok = v / 1_0000_0000.0
    val rounded = (eok * 10).toLong() / 10.0
    return "${rounded}억"
}

fun AuctionItem.appraisalText(): String? = appraisalPrice.toEokOrNull()
fun AuctionItem.minBidText(): String? = minBidPrice.toEokOrNull()

/**
 * 마커 보조 라벨. priceLabel 옆/아래에 작게 노출.
 * 우선순위: 마감임박(마감일 존재) > 유찰 횟수.
 * - 둘 다 있으면 "마감 12/14 · 유찰 3"
 * - 마감만 "마감 12/14"
 * - 유찰만 "유찰 3"
 * - 둘 다 없으면 null
 */
fun AuctionItem.markerSubInfo(): String? {
    val end = shortBidEndDate()
    val fails = if (failedCount > 0) "유찰 $failedCount" else null
    return when {
        end != null && fails != null -> "마감 $end · $fails"
        end != null -> "마감 $end"
        fails != null -> fails
        else -> null
    }
}
