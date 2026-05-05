import { X } from "lucide-react";
import type { AuctionItemDto } from "../../shared/bridge";
import { Button } from "../ui/Button";

interface Props {
  item: AuctionItemDto;
  onClose: () => void;
  onDetail: () => void;
}

/**
 * 좌측 슬라이딩 패널 — 매물 클릭 시 표시되는 간략 정보.
 * Android 의 ModalBottomSheet 와 대비되는 web 의 측면 패널 UX.
 */
export function AuctionDetailPanel({ item, onClose, onDetail }: Props) {
  return (
    <aside className="pointer-events-auto absolute left-0 top-0 z-20 flex h-full w-[360px] flex-col bg-brand-deepNavy/95 px-6 py-5 shadow-[8px_0_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-brand-blue40/20 px-2.5 py-0.5 text-xs font-medium text-brand-blue80">
            {item.categoryDisplayName}
          </span>
        </div>
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="rounded-full p-1.5 text-white/60 hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <h2 className="mt-3 text-2xl font-bold text-white">
        {item.priceText}
        {item.failedCount > 0 && (
          <span className="ml-2 text-base font-medium text-white/60">
            · 유찰 {item.failedCount}회
          </span>
        )}
      </h2>

      <p className="mt-2 text-sm text-white/85">{item.address}</p>
      <p className="mt-1 text-xs text-white/50">전용 {item.areaSquareMeter}㎡</p>

      <div className="mt-auto pt-6">
        <Button onClick={onDetail} className="w-full" size="lg">
          상세 보기
        </Button>
      </div>
    </aside>
  );
}
