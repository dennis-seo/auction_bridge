package com.jeffrey.auctionbridge.feature.search

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.jeffrey.auctionbridge.core.config.AppFlags
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

/**
 * 목록 검색 ViewModel — 탭(진행중/매각결과) + 필터 + 정렬 + offset 무한스크롤.
 *
 * 탭/필터/정렬이 바뀌면 진행 중이던 로드를 취소하고 첫 페이지부터 다시 조회.
 * 에러 노출 정책은 [MapViewModel] 과 동일 — showErrors=false 운영 빌드에서는 조용한 실패.
 *
 * @param categoryId 메인 카드에서 진입 시 초기 카테고리 필터 (null 이면 전체)
 * @param initialTabId "ongoing" / "results" — 알 수 없는 값이면 ONGOING
 */
class SearchViewModel(
    categoryId: String?,
    initialTabId: String,
    private val auctionRepository: AuctionRepository,
    private val flags: AppFlags,
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        SearchUiState(
            tab = SearchTab.fromId(initialTabId) ?: SearchTab.ONGOING,
            filter = SearchFilter(
                categories = setOfNotNull(categoryId?.let { AuctionCategory.fromId(it) }),
            ),
        ),
    )
    val uiState: StateFlow<SearchUiState> = _uiState.asStateFlow()

    private var loadJob: Job? = null

    init {
        reload()
    }

    /** 필터 시트의 [적용] — 새 필터로 교체하고 시트를 닫은 뒤 첫 페이지부터 재조회. */
    fun applyFilter(filter: SearchFilter) {
        _uiState.update { it.copy(filter = filter, isFilterSheetOpen = false) }
        reload()
    }

    /** 모든 필터 해제 (진입 카테고리 포함) 후 재조회. */
    fun clearFilter() {
        if (_uiState.value.filter == SearchFilter()) return
        _uiState.update { it.copy(filter = SearchFilter()) }
        reload()
    }

    /** 정렬 변경. 알 수 없는 id 는 무시. */
    fun setSort(sortId: String) {
        val sort = SearchSort.fromId(sortId) ?: return
        if (_uiState.value.sort == sort) return
        _uiState.update { it.copy(sort = sort) }
        reload()
    }

    /** 진행중 ↔ 매각결과 탭 전환. 알 수 없는 id 는 무시. */
    fun selectTab(tabId: String) {
        val tab = SearchTab.fromId(tabId) ?: return
        if (_uiState.value.tab == tab) return
        _uiState.update { it.copy(tab = tab) }
        reload()
    }

    /** 리스트 하단 도달 시 다음 페이지 append. 로딩 중이거나 마지막 페이지면 no-op. */
    fun loadNextPage() {
        val state = _uiState.value
        if (state.isLoading || state.isLoadingMore || !state.hasMore) return
        _uiState.update { it.copy(isLoadingMore = true, errorMessage = null) }
        loadJob = viewModelScope.launch {
            try {
                val page = auctionRepository.searchRealty(
                    filter = state.filter,
                    sort = state.sort,
                    tab = state.tab,
                    offset = state.items.size,
                    limit = PAGE_SIZE,
                )
                _uiState.update {
                    it.copy(
                        items = it.items + page.items,
                        total = page.total,
                        hasMore = page.hasMore,
                        isLoadingMore = false,
                    )
                }
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                val msg = if (flags.showErrors) humanReadableError(e) else null
                _uiState.update { it.copy(isLoadingMore = false, errorMessage = msg) }
            }
        }
    }

    /** 현재 조건 그대로 첫 페이지부터 재조회 (pull-to-refresh / 에러 재시도). */
    fun refresh() {
        reload()
    }

    fun openFilterSheet() {
        _uiState.update { it.copy(isFilterSheetOpen = true) }
    }

    fun closeFilterSheet() {
        _uiState.update { it.copy(isFilterSheetOpen = false) }
    }

    /** 사용자가 에러 오버레이를 닫을 때 호출. */
    fun dismissError() {
        _uiState.update { it.copy(errorMessage = null) }
    }

    /** 진행 중 로드를 취소하고 첫 페이지부터 다시 조회. */
    private fun reload() {
        loadJob?.cancel()
        _uiState.update {
            it.copy(isLoading = true, isLoadingMore = false, errorMessage = null)
        }
        loadJob = viewModelScope.launch {
            try {
                val state = _uiState.value
                val page = auctionRepository.searchRealty(
                    filter = state.filter,
                    sort = state.sort,
                    tab = state.tab,
                    offset = 0,
                    limit = PAGE_SIZE,
                )
                _uiState.update {
                    it.copy(
                        items = page.items,
                        total = page.total,
                        hasMore = page.hasMore,
                        isLoading = false,
                    )
                }
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                // 운영 빌드(showErrors=false) 에서는 에러 토스트 노출 안 함 — 0건 상태로 표시.
                val msg = if (flags.showErrors) humanReadableError(e) else null
                _uiState.update { it.copy(isLoading = false, errorMessage = msg) }
            }
        }
    }

    private fun humanReadableError(e: Throwable): String {
        val type = e::class.simpleName ?: "Error"
        val msg = e.message?.takeIf { it.isNotBlank() }
        return if (msg != null) "$type: $msg" else type
    }

    private companion object {
        const val PAGE_SIZE = 20
    }
}
