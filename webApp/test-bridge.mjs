// Diagnostic: Node.js 에서 직접 bridge 로드 시 발생하는 에러 추출
import { createAuctionBridge } from "auctionbridge-shared";

console.log("[test] step 1 — module loaded");

try {
  const bridge = createAuctionBridge();
  console.log("[test] step 2 — bridge created:", typeof bridge);

  const vm = bridge.createMainViewModel();
  console.log("[test] step 3 — vm created:", typeof vm);

  const unsub = vm.subscribe((state) => {
    console.log("[test] step 4 — state emitted:", JSON.stringify({
      isLoggedIn: state.isLoggedIn,
      categoryCount: state.categories.length,
      firstCategory: state.categories[0]?.displayName,
    }));
  });

  // 1초 후 종료
  setTimeout(() => {
    unsub();
    vm.dispose();
    console.log("[test] step 5 — disposed");
    process.exit(0);
  }, 1000);
} catch (e) {
  console.error("[test] FAILED:", e);
  console.error(e.stack);
  process.exit(1);
}
