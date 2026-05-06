package com.jeffrey.auctionbridge.feature.detail

import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail

/**
 * 상세 화면 표시용 포맷터. 포맷 정책은 [com.jeffrey.auctionbridge.feature.map.AuctionFormatters]
 * 의 list 카드 포맷과 동일하게 유지(억 단위, "MM/DD" 등).
 */

private fun Long?.toEokOrNull(): String? {
    val v = this ?: return null
    if (v <= 0) return null
    val eok = v / 1_0000_0000.0
    val rounded = (eok * 10).toLong() / 10.0
    return "${rounded}억"
}

fun AuctionDetail.appraisalText(): String? = appraisalPrice.toEokOrNull()
fun AuctionDetail.minBidText(): String? = minBidPriceText ?: minBidPrice.toEokOrNull()

/** "YYYY-MM-DD HH:mm" 또는 ISO-8601 의 앞 16자 — 표시용 절단. */
fun AuctionDetail.bidEndDisplay(): String? = bidEndAt?.formatDateTimeShort()
fun AuctionDetail.bidBeginDisplay(): String? = bidBeginAt?.formatDateTimeShort()

private fun String.formatDateTimeShort(): String? {
    if (length < 10) return null
    val date = substring(0, 10)
    val time = if (length >= 16) substring(11, 16) else null
    return if (time != null) "$date $time" else date
}

fun AuctionDetail.statusLabel(): String = when (status.lowercase()) {
    "scheduled" -> "입찰 예정"
    "ongoing" -> "입찰 진행중"
    "sold" -> "낙찰"
    "failed" -> "유찰"
    "cancelled", "canceled" -> "취하"
    else -> status
}

fun AuctionDetail.assetTypeLabel(): String = when (assetType.lowercase()) {
    "realty" -> "부동산"
    "vehicle" -> "차량"
    "movable" -> "동산"
    else -> assetType
}

fun riskLevelLabel(level: Int?): String? = when (level) {
    1 -> "안전"
    2 -> "주의"
    3 -> "위험"
    else -> null
}
