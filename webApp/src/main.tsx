import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/globals.css";

// Kotlin/JS shared 모듈이 globalThis.__AB_API_BASE_URL__ 을 읽어 ApiBaseUrl 로 사용한다.
// 빌드타임 환경변수 VITE_API_BASE_URL (Vercel/.env) 가 우선이고, 미설정 시 운영 Cloud Run 서버를 기본값으로.
// 로컬 백엔드 사용하려면 webApp/.env.development.local 에 VITE_API_BASE_URL=http://localhost:8000 추가.
declare global {
  interface Window {
    __AB_API_BASE_URL__?: string;
    __AB_SHOW_ERRORS__?: boolean;
  }
}
window.__AB_API_BASE_URL__ =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "https://auctionbridge-api-ak2wcqba2q-du.a.run.app";

// 사용자에게 에러 토스트/오버레이를 노출할지 결정. dev 빌드에서만 true → 분석 편의,
// prod 빌드(import.meta.env.PROD) 에서는 false → 조용한 실패 (스켈레톤/빈 상태 유지).
// shared 모듈의 PlatformModule.js.kt 가 globalThis.__AB_SHOW_ERRORS__ 를 읽어 AppFlags 로 주입.
window.__AB_SHOW_ERRORS__ = !import.meta.env.PROD;

// 디버깅: 실제로 셋업된 API URL 을 콘솔에 노출.
// eslint-disable-next-line no-console
console.info("[AuctionBridge] API base URL:", window.__AB_API_BASE_URL__);

// 디버깅: Ktor 가 호출하는 것과 동일한 엔드포인트를 fetch 로 직접 호출해
// 네트워크/CORS 자체에 문제가 있는지 즉시 확인. 콘솔에서 결과를 출력.
(() => {
  const u = `${window.__AB_API_BASE_URL__}/api/v1/auctions?min_lng=124&min_lat=33&max_lng=132&max_lat=39&asset_type=realty&property_category=apartment&limit=2`;
  // eslint-disable-next-line no-console
  console.info("[AuctionBridge] probing:", u);
  fetch(u, { headers: { accept: "application/json" } })
    .then(async (r) => {
      const text = await r.text();
      // eslint-disable-next-line no-console
      console.info(
        "[AuctionBridge] probe status=",
        r.status,
        "body[0..160]=",
        text.slice(0, 160),
      );
    })
    // eslint-disable-next-line no-console
    .catch((e) => console.error("[AuctionBridge] probe FAILED:", e));
})();

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

// StrictMode 일시 비활성 — Kotlin/JS bridge 의 dispose 가 dev 모드 더블 mount 와 충돌하여
// 첫 emit 이 사라지는 케이스 회피. 추후 hook 을 StrictMode-friendly 로 개선 후 복원.
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
