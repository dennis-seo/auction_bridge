import { useEffect, useState } from "react";
import {
  getBridge,
  type MainViewModelJs,
  type MainUiStateDto,
  type MapViewModelJs,
  type MapUiStateDto,
  type DetailViewModelJs,
  type DetailUiStateDto,
  type SearchViewModelJs,
  type SearchUiStateDto,
} from "./bridge";

/**
 * MainViewModel + 상태 미러링을 한 번에 처리하는 훅.
 *
 * 단일 useEffect 안에서 VM 생성/구독/dispose 를 묶어 처리 — React StrictMode 더블 mount
 * 시 cleanup → setup 흐름에서도 새 VM 이 안전하게 만들어지고 구독되도록.
 */
export function useMainScreen(): { vm: MainViewModelJs | null; state: MainUiStateDto | null } {
  const [vm, setVm] = useState<MainViewModelJs | null>(null);
  const [state, setState] = useState<MainUiStateDto | null>(null);

  useEffect(() => {
    const v = getBridge().createMainViewModel();
    setVm(v);
    const unsub = v.subscribe((s) => setState(s));
    return () => {
      unsub();
      v.dispose();
      setVm(null);
      setState(null);
    };
  }, []);

  return { vm, state };
}

/**
 * MapViewModel — categoryId 가 바뀌면 새 VM 인스턴스 생성.
 */
export function useMapScreen(categoryId: string): {
  vm: MapViewModelJs | null;
  state: MapUiStateDto | null;
} {
  const [vm, setVm] = useState<MapViewModelJs | null>(null);
  const [state, setState] = useState<MapUiStateDto | null>(null);

  useEffect(() => {
    const v = getBridge().createMapViewModel(categoryId);
    setVm(v);
    const unsub = v.subscribe((s) => setState(s));
    return () => {
      unsub();
      v.dispose();
      setVm(null);
      setState(null);
    };
  }, [categoryId]);

  return { vm, state };
}

/**
 * DetailViewModel — itemId 변경 시 새 VM 인스턴스.
 */
export function useDetailScreen(itemId: string): {
  vm: DetailViewModelJs | null;
  state: DetailUiStateDto | null;
} {
  const [vm, setVm] = useState<DetailViewModelJs | null>(null);
  const [state, setState] = useState<DetailUiStateDto | null>(null);

  useEffect(() => {
    const v = getBridge().createDetailViewModel(itemId);
    setVm(v);
    const unsub = v.subscribe((s) => setState(s));
    return () => {
      unsub();
      v.dispose();
      setVm(null);
      setState(null);
    };
  }, [itemId]);

  return { vm, state };
}

/**
 * SearchViewModel — 진입 시점의 categoryId/tab 으로 VM 생성.
 * 이후 탭 전환/필터 변경은 URL 이 아니라 vm 액션(selectTab/applyFilter)으로 처리 —
 * deps 가 바뀌면 VM 이 재생성되어 필터/스크롤 상태가 초기화되므로 초기값만 넘길 것.
 */
export function useSearchScreen(
  categoryId: string | null,
  tab: string,
): {
  vm: SearchViewModelJs | null;
  state: SearchUiStateDto | null;
} {
  const [vm, setVm] = useState<SearchViewModelJs | null>(null);
  const [state, setState] = useState<SearchUiStateDto | null>(null);

  useEffect(() => {
    const v = getBridge().createSearchViewModel(categoryId, tab);
    setVm(v);
    const unsub = v.subscribe((s) => setState(s));
    return () => {
      unsub();
      v.dispose();
      setVm(null);
      setState(null);
    };
  }, [categoryId, tab]);

  return { vm, state };
}
