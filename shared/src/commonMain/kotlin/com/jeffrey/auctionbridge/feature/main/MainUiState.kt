package com.jeffrey.auctionbridge.feature.main

import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo

data class MainUiState(
    val categories: List<CategoryInfo> = emptyList(),
    val isLoggedIn: Boolean = false,
    val userName: String? = null,
    val transientMessage: String? = null,
    /**
     * 카테고리 통계(stats) 호출 실패 시 사람이 읽을 수 있는 메시지. UI 는 우하단 오버레이로 노출.
     * null 이면 정상.
     */
    val errorMessage: String? = null,
)
