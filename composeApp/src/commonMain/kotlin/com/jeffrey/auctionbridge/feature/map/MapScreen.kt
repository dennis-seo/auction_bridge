package com.jeffrey.auctionbridge.feature.map

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import com.jeffrey.auctionbridge.core.platform.RequestLocationPermissionOnce
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.feature.map.components.AuctionMiniCard
import com.jeffrey.auctionbridge.feature.map.components.KakaoMapView
import com.jeffrey.auctionbridge.feature.map.components.MapControlsOverlay
import com.jeffrey.auctionbridge.feature.map.components.MapSearchBarOverlay
import com.jeffrey.auctionbridge.feature.map.state.MapMarker
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.parameter.parametersOf

@Composable
fun MapScreen(
    categoryId: String,
    onBack: () -> Unit,
    onItemClick: (itemId: String) -> Unit,
    viewModel: MapViewModel = koinViewModel { parametersOf(categoryId) },
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    val title = remember(categoryId) {
        when (AuctionCategory.fromId(categoryId)) {
            AuctionCategory.APARTMENT -> "아파트 지도"
            AuctionCategory.CAR -> "자동차 지도"
            AuctionCategory.OFFICE_TEL -> "오피스텔 지도"
            AuctionCategory.HOUSE -> "주택 지도"
            AuctionCategory.STORE -> "상가 지도"
            AuctionCategory.LAND -> "토지 지도"
            null -> "지도"
        }
    }

    val markers = remember(uiState.items) {
        uiState.items.map { item ->
            MapMarker(
                id = item.id,
                position = LatLng(item.latitude, item.longitude),
                categoryLabel = item.category.displayName,
                priceLabel = if (item.failedCount > 0) {
                    "${item.priceText} / 유찰${item.failedCount}"
                } else {
                    item.priceText
                },
            )
        }
    }

    RequestLocationPermissionOnce { granted ->
        if (granted) viewModel.onLocationPermissionGranted()
    }

    Box(modifier = Modifier.fillMaxSize()) {
        KakaoMapView(
            modifier = Modifier.fillMaxSize(),
            cameraState = uiState.cameraState,
            markers = markers,
            onMarkerClick = { marker -> viewModel.onMarkerClick(marker.id) },
            onMapReady = viewModel::onMapReady,
        )

        MapSearchBarOverlay(
            title = title,
            onBack = onBack,
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 16.dp, start = 16.dp, end = 16.dp),
        )

        MapControlsOverlay(
            onMyLocationClick = viewModel::onMyLocationClick,
            onZoomIn = viewModel::onZoomIn,
            onZoomOut = viewModel::onZoomOut,
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(bottom = 32.dp, end = 16.dp),
        )

        AnimatedVisibility(
            visible = uiState.selectedItem != null,
            enter = slideInVertically(initialOffsetY = { it }),
            exit = slideOutVertically(targetOffsetY = { it }),
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(start = 16.dp, end = 16.dp, bottom = 16.dp),
        ) {
            uiState.selectedItem?.let { item ->
                AuctionMiniCard(
                    item = item,
                    onDetailClick = onItemClick,
                    onClose = viewModel::clearSelection,
                )
            }
        }
    }
}
