import { useCallback, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMapScreen } from "../shared/hooks";
import { KakaoMap, type KakaoCluster, type KakaoMarker } from "../components/map/KakaoMap";
import { AuctionDetailPanel } from "../components/map/AuctionDetailPanel";
import { MapControls } from "../components/map/MapControls";
import { MapSearchBar } from "../components/map/MapSearchBar";
import { ErrorToast } from "../components/ErrorToast";

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
    // 동일 좌표 매물은 한 그룹으로 묶어 하나의 마커. count=1 이면 단건 마커.
    return state.markerGroups.map((g) => {
      const head = g.items[0];
      return {
        id: g.groupKey,
        latitude: g.latitude,
        longitude: g.longitude,
        // count 가 2 이상일 때 KakaoMap 컴포넌트가 "{categoryLabel} ({count}건)" 으로 표시.
        categoryLabel: head.categoryDisplayName,
        priceLabel: head.priceText,
        // 다건일 땐 매물별로 마감일/유찰이 다를 수 있으니 sub 정보는 숨김.
        subInfo: g.count > 1 ? null : head.markerSubInfo,
        count: g.count,
      };
    });
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
        onMarkerClick={(groupKey) => vm.onGroupClick(groupKey)}
        onClusterClick={(cityKey) => vm.onClusterClick(cityKey)}
        onZoomChanged={(level) => vm.onMapZoomChanged(level)}
        onReady={handleReady}
      />

      <MapSearchBar title={title} onBack={() => navigate("/")} />

      {state.selectedGroup && state.selectedGroup.count > 0 && (
        <AuctionDetailPanel
          items={Array.from(state.selectedGroup.items)}
          onClose={() => vm.clearSelection()}
          onDetail={(itemId) => navigate(`/detail/${itemId}`)}
        />
      )}

      <MapControls
        onMyLocation={() => vm.onMyLocationClick()}
        onZoomIn={() => vm.onZoomIn()}
        onZoomOut={() => vm.onZoomOut()}
      />

      {state.isLoadingItems && (
        <div
          role="status"
          aria-live="polite"
          aria-label="매물 불러오는 중"
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
        >
          <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-brand-deepNavy/85 px-5 py-3.5 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            <span className="text-sm font-medium">매물 불러오는 중…</span>
          </div>
        </div>
      )}

      {state.errorMessage && (
        <ErrorToast
          title="매물 불러오기 실패"
          message={state.errorMessage}
          onDismiss={() => vm.dismissError()}
        />
      )}
    </div>
  );
}
