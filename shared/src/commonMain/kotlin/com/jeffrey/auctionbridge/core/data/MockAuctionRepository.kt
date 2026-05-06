package com.jeffrey.auctionbridge.core.data

import com.jeffrey.auctionbridge.core.domain.model.AuctionAssetDetails
import com.jeffrey.auctionbridge.core.domain.model.AuctionBidOptions
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionCodeNames
import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.core.domain.model.CategorySpan
import com.jeffrey.auctionbridge.core.domain.model.RightsAnalysisSummary
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.flowOf

// 카테고리 카드 강조 색상 ARGB 상수 (UI 측에서 플랫폼 Color 로 변환)
private const val ARGB_BLUE_40 = 0xFF1565C0L
private const val ARGB_SLATE_GRAY = 0xFF778DA9L

/**
 * 개발 단계에서 사용하는 하드코딩 데이터 소스.
 * 추후 RemoteAuctionRepository(Ktor) + LocalAuctionRepository(Cache) 로 교체된다.
 */
class MockAuctionRepository : AuctionRepository {

    private val state = MutableStateFlow(seedData)

    override fun getCategoryList(): Flow<List<CategoryInfo>> = state.asStateFlow()

    override fun getAuctionItems(category: AuctionCategory): Flow<List<AuctionItem>> =
        flowOf(itemsByCategory[category].orEmpty())

    override suspend fun getAuctionDetail(id: String): AuctionDetail {
        // 기존 mock 리스트에서 id 매칭, 없으면 첫 번째 아이템으로 합성.
        val item = itemsByCategory.values.flatten().firstOrNull { it.id == id }
            ?: itemsByCategory.values.flatten().first()
        return synthesizeDetail(item)
    }

    private fun synthesizeDetail(item: AuctionItem): AuctionDetail {
        val details: AuctionAssetDetails = if (item.category == AuctionCategory.CAR) {
            AuctionAssetDetails.Vehicle(
                vehicleCategory = "sedan",
                maker = "현대", vehicleKind = "승용",
                modelName = "쏘나타", yearModel = "2019",
                plateNo = "12가1234", mileageKm = 87_000, displacementCc = 1_999,
                transmission = "자동", fuel = "가솔린", color = "흰색",
                quantityText = "1대",
            )
        } else {
            AuctionAssetDetails.Realty(
                propertyCategory = item.category.id,
                landSqms = 28.4, bldSqms = 84.9, alcYn = false,
            )
        }
        val assetType = if (item.category == AuctionCategory.CAR) "vehicle" else "realty"
        return AuctionDetail(
            id = item.id,
            source = "onbid",
            assetType = assetType,
            status = item.status ?: "ongoing",
            title = item.address,
            cltrMngNo = "MOCK-${item.id}",
            pbctCdtnNo = 1L, onbidCltrNo = null, onbidPbancNo = null, pbctNo = null,
            caseNumber = null, courtName = null,
            address = item.address,
            regionSido = "경기도", regionSigungu = "성남시", regionEmd = null,
            latitude = item.latitude, longitude = item.longitude,
            appraisalPrice = item.appraisalPrice ?: 250_000_000L,
            minBidPrice = item.minBidPrice ?: 175_000_000L,
            minBidPriceText = null, firstBidPrice = null,
            apslLowstRatio = 70.0, frstLowstRatio = 100.0, feeRate = 1.0,
            bidBeginAt = null, bidEndAt = item.bidEndAt,
            failedCount = item.failedCount, progressCount = 1, pvctTrgtYn = false,
            codeNames = AuctionCodeNames(
                pbctStat = "낙찰", prptDiv = "주거용건물", dspsMthod = "매각",
                bidDiv = "인터넷", bidMthod = "최고가방식", cptnMthod = "일반경쟁",
            ),
            bidOptions = AuctionBidOptions(
                elecGrprUse = true, collbBidPsbl = false,
                twtmGthrBidPsbl = true, subtBidPsbl = false,
            ),
            requestOrgNm = "한국자산관리공사", announceOrgNm = "한국자산관리공사",
            thumbnailUrl = item.thumbnailUrl,
            imageUrls = emptyList(),
            evcRsbyTarget = null,
            details = details,
            rightsAnalysis = RightsAnalysisSummary(
                summary = "선순위 임차인 없음 · 말소기준권리 명확",
                riskLevel = 1,
                rightsData = emptyMap(),
            ),
        )
    }

