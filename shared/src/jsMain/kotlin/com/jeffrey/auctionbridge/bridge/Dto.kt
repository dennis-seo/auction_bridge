@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.feature.main.MainUiState
import com.jeffrey.auctionbridge.feature.map.MapUiState
import com.jeffrey.auctionbridge.feature.map.appraisalText
import com.jeffrey.auctionbridge.feature.map.buildingUnitLabel
import com.jeffrey.auctionbridge.feature.map.markerSubInfo
import com.jeffrey.auctionbridge.feature.map.minBidText
import com.jeffrey.auctionbridge.feature.map.shortBidEndDate
import com.jeffrey.auctionbridge.feature.map.statusLabel
import com.jeffrey.auctionbridge.feature.map.state.zoomToKakaoLevel

/**
 * React 측에서 소비하는 JS-친화 DTO 들.
 * Kotlin StateFlow / List / Long 등 JsExport 불가 타입을 단순 String/Array/Int 로 정규화.
 */

@JsExport
class CategoryInfoDto internal constructor(
    val id: String,
    val displayName: String,
    val emoji: String,
    /** null = stats 응답 미도착 (로딩). UI 가 스켈레톤 처리. */
    val ongoingCount: Int?,
    val themeColorHex: String,        // "#RRGGBB" — CSS 에 그대로 사용
    val isEnabled: Boolean,
    val span: String,                 // "Featured" / "Half" / "Wide"
)

@JsExport
class MainUiStateDto internal constructor(
    val categories: Array<CategoryInfoDto>,
    val isLoggedIn: Boolean,
    val userName: String?,
    val transientMessage: String?,
    /** 카테고리 통계 호출 실패 메시지. null 이면 정상. UI 는 우하단 오버레이로 노출. */
    val errorMessage: String?,
)

internal fun CategoryInfo.toDto(): CategoryInfoDto {
    val rgb = (themeColorArgb and 0xFFFFFFL).toString(16).padStart(6, '0').uppercase()
    return CategoryInfoDto(
        id = category.id,
        displayName = displayName,
        emoji = emoji,
        ongoingCount = ongoingCount,
        themeColorHex = "#$rgb",
        isEnabled = isEnabled,
        span = span.name,
    )
}

internal fun MainUiState.toDto(): MainUiStateDto = MainUiStateDto(
    categories = categories.map { it.toDto() }.toTypedArray(),
    isLoggedIn = isLoggedIn,
    userName = userName,
    transientMessage = transientMessage,
    errorMessage = errorMessage,
)

// ---------- Map 관련 DTO ----------

@JsExport
class AuctionItemDto internal constructor(
    val id: String,
    val categoryId: String,
    val categoryDisplayName: String,
    val priceText: String,
    val failedCount: Int,
    val latitude: Double,
    val longitude: Double,
    val address: String,
    // ---- 서버 연동 시 채워지는 부가 표시 ----
    val title: String?,                // 원본 title — "서울특별시 송파구 거여동 294 거여5단지아파트 제501동 제11층 제1104호"
    val buildingUnitLabel: String?,    // title 에서 address 부분 제거 — "294 거여5단지아파트 제501동 제11층 제1104호"
    val appraisalText: String?,        // "1.2억" 또는 null (반올림 표기)
    val minBidText: String?,           // "0.8억" 또는 null (반올림 표기)
    // 정확한 한국식 표기("9억9500만원") 와 할인율 계산을 위한 raw 값 (원 단위, Double).
    val appraisalPrice: Double?,
    val minBidPrice: Double?,
    val bidEndShort: String?,          // "12/14" 또는 null
    val bidEndAt: String?,             // ISO-8601 원본 — 클라이언트 카운트다운 계산용
    val markerSubInfo: String?,        // "마감 12/14 · 유찰 3" 또는 null
    val status: String?,               // ongoing/sold/... (raw)
    val statusLabel: String?,          // "입찰 예정" / "입찰 진행중" / "낙찰" / "유찰" / "취하"
    val thumbnailUrl: String?,
)

@JsExport
class AuctionClusterDto internal constructor(
    val cityKey: String,
    val centerLat: Double,
    val centerLng: Double,
    val itemCount: Int,
)

/**
 * 동일 좌표 매물 묶음. 1건짜리 그룹도 포함 — UI 는 [count] 로 단건/N건 분기.
 */
