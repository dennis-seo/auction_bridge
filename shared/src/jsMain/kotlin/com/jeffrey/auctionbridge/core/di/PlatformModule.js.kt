package com.jeffrey.auctionbridge.core.di

import com.jeffrey.auctionbridge.core.config.AppFlags
import com.jeffrey.auctionbridge.core.network.ApiBaseUrl
import com.jeffrey.auctionbridge.core.platform.LocationProvider
import com.jeffrey.auctionbridge.core.platform.WebLocationProvider
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<LocationProvider> { WebLocationProvider() }
    single { ApiBaseUrl(resolveApiBaseUrl()) }
    single { AppFlags(showErrors = resolveShowErrors()) }
}

/**
 * 브라우저 globalThis 에 주입된 `__AB_API_BASE_URL__` 을 읽는다.
 * webApp main.tsx 가 빌드타임 [import.meta.env.VITE_API_BASE_URL] 값을 globalThis 에 셋업.
 *
 * 미주입 시 운영 Cloud Run 서버를 기본값으로 사용 — 별도 환경설정 없이도 dev/prod 양쪽에서 실데이터 노출.
 * 로컬 백엔드를 띄워 테스트하려면 `webApp/.env.development.local` 에
 * `VITE_API_BASE_URL=http://localhost:8000` 을 추가해 override.
 */
private const val DEFAULT_API_BASE_URL = "https://auctionbridge-api-ak2wcqba2q-du.a.run.app"

private fun resolveApiBaseUrl(): String {
    val raw = readGlobalApiBaseUrl()
    return if (raw.isNullOrBlank()) DEFAULT_API_BASE_URL else raw
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

/**
 * 사용자에게 에러를 노출할지 여부 — webApp main.tsx 가 빌드타임 [import.meta.env.PROD] 의
 * 반대 값을 `globalThis.__AB_SHOW_ERRORS__` 로 셋업 (dev=true, prod=false).
 *
 * 미주입(아무도 안 채웠을 때) 시 보수적으로 false — 운영 안전 기본값.
 */
private fun resolveShowErrors(): Boolean = readGlobalShowErrors() ?: false

@Suppress("UnsafeCastFromDynamic")
private fun readGlobalShowErrors(): Boolean? =
    js(
        """
        (function () {
            try {
                if (typeof globalThis !== 'undefined' && typeof globalThis.__AB_SHOW_ERRORS__ !== 'undefined') {
                    return Boolean(globalThis.__AB_SHOW_ERRORS__);
                }
            } catch (e) {}
            return null;
        })()
        """,
    ) as Boolean?
