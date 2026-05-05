// Compose Multiplatform Web (WasmJs) 용 webpack-dev-server 설정.
//
// - port 5173: React webApp 가 주력(8080) 으로 옮겨가서 구 wasmJs 빌드는 5173 으로 이전
//              (필요 시 카카오 디벨로퍼스에 5173 도 등록해야 동작)
// - historyApiFallback: SPA 라우트(/map/apartment 등) 새로고침 시 index.html 폴백
config.devServer = Object.assign({}, config.devServer, {
    port: 5173,
    historyApiFallback: true,
});
