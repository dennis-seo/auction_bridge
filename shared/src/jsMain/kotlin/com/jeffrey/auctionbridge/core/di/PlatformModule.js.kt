package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.core.platform.WebLocationProvider
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { WebLocationProvider() }
}
