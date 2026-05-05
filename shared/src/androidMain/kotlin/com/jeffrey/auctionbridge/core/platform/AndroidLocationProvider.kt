package com.jeffrey.auctionbridge.core.platform

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import androidx.core.content.ContextCompat
import com.google.android.gms.location.LocationServices
import com.jeffrey.auctionbridge.feature.map.controller.LatLng
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume

internal class AndroidLocationProvider(
    private val context: Context,
) : LocationProvider {

    private val client by lazy { LocationServices.getFusedLocationProviderClient(context) }

    override suspend fun current(): LatLng? {
        if (!hasFineLocationPermission()) return null
        return suspendCancellableCoroutine { cont ->
            try {
                client.lastLocation
                    .addOnSuccessListener { loc ->
                        if (loc != null) cont.resume(LatLng(loc.latitude, loc.longitude))
                        else cont.resume(null)
                    }
                    .addOnFailureListener { cont.resume(null) }
                    .addOnCanceledListener { cont.resume(null) }
            } catch (_: SecurityException) {
                cont.resume(null)
            }
        }
    }

    private fun hasFineLocationPermission(): Boolean =
        ContextCompat.checkSelfPermission(
            context,
            Manifest.permission.ACCESS_FINE_LOCATION,
        ) == PackageManager.PERMISSION_GRANTED
}
