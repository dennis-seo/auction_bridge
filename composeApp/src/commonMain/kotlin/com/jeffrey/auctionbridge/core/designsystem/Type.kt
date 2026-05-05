package com.jeffrey.auctionbridge.core.designsystem

import androidx.compose.material3.Typography
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import com.jeffrey.auctionbridge.resources.Res
import com.jeffrey.auctionbridge.resources.spoqa_bold
import com.jeffrey.auctionbridge.resources.spoqa_medium
import com.jeffrey.auctionbridge.resources.spoqa_regular
import org.jetbrains.compose.resources.Font

@Composable
internal fun rememberAppFontFamily(): FontFamily = FontFamily(
    Font(Res.font.spoqa_regular, FontWeight.Normal),
    Font(Res.font.spoqa_medium, FontWeight.Medium),
    Font(Res.font.spoqa_medium, FontWeight.SemiBold),
    Font(Res.font.spoqa_bold, FontWeight.Bold),
)

@Composable
internal fun appTypography(): Typography {
    val ff = rememberAppFontFamily()
    val base = Typography()
    return base.copy(
        displayLarge = base.displayLarge.copy(fontFamily = ff),
        displayMedium = base.displayMedium.copy(fontFamily = ff),
        displaySmall = base.displaySmall.copy(fontFamily = ff),
        headlineLarge = base.headlineLarge.copy(fontFamily = ff),
        headlineMedium = base.headlineMedium.copy(fontFamily = ff),
        headlineSmall = base.headlineSmall.copy(fontFamily = ff),
        titleLarge = base.titleLarge.copy(fontFamily = ff),
        titleMedium = base.titleMedium.copy(fontFamily = ff),
        titleSmall = base.titleSmall.copy(fontFamily = ff),
        bodyLarge = base.bodyLarge.copy(fontFamily = ff),
        bodyMedium = base.bodyMedium.copy(fontFamily = ff),
        bodySmall = base.bodySmall.copy(fontFamily = ff),
        labelLarge = base.labelLarge.copy(fontFamily = ff),
        labelMedium = base.labelMedium.copy(fontFamily = ff),
        labelSmall = base.labelSmall.copy(fontFamily = ff),
    )
}
