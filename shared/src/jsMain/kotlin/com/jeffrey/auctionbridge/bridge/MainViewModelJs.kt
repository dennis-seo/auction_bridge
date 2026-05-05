@file:OptIn(ExperimentalJsExport::class)

package com.jeffrey.auctionbridge.bridge

import com.jeffrey.auctionbridge.feature.main.MainViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

/**
 * MainViewModel 의 JS 친화 래퍼.
 * subscribe 로 상태 변경을 구독하고, action 메서드들로 사용자 입력 전달.
 */
@JsExport
class MainViewModelJs internal constructor(
    private val vm: MainViewModel,
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    /** 상태 변경 구독. 반환된 함수를 호출하면 unsubscribe. */
    fun subscribe(onState: (MainUiStateDto) -> Unit): () -> Unit {
        val job: Job = scope.launch {
            vm.uiState.collect { state -> onState(state.toDto()) }
        }
        return { job.cancel() }
    }

    fun toggleLogin() {
        vm.toggleLogin()
    }

    fun onDisabledCategoryClick(displayName: String) {
        vm.onDisabledCategoryClick(displayName)
    }

    fun consumeMessage() {
        vm.consumeMessage()
    }

    /** React 컴포넌트 unmount 시 호출 — 코루틴 정리. */
    fun dispose() {
        scope.cancel()
    }
}
