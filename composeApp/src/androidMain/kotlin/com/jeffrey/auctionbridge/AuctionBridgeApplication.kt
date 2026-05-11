package com.jeffrey.auctionbridge

import android.app.Application
import com.jeffrey.auctionbridge.core.config.AppFlags
import com.jeffrey.auctionbridge.core.di.initKoin
import com.kakao.vectormap.KakaoMapSdk
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.loadKoinModules
import org.koin.dsl.module

class AuctionBridgeApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        KakaoMapSdk.init(this, BuildConfig.KAKAO_NATIVE_APP_KEY)
        initKoin {
            androidLogger()
            androidContext(this@AuctionBridgeApplication)
        }
        // shared 모듈은 BuildConfig 직접 접근이 불가하므로 androidApp 진입 시
        // BuildConfig.DEBUG 로 AppFlags 를 override — debug 빌드에서 에러 토스트 노출.
        loadKoinModules(
            module {
                single<AppFlags> { AppFlags(showErrors = BuildConfig.DEBUG) }
            },
        )
    }
}
