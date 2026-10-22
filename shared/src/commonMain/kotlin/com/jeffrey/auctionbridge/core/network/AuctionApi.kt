package com.jeffrey.auctionbridge.core.network

import com.jeffrey.auctionbridge.core.network.dto.AuctionDetailDto
import com.jeffrey.auctionbridge.core.network.dto.AuctionListResponse
import com.jeffrey.auctionbridge.core.network.dto.AuctionStatsResponseDto
import com.jeffrey.auctionbridge.core.network.dto.BidResultsResponse
import com.jeffrey.auctionbridge.core.network.dto.RealtySearchResponse
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.request.get
import io.ktor.client.request.parameter
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json

/**
 * 서버 base URL. 플랫폼별 Koin 모듈에서 주입.
 * - Android emulator: "http://10.0.2.2:8000"
 * - iOS simulator / Web: "http://localhost:8000"
 */
class ApiBaseUrl(val value: String)

class AuctionApi(
    private val baseUrl: ApiBaseUrl,
    private val client: HttpClient = defaultClient(),
) {
    /**
     * GET /api/v1/auctions — bbox + 카테고리 필터.
     *
     * @param assetType 보통 "realty"
     * @param propertyCategory "apartment" / "villa" / ...
     * @param status 진행중만 보고 싶으면 "ongoing", 전체면 null
     */
    suspend fun listAuctions(
        minLng: Double,
        maxLng: Double,
        minLat: Double,
        maxLat: Double,
        assetType: String? = null,
        propertyCategory: String? = null,
        status: String? = null,
        limit: Int = 200,
    ): AuctionListResponse {
        return client.get("${baseUrl.value}/api/v1/auctions") {
            parameter("min_lng", minLng)
            parameter("max_lng", maxLng)
            parameter("min_lat", minLat)
            parameter("max_lat", maxLat)
            assetType?.let { parameter("asset_type", it) }
            propertyCategory?.let { parameter("property_category", it) }
            status?.let { parameter("status", it) }
            parameter("limit", limit)
        }.body()
    }

    /** GET /api/v1/auctions/{id} — 매물 상세. */
    suspend fun getAuction(id: String): AuctionDetailDto =
        client.get("${baseUrl.value}/api/v1/auctions/$id").body()

    /** GET /api/v1/auctions/stats — 자산타입/카테고리별 진행 건수 (메인 카드 카운트용). */
    suspend fun getStats(): AuctionStatsResponseDto =
        client.get("${baseUrl.value}/api/v1/auctions/stats").body()

    /**
     * GET /api/v1/realty — 부동산 목록 검색 (필터 + 정렬 + offset 페이징).
     *
     * @param propertyCategories 반복 파라미터 property_category — 빈 리스트면 전체
     * @param status 진행중만 보려면 "ongoing", 전체면 null
     * @param sort newest / deadline / price_asc / price_desc / ratio_asc / failed_count
     */
    suspend fun searchRealty(
        propertyCategories: List<String> = emptyList(),
        regionSido: String? = null,
        regionSigungu: String? = null,
        appraisalPriceMin: Long? = null,
        appraisalPriceMax: Long? = null,
        minBidPriceMin: Long? = null,
        minBidPriceMax: Long? = null,
        failedCountMin: Int? = null,
        failedCountMax: Int? = null,
        landSqmsMin: Double? = null,
        landSqmsMax: Double? = null,
        bldSqmsMin: Double? = null,
        bldSqmsMax: Double? = null,
        status: String? = null,
        sort: String = "newest",
        offset: Int = 0,
        limit: Int = 20,
    ): RealtySearchResponse {
        return client.get("${baseUrl.value}/api/v1/realty") {
            propertyCategories.forEach { parameter("property_category", it) }
            regionSido?.let { parameter("region_sido", it) }
            regionSigungu?.let { parameter("region_sigungu", it) }
            appraisalPriceMin?.let { parameter("appraisal_price_min", it) }
            appraisalPriceMax?.let { parameter("appraisal_price_max", it) }
            minBidPriceMin?.let { parameter("min_bid_price_min", it) }
            minBidPriceMax?.let { parameter("min_bid_price_max", it) }
            failedCountMin?.let { parameter("failed_count_min", it) }
            failedCountMax?.let { parameter("failed_count_max", it) }
            landSqmsMin?.let { parameter("land_sqms_min", it) }
            landSqmsMax?.let { parameter("land_sqms_max", it) }
            bldSqmsMin?.let { parameter("bld_sqms_min", it) }
            bldSqmsMax?.let { parameter("bld_sqms_max", it) }
            status?.let { parameter("status", it) }
            parameter("sort", sort)
            parameter("offset", offset)
            parameter("limit", limit)
        }.body()
    }

    /**
     * GET /api/v1/bid-results — 매각결과 목록.
     *
     * @param result sold / failed / cancelled — null 이면 전체
     * @param sort opbd_at_desc / ratio_desc / ratio_asc
     */
    suspend fun listBidResults(
        assetType: String? = null,
        propertyCategories: List<String> = emptyList(),
        regionSido: String? = null,
        regionSigungu: String? = null,
        result: String? = null,
        opbdFrom: String? = null,
        opbdTo: String? = null,
        sort: String = "opbd_at_desc",
        offset: Int = 0,
        limit: Int = 20,
    ): BidResultsResponse {
        return client.get("${baseUrl.value}/api/v1/bid-results") {
            assetType?.let { parameter("asset_type", it) }
            propertyCategories.forEach { parameter("property_category", it) }
            regionSido?.let { parameter("region_sido", it) }
            regionSigungu?.let { parameter("region_sigungu", it) }
            result?.let { parameter("result", it) }
            opbdFrom?.let { parameter("opbd_from", it) }
            opbdTo?.let { parameter("opbd_to", it) }
            parameter("sort", sort)
            parameter("offset", offset)
            parameter("limit", limit)
        }.body()
    }
}

internal fun defaultClient(): HttpClient = HttpClient {
    // non-2xx 는 예외로 — 끄면 4xx 의 {"detail": ...} 가 기본값만 채운 목록 DTO 로
    // 역직렬화돼 에러가 "0건" 정상 응답처럼 보인다.
    expectSuccess = true
    install(ContentNegotiation) {
        json(
            Json {
                ignoreUnknownKeys = true
                isLenient = true
                explicitNulls = false
            },
        )
    }
    install(Logging) {
        level = LogLevel.INFO
    }
}
