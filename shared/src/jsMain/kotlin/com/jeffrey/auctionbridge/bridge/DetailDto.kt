@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.domain.model.AuctionAssetDetails
import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.AuctionRound
import com.jeffrey.auctionbridge.feature.detail.DetailUiState
import com.jeffrey.auctionbridge.feature.detail.appraisalText
import com.jeffrey.auctionbridge.feature.detail.assetTypeLabel
import com.jeffrey.auctionbridge.feature.detail.bidBeginDisplay
import com.jeffrey.auctionbridge.feature.detail.bidEndDisplay
import com.jeffrey.auctionbridge.feature.detail.minBidText
import com.jeffrey.auctionbridge.feature.detail.periodText
import com.jeffrey.auctionbridge.feature.detail.resultLabel
import com.jeffrey.auctionbridge.feature.detail.riskLevelLabel
import com.jeffrey.auctionbridge.feature.detail.roundLabelDisplay
import com.jeffrey.auctionbridge.feature.detail.saleRatioText
import com.jeffrey.auctionbridge.feature.detail.saleText
import com.jeffrey.auctionbridge.feature.detail.statusLabel

/**
 * 상세 화면용 JS DTO 들.
 * sealed AuctionAssetDetails 는 JsExport 불가 — type 별 nullable 평면 DTO 3개로 분기.
 * Long → Double 로 노출 (원 단위, 9억 수준은 2^53 한참 미만).
 */

@JsExport
class RealtyDetailsDto internal constructor(
    val propertyCategory: String,
    val landSqms: Double?,
    val bldSqms: Double?,
    val alcYn: Boolean?,
)

@JsExport
class VehicleDetailsDto internal constructor(
    val vehicleCategory: String,
    val maker: String?,
    val vehicleKind: String?,
    val modelName: String?,
    val yearModel: String?,
    val plateNo: String?,
    val mileageKm: Double?,
    val displacementCc: Double?,
    val transmission: String?,
    val fuel: String?,
    val color: String?,
    val quantityText: String?,
)

@JsExport
class MovableDetailsDto internal constructor(
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
)

@JsExport
class AuctionRoundJsDto internal constructor(
    /** "3-1" 형태 회차 라벨. 없으면 null. */
    val roundLabel: String?,
    /** "06/30 ~ 07/02". */
    val periodText: String?,
    /** 서버 status 원본(scheduled/ongoing/sold/failed/cancelled) — Pill 톤 매핑용. */
    val status: String?,
    val minBidPrice: Double?,
    val minBidText: String?,
    /** 예정/진행중/낙찰/유찰/취소. */
    val resultLabel: String?,
    val isCurrent: Boolean,
    val salePrice: Double?,
    /** 낙찰가 "4.2억". */
    val saleText: String?,
    /** "낙찰가율 75%". */
    val saleRatioText: String?,
    val bidderCount: Int?,
)

@JsExport
class RightsAnalysisDto internal constructor(
    val summary: String?,
    val riskLevel: Int?,
    val riskLevelLabel: String?,
)

@JsExport
class AuctionDetailDto internal constructor(
    // ---- 식별 / 기본 ----
    val id: String,
    val source: String,
    val assetType: String,
    val assetTypeLabel: String,
    val status: String,
    val statusLabel: String,
    val title: String?,

    // ---- 식별번호 ----
    val cltrMngNo: String?,
    val caseNumber: String?,
    val courtName: String?,

    // ---- 주소 / 좌표 ----
    val address: String?,
    val regionSido: String?,
    val regionSigungu: String?,
    val regionEmd: String?,
    val latitude: Double?,
    val longitude: Double?,

    // ---- 가격 ----
    val appraisalPrice: Double?,
    val minBidPrice: Double?,
    val minBidPriceText: String?,
    val firstBidPrice: Double?,
    val apslLowstRatio: Double?,
    val frstLowstRatio: Double?,
    val feeRate: Double?,
    val appraisalText: String?,
    val minBidText: String?,

    // ---- 일정 / 진행 ----
    val bidBeginAt: String?,
    val bidEndAt: String?,
    val bidBeginDisplay: String?,
    val bidEndDisplay: String?,
    val failedCount: Int,
    val progressCount: Int,
    val pvctTrgtYn: Boolean?,

    // ---- 코드명 묶음 ----
    val pbctStat: String?,
    val prptDiv: String?,
    val dspsMthod: String?,
    val bidDiv: String?,
    val bidMthod: String?,
    val cptnMthod: String?,
    val totalamtUnpcDiv: String?,
    val usgLcls: String?,
    val usgMcls: String?,
    val usgScls: String?,

    // ---- 입찰 옵션 ----
    val elecGrprUse: Boolean?,
    val collbBidPsbl: Boolean?,
    val twtmGthrBidPsbl: Boolean?,
    val subtBidPsbl: Boolean?,

    // ---- 기관 / 미디어 ----
    val requestOrgNm: String?,
    val announceOrgNm: String?,
    val thumbnailUrl: String?,
    val imageUrls: Array<String>,

    val evcRsbyTarget: String?,

    // ---- type-discriminated 세부 ----
    val realty: RealtyDetailsDto?,
    val vehicle: VehicleDetailsDto?,
    val movable: MovableDetailsDto?,

    // ---- 권리분석 ----
    val rightsAnalysis: RightsAnalysisDto?,

    // ---- 회차 이력 ----
    val rounds: Array<AuctionRoundJsDto>,
)

