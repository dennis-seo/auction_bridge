package com.jeffrey.auctionbridge.feature.map

/**
 * 한국식 주소 문자열에서 클러스터링 그룹 키로 사용할 "시" 단위 토큰을 추출.
 *
 * 우선순위:
 *  1) 첫 토큰이 광역 단위(특별시 / 광역시 / 특별자치시) 면 그대로 사용 — 예: "서울특별시", "부산광역시", "세종특별자치시"
 *  2) 그 외에는 첫 번째로 등장하는 "...시" 토큰 사용 — 예: "성남시", "수원시"
 *  3) 위 어느 패턴에도 매칭되지 않으면 null (지도 클러스터 대상에서 제외)
 *
 * 군/구 단위는 의도적으로 무시 — 사용자가 요청한 그룹 단위는 "시" 이므로
 * "성남시 분당구..." 와 "성남시 수정구..." 는 모두 "성남시" 한 그룹으로 묶인다.
 */
internal fun extractCityKey(address: String): String? {
    if (address.isBlank()) return null
    val tokens = address.trim().split(Regex("\\s+"))
    val first = tokens.firstOrNull() ?: return null
    if (first.endsWith("특별시") || first.endsWith("광역시") || first.endsWith("특별자치시")) {
        return first
    }
    return tokens.firstOrNull { it.endsWith("시") }
}
