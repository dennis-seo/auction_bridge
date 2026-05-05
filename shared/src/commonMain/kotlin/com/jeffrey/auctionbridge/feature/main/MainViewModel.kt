package com.jeffrey.auctionbridge.feature.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update

class MainViewModel(
    private val auctionRepository: AuctionRepository,
) : ViewModel() {

    private val authState = MutableStateFlow(AuthSnapshot())
    private val transientState = MutableStateFlow<String?>(null)

    val uiState: StateFlow<MainUiState> =
        combine(
            auctionRepository.getCategoryList(),
            authState,
            transientState,
        ) { categories, auth, message ->
            MainUiState(
                categories = categories,
                isLoggedIn = auth.isLoggedIn,
                userName = auth.userName,
                transientMessage = message,
            )
        }.stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = MainUiState(),
        )

    fun toggleLogin() {
        authState.update { snap ->
            if (snap.isLoggedIn) AuthSnapshot()
            else AuthSnapshot(isLoggedIn = true, userName = "사용자")
        }
    }

    fun onDisabledCategoryClick(displayName: String) {
        transientState.value = "$displayName 카테고리는 준비 중입니다"
    }

    fun consumeMessage() {
        transientState.value = null
    }

    private data class AuthSnapshot(
        val isLoggedIn: Boolean = false,
        val userName: String? = null,
    )
}
