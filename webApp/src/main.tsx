import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/globals.css";

// Kotlin/JS shared 모듈이 globalThis.__AB_API_BASE_URL__ 을 읽어 ApiBaseUrl 로 사용한다.
// 빌드타임 환경변수 VITE_API_BASE_URL (Vercel 등) 미설정 시 dev 기본값.
declare global {
  interface Window {
    __AB_API_BASE_URL__?: string;
  }
}
window.__AB_API_BASE_URL__ =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "http://localhost:8000";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

// StrictMode 일시 비활성 — Kotlin/JS bridge 의 dispose 가 dev 모드 더블 mount 와 충돌하여
// 첫 emit 이 사라지는 케이스 회피. 추후 hook 을 StrictMode-friendly 로 개선 후 복원.
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
