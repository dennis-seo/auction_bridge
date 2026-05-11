import { useEffect, useState } from "react";
import {
  getBridge,
  type MainViewModelJs,
  type MainUiStateDto,
  type MapViewModelJs,
  type MapUiStateDto,
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
