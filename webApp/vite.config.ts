import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
});
