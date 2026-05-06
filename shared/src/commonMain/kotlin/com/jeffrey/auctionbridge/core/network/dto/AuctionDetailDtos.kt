@file:OptIn(kotlinx.serialization.ExperimentalSerializationApi::class)

package com.jeffrey.auctionbridge.core.network.dto

import com.jeffrey.auctionbridge.core.domain.model.AuctionAssetDetails
import com.jeffrey.auctionbridge.core.domain.model.AuctionBidOptions
import com.jeffrey.auctionbridge.core.domain.model.AuctionCodeNames
import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.RightsAnalysisSummary
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonClassDiscriminator
import kotlinx.serialization.json.JsonElement

/**
 * 서버 GET /api/v1/auctions/{id} 응답.
 *
 * 서버 v2 스키마와 필드 1:1 매핑.
 * `details` 는 asset_type 판별자로 폴리모픽 직렬화 — Pydantic discriminator 와 일치.
 */
@Serializable
data class AuctionDetailDto(
    val id: Long,
    val source: String,
    @SerialName("asset_type") val assetType: String,
    val status: String,
    val title: String? = null,

    @SerialName("cltr_mng_no") val cltrMngNo: String? = null,
    @SerialName("pbct_cdtn_no") val pbctCdtnNo: Long? = null,
    @SerialName("onbid_cltr_no") val onbidCltrNo: Long? = null,
    @SerialName("onbid_pbanc_no") val onbidPbancNo: Long? = null,
    @SerialName("pbct_no") val pbctNo: Long? = null,
    @SerialName("case_number") val caseNumber: String? = null,
    @SerialName("court_name") val courtName: String? = null,

    val address: String? = null,
    @SerialName("region_sido") val regionSido: String? = null,
    @SerialName("region_sigungu") val regionSigungu: String? = null,
    @SerialName("region_emd") val regionEmd: String? = null,
    val lat: Double? = null,
    val lng: Double? = null,

    @SerialName("appraisal_price") val appraisalPrice: Long? = null,
    @SerialName("min_bid_price") val minBidPrice: Long? = null,
    @SerialName("min_bid_price_text") val minBidPriceText: String? = null,
    @SerialName("first_bid_price") val firstBidPrice: Long? = null,
    @SerialName("apsl_lowst_ratio") val apslLowstRatio: Double? = null,
    @SerialName("frst_lowst_ratio") val frstLowstRatio: Double? = null,
    @SerialName("fee_rate") val feeRate: Double? = null,

    @SerialName("bid_begin_at") val bidBeginAt: String? = null,
    @SerialName("bid_end_at") val bidEndAt: String? = null,
    @SerialName("failed_count") val failedCount: Int = 0,
    @SerialName("progress_count") val progressCount: Int = 0,
    @SerialName("pvct_trgt_yn") val pvctTrgtYn: Boolean? = null,

    @SerialName("code_names") val codeNames: AuctionCodeNamesDto = AuctionCodeNamesDto(),
    @SerialName("bid_options") val bidOptions: AuctionBidOptionsDto = AuctionBidOptionsDto(),

    @SerialName("request_org_nm") val requestOrgNm: String? = null,
    @SerialName("announce_org_nm") val announceOrgNm: String? = null,
    @SerialName("thumbnail_url") val thumbnailUrl: String? = null,
    @SerialName("image_urls") val imageUrls: List<String> = emptyList(),

    @SerialName("evc_rsby_target") val evcRsbyTarget: String? = null,

    val details: AssetDetailsDto? = null,

    @SerialName("rights_analysis") val rightsAnalysis: RightsAnalysisSummaryDto? = null,
)

@Serializable
data class AuctionCodeNamesDto(
    @SerialName("pbct_stat") val pbctStat: String? = null,
    @SerialName("prpt_div") val prptDiv: String? = null,
    @SerialName("dsps_mthod") val dspsMthod: String? = null,
    @SerialName("bid_div") val bidDiv: String? = null,
    @SerialName("bid_mthod") val bidMthod: String? = null,
    @SerialName("cptn_mthod") val cptnMthod: String? = null,
    @SerialName("totalamt_unpc_div") val totalamtUnpcDiv: String? = null,
    @SerialName("usg_lcls") val usgLcls: String? = null,
    @SerialName("usg_mcls") val usgMcls: String? = null,
    @SerialName("usg_scls") val usgScls: String? = null,
)

@Serializable
data class AuctionBidOptionsDto(
    @SerialName("elec_grpr_use") val elecGrprUse: Boolean? = null,
    @SerialName("collb_bid_psbl") val collbBidPsbl: Boolean? = null,
    @SerialName("twtm_gthr_bid_psbl") val twtmGthrBidPsbl: Boolean? = null,
    @SerialName("subt_bid_psbl") val subtBidPsbl: Boolean? = null,
)

@Serializable
data class RightsAnalysisSummaryDto(
    val summary: String? = null,
    @SerialName("risk_level") val riskLevel: Int? = null,
    @SerialName("rights_data") val rightsData: Map<String, JsonElement> = emptyMap(),
)

/**
 * asset_type discriminator 기반 폴리모픽 sealed.
 * Pydantic [Annotated[Union[...], Field(discriminator="asset_type")]] 와 wire-format 호환.
 */
@Serializable
@JsonClassDiscriminator("asset_type")
sealed class AssetDetailsDto {
    @Serializable
    @SerialName("realty")
    data class Realty(
        @SerialName("property_category") val propertyCategory: String = "etc",
        @SerialName("land_sqms") val landSqms: Double? = null,
        @SerialName("bld_sqms") val bldSqms: Double? = null,
        @SerialName("alc_yn") val alcYn: Boolean? = null,
    ) : AssetDetailsDto()

