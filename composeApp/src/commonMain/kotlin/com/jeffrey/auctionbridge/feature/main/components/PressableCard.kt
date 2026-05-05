package com.jeffrey.auctionbridge.feature.main.components

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * 클릭 시 미세하게 줄어들고 그림자가 줄어드는 카드 컨테이너.
 *
 * @param enabled false면 누름 효과를 주지 않음 (비활성 카드용)
 */
@Composable
internal fun PressableCard(
    onClick: () -> Unit,
    shape: Shape,
    color: Color,
    modifier: Modifier = Modifier,
    elevation: Dp = 8.dp,
    pressedElevation: Dp = 2.dp,
    enabled: Boolean = true,
    content: @Composable () -> Unit,
) {
    val interaction = remember { MutableInteractionSource() }
    val pressed by interaction.collectIsPressedAsState()
    val scale by animateFloatAsState(
        targetValue = if (enabled && pressed) 0.97f else 1f,
        label = "pressableScale",
    )
    val anim by animateDpAsState(
        targetValue = if (enabled && pressed) pressedElevation else elevation,
        label = "pressableElev",
    )

    Surface(
        modifier = modifier
            .graphicsLayer { scaleX = scale; scaleY = scale }
            .shadow(elevation = if (enabled) anim else 0.dp, shape = shape, clip = false)
            .clickable(
                interactionSource = interaction,
                indication = null,
                onClick = onClick,
            ),
        shape = shape,
        color = color,
    ) {
        content()
    }
}