@JsExport
class DetailUiStateDto internal constructor(
    val isLoading: Boolean,
    val detail: AuctionDetailDto?,
    /** 로드 실패 메시지. null 이면 정상. */
    val errorMessage: String?,
)

internal fun AuctionDetail.toDto(): AuctionDetailDto {
    val realty = (details as? AuctionAssetDetails.Realty)?.let {
        RealtyDetailsDto(
            propertyCategory = it.propertyCategory,
            landSqms = it.landSqms,
            bldSqms = it.bldSqms,
            alcYn = it.alcYn,
        )
    }
    val vehicle = (details as? AuctionAssetDetails.Vehicle)?.let {
        VehicleDetailsDto(
            vehicleCategory = it.vehicleCategory,
            maker = it.maker,
            vehicleKind = it.vehicleKind,
            modelName = it.modelName,
            yearModel = it.yearModel,
            plateNo = it.plateNo,
            mileageKm = it.mileageKm?.toDouble(),
            displacementCc = it.displacementCc?.toDouble(),
            transmission = it.transmission,
            fuel = it.fuel,
            color = it.color,
            quantityText = it.quantityText,
        )
    }
    val movable = (details as? AuctionAssetDetails.Movable)?.let {
        MovableDetailsDto(
            maker = it.maker,
            modelName = it.modelName,
            manufactureYear = it.manufactureYear,
            quantityText = it.quantityText,
            productionPlace = it.productionPlace,
            usePeriodYear = it.usePeriodYear,
            sizeText = it.sizeText,
            weightText = it.weightText,
            custodyPlace = it.custodyPlace,
            authorName = it.authorName,
            membershipName = it.membershipName,
            commodityName = it.commodityName,
            productName = it.productName,
        )
    }
    val rights = rightsAnalysis?.let {
        RightsAnalysisDto(
            summary = it.summary,
            riskLevel = it.riskLevel,
            riskLevelLabel = riskLevelLabel(it.riskLevel),
        )
    }
    return AuctionDetailDto(
        id = id,
        source = source,
        assetType = assetType,
        assetTypeLabel = assetTypeLabel(),
        status = status,
        statusLabel = statusLabel(),
        title = title,
        cltrMngNo = cltrMngNo,
        caseNumber = caseNumber,
        courtName = courtName,
        address = address,
        regionSido = regionSido,
        regionSigungu = regionSigungu,
        regionEmd = regionEmd,
        latitude = latitude,
        longitude = longitude,
        appraisalPrice = appraisalPrice?.toDouble(),
        minBidPrice = minBidPrice?.toDouble(),
        minBidPriceText = minBidPriceText,
        firstBidPrice = firstBidPrice?.toDouble(),
        apslLowstRatio = apslLowstRatio,
        frstLowstRatio = frstLowstRatio,
        feeRate = feeRate,
        appraisalText = appraisalText(),
        minBidText = minBidText(),
        bidBeginAt = bidBeginAt,
        bidEndAt = bidEndAt,
        bidBeginDisplay = bidBeginDisplay(),
        bidEndDisplay = bidEndDisplay(),
        failedCount = failedCount,
        progressCount = progressCount,
        pvctTrgtYn = pvctTrgtYn,
        pbctStat = codeNames.pbctStat,
        prptDiv = codeNames.prptDiv,
        dspsMthod = codeNames.dspsMthod,
        bidDiv = codeNames.bidDiv,
        bidMthod = codeNames.bidMthod,
        cptnMthod = codeNames.cptnMthod,
        totalamtUnpcDiv = codeNames.totalamtUnpcDiv,
        usgLcls = codeNames.usgLcls,
        usgMcls = codeNames.usgMcls,
        usgScls = codeNames.usgScls,
        elecGrprUse = bidOptions.elecGrprUse,
        collbBidPsbl = bidOptions.collbBidPsbl,
        twtmGthrBidPsbl = bidOptions.twtmGthrBidPsbl,
        subtBidPsbl = bidOptions.subtBidPsbl,
        requestOrgNm = requestOrgNm,
        announceOrgNm = announceOrgNm,
        thumbnailUrl = thumbnailUrl,
        imageUrls = imageUrls.toTypedArray(),
        evcRsbyTarget = evcRsbyTarget,
        realty = realty,
        vehicle = vehicle,
        movable = movable,
        rightsAnalysis = rights,
        rounds = rounds.map { it.toDto() }.toTypedArray(),
    )
}

private fun AuctionRound.toDto(): AuctionRoundJsDto = AuctionRoundJsDto(
    roundLabel = roundLabelDisplay(),
    periodText = periodText(),
    status = status,
    minBidPrice = minBidPrice?.toDouble(),
    minBidText = minBidText(),
    resultLabel = resultLabel(),
    isCurrent = isCurrent,
    salePrice = result?.winningBidAmount?.toDouble(),
    saleText = saleText(),
    saleRatioText = saleRatioText(),
    bidderCount = result?.validBidderCount,
)

internal fun DetailUiState.toDto(): DetailUiStateDto = when (this) {
    DetailUiState.Loading -> DetailUiStateDto(isLoading = true, detail = null, errorMessage = null)
    is DetailUiState.Loaded -> DetailUiStateDto(isLoading = false, detail = detail.toDto(), errorMessage = null)
    is DetailUiState.Error -> DetailUiStateDto(isLoading = false, detail = null, errorMessage = message)
}
