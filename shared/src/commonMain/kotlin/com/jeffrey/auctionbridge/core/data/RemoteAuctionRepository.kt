package com.jeffrey.auctionbridge.core.data

import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import com.jeffrey.auctionbridge.core.network.AuctionApi
import com.jeffrey.auctionbridge.core.network.dto.AuctionListItemDto
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

/**
 * HTTP 기반 매물 저장소.
 *
 * - 카테고리 카드 메타데이터(아이콘/색상/표시명)는 서버 응답으로 표현하기 어려운
 *   UI 메타이므로 [MockAuctionRepository] 를 그대로 위임 사용.
 * - 매물 목록만 GET /api/v1/auctions 호출.
 * - 네트워크 실패/empty 시 mock fallback 으로 빈 화면을 피한다.
 */
class RemoteAuctionRepository(
    private val api: AuctionApi,
    private val mock: MockAuctionRepository = MockAuctionRepository(),
) : AuctionRepository {

    override fun getCategoryList(): Flow<List<CategoryInfo>> = mock.getCategoryList()

    override fun getAuctionItems(category: AuctionCategory): Flow<List<AuctionItem>> = flow {
        val propertyCategory = serverPropertyCategory(category)
        val assetType = if (propertyCategory != null) "realty" else null
        val items = runCatching {
            val res = api.listAuctions(
                minLng = DEFAULT_BBOX.minLng,
                maxLng = DEFAULT_BBOX.maxLng,
                minLat = DEFAULT_BBOX.minLat,
                maxLat = DEFAULT_BBOX.maxLat,
                assetType = assetType,
                propertyCategory = propertyCategory,
                // scheduled / ongoing 모두 노출하기 위해 status 필터 미적용.
                // (sold/failed/cancelled 도 포함되지만 thumbnail/marker 표시에는 무해.
                //  추후 UI 토글로 제어 가능.)
                status = null,
                limit = 500,
            )
            res.items.mapNotNull { it.toDomainOrNull(category) }
        }.getOrElse {
            // 서버 미기동/네트워크 오류 → mock 으로 흐름 유지
            emptyList()
        }

        if (items.isNotEmpty()) {
            emit(items)
        } else {
            mock.getAuctionItems(category).collect { emit(it) }
        }
    }

    private companion object {
        // 임시 기본 영역 — 추후 카메라 bbox 와 연동되면 ViewModel 에서 매번 재호출.
        // 현재 데이터가 전국 분포(대전/광주/김천 등) 라서 한반도 전체를 커버.
        val DEFAULT_BBOX = Bbox(
            minLng = 124.0,
            maxLng = 132.0,
            minLat = 33.0,
            maxLat = 39.0,
        )

        fun serverPropertyCategory(category: AuctionCategory): String? = when (category) {
            AuctionCategory.APARTMENT -> "apartment"
            AuctionCategory.OFFICE_TEL -> "officetel"
            AuctionCategory.HOUSE -> "house"
            AuctionCategory.STORE -> "commercial"
            AuctionCategory.LAND -> "land"
            AuctionCategory.CAR -> null // 차량은 asset_type=vehicle (이번 phase 미사용)
        }
    }

    private data class Bbox(
        val minLng: Double,
        val maxLng: Double,
        val minLat: Double,
        val maxLat: Double,
    )
}

/**
 * 서버 응답 → 도메인 모델. 좌표 없는 항목(geocoding 미완료)은 지도 표시 불가하므로 제외.
 */
private fun AuctionListItemDto.toDomainOrNull(category: AuctionCategory): AuctionItem? {
    val lat = lat ?: return null
    val lng = lng ?: return null
    return AuctionItem(
        id = id.toString(),
        category = category,
        priceText = formatPriceText(minBidPrice, appraisalPrice),
        failedCount = failedCount ?: 0,
        latitude = lat,
        longitude = lng,
        address = address ?: title ?: "",
        areaSquareMeter = bldSqms ?: landSqms ?: 0.0,
        appraisalPrice = appraisalPrice,
        minBidPrice = minBidPrice,
        bidEndAt = bidEndAt,
        status = status,
        thumbnailUrl = thumbnailUrl,
        propertyCategory = propertyCategory,
    )
}

/**
 * 가격 표시 문자열 — 최저가 우선, 없으면 감정가, 둘 다 없으면 "-".
 * 포맷: 1억 미만은 "0.7억", 이상은 "1.2억"  (천만 단위 1자리).
 *
 * 온비드 원본에서 `lowstBidPrcIndctCont` 가 0 으로 내려오는 경우(예정/취하 등)가 있어
 * 0 도 null 과 동일하게 취급해 감정가로 fallback 한다.
 */
private fun formatPriceText(minBid: Long?, appraisal: Long?): String {
    val price = minBid?.takeIf { it > 0 } ?: appraisal?.takeIf { it > 0 } ?: return "-"
    val eok = price / 1_0000_0000.0
    val rounded = (eok * 10).toLong() / 10.0
    return "${rounded}억"
}
