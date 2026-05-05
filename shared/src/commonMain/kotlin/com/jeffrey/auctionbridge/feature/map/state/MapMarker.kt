package com.jeffrey.auctionbridge.feature.map.state

import com.jeffrey.auctionbridge.feature.map.controller.LatLng

/**
 * 지도에 표시할 말풍선 마커 1개. 2줄 구조.
 *
 * @param id AuctionItem.id 와 매핑되어 클릭 시 선택 식별자로 사용
 * @param position 좌표
 * @param categoryLabel 윗줄 (카테고리 — "아파트", "주택" 등). 다른 색으로 강조.
 * @param priceLabel 아랫줄 ("0.4억 / 유찰3"). 기존 색.
 */
data class MapMarker(
    val id: String,
    val position: LatLng,
    val categoryLabel: String,
    val priceLabel: String,
)
