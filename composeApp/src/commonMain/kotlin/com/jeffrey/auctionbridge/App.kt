package com.jeffrey.auctionbridge

import androidx.compose.runtime.Composable
import com.jeffrey.auctionbridge.core.designsystem.AuctionBridgeTheme
import com.jeffrey.auctionbridge.core.navigation.AppNavigation

@Composable
fun App() {
    AuctionBridgeTheme {
        AppNavigation()
    }
}
