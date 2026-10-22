package com.jeffrey.auctionbridge.feature.search.components

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import com.jeffrey.auctionbridge.feature.search.SearchTab

/** 진행중 / 매각결과 상단 탭. */
@Composable
internal fun SearchTabRow(
    selected: SearchTab,
    onSelect: (SearchTab) -> Unit,
    modifier: Modifier = Modifier,
) {
    TabRow(
        selectedTabIndex = selected.ordinal,
        modifier = modifier,
        containerColor = MaterialTheme.colorScheme.background,
    ) {
        SearchTab.entries.forEach { tab ->
            Tab(
                selected = tab == selected,
                onClick = { onSelect(tab) },
                text = {
                    Text(
                        text = tab.displayName,
                        fontWeight = if (tab == selected) FontWeight.Bold else FontWeight.Normal,
                    )
                },
            )
        }
    }
}
