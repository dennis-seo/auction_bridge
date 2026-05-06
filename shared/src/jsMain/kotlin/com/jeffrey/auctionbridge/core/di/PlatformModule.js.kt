package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.core.platform.WebLocationProvider
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { WebLocationProvider() }
    // 브라우저는 host 머신을 그대로 localhost 로 본다. 배포 시 빌드타임 치환 또는 별도 config.
    single { ApiBaseUrl("http://localhost:8000") }
}
