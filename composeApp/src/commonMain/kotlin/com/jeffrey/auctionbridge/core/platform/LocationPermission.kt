package com.jeffrey.auctionbridge.core.platform

import androidx.compose.runtime.Composable

/**
 * 화면 진입 시 1회 위치 권한을 요청한다.
 *
 * - Android: ActivityResultContracts 로 시스템 다이얼로그 노출
 * - Web: navigator.geolocation 자체가 호출 시점에 브라우저 권한 다이얼로그를 띄우므로
 *        사전 요청 단계가 필요 없음 → 즉시 onResult(true) 호출
 * - iOS: Phase 1 미지원 → onResult(true)
 */
@Composable
expect fun RequestLocationPermissionOnce(onResult: (granted: Boolean) -> Unit)
