package com.jeffrey.auctionbridge.feature.detail

import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.AuctionRound
import kotlin.math.roundToInt

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

// ====================================================================
// 회차 이력(rounds) 포맷터
// ====================================================================

/** 회차 라벨 — 서버 round_label("3-1") 그대로, 비어 있으면 null. */
fun AuctionRound.roundLabelDisplay(): String? = roundLabel?.takeIf { it.isNotBlank() }

/** "06/30 ~ 07/02" — 한쪽만 있으면 "06/30 ~" / "~ 07/02", 둘 다 없으면 null. */
fun AuctionRound.periodText(): String? {
    val begin = bidBeginAt?.toMonthDayOrNull()
    val end = bidEndAt?.toMonthDayOrNull()
    return when {
        begin != null && end != null -> "$begin ~ $end"
        begin != null -> "$begin ~"
        end != null -> "~ $end"
        else -> null
    }
}

/** ISO-8601 앞부분에서 "MM/DD" 추출 — 다른 포맷터들과 같은 substring 파싱 정책. */
private fun String.toMonthDayOrNull(): String? {
    if (length < 10) return null
    return "${substring(5, 7)}/${substring(8, 10)}"
}

/**
 * 회차 결과/상태 라벨 — 상세 statusLabel 과 같은 매핑을 표 셀에 맞게 축약.
 * 알 수 없는 값은 null (UI 에서 뱃지 비표시).
 */
fun AuctionRound.resultLabel(): String? = when (status?.lowercase()) {
    "scheduled" -> "예정"
    "ongoing" -> "진행중"
    "sold" -> "낙찰"
    "failed" -> "유찰"
    "cancelled", "canceled" -> "취소"
    else -> null
}

/** 회차 최저 입찰가 — 텍스트 조건("최고가" 등) 우선, 없으면 억 단위. */
fun AuctionRound.minBidText(): String? = minBidPriceText ?: minBidPrice.toEokOrNull()

/** 낙찰가 "4.2억" — 확정 결과 없으면 null. */
fun AuctionRound.saleText(): String? = result?.winningBidAmount.toEokOrNull()

/** "낙찰가율 75%" — apsl_scfb_ratio(% 스케일) 반올림. */
fun AuctionRound.saleRatioText(): String? =
    result?.apslScfbRatio?.takeIf { it > 0 }?.let { "낙찰가율 ${it.roundToInt()}%" }
