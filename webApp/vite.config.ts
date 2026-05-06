import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Ktor JS client 가 Node WebSocket polyfill 'ws' 를 dynamic import 하지만
      // 브라우저 fetch 경로에서는 도달하지 않는다. 빈 모듈로 alias 해 번들 실패 방지.
      ws: path.resolve(__dirname, "./src/shared/empty-module.js"),
    },
  },
  server: {
    port: 8080,
    open: false,
  },
  optimizeDeps: {
    // Kotlin/JS dist 의 mjs 파일은 dev 모드에서 그대로 import
    exclude: ["auctionbridge-shared"],
  },
  build: {
    rollupOptions: {
      // 'ws' 는 브라우저에서 미사용 — alias 로 stub 처리되어도 안전망 차원에서 external 명시
      external: [/^node:/],
    },
  },
});
