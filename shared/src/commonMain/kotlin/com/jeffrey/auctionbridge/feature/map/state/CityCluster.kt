package com.jeffrey.auctionbridge.feature.map.state

/**
 * 줌아웃 시 시(市) 단위로 묶이는 매물 클러스터.
 *
 * @param cityKey 그룹 키 — 동일 시에 속한 매물은 모두 같은 cityKey 를 가진다.
 *                예: "성남시", "서울특별시", "부산광역시"
 * @param centerLat 그룹 내 매물들의 위도 평균 (centroid). 마커 위치로 사용.
 * @param centerLng 그룹 내 매물들의 경도 평균 (centroid).
 * @param itemCount 묶인 매물 개수 — 말풍선에 표시될 숫자.
 * @param itemIds 디버깅/추후 확장(클릭 시 매물 리스트 표시 등) 용 원본 매물 id 목록.
 */
data class CityCluster(
    val cityKey: String,
    val centerLat: Double,
    val centerLng: Double,
    val itemCount: Int,
    val itemIds: List<String>,
)
