package com.jeffrey.auctionbridge.core.designsystem

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.ColorScheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColorScheme = lightColorScheme(
    primary = Blue40,
    onPrimary = Color.White,
    primaryContainer = Color(0xFFD6E4FF),
    onPrimaryContainer = DeepNavy,

    secondary = DeepNavy,
    onSecondary = Color.White,
    secondaryContainer = SlateGraySoft,
    onSecondaryContainer = DeepNavy,

    tertiary = Cyan40,
    onTertiary = Color.White,

    background = BackgroundTint,
    onBackground = InkBlack,

    surface = Color.White,
    onSurface = InkBlack,
    surfaceVariant = SlateGraySoft,
    onSurfaceVariant = SlateGray,

    outline = SlateGray,
)

private val DarkColorScheme = darkColorScheme(
    primary = Blue80,
    onPrimary = DeepNavy,
    primaryContainer = DeepNavyLight,
    onPrimaryContainer = Color.White,

    secondary = BlueGrey80,
    onSecondary = DeepNavy,
    secondaryContainer = DeepNavyLight,
    onSecondaryContainer = Color.White,

    tertiary = Cyan80,
    onTertiary = DeepNavy,

    background = Color(0xFF0E141B),
    onBackground = Color(0xFFE6EAF0),

    surface = Color(0xFF142133),
    onSurface = Color(0xFFE6EAF0),
    surfaceVariant = Color(0xFF22324A),
    onSurfaceVariant = SlateGray,

    outline = SlateGray,
)

@Composable
internal expect fun platformColorScheme(darkTheme: Boolean, dynamicColor: Boolean): ColorScheme?

@Composable
fun AuctionBridgeTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = platformColorScheme(darkTheme, dynamicColor)
        ?: if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = appTypography(),
        shapes = AppShapes,
        content = content
    )
}
