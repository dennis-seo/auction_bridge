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
  /** 마감일/유찰 등 보조 정보. 없으면 마커가 2줄로 표시. */
  subInfo?: string | null;
}

export interface KakaoCluster {
  /** 시(市) 단위 그룹 키 — 클릭 콜백에 그대로 전달된다. */
  cityKey: string;
  latitude: number;
  longitude: number;
  /** 묶인 매물 개수. 말풍선 안에 표시. */
  count: number;
}

interface Props {
  initialCenter: { lat: number; lng: number };
  initialKakaoLevel: number;
  /** 개별 매물 마커 — clusterMode=false 일 때만 그려진다. */
  markers: KakaoMarker[];
  /** 시 단위 클러스터 — clusterMode=true 일 때만 그려진다. */
  clusters?: KakaoCluster[];
  onMarkerClick: (id: string) => void;
  /** 클러스터 말풍선 클릭 — cityKey 를 VM 에 전달. */
  onClusterClick?: (cityKey: string) => void;
  /** 사용자가 휠/핀치 등으로 직접 줌을 바꿨을 때 호출 (VM cameraState 동기화용). */
  onZoomChanged?: (kakaoLevel: number) => void;
  /** map 이 ready 되었을 때 호출. 인자로 카메라 이동 함수 (lat, lng, kakaoLevel, animate) 가 들어옴. */
  onReady: (move: (lat: number, lng: number, kakaoLevel: number, animate: boolean) => void) => void;
}

/**
 * Kakao Maps JS SDK 를 React 컴포넌트로 래핑.
 * - SDK 동적 로드 + map 인스턴스 생성
 * - markers / clusters prop 변경 시 CustomOverlay diff (id 기준)
 * - onReady 로 imperative 카메라 이동 함수를 상위에 전달
 * - zoom_changed 이벤트를 onZoomChanged 로 위임 (VM 의 클러스터 모드 판정에 사용)
 */
export function KakaoMap({
  initialCenter,
  initialKakaoLevel,
  markers,
  clusters,
  onMarkerClick,
  onClusterClick,
  onZoomChanged,
  onReady,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<KakaoMapInstance | null>(null);
  // 개별 매물 overlays — id 키
  const markerOverlaysRef = useRef<Map<string, KakaoCustomOverlay>>(new Map());
  // 클러스터 overlays — cityKey 키
  const clusterOverlaysRef = useRef<Map<string, KakaoCustomOverlay>>(new Map());
  // 핸들러를 ref 로 보관 — 이벤트 콜백이 latest closure 를 항상 보도록
  const onMarkerClickRef = useRef(onMarkerClick);
  onMarkerClickRef.current = onMarkerClick;
  const onClusterClickRef = useRef(onClusterClick);
  onClusterClickRef.current = onClusterClick;
  const onZoomChangedRef = useRef(onZoomChanged);
  onZoomChangedRef.current = onZoomChanged;

  const [error, setError] = useState<string | null>(null);

  // 1) SDK 로드 + map 생성 + zoom_changed 리스너 (한 번)
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
        // 사용자 줌 변경 → VM 동기화
        k.event.addListener(map, "zoom_changed", () => {
          const level = map.getLevel();
          onZoomChangedRef.current?.(level);
        });
      })
      .catch((e: Error) => {
        // eslint-disable-next-line no-console
        console.error("[KakaoMap] failed to load", e);
        setError(e.message);
      });

    return () => {
      disposed = true;
      markerOverlaysRef.current.forEach((ov) => ov.setMap(null));
      markerOverlaysRef.current.clear();
      clusterOverlaysRef.current.forEach((ov) => ov.setMap(null));
      clusterOverlaysRef.current.clear();
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
    for (const [id, ov] of markerOverlaysRef.current.entries()) {
      if (!newIds.has(id)) {
        ov.setMap(null);
        markerOverlaysRef.current.delete(id);
      }
    }
    for (const m of markers) {
      if (markerOverlaysRef.current.has(m.id)) continue;
      const div = document.createElement("div");
      div.className = "auction-bubble";
      const cat = document.createElement("div");
      cat.className = "auction-bubble-category";
      cat.textContent = m.categoryLabel;
      const price = document.createElement("div");
      price.className = "auction-bubble-price";
      price.textContent = m.priceLabel;
      div.append(cat, price);
      if (m.subInfo) {
        const sub = document.createElement("div");
        sub.className = "auction-bubble-sub";
        sub.textContent = m.subInfo;
        div.append(sub);
      }
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
      markerOverlaysRef.current.set(m.id, overlay);
    }
  }, [markers]);

  // 3) clusters diff — cityKey 기준 추가/제거 (개수가 바뀌면 한번 제거 후 재생성)
  useEffect(() => {
    const map = mapRef.current;
    const k = window.kakao?.maps;
    if (!map || !k) return;
    const list = clusters ?? [];

    // 키와 카운트가 함께 일치하는지 확인 — 카운트가 바뀌면 새로 그린다 (DOM textContent 가 더 단순해짐)
    const newKeys = new Set(list.map((c) => `${c.cityKey}#${c.count}`));
    for (const [composite, ov] of clusterOverlaysRef.current.entries()) {
      if (!newKeys.has(composite)) {
        ov.setMap(null);
        clusterOverlaysRef.current.delete(composite);
      }
    }
    for (const c of list) {
      const composite = `${c.cityKey}#${c.count}`;
      if (clusterOverlaysRef.current.has(composite)) continue;
      const wrap = document.createElement("div");
      wrap.className = "auction-cluster";
      const city = document.createElement("div");
      city.className = "auction-cluster-city";
      city.textContent = c.cityKey;
      const cnt = document.createElement("div");
      cnt.className = "auction-cluster-count";
      cnt.textContent = String(c.count);
      wrap.append(city, cnt);
      wrap.style.cursor = "pointer";
      wrap.addEventListener("click", () => onClusterClickRef.current?.(c.cityKey));

      const overlay = new k.CustomOverlay({
        map,
        position: new k.LatLng(c.latitude, c.longitude),
        content: wrap,
        yAnchor: 0.5,
        xAnchor: 0.5,
        clickable: true,
      });
      clusterOverlaysRef.current.set(composite, overlay);
    }
  }, [clusters]);

  if (error) {
    const isDev = import.meta.env.DEV;
    const keySource = isDev
      ? "webApp/.env.development.local 의 VITE_KAKAO_JS_KEY"
      : "Vercel Project Settings → Environment Variables 의 VITE_KAKAO_JS_KEY";
    const domain = isDev
      ? "http://localhost:8080"
      : (typeof window !== "undefined" ? window.location.origin : "운영 도메인");
    return (
      <div className="grid h-full place-items-center bg-brand-ink p-6 text-center text-white/85">
        <div>
          <h2 className="text-lg font-semibold">지도를 불러오지 못했습니다</h2>
          <p className="mt-2 text-sm text-white/60">{error}</p>
          <p className="mt-4 text-xs text-white/40">
            {keySource} 와<br />
            카카오 디벨로퍼스 → JavaScript 키의 도메인 등록 ({domain}) 을 확인하세요.
          </p>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="h-full w-full" />;
}
