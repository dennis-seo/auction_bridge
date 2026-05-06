// Kakao Maps JS SDK 동적 로더.
// 빌드타임 환경변수 VITE_KAKAO_JS_KEY 를 사용해 <script> 태그를 한 번만 주입.
// - dev: webApp/.env.development.local
// - prod (Vercel): Project Settings → Environment Variables
// autoload=false 로 받아오기 → kakao.maps.load() 가 resolve 되면 SDK 사용 가능.

declare global {
  interface Window {
    kakao?: {
      maps?: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMapInstance;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        CustomOverlay: new (options: {
          map?: KakaoMapInstance | null;
          position: KakaoLatLng;
          content: string | HTMLElement;
          xAnchor?: number;
          yAnchor?: number;
          clickable?: boolean;
        }) => KakaoCustomOverlay;
        event: {
          addListener: (
            target: KakaoMapInstance,
            type: string,
            handler: () => void,
          ) => void;
        };
      };
    };
  }
}

export interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

export interface KakaoMapInstance {
  setCenter(latLng: KakaoLatLng): void;
  setLevel(level: number): void;
  getCenter(): KakaoLatLng;
  getLevel(): number;
  panTo(latLng: KakaoLatLng): void;
  relayout(): void;
}

export interface KakaoCustomOverlay {
  setMap(map: KakaoMapInstance | null): void;
  setPosition(latLng: KakaoLatLng): void;
}

let loadPromise: Promise<void> | null = null;

export function loadKakaoMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("not in browser"));
  if (window.kakao?.maps?.Map) return Promise.resolve();
  if (loadPromise) return loadPromise;

  const key = (import.meta.env.VITE_KAKAO_JS_KEY as string | undefined) ?? "";
  if (!key) {
    const hint = import.meta.env.DEV
      ? "webApp/.env.development.local 에 VITE_KAKAO_JS_KEY=... 추가 후 dev 서버 재시작"
      : "Vercel Project Settings → Environment Variables 에 VITE_KAKAO_JS_KEY 등록 후 재배포";
    return Promise.reject(
      new Error(`VITE_KAKAO_JS_KEY 가 설정되지 않았습니다. ${hint}`),
    );
  }

  loadPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById("kakao-sdk");
    if (existing) {
      // 이미 script 가 있다 — autoload=false 라 kakao.maps.load 만 다시 부른다
      window.kakao?.maps?.load(() => resolve());
      return;
    }
    const script = document.createElement("script");
    script.id = "kakao-sdk";
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    script.onload = () => {
      if (!window.kakao?.maps?.load) {
        reject(new Error("Kakao SDK loaded but maps.load is missing"));
        return;
      }
      window.kakao.maps.load(() => resolve());
    };
    script.onerror = () => reject(new Error("Failed to load Kakao Maps SDK"));
    document.head.appendChild(script);
  });

  return loadPromise;
}
