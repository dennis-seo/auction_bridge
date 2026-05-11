package com.jeffrey.auctionbridge.core.data

import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.core.domain.model.CategorySpan
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.flowOf

// 카테고리 카드 강조 색상 ARGB 상수 (UI 측에서 플랫폼 Color 로 변환)
private const val ARGB_BLUE_40 = 0xFF1565C0L
private const val ARGB_SLATE_GRAY = 0xFF778DA9L

/**
 * 메인 페이지 카테고리 카드의 **UI 메타데이터**(emoji/색상/표시명/isEnabled/span) 만
 * 정적으로 제공하는 소스. 서버가 stats 응답으로 카드 메타를 함께 제공하기 전까지의 다리 역할.
 *
 * 매물 리스트(`getAuctionItems`) 와 매물 상세(`getAuctionDetail`) 는 더 이상 mock 을 제공하지 않는다 —
 * 운영 데이터로만 동작하며 서버 호출 실패 시 [RemoteAuctionRepository] 가 예외를 그대로 전파한다.
 */
class MockAuctionRepository : AuctionRepository {

    private val state = MutableStateFlow(seedData)

    override fun getCategoryList(): Flow<List<CategoryInfo>> = state.asStateFlow()

    /** 매물 mock 데이터는 제거됨. 호출 시 빈 리스트 1회 emit. */
    override fun getAuctionItems(category: AuctionCategory): Flow<List<AuctionItem>> =
        flowOf(emptyList())

    /** 카테고리 카운트는 서버 stats 가 권위 — mock 은 빈 맵. */
    override suspend fun getCategoryStats(): Map<AuctionCategory, Int> = emptyMap()

    /** 매물 상세 mock 합성도 제거. 호출 시 예외 — 운영에서는 RemoteAuctionRepository 가 그대로 surface. */
    override suspend fun getAuctionDetail(id: String): AuctionDetail =
        throw UnsupportedOperationException(
            "Mock detail removed: getAuctionDetail($id) must hit the real server",
        )

    private companion object {
        val seedData: List<CategoryInfo> = listOf(
            CategoryInfo(
                category = AuctionCategory.APARTMENT,
                displayName = "아파트",
                emoji = "🏢",
                ongoingCount = null,
                themeColorArgb = ARGB_BLUE_40,
                isEnabled = true,
                span = CategorySpan.Featured,
            ),
            CategoryInfo(
                category = AuctionCategory.CAR,
                displayName = "자동차",
                emoji = "🚗",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.OFFICE_TEL,
                displayName = "오피스텔",
                emoji = "🏬",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = true,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.VILLA,
                displayName = "빌라/연립",
                emoji = "🏘️",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = true,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.HOUSE,
                displayName = "주택",
                emoji = "🏠",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = true,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.STORE,
                displayName = "상가",
                emoji = "🏪",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = true,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.LAND,
                displayName = "토지",
                emoji = "🌿",
                ongoingCount = null,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = true,
                span = CategorySpan.Wide,
            ),
        )
    }
}
