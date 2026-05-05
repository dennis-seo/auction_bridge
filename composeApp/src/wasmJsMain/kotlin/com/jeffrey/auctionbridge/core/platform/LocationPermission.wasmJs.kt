package com.jeffrey.auctionbridge.core.platform

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect

/**
 * Web 은 사전 권한 요청 단계가 없다 — navigator.geolocation 호출 시
 * 브라우저가 직접 다이얼로그를 띄우므로 즉시 true 로 통과시킨다.
 */
@Composable
actual fun RequestLocationPermissionOnce(onResult: (granted: Boolean) -> Unit) {
    LaunchedEffect(Unit) { onResult(true) }
}
