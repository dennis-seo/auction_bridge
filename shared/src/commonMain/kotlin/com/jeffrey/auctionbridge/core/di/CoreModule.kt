package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.data.MockAuctionRepository
import com.jeffrey.auctionbridge.core.data.RemoteAuctionRepository
import com.jeffrey.auctionbridge.core.domain.repository.AuctionRepository
import com.jeffrey.auctionbridge.core.network.AuctionApi
import com.jeffrey.auctionbridge.feature.main.MainViewModel
import com.jeffrey.auctionbridge.feature.map.MapViewModel
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

internal val coreModule = module {
    single { AuctionApi(baseUrl = get()) }
    singleOf(::MockAuctionRepository)
    single<AuctionRepository> { RemoteAuctionRepository(api = get(), mock = get()) }
}

internal val featureModule = module {
    // ViewModel 들은 factory 로 등록 — 각 호출마다 새 인스턴스.
    // Android 측 koinViewModel() 은 factory 를 ViewModelStoreOwner 캐시와 함께 사용 가능.
    // React 측 브리지는 createXxxViewModelJs() 팩토리에서 동일한 Koin factory 를 호출.
    factoryOf(::MainViewModel)
    factory { (categoryId: String) ->
        MapViewModel(
            categoryId = categoryId,
            auctionRepository = get(),
            locationProvider = get(),
        )
    }
}