@JsExport
class MarkerGroupDto internal constructor(
    val groupKey: String,
    val latitude: Double,
    val longitude: Double,
    val count: Int,
    val items: Array<AuctionItemDto>,
)

@JsExport
class MapUiStateDto internal constructor(
    val items: Array<AuctionItemDto>,
    val selectedItem: AuctionItemDto?,
    val centerLat: Double,
    val centerLng: Double,
    val kakaoLevel: Int,           // 카카오 SDK level 로 변환된 값 — React 가 그대로 setLevel 에 전달
    val isLocationLoading: Boolean,
    val locationFallbackUsed: Boolean,
    /** 줌아웃 시 시(市) 단위로 묶인 클러스터. clusterMode=false 면 빈 배열. */
    val clusters: Array<AuctionClusterDto>,
    /** 현재 클러스터 모드인지 — UI 가 markers vs clusters 분기에 사용. */
    val clusterMode: Boolean,
    /** 매물 첫 emission 도착 전 — 중앙 로딩 인디케이터 노출 여부 판단용. */
    val isLoadingItems: Boolean,
    /** 매물 호출 실패 시 사람이 읽을 메시지. null 이면 정상. UI 는 우하단 오버레이로 노출. */
    val errorMessage: String?,
    /** 동일 좌표 매물 묶음 마커. clusterMode=false 일 때 UI 가 이걸로 마커를 그린다. */
    val markerGroups: Array<MarkerGroupDto>,
    /** 마커 클릭으로 선택된 그룹 — 좌측 패널이 이 안의 items 를 스크롤 리스트로 표시. */
    val selectedGroup: MarkerGroupDto?,
)

internal fun AuctionItem.toDto(): AuctionItemDto = AuctionItemDto(
    id = id,
    categoryId = category.id,
    categoryDisplayName = category.displayName,
    priceText = priceText,
    failedCount = failedCount,
    latitude = latitude,
    longitude = longitude,
    address = address,
    title = title,
    buildingUnitLabel = buildingUnitLabel(),
    appraisalText = appraisalText(),
    minBidText = minBidText(),
    // 정확한 한국식 가격 표기("9억9500만원") 와 할인율 계산을 위해 원(KRW) raw 값을 Double 로 노출.
    // Kotlin/JS Long 은 직접 @JsExport 불가, 9억 원 수준은 Double 정밀도 한계(2^53)에 한참 못 미침.
    appraisalPrice = appraisalPrice?.toDouble(),
    minBidPrice = minBidPrice?.toDouble(),
    bidEndShort = shortBidEndDate(),
    bidEndAt = bidEndAt,
    markerSubInfo = markerSubInfo(),
    status = status,
    statusLabel = statusLabel(),
    thumbnailUrl = thumbnailUrl,
)

internal fun MapUiState.toDto(): MapUiStateDto {
    val groupDtos = markerGroups.map { g ->
        MarkerGroupDto(
            groupKey = g.groupKey,
            latitude = g.latitude,
            longitude = g.longitude,
            count = g.count,
            items = g.items.map { it.toDto() }.toTypedArray(),
        )
    }
    val selectedGroupDto = selectedGroup?.let { sel ->
        // 새로 만든 DTO 인스턴스보다 groupDtos 안의 동일 키 인스턴스를 재사용해 reference 안정성 확보.
        groupDtos.firstOrNull { it.groupKey == sel.groupKey } ?: MarkerGroupDto(
            groupKey = sel.groupKey,
            latitude = sel.latitude,
            longitude = sel.longitude,
            count = sel.count,
            items = sel.items.map { it.toDto() }.toTypedArray(),
        )
    }
    return MapUiStateDto(
        items = items.map { it.toDto() }.toTypedArray(),
        selectedItem = selectedItem?.toDto(),
        centerLat = cameraState.center.latitude,
        centerLng = cameraState.center.longitude,
        kakaoLevel = zoomToKakaoLevel(cameraState.zoom),
        isLocationLoading = isLocationLoading,
        locationFallbackUsed = locationFallbackUsed,
        clusters = clusters.map {
            AuctionClusterDto(
                cityKey = it.cityKey,
                centerLat = it.centerLat,
                centerLng = it.centerLng,
                itemCount = it.itemCount,
            )
        }.toTypedArray(),
        clusterMode = clusterMode,
        isLoadingItems = isLoadingItems,
        errorMessage = errorMessage,
        markerGroups = groupDtos.toTypedArray(),
        selectedGroup = selectedGroupDto,
    )
}
