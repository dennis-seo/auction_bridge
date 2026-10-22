package com.jeffrey.auctionbridge.feature.search

import com.jeffrey.auctionbridge.core.domain.model.RealtySearchItem

data class SearchUiState(
    val tab: SearchTab = SearchTab.ONGOING,
    val filter: SearchFilter = SearchFilter(),
    val sort: SearchSort = SearchSort.NEWEST,
    /** 현재까지 누적된 검색 결과 (무한스크롤로 append). */
    val items: List<RealtySearchItem> = emptyList(),
    /** 필터 조건에 맞는 전체 건수 — "총 N건" 헤더용. */
    val total: Int = 0,
    /** 다음 페이지 존재 여부 — 무한스크롤 계속 판단. */
    val hasMore: Boolean = false,
    /**
     * 첫 페이지 로딩 중 (탭/필터/정렬 변경 포함).
     * UI 는 이 값으로 전체 스켈레톤 vs 리스트를 분기.
     */
    val isLoading: Boolean = true,
    /** 추가 페이지 로딩 중 — 리스트 하단 인디케이터용. */
    val isLoadingMore: Boolean = false,
    /** 필터 바텀시트/패널 열림 여부. */
    val isFilterSheetOpen: Boolean = false,
    /**
     * 검색 호출 실패 시 사람이 읽을 수 있는 메시지.
     * null 이면 정상. UI 는 우하단 토스트성 오버레이로 노출.
     */
    val errorMessage: String? = null,
)
