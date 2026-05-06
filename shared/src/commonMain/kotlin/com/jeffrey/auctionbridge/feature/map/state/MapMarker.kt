package com.jeffrey.auctionbridge.feature.map.state

import com.jeffrey.auctionbridge.feature.map.controller.LatLng

/**
 * 지도에 표시할 말풍선 마커. 최대 3줄(카테고리 / 가격 / 부가정보).
 *
 * @param id AuctionItem.id 와 매핑되어 클릭 시 선택 식별자로 사용
 * @param position 좌표
 * @param categoryLabel 윗줄 (카테고리 — "아파트", "주택" 등). 다른 색으로 강조.
 * @param priceLabel 가운데 줄 ("0.4억" / "최저 0.4억"). 기존 색.
 * @param subInfo 아랫줄 ("마감 12/14 · 유찰 3"). 없으면 null — 2줄로 표시.
 */
data class MapMarker(
    val id: String,
    val position: LatLng,
    val categoryLabel: String,
    val priceLabel: String,
    val subInfo: String? = null,
)
