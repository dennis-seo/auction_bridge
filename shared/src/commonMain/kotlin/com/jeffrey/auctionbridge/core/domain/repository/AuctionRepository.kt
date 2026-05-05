package com.jeffrey.auctionbridge.core.domain.repository

import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import kotlinx.coroutines.flow.Flow

/**
 * 경공매 데이터 접근 계약.
 *
 * Mock/Remote/Cache 구현체는 이 인터페이스를 따른다.
 * UI는 항상 이 인터페이스만 의존해 데이터 출처 변경에 영향받지 않는다.
 */
interface AuctionRepository {
    /** 메인 화면에 노출되는 카테고리 카드 목록을 스트림으로 제공. */
    fun getCategoryList(): Flow<List<CategoryInfo>>

    /** 카테고리별 매물 리스트(좌표 포함)를 스트림으로 제공. */
    fun getAuctionItems(category: AuctionCategory): Flow<List<AuctionItem>>
}
