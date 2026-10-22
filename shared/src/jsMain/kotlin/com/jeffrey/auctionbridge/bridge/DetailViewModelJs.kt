@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.feature.detail.DetailViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

/**
 * DetailViewModel 의 JS 친화 래퍼.
 * subscribe 로 상태 변경 구독, retry 로 재시도, dispose 로 코루틴 정리.
 */
@JsExport
class DetailViewModelJs internal constructor(
    private val vm: DetailViewModel,
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    fun subscribe(onState: (DetailUiStateDto) -> Unit): () -> Unit {
        val job: Job = scope.launch {
            vm.uiState.collect { state -> onState(state.toDto()) }
        }
        return { job.cancel() }
    }

    fun retry() {
        vm.retry()
    }

    fun dispose() {
        scope.cancel()
    }
}
