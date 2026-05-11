package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.config.AppFlags
import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.AndroidLocationProvider
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import org.koin.android.ext.koin.androidContext
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { AndroidLocationProvider(androidContext()) }
    // 운영 Cloud Run 서버를 기본값으로 — 별도 BuildConfig 주입 없이 실기기/에뮬레이터 양쪽에서 실데이터.
    // 로컬 백엔드 테스트가 필요하면 BuildConfig 또는 빌드 variant 로 "http://10.0.2.2:8000" 주입.
    single { ApiBaseUrl("https://auctionbridge-api-ak2wcqba2q-du.a.run.app") }
    // 에러 노출 여부 — 보수적으로 false (운영 기본값). debug 빌드에서 토스트를 보고 싶으면
    // composeApp 의 Application.onCreate 에서 `loadKoinModules(module { single { AppFlags(BuildConfig.DEBUG) } })`
    // 로 덮어쓰기. 현재는 shared 모듈에서 BuildConfig 직접 접근이 불가하여 hardcoded.
    single { AppFlags(showErrors = false) }
}
