package com.jeffrey.auctionbridge.feature.map

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.feature.map.state.CityCluster
import com.jeffrey.auctionbridge.feature.map.state.MapCameraState

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
)
