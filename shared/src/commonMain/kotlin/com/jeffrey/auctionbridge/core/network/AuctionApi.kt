package com.jeffrey.auctionbridge.core.network

import com.jeffrey.auctionbridge.core.network.dto.AuctionDetailDto
import com.jeffrey.auctionbridge.core.network.dto.AuctionListResponse
import com.jeffrey.auctionbridge.core.network.dto.AuctionStatsResponseDto
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
}

internal fun defaultClient(): HttpClient = HttpClient {
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
