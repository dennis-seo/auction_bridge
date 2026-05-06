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
 * 서버 연동 시 thumbnail / 감정가 / 최저가 / 마감일이 함께 표시된다.
 */
export function AuctionDetailPanel({ item, onClose, onDetail }: Props) {
  const hasMeta = !!(item.appraisalText || item.minBidText || item.bidEndShort);

  return (
    <aside className="pointer-events-auto absolute left-0 top-0 z-20 flex h-full w-[360px] flex-col bg-brand-deepNavy/95 px-6 py-5 shadow-[8px_0_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-brand-blue40/20 px-2.5 py-0.5 text-xs font-medium text-brand-blue80">
            {item.categoryDisplayName}
          </span>
          {item.statusLabel && (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/70">
              {item.statusLabel}
            </span>
          )}
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

      {item.thumbnailUrl && (
        <img
          src={item.thumbnailUrl}
          alt={item.address}
          className="mt-3 h-36 w-full rounded-lg object-cover"
          loading="lazy"
        />
      )}

      <h2 className="mt-3 text-2xl font-bold text-white">
        {item.priceText}
        {item.failedCount > 0 && (
          <span className="ml-2 text-base font-medium text-white/60">
            · 유찰 {item.failedCount}회
          </span>
        )}
      </h2>

      <p className="mt-2 text-sm text-white/85">{item.address}</p>

      {hasMeta && (
        <dl className="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-white/5 p-3">
          {item.appraisalText && (
            <div>
              <dt className="text-[11px] text-white/55">감정가</dt>
              <dd className="text-sm font-semibold text-white">{item.appraisalText}</dd>
            </div>
          )}
          {item.minBidText && (
            <div>
              <dt className="text-[11px] text-white/55">최저가</dt>
              <dd className="text-sm font-semibold text-white">{item.minBidText}</dd>
            </div>
          )}
          {item.bidEndShort && (
            <div>
              <dt className="text-[11px] text-white/55">마감</dt>
              <dd className="text-sm font-semibold text-white">{item.bidEndShort}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="mt-auto pt-6">
        <Button onClick={onDetail} className="w-full" size="lg">
          상세 보기
        </Button>
      </div>
    </aside>
  );
}
