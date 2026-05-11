package com.jeffrey.auctionbridge.feature.map

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import com.jeffrey.auctionbridge.core.platform.RequestLocationPermissionOnce
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.feature.map.components.AuctionMiniCard
import com.jeffrey.auctionbridge.feature.map.components.KakaoMapView
import com.jeffrey.auctionbridge.feature.map.components.MapControlsOverlay
import com.jeffrey.auctionbridge.feature.map.components.MapSearchBarOverlay
import com.jeffrey.auctionbridge.feature.map.markerSubInfo
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
            AuctionCategory.VILLA -> "빌라/연립 지도"
            AuctionCategory.CAR -> "자동차 지도"
            AuctionCategory.OFFICE_TEL -> "오피스텔 지도"
            AuctionCategory.HOUSE -> "주택 지도"
            AuctionCategory.STORE -> "상가 지도"
            AuctionCategory.LAND -> "토지 지도"
            null -> "지도"
        }
    }

    val markers = remember(uiState.items, uiState.clusterMode) {
        if (uiState.clusterMode) {
            emptyList()
        } else {
            uiState.items.map { item ->
                MapMarker(
                    id = item.id,
                    position = LatLng(item.latitude, item.longitude),
                    categoryLabel = item.category.displayName,
                    priceLabel = item.priceText,
                    subInfo = item.markerSubInfo(),
                )
            }
        }
    }
    val clusters = remember(uiState.clusters, uiState.clusterMode) {
        if (uiState.clusterMode) uiState.clusters else emptyList()
    }

    RequestLocationPermissionOnce { granted ->
        if (granted) viewModel.onLocationPermissionGranted()
    }

    Box(modifier = Modifier.fillMaxSize()) {
        KakaoMapView(
            modifier = Modifier.fillMaxSize(),
            cameraState = uiState.cameraState,
            markers = markers,
            clusters = clusters,
            onMarkerClick = { marker -> viewModel.onMarkerClick(marker.id) },
            onClusterClick = viewModel::onClusterClick,
            onZoomChanged = viewModel::onMapZoomChanged,
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

        AnimatedVisibility(
            visible = uiState.errorMessage != null,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(end = 16.dp, bottom = 24.dp)
                .widthIn(max = 360.dp),
        ) {
            uiState.errorMessage?.let { msg ->
                Row(
                    modifier = Modifier
                        .background(
                            color = Color(0xD94B0A14),
                            shape = RoundedCornerShape(12.dp),
                        )
                        .border(
                            width = 1.dp,
                            color = Color(0x66F87171),
                            shape = RoundedCornerShape(12.dp),
                        )
                        .padding(PaddingValues(horizontal = 14.dp, vertical = 12.dp)),
                    verticalAlignment = Alignment.Top,
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    Text(text = "⚠️", color = Color.White)
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "매물 불러오기 실패",
                            color = Color(0xFFFCA5A5),
                            style = MaterialTheme.typography.labelMedium,
                        )
                        Text(
                            text = msg,
                            color = Color.White,
                            style = MaterialTheme.typography.bodySmall,
                            modifier = Modifier.padding(top = 4.dp),
                        )
                    }
                    Text(
                        text = "×",
                        color = Color.White.copy(alpha = 0.7f),
                        style = MaterialTheme.typography.titleMedium,
                        modifier = Modifier.clickable { viewModel.dismissError() },
                    )
                }
            }
        }

        AnimatedVisibility(
            visible = uiState.isLoadingItems,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier.align(Alignment.Center),
        ) {
            Row(
                modifier = Modifier
                    .background(
                        color = Color(0xD91B2A3F),
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(PaddingValues(horizontal = 20.dp, vertical = 14.dp)),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                CircularProgressIndicator(
                    modifier = Modifier.size(20.dp),
                    color = Color.White,
                    strokeWidth = 2.dp,
                )
                Text(
                    text = "매물 불러오는 중…",
                    color = Color.White,
                    style = MaterialTheme.typography.bodyMedium,
                )
            }
        }
    }
}
