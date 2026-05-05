package com.jeffrey.auctionbridge.feature.main.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.core.domain.model.CategorySpan

@Composable
internal fun BentoCategoryGrid(
    categories: List<CategoryInfo>,
    onClick: (CategoryInfo) -> Unit,
    modifier: Modifier = Modifier,
) {
    LazyVerticalGrid(
        columns = GridCells.Fixed(2),
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 24.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
        modifier = modifier,
    ) {
        items(
            items = categories,
            key = { it.category.id },
            span = { item ->
                when (item.span) {
                    CategorySpan.Featured, CategorySpan.Wide -> GridItemSpan(2)
                    CategorySpan.Half -> GridItemSpan(1)
                }
            },
        ) { item ->
            val cardModifier = Modifier
                .fillMaxWidth()
                .height(item.span.cardHeight())

            if (item.isEnabled) {
                CategoryCard(info = item, onClick = { onClick(item) }, modifier = cardModifier)
            } else {
                DisabledCategoryCard(info = item, onClick = { onClick(item) }, modifier = cardModifier)
            }
        }
    }
}

private fun CategorySpan.cardHeight() = when (this) {
    CategorySpan.Featured -> 180.dp
    CategorySpan.Half -> 124.dp
    CategorySpan.Wide -> 100.dp
}
