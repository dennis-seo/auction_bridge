import { useEffect, useRef, useState } from "react";
import {
  loadKakaoMaps,
  type KakaoCustomOverlay,
  type KakaoMapInstance,
} from "../../shared/kakaoLoader";

export interface KakaoMarker {
  id: string;
  latitude: number;
  longitude: number;
  categoryLabel: string;
  priceLabel: string;
}

interface Props {
  initialCenter: { lat: number; lng: number };
  initialKakaoLevel: number;
  markers: KakaoMarker[];
  onMarkerClick: (id: string) => void;
  /** map 이 ready 되었을 때 호출. 인자로 카메라 이동 함수 (lat, lng, kakaoLevel, animate) 가 들어옴. */
  onReady: (move: (lat: number, lng: number, kakaoLevel: number, animate: boolean) => void) => void;
}

/**
 * Kakao Maps JS SDK 를 React 컴포넌트로 래핑.
 * - SDK 동적 로드 + map 인스턴스 생성
 * - markers prop 변경 시 CustomOverlay diff (id 기준)
 * - onReady 로 imperative 카메라 이동 함수를 상위에 전달
 */
export function KakaoMap({ initialCenter, initialKakaoLevel, markers, onMarkerClick, onReady }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<KakaoMapInstance | null>(null);
  // id → overlay 캐시 (markers diff 용)
  const overlaysRef = useRef<Map<string, KakaoCustomOverlay>>(new Map());
  // 핸들러를 ref 로 보관 — 클릭 콜백이 latest closure 를 항상 보도록
  const onMarkerClickRef = useRef(onMarkerClick);
  onMarkerClickRef.current = onMarkerClick;

  const [error, setError] = useState<string | null>(null);

  // 1) SDK 로드 + map 생성 (한 번)
  useEffect(() => {
    let disposed = false;
    loadKakaoMaps()
      .then(() => {
        if (disposed) return;
        const k = window.kakao?.maps;
        const container = containerRef.current;
        if (!k || !container) return;
        const center = new k.LatLng(initialCenter.lat, initialCenter.lng);
        const map = new k.Map(container, {
          center,
          level: initialKakaoLevel > 0 ? initialKakaoLevel : 5,
        });
        mapRef.current = map;
        // imperative move 함수 노출
        onReady((lat, lng, kakaoLevel, animate) => {
          const target = new k.LatLng(lat, lng);
          if (kakaoLevel > 0) map.setLevel(kakaoLevel);
          if (animate) map.panTo(target);
          else map.setCenter(target);
        });
      })
      .catch((e: Error) => {
        // eslint-disable-next-line no-console
        console.error("[KakaoMap] failed to load", e);
        setError(e.message);
      });

    return () => {
      disposed = true;
      // overlays 정리
      overlaysRef.current.forEach((ov) => ov.setMap(null));
      overlaysRef.current.clear();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) markers diff — id 기준 추가/제거
  useEffect(() => {
    const map = mapRef.current;
    const k = window.kakao?.maps;
    if (!map || !k) return;

    const newIds = new Set(markers.map((m) => m.id));
    // 제거
    for (const [id, ov] of overlaysRef.current.entries()) {
      if (!newIds.has(id)) {
        ov.setMap(null);
        overlaysRef.current.delete(id);
      }
    }
    // 추가
    for (const m of markers) {
      if (overlaysRef.current.has(m.id)) continue;
      const div = document.createElement("div");
      div.className = "auction-bubble";
      const cat = document.createElement("div");
      cat.className = "auction-bubble-category";
      cat.textContent = m.categoryLabel;
      const price = document.createElement("div");
      price.className = "auction-bubble-price";
      price.textContent = m.priceLabel;
      div.append(cat, price);
      div.style.cursor = "pointer";
      div.addEventListener("click", () => onMarkerClickRef.current(m.id));

      const overlay = new k.CustomOverlay({
        map,
        position: new k.LatLng(m.latitude, m.longitude),
        content: div,
        yAnchor: 1.0,
        xAnchor: 0.5,
        clickable: true,
      });
      overlaysRef.current.set(m.id, overlay);
    }
  }, [markers]);

  if (error) {
    return (
      <div className="grid h-full place-items-center bg-brand-ink p-6 text-center text-white/85">
        <div>
          <h2 className="text-lg font-semibold">지도를 불러오지 못했습니다</h2>
          <p className="mt-2 text-sm text-white/60">{error}</p>
          <p className="mt-4 text-xs text-white/40">
            webApp/.env.development.local 의 VITE_KAKAO_JS_KEY 와<br />
            카카오 디벨로퍼스 → JavaScript 키의 도메인 등록 (http://localhost:8080)
            을 확인하세요.
          </p>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="h-full w-full" />;
}
