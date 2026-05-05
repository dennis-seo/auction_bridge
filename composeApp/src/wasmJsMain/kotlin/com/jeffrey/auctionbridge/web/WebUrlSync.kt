package com.jeffrey.auctionbridge.web

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.navigation.NavBackStackEntry
import androidx.navigation.NavHostController
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.core.navigation.DetailRoute
import com.jeffrey.auctionbridge.core.navigation.MainRoute
import com.jeffrey.auctionbridge.core.navigation.MapRoute
import kotlinx.browser.document
import kotlinx.browser.window

/**
 * Web 전용: NavController ↔ window.history 양방향 동기화.
 *
 * - 앱 내부 navigate → currentBackStackEntryFlow 변경 → window.history.pushState
 * - 브라우저 ←/→ (popstate) → window.location.pathname 파싱 → navController.navigate
 * - 첫 composition 에서 현재 URL 이 / 가 아니면 deep-link 로 navigate
 * - 라우트 변경 시 document.title 갱신
 *
 * commonMain 의 Navigation Compose 코드를 변경하지 않고 wasmJs 진입점에서만 mount.
 */
@Composable
fun WebUrlSync(navController: NavHostController) {
    // 1) 첫 composition: 현재 URL 이 / 가 아니면 deep-link navigate
    LaunchedEffect(Unit) {
        val initialPath = window.location.pathname
        val initialRoute = pathToRoute(initialPath)
        consoleLog("[WebUrlSync] init pathname=$initialPath route=${initialRoute?.let { it::class.simpleName }}")
        if (initialRoute != null && initialRoute !is MainRoute) {
            try {
                navController.navigate(initialRoute) { launchSingleTop = true }
                consoleLog("[WebUrlSync] deep-link navigate ok")
            } catch (e: Throwable) {
                consoleWarn("[WebUrlSync] deep-link navigate failed: ${e.message}")
            }
        }
        document.title = pageTitleFor(initialRoute ?: MainRoute)
    }

    // 2) 앱 내부 navigate 감지 → URL pushState + title 갱신
    LaunchedEffect(navController) {
        navController.currentBackStackEntryFlow.collect { entry ->
            val route = parseEntry(entry) ?: return@collect
            val newPath = routeToPath(route)
            if (window.location.pathname != newPath) {
                window.history.pushState(data = null, title = "", url = newPath)
            }
            document.title = pageTitleFor(route)
        }
    }

    // 3) popstate 리스너: 브라우저 ←/→
    DisposableEffect(navController) {
        val handler = installPopstateListener {
            val path = window.location.pathname
            val target = pathToRoute(path) ?: MainRoute
            try {
                navController.navigate(target) { launchSingleTop = true }
            } catch (e: Throwable) {
                consoleWarn("[WebUrlSync] popstate navigate failed: ${e.message}")
            }
        }
        onDispose { uninstallPopstateListener(handler) }
    }
}

@JsFun("(msg) => { console.log(msg); }")
private external fun consoleLog(msg: String)

@JsFun("(msg) => { console.warn(msg); }")
private external fun consoleWarn(msg: String)

@JsFun(
    """(kotlinHandler) => {
        const wrapped = () => kotlinHandler();
        window.addEventListener('popstate', wrapped);
        return wrapped;
    }""",
)
private external fun installPopstateListener(handler: () -> Unit): JsAny

@JsFun("(wrapped) => { window.removeEventListener('popstate', wrapped); }")
private external fun uninstallPopstateListener(wrapped: JsAny)

// ---------- Route ↔ Path 매핑 ----------

private const val PATH_MAIN = "/"
private const val PATH_MAP_PREFIX = "/map/"
private const val PATH_DETAIL_PREFIX = "/detail/"

internal fun routeToPath(route: Any): String = when (route) {
    is MainRoute -> PATH_MAIN
    is MapRoute -> PATH_MAP_PREFIX + route.categoryId
    is DetailRoute -> PATH_DETAIL_PREFIX + route.itemId
    else -> PATH_MAIN
}

internal fun pathToRoute(path: String): Any? {
    val normalized = path.ifEmpty { PATH_MAIN }
    return when {
        normalized == PATH_MAIN -> MainRoute
        normalized.startsWith(PATH_MAP_PREFIX) -> {
            val cat = normalized.removePrefix(PATH_MAP_PREFIX).trim('/')
            if (cat.isEmpty()) null else MapRoute(categoryId = cat)
        }
        normalized.startsWith(PATH_DETAIL_PREFIX) -> {
            val id = normalized.removePrefix(PATH_DETAIL_PREFIX).trim('/')
            if (id.isEmpty()) null else DetailRoute(itemId = id)
        }
        else -> null
    }
}

/**
 * NavBackStackEntry → 도메인 라우트 객체 복원.
 *
 * Navigation Compose 의 type-safe 라우트는 destination.route 가 KClass 풀네임 + arg
 * placeholder 형태로 직렬화됨 (예: ".../MapRoute/{categoryId}"). class simple name 으로 분기.
 */
internal fun parseEntry(entry: NavBackStackEntry): Any? {
    val routeStr = entry.destination.route ?: return null
    val args = entry.arguments
    return when {
        routeStr.contains("MainRoute") -> MainRoute
        routeStr.contains("MapRoute") -> MapRoute(
            categoryId = args?.getString("categoryId").orEmpty(),
        )
        routeStr.contains("DetailRoute") -> DetailRoute(
            itemId = args?.getString("itemId").orEmpty(),
        )
        else -> null
    }
}

// ---------- 타이틀 ----------

private fun pageTitleFor(route: Any): String = when (route) {
    is MainRoute -> "Auction Bridge"
    is MapRoute -> {
        val name = AuctionCategory.fromId(route.categoryId)?.displayName ?: "지도"
        "Auction Bridge — $name 지도"
    }
    is DetailRoute -> "Auction Bridge — 매물 ${route.itemId}"
    else -> "Auction Bridge"
}

