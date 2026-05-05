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
