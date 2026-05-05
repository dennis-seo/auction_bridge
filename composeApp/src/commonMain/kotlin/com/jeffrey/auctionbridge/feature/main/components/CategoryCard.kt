package com.jeffrey.auctionbridge.feature.main.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jeffrey.auctionbridge.core.designsystem.DeepNavy
import com.jeffrey.auctionbridge.core.domain.model.CategoryInfo
import com.jeffrey.auctionbridge.core.domain.model.CategorySpan

@Composable
internal fun CategoryCard(
    info: CategoryInfo,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val shape = MaterialTheme.shapes.large
    val isFeatured = info.span == CategorySpan.Featured

    PressableCard(
        onClick = onClick,
        shape = shape,
        color = Color.Transparent,
        modifier = modifier,
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(Color(info.themeColorArgb), DeepNavy),
                    ),
                    shape = shape,
                )
                .padding(horizontal = 20.dp, vertical = 18.dp),
        ) {
            // 우상단: 진행 건수
            Text(
                text = "현재 ${info.ongoingCount.formatWithComma()}건 진행 중",
                color = Color.White.copy(alpha = 0.9f),
                fontSize = if (isFeatured) 14.sp else 12.sp,
                modifier = Modifier.align(Alignment.TopEnd),
            )

            // 좌하단: 이모지 + 이름 + CTA
            Column(
                modifier = Modifier.align(Alignment.BottomStart),
                verticalArrangement = Arrangement.spacedBy(4.dp),
            ) {
                Text(
                    text = info.emoji,
                    fontSize = if (isFeatured) 44.sp else 32.sp,
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    text = info.displayName,
                    color = Color.White,
                    fontWeight = FontWeight.Bold,
                    fontSize = if (isFeatured) 24.sp else 18.sp,
                )
                if (isFeatured) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            text = "지금 보러가기",
                            color = Color.White.copy(alpha = 0.95f),
                            fontSize = 13.sp,
                        )
                        Spacer(Modifier.size(4.dp))
                        Text(
                            text = "→",
                            color = Color.White,
                            fontSize = 14.sp,
                        )
                    }
                }
            }
        }
    }
}
