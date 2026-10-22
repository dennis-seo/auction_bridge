package com.jeffrey.auctionbridge.feature.search.components

import androidx.compose.foundation.layout.Box
import androidx.compose.material3.AssistChip
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import com.jeffrey.auctionbridge.feature.search.SearchSort
import com.jeffrey.auctionbridge.feature.search.SearchTab

/**
 * 정렬 선택 칩 + DropdownMenu.
 *
 * 탭별 옵션 — 진행중: [SearchSort] 6종 전부, 매각결과: 서버 /bid-results 가
 * 지원하는 축(개찰일/낙찰가율/낙찰가)에 대응하는 NEWEST/RATIO_ASC/PRICE_DESC 만.
 */
@Composable
internal fun SortMenuChip(
    tab: SearchTab,
    sort: SearchSort,
    onSortSelected: (sortId: String) -> Unit,
    modifier: Modifier = Modifier,
) {
    var expanded by remember { mutableStateOf(false) }
    val options = remember(tab) {
        when (tab) {
            SearchTab.ONGOING -> SearchSort.entries.toList()
            SearchTab.RESULTS -> listOf(
                SearchSort.NEWEST,
                SearchSort.RATIO_ASC,
                SearchSort.PRICE_DESC,
            )
        }
    }

    Box(modifier = modifier) {
        AssistChip(
            onClick = { expanded = true },
            label = { Text("${sort.displayName} ▾") },
        )
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            options.forEach { option ->
                DropdownMenuItem(
                    text = {
                        Text(
                            text = option.displayName,
                            fontWeight = if (option == sort) FontWeight.Bold else FontWeight.Normal,
                            color = if (option == sort) {
                                MaterialTheme.colorScheme.primary
                            } else {
                                MaterialTheme.colorScheme.onSurface
                            },
                        )
                    },
                    onClick = {
                        expanded = false
                        onSortSelected(option.id)
                    },
                )
            }
        }
    }
}
