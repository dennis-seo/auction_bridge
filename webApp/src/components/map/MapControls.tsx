import { Crosshair, Minus, Plus } from "lucide-react";

interface Props {
  onMyLocation: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

/**
 * 다음 맵 스타일 우하단 3-버튼 스택.
 * 상단: 내 위치 (단독 카드)
 * 하단: + / − (한 카드, 가운데 divider)
 */
export function MapControls({ onMyLocation, onZoomIn, onZoomOut }: Props) {
  const cardCls =
    "rounded-lg bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)] border border-zinc-200";
  const btnCls =
    "flex h-11 w-11 items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors";

  return (
    <div className="absolute bottom-8 right-4 z-10 flex flex-col gap-2 pointer-events-auto">
      <div className={cardCls}>
        <button
          type="button"
          aria-label="내 위치로 이동"
          onClick={onMyLocation}
          className={`${btnCls} rounded-lg`}
        >
          <Crosshair className="h-5 w-5" />
        </button>
      </div>
      <div className={`${cardCls} flex flex-col`}>
        <button
          type="button"
          aria-label="확대"
          onClick={onZoomIn}
          className={`${btnCls} rounded-t-lg`}
        >
          <Plus className="h-5 w-5" />
        </button>
        <div className="h-px w-full bg-zinc-200" />
        <button
          type="button"
          aria-label="축소"
          onClick={onZoomOut}
          className={`${btnCls} rounded-b-lg`}
        >
          <Minus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
