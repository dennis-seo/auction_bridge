package com.jeffrey.auctionbridge.core.designsystem

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.unit.dp

val AppShapes = Shapes(
    extraSmall = RoundedCornerShape(8.dp),
    small = RoundedCornerShape(12.dp),
    medium = RoundedCornerShape(16.dp),     // 기본 카드
    large = RoundedCornerShape(20.dp),      // Featured 카드
    extraLarge = RoundedCornerShape(28.dp), // Sheet/Dialog
)
