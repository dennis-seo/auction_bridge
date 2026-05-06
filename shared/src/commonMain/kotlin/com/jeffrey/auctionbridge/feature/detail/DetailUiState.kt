package com.jeffrey.auctionbridge.feature.detail

import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail

/**
 * 상세 화면 상태.
 * - [Loading]: 첫 진입 또는 재시도 중.
 * - [Loaded]: 서버/Mock 응답 도착.
 * - [Error]: 네트워크/직렬화 실패. [message] 는 사용자 표시용.
 */
sealed interface DetailUiState {
    data object Loading : DetailUiState
    data class Loaded(val detail: AuctionDetail) : DetailUiState
    data class Error(val message: String) : DetailUiState
}
