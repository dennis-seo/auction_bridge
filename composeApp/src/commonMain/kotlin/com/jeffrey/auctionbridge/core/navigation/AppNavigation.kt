package com.jeffrey.auctionbridge.core.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.toRoute
import com.jeffrey.auctionbridge.feature.detail.DetailScreen
import com.jeffrey.auctionbridge.feature.main.MainScreen
import com.jeffrey.auctionbridge.feature.map.MapScreen
import com.jeffrey.auctionbridge.feature.search.SearchScreen

@Composable
fun AppNavigation(
    navController: NavHostController = rememberNavController(),
) {
    NavHost(navController = navController, startDestination = MainRoute) {
        composable<MainRoute> {
            MainScreen(
                onCategoryClick = { categoryId ->
                    navController.navigate(MapRoute(categoryId = categoryId))
                },
                onSearchClick = {
                    navController.navigate(SearchRoute())
                },
            )
        }
        composable<SearchRoute> { backStackEntry ->
            val route: SearchRoute = backStackEntry.toRoute()
            SearchScreen(
                categoryId = route.categoryId,
                initialTab = route.tab,
                onBack = { navController.popBackStack() },
                onItemClick = { itemId ->
                    navController.navigate(DetailRoute(itemId = itemId))
                },
                onMapClick = {
                    // 목록 → 지도: 현재 Search 를 스택에서 제거(replace 시맨틱).
                    // 지도↔목록 왕복 시 백스택 누적을 막고, 홈(Main) 진입 항목은 유지한다.
                    navController.navigate(MapRoute(categoryId = route.categoryId ?: "apartment")) {
                        launchSingleTop = true
                        popUpTo<SearchRoute> { inclusive = true }
                    }
                },
            )
        }
        composable<MapRoute> { backStackEntry ->
            val route: MapRoute = backStackEntry.toRoute()
            MapScreen(
                categoryId = route.categoryId,
                onBack = { navController.popBackStack() },
                onItemClick = { itemId ->
                    navController.navigate(DetailRoute(itemId = itemId))
                },
                onListClick = {
                    // 지도 → 목록: 현재 Map 을 스택에서 제거(replace 시맨틱) — 위 onMapClick 과 대칭.
                    navController.navigate(SearchRoute(categoryId = route.categoryId)) {
                        launchSingleTop = true
                        popUpTo<MapRoute> { inclusive = true }
                    }
                },
            )
        }
        composable<DetailRoute> { backStackEntry ->
            val route: DetailRoute = backStackEntry.toRoute()
            DetailScreen(
                itemId = route.itemId,
                onBack = { navController.popBackStack() },
            )
        }
    }
}
