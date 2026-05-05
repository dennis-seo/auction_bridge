// shared (Kotlin/JS) 의 export 들을 React 측에서 import 할 진입점.
// 이 파일은 단순 re-export — 직접 모듈 경로 import 보다 한 번 추상화해
// shared 의 빌드 결과물 위치가 바뀌어도 webApp 전체가 깨지지 않도록 한다.

export {
  createAuctionBridge,
  type AuctionBridgeApi,
  type MainViewModelJs,
  type MainUiStateDto,
  type CategoryInfoDto,
  type MapViewModelJs,
  type MapUiStateDto,
  type AuctionItemDto,
} from "auctionbridge-shared";

import { createAuctionBridge } from "auctionbridge-shared";

// 앱 전체에서 단일 인스턴스 — Koin 은 idempotent 하지만 bridge 객체도 싱글톤화.
let _bridge: ReturnType<typeof createAuctionBridge> | null = null;
export function getBridge() {
  if (!_bridge) _bridge = createAuctionBridge();
  return _bridge;
}
