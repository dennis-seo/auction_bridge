package com.jeffrey.auctionbridge.core.domain.model

/**
 * Bento Grid 카드 1개를 표현하는 도메인 모델.
 *
 * @param category 카테고리 enum
 * @param displayName UI 표시 이름 ("아파트")
 * @param emoji 1차 출시 임시 아이콘 (추후 일러스트로 교체)
 * @param ongoingCount 현재 진행 중 매물 건수.
 *                     `null` 이면 아직 stats API 응답을 받지 못한 로딩 상태 — UI 는 스켈레톤 처리.
 *                     서버 응답이 도착하면 [MainViewModel] 이 실측값으로 교체.
 * @param themeColorArgb 카드 강조 색상 (ARGB Long, UI 측에서 플랫폼 Color 로 변환)
 * @param isEnabled 활성화 여부 (false면 "준비 중" 상태)
 * @param span Bento 레이아웃에서 차지할 폭
 */
data class CategoryInfo(
    val category: AuctionCategory,
    val displayName: String,
    val emoji: String,
    val ongoingCount: Int?,
    val themeColorArgb: Long,
    val isEnabled: Boolean,
    val span: CategorySpan,
)

enum class CategorySpan { Featured, Half, Wide }
