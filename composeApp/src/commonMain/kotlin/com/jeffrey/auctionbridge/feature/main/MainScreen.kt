package com.jeffrey.auctionbridge.feature.main

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.ui.Alignment
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.jeffrey.auctionbridge.core.designsystem.SlateGray
import com.jeffrey.auctionbridge.feature.main.components.BentoCategoryGrid
import com.jeffrey.auctionbridge.feature.main.components.MainTopBar
import org.koin.compose.viewmodel.koinViewModel

@Composable
fun MainScreen(
    onCategoryClick: (categoryId: String) -> Unit,
    viewModel: MainViewModel = koinViewModel(),
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val snackbarHostState = remember { SnackbarHostState() }

    LaunchedEffect(uiState.transientMessage) {
        uiState.transientMessage?.let {
            snackbarHostState.showSnackbar(it)
            viewModel.consumeMessage()
        }
    }

    Scaffold(
        topBar = {
            MainTopBar(
                isLoggedIn = uiState.isLoggedIn,
                userName = uiState.userName,
                onLoginToggle = viewModel::toggleLogin,
            )
        },
        snackbarHost = { SnackbarHost(snackbarHostState) },
        containerColor = MaterialTheme.colorScheme.background,
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize(),
            contentAlignment = Alignment.TopCenter,
        ) {
            Column(
                modifier = Modifier
                    .widthIn(max = 1080.dp)
                    .fillMaxWidth()
                    .fillMaxHeight(),
            ) {
                Spacer(Modifier.height(8.dp))
                Text(
                    text = if (uiState.isLoggedIn) "안녕하세요, ${uiState.userName ?: ""}님"
                           else "어떤 자산을 살펴볼까요?",
                    color = MaterialTheme.colorScheme.onBackground,
                    fontWeight = FontWeight.Bold,
                    fontSize = 22.sp,
                    modifier = Modifier.padding(horizontal = 20.dp, vertical = 4.dp),
                )
                Text(
                    text = "초보자도 쉽게 보는 경공매 정보",
                    color = SlateGray,
                    fontSize = 13.sp,
                    modifier = Modifier.padding(horizontal = 20.dp, vertical = 2.dp),
                )
                Spacer(Modifier.height(12.dp))
                BentoCategoryGrid(
                    categories = uiState.categories,
                    onClick = { item ->
                        if (item.isEnabled) {
                            onCategoryClick(item.category.id)
                        } else {
                            viewModel.onDisabledCategoryClick(item.displayName)
                        }
                    },
                )
            }
        }
    }
}
