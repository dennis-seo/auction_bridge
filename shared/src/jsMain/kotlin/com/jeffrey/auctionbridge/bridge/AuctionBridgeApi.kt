@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.core.di.initKoin
import com.jeffrey.auctionbridge.feature.main.MainViewModel
import com.jeffrey.auctionbridge.feature.map.MapViewModel
import org.koin.core.context.GlobalContext
import org.koin.core.parameter.parametersOf

/**
 * webApp (React) 가 import 하는 톱-레벨 진입점.
 *
 * 사용 예 (TS):
 *   import { createAuctionBridge } from "auctionbridge-shared";
 *   const bridge = createAuctionBridge();
 *   const vm = bridge.createMainViewModel();
 *   const unsub = vm.subscribe(state => render(state));
 *   ...
 *   vm.dispose(); unsub();
 */
@JsExport
class AuctionBridgeApi internal constructor() {

    fun createMainViewModel(): MainViewModelJs {
        val vm = GlobalContext.get().get<MainViewModel>()
        return MainViewModelJs(vm)
    }

    fun createMapViewModel(categoryId: String): MapViewModelJs {
        val vm = GlobalContext.get().get<MapViewModel> { parametersOf(categoryId) }
        return MapViewModelJs(vm)
    }
}

/**
 * 브리지 인스턴스 생성. Koin 은 idempotent 하게 초기화 (이미 시작됐으면 그대로).
 * 동시에 위치 prefetch 도 시작 — React 마운트보다 일찍 시작해 사용자 경험 단축.
 */
@JsExport
fun createAuctionBridge(): AuctionBridgeApi {
    if (GlobalContext.getOrNull() == null) {
        initKoin()
    }
    com.jeffrey.auctionbridge.core.platform.prefetchWebUserLocation()
    return AuctionBridgeApi()
}