    @Serializable
    @SerialName("vehicle")
    data class Vehicle(
        @SerialName("vehicle_category") val vehicleCategory: String = "etc",
        val maker: String? = null,
        @SerialName("vehicle_kind") val vehicleKind: String? = null,
        @SerialName("model_name") val modelName: String? = null,
        @SerialName("year_model") val yearModel: String? = null,
        @SerialName("plate_no") val plateNo: String? = null,
        @SerialName("mileage_km") val mileageKm: Long? = null,
        @SerialName("displacement_cc") val displacementCc: Long? = null,
        val transmission: String? = null,
        val fuel: String? = null,
        val color: String? = null,
        @SerialName("quantity_text") val quantityText: String? = null,
    ) : AssetDetailsDto()

    @Serializable
    @SerialName("movable")
    data class Movable(
        val maker: String? = null,
        @SerialName("model_name") val modelName: String? = null,
        @SerialName("manufacture_year") val manufactureYear: String? = null,
        @SerialName("quantity_text") val quantityText: String? = null,
        @SerialName("production_place") val productionPlace: String? = null,
        @SerialName("use_period_year") val usePeriodYear: Double? = null,
        @SerialName("size_text") val sizeText: String? = null,
        @SerialName("weight_text") val weightText: String? = null,
        @SerialName("custody_place") val custodyPlace: String? = null,
        @SerialName("author_name") val authorName: String? = null,
        @SerialName("membership_name") val membershipName: String? = null,
        @SerialName("commodity_name") val commodityName: String? = null,
        @SerialName("product_name") val productName: String? = null,
    ) : AssetDetailsDto()
}

// ====================================================================
// DTO -> 도메인 매퍼
// ====================================================================
fun AuctionDetailDto.toDomain(): AuctionDetail = AuctionDetail(
    id = id.toString(),
    source = source,
    assetType = assetType,
    status = status,
    title = title,
    cltrMngNo = cltrMngNo,
    pbctCdtnNo = pbctCdtnNo,
    onbidCltrNo = onbidCltrNo,
    onbidPbancNo = onbidPbancNo,
    pbctNo = pbctNo,
    caseNumber = caseNumber,
    courtName = courtName,
    address = address,
    regionSido = regionSido,
    regionSigungu = regionSigungu,
    regionEmd = regionEmd,
    latitude = lat,
    longitude = lng,
    appraisalPrice = appraisalPrice,
    minBidPrice = minBidPrice,
    minBidPriceText = minBidPriceText,
    firstBidPrice = firstBidPrice,
    apslLowstRatio = apslLowstRatio,
    frstLowstRatio = frstLowstRatio,
    feeRate = feeRate,
    bidBeginAt = bidBeginAt,
    bidEndAt = bidEndAt,
    failedCount = failedCount,
    progressCount = progressCount,
    pvctTrgtYn = pvctTrgtYn,
    codeNames = codeNames.toDomain(),
    bidOptions = bidOptions.toDomain(),
    requestOrgNm = requestOrgNm,
    announceOrgNm = announceOrgNm,
    thumbnailUrl = thumbnailUrl,
    imageUrls = imageUrls,
    evcRsbyTarget = evcRsbyTarget,
    details = details?.toDomain(),
    rightsAnalysis = rightsAnalysis?.toDomain(),
)

private fun AuctionCodeNamesDto.toDomain() = AuctionCodeNames(
    pbctStat = pbctStat,
    prptDiv = prptDiv,
    dspsMthod = dspsMthod,
    bidDiv = bidDiv,
    bidMthod = bidMthod,
    cptnMthod = cptnMthod,
    totalamtUnpcDiv = totalamtUnpcDiv,
    usgLcls = usgLcls,
    usgMcls = usgMcls,
    usgScls = usgScls,
)

private fun AuctionBidOptionsDto.toDomain() = AuctionBidOptions(
    elecGrprUse = elecGrprUse,
    collbBidPsbl = collbBidPsbl,
    twtmGthrBidPsbl = twtmGthrBidPsbl,
    subtBidPsbl = subtBidPsbl,
)

private fun AssetDetailsDto.toDomain(): AuctionAssetDetails = when (this) {
    is AssetDetailsDto.Realty -> AuctionAssetDetails.Realty(
        propertyCategory = propertyCategory,
        landSqms = landSqms,
        bldSqms = bldSqms,
        alcYn = alcYn,
    )
    is AssetDetailsDto.Vehicle -> AuctionAssetDetails.Vehicle(
        vehicleCategory = vehicleCategory,
        maker = maker,
        vehicleKind = vehicleKind,
        modelName = modelName,
        yearModel = yearModel,
        plateNo = plateNo,
        mileageKm = mileageKm,
        displacementCc = displacementCc,
        transmission = transmission,
        fuel = fuel,
        color = color,
        quantityText = quantityText,
    )
    is AssetDetailsDto.Movable -> AuctionAssetDetails.Movable(
        maker = maker,
        modelName = modelName,
        manufactureYear = manufactureYear,
        quantityText = quantityText,
        productionPlace = productionPlace,
        usePeriodYear = usePeriodYear,
        sizeText = sizeText,
        weightText = weightText,
        custodyPlace = custodyPlace,
        authorName = authorName,
        membershipName = membershipName,
        commodityName = commodityName,
        productName = productName,
    )
}

private fun RightsAnalysisSummaryDto.toDomain() = RightsAnalysisSummary(
    summary = summary,
    riskLevel = riskLevel,
    rightsData = rightsData,
)
