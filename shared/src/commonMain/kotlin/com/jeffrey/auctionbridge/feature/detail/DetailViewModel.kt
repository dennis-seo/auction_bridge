package com.jeffrey.auctionbridge.feature.detail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * 매물 상세 ViewModel.
 *
 * 화면 진입 시 1회 [AuctionRepository.getAuctionDetail] 호출 → [DetailUiState] 갱신.
 * 실패 시 [retry] 로 재시도.
 */
class DetailViewModel(
    private val itemId: String,
    private val auctionRepository: AuctionRepository,
) : ViewModel() {

    private val _uiState = MutableStateFlow<DetailUiState>(DetailUiState.Loading)
    val uiState: StateFlow<DetailUiState> = _uiState.asStateFlow()

    init {
        load()
    }

    fun retry() {
        if (_uiState.value is DetailUiState.Loading) return
        load()
    }

    private fun load() {
        _uiState.value = DetailUiState.Loading
        viewModelScope.launch {
            _uiState.value = runCatching { auctionRepository.getAuctionDetail(itemId) }
                .fold(
                    onSuccess = { DetailUiState.Loaded(it) },
                    onFailure = { DetailUiState.Error(it.message ?: "상세 정보를 불러오지 못했습니다") },
                )
        }
    }
}
