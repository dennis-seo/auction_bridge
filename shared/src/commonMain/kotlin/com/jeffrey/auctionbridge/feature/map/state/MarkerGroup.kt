package com.jeffrey.auctionbridge.feature.map.state

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem

/**
 * 동일 좌표(또는 거의 동일한 좌표)에 위치한 매물들을 하나의 마커로 묶은 그룹.
 *
 * 클러스터 모드가 아닐 때 (개별 마커 모드) 사용된다. 서버가 동(洞) 단위로 같은 좌표를
 * 부여하는 경우 한 아파트 단지 안에서 여러 호실/세대가 동시 경공매되어 좌표가 겹치는
 * 일이 흔하므로, UI 가 겹친 마커를 N 개 쌓아 보여주지 않고 하나로 묶어 "(N건)" 표기.
 *
 * @param groupKey lat/lng 를 일정 자릿수로 반올림한 키. 같은 단지의 매물이라면 동일.
 * @param latitude / longitude — 그룹 내 첫 항목 좌표(반올림 전 원본 그대로 사용).
 * @param items 같은 좌표의 매물 리스트. 1건 이상.
 */
data class MarkerGroup(
    val groupKey: String,
    val latitude: Double,
    val longitude: Double,
    val items: List<AuctionItem>,
) {
    val count: Int get() = items.size
}
