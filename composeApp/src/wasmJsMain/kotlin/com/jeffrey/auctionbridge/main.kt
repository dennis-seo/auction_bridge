package com.jeffrey.auctionbridge

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.ComposeViewport
import androidx.navigation.compose.rememberNavController
import com.jeffrey.auctionbridge.core.designsystem.AuctionBridgeTheme
import com.jeffrey.auctionbridge.core.di.initKoin
import com.jeffrey.auctionbridge.core.navigation.AppNavigation
import com.jeffrey.auctionbridge.core.platform.prefetchWebUserLocation
import com.jeffrey.auctionbridge.web.WebUrlSync
import kotlinx.browser.document

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    initKoin()
    // ComposeViewport 마운트와 병렬로 geolocation 시작 — MapScreen 이 결과를 요청할 시점엔
    // 이미 완료(혹은 거의 완료)된 상태로 사용 가능 → "현재 위치로 이동" 지연 단축.
    prefetchWebUserLocation()
    ComposeViewport(document.body!!) {
        // commonMain App() 와 동일한 구성에 wasmJs 만의 책임 (URL 동기화) 을 추가.
        AuctionBridgeTheme {
            val navController = rememberNavController()
            WebUrlSync(navController)
            AppNavigation(navController = navController)
        }
    }
}
