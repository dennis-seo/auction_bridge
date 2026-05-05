package com.jeffrey.auctionbridge.feature.main.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
internal fun LoginButton(
    isLoggedIn: Boolean,
    userName: String?,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    if (!isLoggedIn) {
        Box(
            modifier = modifier
                .border(
                    width = 1.dp,
                    color = MaterialTheme.colorScheme.secondary,
                    shape = RoundedCornerShape(20.dp),
                )
                .clickable(onClick = onClick)
                .padding(horizontal = 14.dp, vertical = 7.dp),
        ) {
            Text(
                text = "로그인",
                color = MaterialTheme.colorScheme.secondary,
                fontWeight = FontWeight.SemiBold,
                fontSize = 13.sp,
            )
        }
    } else {
        Row(
            modifier = modifier
                .clickable(onClick = onClick)
                .padding(horizontal = 8.dp, vertical = 4.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(28.dp)
                    .background(
                        color = MaterialTheme.colorScheme.secondary,
                        shape = CircleShape,
                    ),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = (userName?.take(1) ?: "U"),
                    color = MaterialTheme.colorScheme.onSecondary,
                    fontWeight = FontWeight.Bold,
                    fontSize = 13.sp,
                )
            }
            Spacer(Modifier.width(8.dp))
            Text(
                text = userName ?: "사용자",
                color = MaterialTheme.colorScheme.onBackground,
                fontWeight = FontWeight.Medium,
                fontSize = 14.sp,
            )
        }
    }
}
