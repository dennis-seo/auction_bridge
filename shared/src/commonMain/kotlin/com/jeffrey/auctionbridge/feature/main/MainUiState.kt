package com.jeffrey.auctionbridge.feature.main

import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo

data class MainUiState(
    val categories: List<CategoryInfo> = emptyList(),
    val isLoggedIn: Boolean = false,
    val userName: String? = null,
    val transientMessage: String? = null,
)
