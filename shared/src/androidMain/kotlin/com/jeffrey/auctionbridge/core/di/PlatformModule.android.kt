package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.AndroidLocationProvider
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import org.koin.android.ext.koin.androidContext
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { AndroidLocationProvider(androidContext()) }
    // Android emulator 에서 host 머신의 localhost 는 10.0.2.2 로 매핑된다.
    // 실기기 테스트 시에는 BuildConfig 등으로 외부 URL 주입 필요.
    single { ApiBaseUrl("http://10.0.2.2:8000") }
}
