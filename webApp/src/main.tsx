import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/globals.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

// StrictMode 일시 비활성 — Kotlin/JS bridge 의 dispose 가 dev 모드 더블 mount 와 충돌하여
// 첫 emit 이 사라지는 케이스 회피. 추후 hook 을 StrictMode-friendly 로 개선 후 복원.
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
