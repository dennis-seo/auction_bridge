import { useCallback, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMapScreen } from "../shared/hooks";
import { KakaoMap, type KakaoCluster, type KakaoMarker } from "../components/map/KakaoMap";
import { AuctionDetailPanel } from "../components/map/AuctionDetailPanel";
import { MapControls } from "../components/map/MapControls";
import { MapSearchBar } from "../components/map/MapSearchBar";

const CATEGORY_TITLES: Record<string, string> = {
  apartment: "아파트 지도",
  car: "자동차 지도",
  officetel: "오피스텔 지도",
  house: "주택 지도",
  store: "상가 지도",
  land: "토지 지도",
};

export function MapPage() {
  const params = useParams();
  const categoryId = params.categoryId ?? "apartment";
  const navigate = useNavigate();
  const { vm, state } = useMapScreen(categoryId);

  const moveRef = useRef<((lat: number, lng: number, level: number, animate: boolean) => void) | null>(null);

  // KakaoMap 의 onReady 가 호출되면 imperative move 함수를 보관 + VM 에 controller 연결
  const handleReady = useCallback(
    (move: (lat: number, lng: number, level: number, animate: boolean) => void) => {
      moveRef.current = move;
      vm?.onMapReady(move);
    },
    [vm],
  );

  const markers = useMemo<KakaoMarker[]>(() => {
    if (!state || state.clusterMode) return [];
    return state.items.map((it) => ({
      id: it.id,
      latitude: it.latitude,
      longitude: it.longitude,
      categoryLabel: it.categoryDisplayName,
      priceLabel: it.priceText,
      subInfo: it.markerSubInfo,
    }));
  }, [state]);

  const clusters = useMemo<KakaoCluster[]>(() => {
    if (!state || !state.clusterMode) return [];
    return state.clusters.map((c) => ({
      cityKey: c.cityKey,
      latitude: c.centerLat,
      longitude: c.centerLng,
      count: c.itemCount,
    }));
  }, [state]);

  // 초기 카메라는 첫 state 가 들어오기 전엔 성남시청 + level 5 로 가정 (state.kakaoLevel 도 동일)
  const initialCenter = useMemo(
    () => ({ lat: state?.centerLat ?? 37.4202, lng: state?.centerLng ?? 127.1268 }),
    // 첫 mount 시점의 값만 사용 — 이후 변화는 imperative move 로 처리
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const initialKakaoLevel = useMemo(
    () => (state?.kakaoLevel && state.kakaoLevel > 0 ? state.kakaoLevel : 5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (!state || !vm) {
    return (
      <div className="grid h-screen place-items-center bg-brand-ink text-white/70">
        지도 준비 중…
      </div>
    );
  }

  const title = CATEGORY_TITLES[categoryId] ?? "지도";

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-brand-ink">
      <KakaoMap
        initialCenter={initialCenter}
        initialKakaoLevel={initialKakaoLevel}
        markers={markers}
        clusters={clusters}
        onMarkerClick={(id) => vm.onMarkerClick(id)}
        onClusterClick={(cityKey) => vm.onClusterClick(cityKey)}
        onZoomChanged={(level) => vm.onMapZoomChanged(level)}
        onReady={handleReady}
      />

      <MapSearchBar title={title} onBack={() => navigate("/")} />

      {state.selectedItem && (
        <AuctionDetailPanel
          item={state.selectedItem}
          onClose={() => vm.clearSelection()}
          onDetail={() => navigate(`/detail/${state.selectedItem!.id}`)}
        />
      )}

      <MapControls
        onMyLocation={() => vm.onMyLocationClick()}
        onZoomIn={() => vm.onZoomIn()}
        onZoomOut={() => vm.onZoomOut()}
      />
    </div>
  );
}
