package com.jeffrey.auctionbridge.core.config

/**
 * 빌드/실행 환경에 따른 런타임 플래그 묶음.
 *
 * Koin 으로 단일 인스턴스 주입. 플랫폼별 PlatformModule 이 환경에서 값을 읽어 채운다.
 *
 * @param showErrors 사용자에게 보이는 에러 토스트/오버레이를 노출할지 여부.
 *                   dev 빌드 = true (분석 편의), 운영 빌드 = false (조용한 실패).
 *                   ViewModel 들이 이 값을 검사하여 errorMessage 를 채울지 결정.
 */
class AppFlags(
    val showErrors: Boolean,
)
