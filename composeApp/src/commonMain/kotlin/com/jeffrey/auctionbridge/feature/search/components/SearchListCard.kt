package com.jeffrey.auctionbridge.feature.search.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jeffrey.auctionbridge.core.designsystem.SlateGraySoft
import com.jeffrey.auctionbridge.core.domain.model.RealtySearchItem
import com.jeffrey.auctionbridge.feature.search.appraisalText
import com.jeffrey.auctionbridge.feature.search.areaText
import com.jeffrey.auctionbridge.feature.search.ddayLabel
import com.jeffrey.auctionbridge.feature.search.minBidText
import com.jeffrey.auctionbridge.feature.search.saleRatioText

/**
 * 검색 결과 카드 — DetailScreen 의 SectionCard 스타일(RoundedCornerShape(16.dp)).
 *
 * 진행중 탭: 감정가/최저가 + D-day + 유찰 태그.
 * 매각결과 탭: D-day 대신 낙찰가(강조) + 낙찰가율 배지.
 * 썸네일은 이미지 로더 미도입 상태라 placeholder Box (coil 도입은 후속).
 */
@Composable
internal fun SearchListCard(
    item: RealtySearchItem,
    isResultsTab: Boolean,
    onClick: (itemId: String) -> Unit,
    modifier: Modifier = Modifier,
) {
    Surface(
        onClick = { onClick(item.id) },
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 4.dp,
    ) {
        Row(
            modifier = Modifier.padding(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            ThumbnailPlaceholder(modifier = Modifier.size(88.dp))

            Column(modifier = Modifier.weight(1f)) {
                // 태그 행 — 재산구분 / 유찰 / D-day(진행중 탭만).
                Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                    item.prptDivNm?.let {
                        TagChip(
                            text = it,
                            containerColor = MaterialTheme.colorScheme.surfaceVariant,
                            contentColor = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                    if (item.failedCount > 0) {
                        TagChip(
                            text = "유찰 ${item.failedCount}회",
                            containerColor = MaterialTheme.colorScheme.errorContainer,
                            contentColor = MaterialTheme.colorScheme.onErrorContainer,
                        )
                    }
                    if (!isResultsTab) {
                        item.ddayLabel()?.let {
                            TagChip(
                                text = it,
                                containerColor = MaterialTheme.colorScheme.primaryContainer,
                                contentColor = MaterialTheme.colorScheme.onPrimaryContainer,
                            )
                        }
                    }
                }
                Spacer(Modifier.height(6.dp))

                Text(
                    text = item.title ?: item.address ?: "(제목 없음)",
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.onSurface,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
                item.address?.takeIf { it != item.title }?.let {
                    Text(
                        text = it,
                        fontSize = 12.sp,
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.padding(top = 2.dp),
                    )
                }
                item.areaText()?.let {
                    Text(
                        text = it,
                        fontSize = 12.sp,
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
                        modifier = Modifier.padding(top = 2.dp),
                    )
                }
                Spacer(Modifier.height(8.dp))

                if (isResultsTab) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        PriceLabel(
                            label = "낙찰가",
                            value = item.salePrice.toEokTextOrNull() ?: "-",
                            emphasized = true,
                        )
                        item.saleRatioText()?.let {
                            TagChip(
                                text = it,
                                containerColor = MaterialTheme.colorScheme.primaryContainer,
                                contentColor = MaterialTheme.colorScheme.onPrimaryContainer,
                            )
                        }
                    }
                } else {
                    Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                        item.appraisalText()?.let {
                            PriceLabel(label = "감정가", value = it, emphasized = false)
                        }
                        item.minBidText()?.let {
                            PriceLabel(label = "최저가", value = it, emphasized = true)
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ThumbnailPlaceholder(modifier: Modifier = Modifier) {
    Box(
        modifier = modifier.background(
            color = SlateGraySoft,
            shape = RoundedCornerShape(12.dp),
        ),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = "사진 없음",
            fontSize = 11.sp,
            color = Color(0xFF778DA9),
        )
    }
}

@Composable
private fun TagChip(
    text: String,
    containerColor: Color,
    contentColor: Color,
) {
    Box(
        modifier = Modifier.background(
            color = containerColor,
            shape = RoundedCornerShape(6.dp),
        ),
    ) {
        Text(
            text = text,
            fontSize = 11.sp,
            fontWeight = FontWeight.Medium,
            color = contentColor,
            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
        )
    }
}

@Composable
private fun PriceLabel(label: String, value: String, emphasized: Boolean) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(
            text = label,
            fontSize = 11.sp,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.55f),
        )
        Text(
            text = value,
            fontSize = if (emphasized) 16.sp else 13.sp,
            fontWeight = if (emphasized) FontWeight.Bold else FontWeight.Medium,
            color = if (emphasized) {
                MaterialTheme.colorScheme.primary
            } else {
                MaterialTheme.colorScheme.onSurface
            },
            modifier = Modifier.padding(start = 4.dp),
        )
    }
}

/** "1.2억" — 검색 포맷터(억 단위 1자리 반올림)와 동일 정책. 1억 미만은 "3,500만" 대신 "0.4억". */
private fun Long?.toEokTextOrNull(): String? {
    val v = this ?: return null
    if (v <= 0) return null
    val eok = v / 1_0000_0000.0
    val rounded = (eok * 10).toLong() / 10.0
    return "${rounded}억"
}
