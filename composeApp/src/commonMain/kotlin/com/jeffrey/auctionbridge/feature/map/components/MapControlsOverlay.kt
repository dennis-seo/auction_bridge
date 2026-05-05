package com.jeffrey.auctionbridge.feature.map.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex

/**
 * 다음 맵 스타일의 지도 컨트롤 — 3개 버튼 세로 스택.
 * Surface 의 shadowElevation 이 wasm Skiko 에서 가끔 정상 렌더되지 않는 케이스를 회피하려고
 * 단순 Box + background + border 조합 사용. zIndex 로 항상 다른 오버레이 위로 올림.
 */
@Composable
internal fun MapControlsOverlay(
    onMyLocationClick: () -> Unit,
    onZoomIn: () -> Unit,
    onZoomOut: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val cardBg = Color.White
    val divider = Color(0xFFE0E0E0)
    val border = Color(0xFFBDBDBD)
    val glyph = Color(0xFF222222)
    val cardShape = RoundedCornerShape(8.dp)
    val buttonSize = 48.dp

    Column(
        modifier = modifier.zIndex(10f).width(buttonSize),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        // 1) 내 위치
        Box(
            modifier = Modifier
                .size(buttonSize)
                .clip(cardShape)
                .background(cardBg, cardShape)
                .border(1.dp, border, cardShape)
                .clickable(onClick = onMyLocationClick),
            contentAlignment = Alignment.Center,
        ) {
            Text("◉", fontSize = 20.sp, color = glyph)
        }

        // 2) +/− 합친 카드
        Column(
            modifier = Modifier
                .width(buttonSize)
                .clip(cardShape)
                .background(cardBg, cardShape)
                .border(1.dp, border, cardShape),
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(buttonSize)
                    .clickable(onClick = onZoomIn),
                contentAlignment = Alignment.Center,
            ) {
                Text("+", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = glyph)
            }
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(1.dp)
                    .background(divider),
            )
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(buttonSize)
                    .clickable(onClick = onZoomOut),
                contentAlignment = Alignment.Center,
            ) {
                Text("−", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = glyph)
            }
        }
    }
}

