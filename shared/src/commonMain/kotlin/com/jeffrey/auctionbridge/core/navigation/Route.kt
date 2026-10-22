package com.jeffrey.auctionbridge.core.navigation

import kotlinx.serialization.Serializable

@Serializable
data object MainRoute

@Serializable
data class MapRoute(val categoryId: String)

@Serializable
data class DetailRoute(val itemId: String)

/**
 * 목록 검색 화면. [categoryId] 는 메인 카테고리 카드에서 진입 시 초기 필터(null 이면 전체),
 * [tab] 은 "ongoing"(진행중) / "results"(매각결과).
 */
@Serializable
data class SearchRoute(val categoryId: String? = null, val tab: String = "ongoing")
