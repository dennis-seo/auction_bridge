package com.jeffrey.auctionbridge.feature.map

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState
import com.jeffrey.auctionbridge.feature.map.state.MarkerGroup

data class MapUiState(
    val items: List<AuctionItem> = emptyList(),
    val selectedItem: AuctionItem? = null,
    val cameraState: MapCameraState = MapCameraState.Default,
    val isLocationLoading: Boolean = false,
    val locationFallbackUsed: Boolean = false,
    /**
     * 줌아웃(카카오 level >= [com.jeffrey.auctionbridge.feature.map.MapViewModel.CLUSTER_KAKAO_LEVEL_THRESHOLD])
     * 시 [items] 를 시 단위로 묶은 결과. 클러스터 모드가 아닐 땐 빈 리스트.
     */
    val clusters: List<CityCluster> = emptyList(),
    /** 현재 클러스터 모드인지 — UI 는 이 값만 보고 markers vs clusters 렌더링을 결정. */
    val clusterMode: Boolean = false,
    /**
     * 동일 좌표에 위치한 매물들을 묶은 마커 그룹.
     * 클러스터 모드가 아닐 때 UI 는 [items] 가 아니라 이 리스트로 마커를 그린다.
     * 1건짜리 그룹도 포함되므로 markers 와 1:1 로 매핑된다.
     */
    val markerGroups: List<MarkerGroup> = emptyList(),
    /**
     * 마커 클릭으로 선택된 그룹. 좌측 패널은 이 안의 items 를 스크롤 리스트로 표시.
     * null 이면 패널 닫힘.
     */
    val selectedGroup: MarkerGroup? = null,
    /**
     * 매물 목록을 아직 한 번도 수신하지 못한 상태.
     * 첫 emission(items 가 0 개여도) 이 도착하면 false 로 전환된다.
     * UI 는 이 값으로 "로딩 중" 과 "결과 0건" 을 구분.
     */
    val isLoadingItems: Boolean = true,
    /**
     * 매물 호출이 실패한 경우의 사람이 읽을 수 있는 메시지.
     * null 이면 정상. UI 는 우하단 토스트성 오버레이로 노출.
     */
    val errorMessage: String? = null,
)
