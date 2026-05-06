import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Vite 는 기본적으로 VITE_ prefix 가 있는 env 만 client 번들에 노출하지만,
  // Vercel 등 운영 환경에서 KAKAO_JS_KEY 라는 이름으로 등록된 경우도 지원하기 위해
  // 빌드타임에 import.meta.env.VITE_KAKAO_JS_KEY 식별자를 정적 치환한다.
  // 우선순위: KAKAO_JS_KEY > VITE_KAKAO_JS_KEY.
  const env = loadEnv(mode, process.cwd(), "");
  const kakaoJsKey = env.KAKAO_JS_KEY ?? env.VITE_KAKAO_JS_KEY ?? "";

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_KAKAO_JS_KEY": JSON.stringify(kakaoJsKey),
    },
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
  };
});
