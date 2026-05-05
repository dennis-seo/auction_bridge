package com.jeffrey.auctionbridge.core.platform

import android.Manifest
import android.content.pm.PackageManager
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat

@Composable
actual fun RequestLocationPermissionOnce(onResult: (granted: Boolean) -> Unit) {
    val context = LocalContext.current
    val alreadyGranted = remember {
        ContextCompat.checkSelfPermission(
            context,
            Manifest.permission.ACCESS_FINE_LOCATION,
        ) == PackageManager.PERMISSION_GRANTED
    }
    val launcher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission(),
        onResult = onResult,
    )
    LaunchedEffect(Unit) {
        if (alreadyGranted) onResult(true)
        else launcher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
    }
}
