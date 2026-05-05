package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.platform.AndroidLocationProvider
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import org.koin.android.ext.koin.androidContext
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { AndroidLocationProvider(androidContext()) }
}
