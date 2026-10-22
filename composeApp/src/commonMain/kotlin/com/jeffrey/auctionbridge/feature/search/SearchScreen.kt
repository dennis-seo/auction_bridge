package com.jeffrey.auctionbridge.feature.search

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilterChip
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.jeffrey.auctionbridge.feature.search.components.FilterBottomSheet
import com.jeffrey.auctionbridge.feature.search.components.SearchListCard
import com.jeffrey.auctionbridge.feature.search.components.SearchTabRow
import com.jeffrey.auctionbridge.feature.search.components.SortMenuChip
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.parameter.parametersOf

/**
 * 목록 검색 화면 — 상단 탭(진행중/매각결과) + 필터/정렬 칩 행 + 무한스크롤 카드 리스트.
 * 로딩/에러 오버레이 관례는 [com.jeffrey.auctionbridge.feature.map.MapScreen] 과 동일.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchScreen(
    categoryId: String?,
    initialTab: String,
    onBack: () -> Unit,
    onItemClick: (itemId: String) -> Unit,
    onMapClick: (() -> Unit)? = null,
    viewModel: SearchViewModel = koinViewModel { parametersOf(categoryId, initialTab) },
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val listState = rememberLazyListState()

    // 무한스크롤 — 마지막-3 아이템이 보이면 다음 페이지 로드 (loadNextPage 가 중복 호출 가드).
    LaunchedEffect(listState) {
        snapshotFlow {
            val info = listState.layoutInfo
            val lastVisible = info.visibleItemsInfo.lastOrNull()?.index ?: -1
            lastVisible to info.totalItemsCount
        }.collect { (lastVisible, totalCount) ->
            if (totalCount > 0 && lastVisible >= totalCount - 3) {
                viewModel.loadNextPage()
            }
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("매물 검색") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Text(text = "←", fontWeight = FontWeight.Bold, fontSize = 22.sp)
                    }
                },
            )
        },
        containerColor = MaterialTheme.colorScheme.background,
    ) { padding ->
        Box(modifier = Modifier.padding(padding).fillMaxSize()) {
            Column(modifier = Modifier.fillMaxSize()) {
                SearchTabRow(
                    selected = uiState.tab,
                    onSelect = { tab -> viewModel.selectTab(tab.id) },
                )

                // 필터 버튼(+활성 배지) / 정렬 칩 / 총 건수
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    val activeCount = uiState.filter.activeCount
                    FilterChip(
                        selected = activeCount > 0,
                        onClick = viewModel::openFilterSheet,
                        label = {
                            Text(if (activeCount > 0) "필터 $activeCount" else "필터")
                        },
                    )
                    SortMenuChip(
                        tab = uiState.tab,
                        sort = uiState.sort,
                        onSortSelected = viewModel::setSort,
                    )
                    Spacer(Modifier.weight(1f))
                    if (!uiState.isLoading) {
                        Text(
                            text = "총 ${uiState.total}건",
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
                        )
                    }
                }

                Box(modifier = Modifier.weight(1f).fillMaxWidth()) {
                    LazyColumn(
                        state = listState,
                        modifier = Modifier.fillMaxSize(),
                        contentPadding = PaddingValues(
                            start = 16.dp, end = 16.dp, top = 4.dp,
                            // 하단 "지도 보기" floating pill 에 마지막 카드가 가리지 않게 여유 확보.
                            bottom = if (onMapClick != null) 88.dp else 24.dp,
                        ),
                        verticalArrangement = Arrangement.spacedBy(12.dp),
                    ) {
                        items(uiState.items) { item ->
                            SearchListCard(
                                item = item,
                                isResultsTab = uiState.tab == SearchTab.RESULTS,
                                onClick = onItemClick,
                            )
                        }
                        if (uiState.isLoadingMore) {
                            item {
                                Box(
                                    modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
                                    contentAlignment = Alignment.Center,
                                ) {
                                    CircularProgressIndicator(
                                        modifier = Modifier.size(24.dp),
                                        strokeWidth = 2.dp,
                                    )
                                }
                            }
                        }
                    }

                    // 빈 결과 안내 — 로딩/에러 중이 아닐 때만.
                    if (!uiState.isLoading && uiState.items.isEmpty() && uiState.errorMessage == null) {
                        Column(
                            modifier = Modifier.align(Alignment.Center),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(4.dp),
                        ) {
                            Text(
                                text = "조건에 맞는 매물이 없습니다",
                                style = MaterialTheme.typography.bodyLarge,
                                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f),
                            )
                            Text(
                                text = "필터를 조정해 보세요",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.5f),
                            )
                        }
                    }

                    // 첫 페이지 로딩 오버레이 — MapScreen 관례.
                    if (uiState.isLoading) {
                        Row(
                            modifier = Modifier
                                .align(Alignment.Center)
                                .background(
                                    color = Color(0xD91B2A3F),
                                    shape = RoundedCornerShape(16.dp),
                                )
                                .padding(PaddingValues(horizontal = 20.dp, vertical = 14.dp)),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(12.dp),
                        ) {
                            CircularProgressIndicator(
                                modifier = Modifier.size(20.dp),
                                color = Color.White,
                                strokeWidth = 2.dp,
                            )
                            Text(
                                text = "매물 검색 중…",
                                color = Color.White,
                                style = MaterialTheme.typography.bodyMedium,
                            )
                        }
                    }
                }
            }

            // 목록 → 지도 전환 pill — MapScreen 의 "목록 보기" 와 대칭 (replace 시맨틱은 AppNavigation 담당).
            if (onMapClick != null) {
                Row(
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .padding(bottom = 24.dp)
                        .clip(RoundedCornerShape(24.dp))
                        .background(color = Color(0xE61B2A3F), shape = RoundedCornerShape(24.dp))
                        .border(width = 1.dp, color = Color(0x33FFFFFF), shape = RoundedCornerShape(24.dp))
                        .clickable(onClick = onMapClick)
                        .padding(horizontal = 20.dp, vertical = 12.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    Text(text = "🗺", color = Color.White, fontSize = 14.sp)
                    Text(
                        text = "지도 보기",
                        color = Color.White,
                        style = MaterialTheme.typography.labelLarge,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }

            // 에러 오버레이 — MapScreen 관례 (우하단 토스트성).
            AnimatedVisibility(
                visible = uiState.errorMessage != null,
                enter = fadeIn(),
                exit = fadeOut(),
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .padding(end = 16.dp, bottom = 24.dp)
                    .widthIn(max = 360.dp),
            ) {
                uiState.errorMessage?.let { msg ->
                    Row(
                        modifier = Modifier
                            .background(
                                color = Color(0xD94B0A14),
                                shape = RoundedCornerShape(12.dp),
                            )
                            .border(
                                width = 1.dp,
                                color = Color(0x66F87171),
                                shape = RoundedCornerShape(12.dp),
                            )
                            .padding(PaddingValues(horizontal = 14.dp, vertical = 12.dp)),
                        verticalAlignment = Alignment.Top,
                        horizontalArrangement = Arrangement.spacedBy(10.dp),
                    ) {
                        Text(text = "⚠️", color = Color.White)
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = "검색 실패",
                                color = Color(0xFFFCA5A5),
                                style = MaterialTheme.typography.labelMedium,
                            )
                            Text(
                                text = msg,
                                color = Color.White,
                                style = MaterialTheme.typography.bodySmall,
                                modifier = Modifier.padding(top = 4.dp),
                            )
                        }
                        Text(
                            text = "×",
                            color = Color.White.copy(alpha = 0.7f),
                            style = MaterialTheme.typography.titleMedium,
                            modifier = Modifier.clickable { viewModel.dismissError() },
                        )
                    }
                }
            }
        }
    }

    if (uiState.isFilterSheetOpen) {
        FilterBottomSheet(
            initialFilter = uiState.filter,
            onApply = viewModel::applyFilter,
            onReset = viewModel::clearFilter,
            onDismiss = viewModel::closeFilterSheet,
        )
    }
}
