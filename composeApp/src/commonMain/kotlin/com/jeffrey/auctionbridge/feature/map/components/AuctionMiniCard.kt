package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jeffrey.auctionbridge.core.domain.model.AuctionItem
import com.jeffrey.auctionbridge.feature.map.appraisalText
import com.jeffrey.auctionbridge.feature.map.minBidText
import com.jeffrey.auctionbridge.feature.map.shortBidEndDate

@Composable
internal fun AuctionMiniCard(
    item: AuctionItem,
    onDetailClick: (String) -> Unit,
    onClose: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Surface(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 8.dp,
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = if (item.failedCount > 0) {
                        "${item.priceText} · 유찰 ${item.failedCount}회"
                    } else {
                        item.priceText
                    },
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.weight(1f),
                )
                IconButton(onClick = onClose) {
                    Text(text = "✕", fontSize = 16.sp)
                }
            }
            Text(
                text = item.address,
                fontSize = 14.sp,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.85f),
            )

            // 서버 응답에서 들어온 부가 정보 — 있는 것만 골라 한 줄씩.
            val appraisal = item.appraisalText()
            val minBid = item.minBidText()
            val end = item.shortBidEndDate()
            if (appraisal != null || minBid != null || end != null) {
                Spacer(Modifier.height(8.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    appraisal?.let { InfoChip(label = "감정가", value = it) }
                    minBid?.let { InfoChip(label = "최저가", value = it) }
                    end?.let { InfoChip(label = "마감", value = it) }
                }
            }

            Spacer(Modifier.height(12.dp))
            Button(
                onClick = { onDetailClick(item.id) },
                modifier = Modifier.fillMaxWidth().height(44.dp),
                shape = RoundedCornerShape(12.dp),
            ) {
                Text(text = "상세 보기", fontWeight = FontWeight.SemiBold)
            }
        }
    }
}

@Composable
private fun InfoChip(label: String, value: String) {
    Column {
        Text(
            text = label,
            fontSize = 11.sp,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.55f),
        )
        Text(
            text = value,
            fontSize = 14.sp,
            fontWeight = FontWeight.SemiBold,
            color = MaterialTheme.colorScheme.onSurface,
        )
    }
}
