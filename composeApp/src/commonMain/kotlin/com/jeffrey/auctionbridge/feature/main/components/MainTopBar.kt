package com.jeffrey.auctionbridge.feature.main.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
internal fun MainTopBar(
    isLoggedIn: Boolean,
    userName: String?,
    onLoginToggle: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(56.dp),
        contentAlignment = Alignment.Center,
    ) {
        Box(
            modifier = Modifier
                .widthIn(max = 1080.dp)
                .fillMaxWidth()
                .fillMaxHeight()
                .padding(start = 8.dp, end = 8.dp),
        ) {
            // 좌측: 메뉴 placeholder (현재는 동작 없음)
            IconButton(
                onClick = { /* TODO: 추후 drawer */ },
                modifier = Modifier.align(Alignment.CenterStart).size(44.dp),
            ) {
                Text(
                    text = "≡",
                    color = MaterialTheme.colorScheme.onBackground,
                    fontWeight = FontWeight.Bold,
                    fontSize = 22.sp,
                )
            }

            // 우측: 로그인 버튼
            Box(modifier = Modifier.align(Alignment.CenterEnd)) {
                LoginButton(
                    isLoggedIn = isLoggedIn,
                    userName = userName,
                    onClick = onLoginToggle,
                )
            }
        }
    }
}
