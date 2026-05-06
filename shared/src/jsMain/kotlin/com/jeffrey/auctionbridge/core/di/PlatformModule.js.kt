package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.core.platform.WebLocationProvider
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { WebLocationProvider() }
    single { ApiBaseUrl(resolveApiBaseUrl()) }
}

/**
 * 브라우저 globalThis 에 주입된 `__AB_API_BASE_URL__` 을 읽는다.
 * webApp main.tsx 가 빌드타임 [import.meta.env.VITE_API_BASE_URL] 값을 globalThis 에 셋업.
 *
 * 미주입 시 dev 환경 기본값 (`http://localhost:8000`).
 */
private const val DEV_DEFAULT = "http://localhost:8000"

private fun resolveApiBaseUrl(): String {
    val raw = readGlobalApiBaseUrl()
    return if (raw.isNullOrBlank()) DEV_DEFAULT else raw
}

@Suppress("UnsafeCastFromDynamic")
private fun readGlobalApiBaseUrl(): String? =
    js(
        """
        (function () {
            try {
                if (typeof globalThis !== 'undefined' && globalThis.__AB_API_BASE_URL__) {
                    return String(globalThis.__AB_API_BASE_URL__);
                }
            } catch (e) {}
            return null;
        })()
        """,
    ) as String?
