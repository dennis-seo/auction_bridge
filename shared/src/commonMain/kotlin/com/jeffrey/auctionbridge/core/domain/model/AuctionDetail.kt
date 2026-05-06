package com.jeffrey.auctionbridge.core.domain.model

import kotlinx.serialization.json.JsonElement

/**
 * 매물 상세 도메인 모델 — 서버 `GET /api/v1/auctions/{id}` 응답과 1:1 매핑.
 *
 * 폴리모픽 [details] 는 asset_type(realty/vehicle/movable) 에 따라 sealed 분기.
 * 권리분석은 데이터가 아직 없을 수 있어 nullable.
 */
data class AuctionDetail(
    val id: String,
    val source: String,
    val assetType: String,
    val status: String,
    val title: String?,

    // 식별자
    val cltrMngNo: String?,
    val pbctCdtnNo: Long?,
    val onbidCltrNo: Long?,
    val onbidPbancNo: Long?,
    val pbctNo: Long?,
    val caseNumber: String?,
    val courtName: String?,

    // 주소 + 좌표
    val address: String?,
    val regionSido: String?,
    val regionSigungu: String?,
    val regionEmd: String?,
    val latitude: Double?,
    val longitude: Double?,

    // 가격
    val appraisalPrice: Long?,
    val minBidPrice: Long?,
    val minBidPriceText: String?,
    val firstBidPrice: Long?,
    val apslLowstRatio: Double?,
    val frstLowstRatio: Double?,
    val feeRate: Double?,

    // 일정 / 진행
    val bidBeginAt: String?,
    val bidEndAt: String?,
    val failedCount: Int,
    val progressCount: Int,
    val pvctTrgtYn: Boolean?,

    // 코드명/입찰옵션 묶음
    val codeNames: AuctionCodeNames,
    val bidOptions: AuctionBidOptions,

    // 기관 / 이미지
    val requestOrgNm: String?,
    val announceOrgNm: String?,
    val thumbnailUrl: String?,
    val imageUrls: List<String>,

    val evcRsbyTarget: String?,

    val details: AuctionAssetDetails?,
    val rightsAnalysis: RightsAnalysisSummary?,
)

data class AuctionCodeNames(
    val pbctStat: String? = null,
    val prptDiv: String? = null,
    val dspsMthod: String? = null,
    val bidDiv: String? = null,
    val bidMthod: String? = null,
    val cptnMthod: String? = null,
    val totalamtUnpcDiv: String? = null,
    val usgLcls: String? = null,
    val usgMcls: String? = null,
    val usgScls: String? = null,
)

data class AuctionBidOptions(
    val elecGrprUse: Boolean? = null,
    val collbBidPsbl: Boolean? = null,
    val twtmGthrBidPsbl: Boolean? = null,
    val subtBidPsbl: Boolean? = null,
)

sealed interface AuctionAssetDetails {
    data class Realty(
        val propertyCategory: String,
        val landSqms: Double?,
        val bldSqms: Double?,
        val alcYn: Boolean?,
    ) : AuctionAssetDetails

    data class Vehicle(
        val vehicleCategory: String,
        val maker: String?,
        val vehicleKind: String?,
        val modelName: String?,
        val yearModel: String?,
        val plateNo: String?,
        val mileageKm: Long?,
        val displacementCc: Long?,
        val transmission: String?,
        val fuel: String?,
        val color: String?,
        val quantityText: String?,
    ) : AuctionAssetDetails

    data class Movable(
        val maker: String?,
        val modelName: String?,
        val manufactureYear: String?,
        val quantityText: String?,
        val productionPlace: String?,
        val usePeriodYear: Double?,
        val sizeText: String?,
        val weightText: String?,
        val custodyPlace: String?,
        val authorName: String?,
        val membershipName: String?,
        val commodityName: String?,
        val productName: String?,
    ) : AuctionAssetDetails
}

data class RightsAnalysisSummary(
    val summary: String?,
    val riskLevel: Int?,
    val rightsData: Map<String, JsonElement>,
)
