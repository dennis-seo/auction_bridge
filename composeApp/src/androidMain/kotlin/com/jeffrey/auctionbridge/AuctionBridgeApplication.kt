package com.jeffrey.auctionbridge

import android.app.Application
import com.jeffrey.auctionbridge.core.di.initKoin
import com.kakao.vectormap.KakaoMapSdk
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger

class AuctionBridgeApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        KakaoMapSdk.init(this, BuildConfig.KAKAO_NATIVE_APP_KEY)
        initKoin {
            androidLogger()
            androidContext(this@AuctionBridgeApplication)
        }
    }
}