    private companion object {
        val seedData: List<CategoryInfo> = listOf(
            CategoryInfo(
                category = AuctionCategory.APARTMENT,
                displayName = "아파트",
                emoji = "🏢",
                ongoingCount = 1_245,
                themeColorArgb = ARGB_BLUE_40,
                isEnabled = true,
                span = CategorySpan.Featured,
            ),
            CategoryInfo(
                category = AuctionCategory.CAR,
                displayName = "자동차",
                emoji = "🚗",
                ongoingCount = 432,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.OFFICE_TEL,
                displayName = "오피스텔",
                emoji = "🏬",
                ongoingCount = 156,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.HOUSE,
                displayName = "주택",
                emoji = "🏠",
                ongoingCount = 287,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.STORE,
                displayName = "상가",
                emoji = "🏪",
                ongoingCount = 198,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Half,
            ),
            CategoryInfo(
                category = AuctionCategory.LAND,
                displayName = "토지",
                emoji = "🌿",
                ongoingCount = 521,
                themeColorArgb = ARGB_SLATE_GRAY,
                isEnabled = false,
                span = CategorySpan.Wide,
            ),
        )

        /**
         * 카테고리별 매물 mock. Phase 1은 APARTMENT 만 채워져 있고
         * 나머지는 빈 리스트(준비 중 카테고리). 좌표는 성남시 분당구/수정구/중원구 분포.
         */
        val itemsByCategory: Map<AuctionCategory, List<AuctionItem>> = mapOf(
            AuctionCategory.APARTMENT to listOf(
                AuctionItem(
                    id = "ap-001", category = AuctionCategory.APARTMENT,
                    priceText = "1.2억", failedCount = 2,
                    latitude = 37.3676, longitude = 127.1086,
                    address = "성남시 분당구 정자동 178 한솔마을주공4단지 102동",
                ),
                AuctionItem(
                    id = "ap-002", category = AuctionCategory.APARTMENT,
                    priceText = "0.9억", failedCount = 3,
                    latitude = 37.3848, longitude = 127.1230,
                    address = "성남시 분당구 서현동 270 시범단지 한양아파트 304동",
                ),
                AuctionItem(
                    id = "ap-003", category = AuctionCategory.APARTMENT,
                    priceText = "1.4억", failedCount = 1,
                    latitude = 37.4115, longitude = 127.1289,
                    address = "성남시 분당구 야탑동 351 매화마을공무원2단지 207동",
                ),
                AuctionItem(
                    id = "ap-004", category = AuctionCategory.APARTMENT,
                    priceText = "2.0억", failedCount = 0,
                    latitude = 37.3793, longitude = 127.1140,
                    address = "성남시 분당구 수내동 11 양지마을금호1단지 105동",
                ),
                AuctionItem(
                    id = "ap-005", category = AuctionCategory.APARTMENT,
                    priceText = "0.7억", failedCount = 4,
                    latitude = 37.3506, longitude = 127.1080,
                    address = "성남시 분당구 금곡동 165 청솔마을공무원5단지 503동",
                ),
                AuctionItem(
                    id = "ap-006", category = AuctionCategory.APARTMENT,
                    priceText = "3.1억", failedCount = 0,
                    latitude = 37.3946, longitude = 127.1112,
                    address = "성남시 분당구 백현동 537 백현마을휴먼시아7단지 706동",
                ),
                AuctionItem(
                    id = "ap-007", category = AuctionCategory.APARTMENT,
                    priceText = "0.4억", failedCount = 5,
                    latitude = 37.4474, longitude = 127.1463,
                    address = "성남시 수정구 신흥동 4904 신흥주공아파트 308동",
                ),
                AuctionItem(
                    id = "ap-008", category = AuctionCategory.APARTMENT,
                    priceText = "0.6억", failedCount = 3,
                    latitude = 37.4456, longitude = 127.1565,
                    address = "성남시 수정구 단대동 35 산성역포레스티아 105동",
                ),
                AuctionItem(
                    id = "ap-009", category = AuctionCategory.APARTMENT,
                    priceText = "0.8억", failedCount = 2,
                    latitude = 37.4341, longitude = 127.1297,
                    address = "성남시 중원구 성남동 4413 모란역SK뷰 102동",
                ),
                AuctionItem(
                    id = "ap-010", category = AuctionCategory.APARTMENT,
                    priceText = "0.5억", failedCount = 4,
                    latitude = 37.4444, longitude = 127.1738,
                    address = "성남시 중원구 상대원동 1521 상대원금광아파트 304동",
                ),
            ),
        )
    }
}
