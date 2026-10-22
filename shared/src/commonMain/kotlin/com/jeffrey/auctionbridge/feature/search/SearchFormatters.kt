package com.jeffrey.auctionbridge.feature.search

import com.jeffrey.auctionbridge.core.domain.model.RealtySearchItem
import kotlin.math.roundToInt
import kotlin.time.Clock
import kotlin.time.ExperimentalTime

/**
 * 검색 리스트 카드 표시용 포맷터 — compose·web 브리지 공용 (commonMain).
 *
 * 포맷 정책은 [com.jeffrey.auctionbridge.feature.map.AuctionFormatters] 와 동일하게 유지
 * (억 단위 1자리 반올림, kotlinx-datetime 없이 ISO-8601 문자열의 날짜부만 가벼운 파싱).
 */

/** "1.2억" 형태. 0 이거나 null 이면 null. */
private fun Long?.toEokOrNull(): String? {
    val v = this ?: return null
    if (v <= 0) return null
    val eok = v / 1_0000_0000.0
    val rounded = (eok * 10).toLong() / 10.0
    return "${rounded}억"
}

fun RealtySearchItem.appraisalText(): String? = appraisalPrice.toEokOrNull()
fun RealtySearchItem.minBidText(): String? = minBidPrice.toEokOrNull()

/**
 * status → 한국어 라벨. 매각결과 항목은 result 값(sold/failed/cancelled)이
 * status 로 매핑돼 들어오므로 같은 표에서 처리된다. 알 수 없는 값은 null (칩 비표시).
 */
fun RealtySearchItem.statusLabel(): String? = when (status?.lowercase()) {
    "scheduled" -> "입찰 예정"
    "ongoing" -> "입찰 진행중"
    "sold" -> "낙찰"
    "failed" -> "유찰"
    "cancelled", "canceled" -> "취하"
    else -> null
}

/**
 * 입찰 마감 D-day 라벨 — "D-3", 당일이면 "D-Day".
 * 이미 지난 날짜/파싱 불가면 null (매각결과 탭에서는 UI 가 아예 미노출).
 */
@OptIn(ExperimentalTime::class)
fun RealtySearchItem.ddayLabel(): String? {
    val raw = bidEndAt ?: return null
    if (raw.length < 10) return null
    val year = raw.substring(0, 4).toIntOrNull() ?: return null
    val month = raw.substring(5, 7).toIntOrNull() ?: return null
    val day = raw.substring(8, 10).toIntOrNull() ?: return null
    // 서버 일시는 KST 기준 — 오늘 날짜도 UTC epoch 에 KST 오프셋(+9h)을 더해 계산.
    val todayEpochDays =
        (Clock.System.now().toEpochMilliseconds() + KST_OFFSET_MILLIS) / MILLIS_PER_DAY
    val diff = epochDaysFromCivil(year, month, day) - todayEpochDays
    return when {
        diff < 0 -> null
        diff == 0L -> "D-Day"
        else -> "D-$diff"
    }
}

/** "전용 84.9㎡" — 건물 면적 우선, 없으면 "토지 152㎡", 둘 다 없으면 null. */
fun RealtySearchItem.areaText(): String? =
    bldSqms?.takeIf { it > 0 }?.let { "전용 ${it.format1()}㎡" }
        ?: landSqms?.takeIf { it > 0 }?.let { "토지 ${it.format1()}㎡" }

/** "낙찰가율 87%" — salePriceRatio(% 스케일) 반올림. 매각결과 항목 전용. */
fun RealtySearchItem.saleRatioText(): String? =
    salePriceRatio?.takeIf { it > 0 }?.let { "낙찰가율 ${it.roundToInt()}%" }

/** 소수 1자리 표기 — 정수로 떨어지면 소수부 생략 ("84.9" / "152"). */
private fun Double.format1(): String {
    val rounded = (this * 10).roundToInt() / 10.0
    val whole = rounded.toLong()
    return if (rounded == whole.toDouble()) "$whole" else "$rounded"
}

/**
 * 그레고리력 날짜 → epoch days (1970-01-01 기준). Howard Hinnant 의 days_from_civil.
 * kotlinx-datetime 미도입 상태에서 D-day 차이 계산용.
 */
private fun epochDaysFromCivil(year: Int, month: Int, day: Int): Long {
    val y = if (month <= 2) year - 1 else year
    val era = (if (y >= 0) y else y - 399) / 400
    val yoe = y - era * 400
    val doy = (153 * (if (month > 2) month - 3 else month + 9) + 2) / 5 + day - 1
    val doe = yoe * 365 + yoe / 4 - yoe / 100 + doy
    return era * 146097L + doe - 719468L
}

private const val MILLIS_PER_DAY = 86_400_000L
private const val KST_OFFSET_MILLIS = 9 * 3_600_000L
