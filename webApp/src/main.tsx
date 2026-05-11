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
  }
}
window.__AB_API_BASE_URL__ =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "https://auctionbridge-api-ak2wcqba2q-du.a.run.app";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

// StrictMode 일시 비활성 — Kotlin/JS bridge 의 dispose 가 dev 모드 더블 mount 와 충돌하여
// 첫 emit 이 사라지는 케이스 회피. 추후 hook 을 StrictMode-friendly 로 개선 후 복원.
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
