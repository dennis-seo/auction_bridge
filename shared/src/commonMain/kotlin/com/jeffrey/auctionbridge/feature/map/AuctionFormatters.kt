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
 * 서버 status(영문 코드)를 사용자에게 보여줄 한국어 라벨로 변환.
 * - scheduled  → 입찰 예정
 * - ongoing    → 입찰 진행중
 * - sold       → 낙찰
 * - failed     → 유찰
 * - cancelled  → 취하/취소
 * 알 수 없는 값은 null (UI 에서 칩 비표시).
 */
fun AuctionItem.statusLabel(): String? = when (status?.lowercase()) {
    "scheduled" -> "입찰 예정"
    "ongoing" -> "입찰 진행중"
    "sold" -> "낙찰"
    "failed" -> "유찰"
    "cancelled", "canceled" -> "취하"
    null, "" -> null
    else -> null
}

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

/**
 * 같은 주소의 매물을 호수 단위로 구분하는 식별 라벨.
 *
 * 서버 title 은 보통 `"{주소(시도+시군구+동)} {지번} {아파트명} 제{N}동 제{N}층 제{N}호"` 형태.
 * UI 가 헤더로 주소를 따로 노출하는 경우, 카드별로 주소+지번까지 제거하면 단지명+동+층+호수만 남는다.
 *
 * 처리 규칙:
 *  - title 이 null/blank → null
 *  - title 이 address 로 시작하면 그 prefix 제거
 *  - 결과 앞쪽이 지번(예: "147-5", "산 12", "294번지") 이면 그 토큰까지 제거
 *  - 모두 비면 title 원본 fallback
 */
fun AuctionItem.buildingUnitLabel(): String? {
    val raw = title?.trim().orEmpty()
    if (raw.isEmpty()) return null
    val addr = address.trim()
    val withoutAddress = if (addr.isNotEmpty() && raw.startsWith(addr)) {
        raw.removePrefix(addr).trim()
    } else {
        raw
    }
    val withoutLot = withoutAddress.replaceFirst(LOT_NO_PATTERN, "").trim()
    return withoutLot.ifBlank { withoutAddress.ifBlank { raw } }
}

/**
 * 지번 패턴 — 앞 부분에 붙는 "147-5 ", "산 12 ", "294번지 ", "294 " 등을 잡는다.
 *  - `(산\s*)?` 산지(山地) prefix 선택
 *  - `\d+(-\d+)?` 숫자 또는 숫자-숫자
 *  - `(번지)?` "번지" 접미사 선택
 *  - `\s+` 뒤에 공백(다음 토큰과 분리) 필수
 *  - `(?=[가-힣])` lookahead — 다음 토큰이 한글로 시작할 때만 매칭. 단지명/주소이름이 숫자로
 *    시작하는 케이스 (예: "21세기빌딩 ...", "3차아파트 ...") 가 잘리는 사고 방지.
 */
private val LOT_NO_PATTERN = Regex("""^(산\s*)?\d+(-\d+)?(번지)?\s+(?=[가-힣])""")
