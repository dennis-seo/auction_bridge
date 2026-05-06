// Vite alias stub.
// Ktor JS client 의 일부 코드 경로가 Node 전용 'ws' (WebSocket polyfill) 를
// dynamic import 하는데, 브라우저에서는 native WebSocket 만 사용하므로 빈 모듈로 대체.
export default {};
