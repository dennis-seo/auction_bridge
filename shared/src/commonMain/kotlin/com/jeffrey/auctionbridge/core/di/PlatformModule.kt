package com.jeffrey.auctionbridge.core.di

import org.koin.core.module.Module

/**
 * 플랫폼별 의존성(Context, navigator 등) 이 필요한 컴포넌트를 등록.
 * androidMain / wasmJsMain / iosMain 에서 actual val 로 제공한다.
 */
expect val platformModule: Module
