package com.jeffrey.auctionbridge.core.platform

import androidx.compose.ui.unit.Dp

/**
 * 플랫폼별 레이아웃 상수.
 * 모바일은 화면 폭이 좁아 가장자리에 가까워도 자연스럽지만, 웹은 와이드 화면이라
 * 우측 끝에 붙은 버튼이 멀게 느껴짐 — 플랫폼별로 padding을 다르게 적용한다.
 */
expect val PlatformTopBarEndPadding: Dp
