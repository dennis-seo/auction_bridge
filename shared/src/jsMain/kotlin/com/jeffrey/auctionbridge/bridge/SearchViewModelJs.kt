@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.feature.search.SearchFilter
import com.jeffrey.auctionbridge.feature.search.SearchViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

/**
 * SearchViewModel 의 JS-친화 래퍼.
 *
 * - subscribe(callback) 으로 상태 변경 구독
 * - applyFilter 는 JS 가 DTO 를 생성할 수 없으므로(internal constructor) 원시 파라미터로 수신
 * - setSort / selectTab 은 canonical id 문자열("newest", "ongoing" 등)로 전달
 */
@JsExport
class SearchViewModelJs internal constructor(
    private val vm: SearchViewModel,
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    fun subscribe(onState: (SearchUiStateDto) -> Unit): () -> Unit {
        val job: Job = scope.launch {
            vm.uiState.collect { state -> onState(state.toDto()) }
        }
        return { job.cancel() }
    }

    /**
     * 필터 시트 [적용] — 전달값으로 필터를 통째로 교체 후 첫 페이지부터 재조회.
     * @param categoryIds 도메인 카테고리 id 배열 ("apartment", "villa", ...) — 미매핑 id 는 무시
     * @param minPrice / maxPrice 최저 입찰가 범위 (원)
     */
    fun applyFilter(
        regionSido: String?,
        regionSigungu: String?,
        categoryIds: Array<String>,
        minPrice: Double?,
        maxPrice: Double?,
        minFailedCount: Int?,
        maxFailedCount: Int?,
        minAreaSqm: Double?,
        maxAreaSqm: Double?,
    ) {
        vm.applyFilter(
            SearchFilter(
                regionSido = regionSido?.takeIf { it.isNotBlank() },
                regionSigungu = regionSigungu?.takeIf { it.isNotBlank() },
                categories = categoryIds.mapNotNull { AuctionCategory.fromId(it) }.toSet(),
                minPrice = minPrice?.toLong(),
                maxPrice = maxPrice?.toLong(),
                minFailedCount = minFailedCount,
                maxFailedCount = maxFailedCount,
                minAreaSqm = minAreaSqm,
                maxAreaSqm = maxAreaSqm,
            ),
        )
    }

    /** 모든 필터 해제 후 재조회. */
    fun clearFilter() {
        vm.clearFilter()
    }

    /** 정렬 변경 — "newest" / "deadline" / "price_asc" / "price_desc" / "ratio_asc" / "failed_count". */
    fun setSort(sortId: String) {
        vm.setSort(sortId)
    }

    /** 탭 전환 — "ongoing" / "results". */
    fun selectTab(tabId: String) {
        vm.selectTab(tabId)
    }

    /** IntersectionObserver 등으로 리스트 하단 도달 시 호출 — 다음 페이지 append. */
    fun loadNextPage() {
        vm.loadNextPage()
    }

    /** 현재 조건 그대로 첫 페이지부터 재조회. */
    fun refresh() {
        vm.refresh()
    }

    fun openFilterSheet() {
        vm.openFilterSheet()
    }

    fun closeFilterSheet() {
        vm.closeFilterSheet()
    }

    /** 우하단 에러 오버레이 닫기. */
    fun dismissError() {
        vm.dismissError()
    }

    fun dispose() {
        scope.cancel()
    }
}
