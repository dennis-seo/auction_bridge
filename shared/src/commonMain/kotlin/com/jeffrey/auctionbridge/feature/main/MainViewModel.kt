package com.jeffrey.auctionbridge.feature.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MainViewModel(
    private val auctionRepository: AuctionRepository,
) : ViewModel() {

    private val authState = MutableStateFlow(AuthSnapshot())
    private val transientState = MutableStateFlow<String?>(null)
    private val statsState = MutableStateFlow(StatsSnapshot())

    val uiState: StateFlow<MainUiState> =
        combine(
            auctionRepository.getCategoryList(),
            authState,
            transientState,
            statsState,
        ) { categories, auth, message, stats ->
            // stats counts 가 비어있지 않으면 ongoingCount 를 실측값으로 덮어쓴다.
            val mergedCategories = if (stats.counts.isEmpty()) {
                categories
            } else {
                categories.map { info ->
                    val real = stats.counts[info.category]
                    if (real != null) info.copy(ongoingCount = real) else info
                }
            }
            MainUiState(
                categories = mergedCategories,
                isLoggedIn = auth.isLoggedIn,
                userName = auth.userName,
                transientMessage = message,
                errorMessage = stats.error,
            )
        }.stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = MainUiState(),
        )

    init {
        // 진입 직후 카테고리 카드 카운트를 실측값으로 보강. 실패해도 mock 값은 유지.
        viewModelScope.launch {
            try {
                val counts = auctionRepository.getCategoryStats()
                statsState.update { it.copy(counts = counts, error = null) }
            } catch (e: Throwable) {
                if (e is CancellationException) throw e
                statsState.update { it.copy(error = humanReadableError(e)) }
            }
        }
    }

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

    /** 우하단 에러 오버레이 닫기. */
    fun dismissError() {
        statsState.update { it.copy(error = null) }
    }

    private fun humanReadableError(e: Throwable): String {
        val type = e::class.simpleName ?: "Error"
        val msg = e.message?.takeIf { it.isNotBlank() }
        return if (msg != null) "$type: $msg" else type
    }

    private data class AuthSnapshot(
        val isLoggedIn: Boolean = false,
        val userName: String? = null,
    )

    private data class StatsSnapshot(
        val counts: Map<AuctionCategory, Int> = emptyMap(),
        val error: String? = null,
    )
}
