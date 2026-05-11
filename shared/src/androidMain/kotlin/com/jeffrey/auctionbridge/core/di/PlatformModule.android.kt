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
    // 에러 노출 여부 — release 안전 기본값 false. composeApp 의 AuctionBridgeApplication.onCreate
    // 에서 BuildConfig.DEBUG 로 override 하여 debug 빌드에서는 true 가 되도록 wiring 되어 있음.
    single { AppFlags(showErrors = false) }
}
