package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.IosLocationProvider
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { IosLocationProvider() }
    single { ApiBaseUrl("http://localhost:8000") }
}
