import type { SearchItemDto } from "../../shared/bridge";
import {
  discountPct,
  formatDateYmd,
  formatKrwKo,
  timeRemainingLabel,
} from "../../shared/format";
import { categoryLabel } from "./searchOptions";

interface Props {
  item: SearchItemDto;
  /** "ongoing" | "results" — results 모드는 D-day 대신 낙찰가/낙찰가율 강조. */
  tabId: string;
  onClick: () => void;
}

/**
 * 검색 목록 카드 — AuctionDetailPanel 의 AuctionListCard 를 승격·일반화.
 *  - 진행중: 감정가/최저가 행 + 할인 배지 + D-day + 유찰/재산구분 태그
 *  - 매각결과: D-day 숨김, 낙찰가(파란 강조) + 낙찰가율 배지
 */
export function SearchListCard({ item, tabId, onClick }: Props) {
  const isResults = tabId === "results";
  const catLabel = categoryLabel(item.propertyCategory);
  const apprKrw = formatKrwKo(item.appraisalPrice) ?? item.appraisalText;
  const minKrw = formatKrwKo(item.minBidPrice) ?? item.minBidText;
  const saleKrw = formatKrwKo(item.salePrice);
  const pct = discountPct(item.appraisalPrice, item.minBidPrice);
  const bidEndYmd = formatDateYmd(item.bidEndAt);
  const dday = item.ddayLabel ?? timeRemainingLabel(item.bidEndAt);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="cursor-pointer overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/5 transition hover:bg-white/[0.08] hover:ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue40"
    >
      <div className="flex gap-3 p-3.5">
        <div className="min-w-0 flex-1">
          {/* 상단: 카테고리 + 상태 */}
          <div className="flex flex-wrap items-center gap-1.5">
            {catLabel && (
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] font-medium text-white/85">
                {catLabel}
              </span>
            )}
            {item.statusLabel && (
              <span
                className={
                  isResults
                    ? "rounded bg-brand-blue40/25 px-1.5 py-0.5 text-[11px] font-medium text-brand-blue80"
                    : "rounded bg-orange-500/20 px-1.5 py-0.5 text-[11px] font-medium text-orange-200"
                }
              >
                {item.statusLabel}
              </span>
            )}
            {item.areaText && (
              <span className="text-[11px] text-white/50">{item.areaText}</span>
            )}
          </div>

          {/* 물건명 + 주소 */}
          <p
            className="mt-2 line-clamp-2 break-keep text-[13px] font-medium leading-snug text-white"
            title={item.title ?? undefined}
          >
            {item.title ?? item.address ?? "물건명 정보 없음"}
          </p>
          {item.title && item.address && (
            <p className="mt-0.5 line-clamp-1 text-xs text-white/50" title={item.address}>
              {item.address}
            </p>
          )}
        </div>

        {/* 썸네일 — 우상단 */}
        {item.thumbnailUrl ? (
          <img
            src={item.thumbnailUrl}
            alt=""
            className="h-[72px] w-[72px] flex-shrink-0 rounded-lg object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-[72px] w-[72px] flex-shrink-0 place-items-center rounded-lg bg-white/5 text-[10px] text-white/30">
            NO IMAGE
          </div>
        )}
      </div>

      {/* 가격 영역 */}
      <div className="space-y-1 px-3.5 pb-2.5 text-sm">
        {apprKrw && (
          <div className="flex items-baseline gap-2">
            <span className="w-5 flex-shrink-0 text-[11px] text-white/55">감</span>
            <span className="text-white/80">{apprKrw}</span>
          </div>
        )}
        {minKrw && (
          <div className="flex items-baseline gap-2">
            <span className="w-5 flex-shrink-0 text-[11px] text-red-300">최</span>
            <span
              className={
                isResults
                  ? "text-white/80"
                  : "text-base font-semibold text-red-300"
              }
            >
              {minKrw}
            </span>
            {!isResults && pct != null && (
              <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[11px] font-semibold text-red-300">
                ↓{pct}%
              </span>
            )}
          </div>
        )}
        {/* 매각결과: 낙찰가 강조 행 */}
        {isResults && saleKrw && (
          <div className="flex items-baseline gap-2">
            <span className="w-5 flex-shrink-0 text-[11px] text-brand-blue80">낙</span>
            <span className="text-base font-semibold text-brand-blue80">{saleKrw}</span>
            {item.saleRatioText && (
              <span className="rounded bg-brand-blue40/25 px-1.5 py-0.5 text-[11px] font-semibold text-brand-blue80">
                {item.saleRatioText}
              </span>
            )}
          </div>
        )}
      </div>

      {/* 하단 배지 행 */}
      <div className="flex flex-wrap items-center gap-1.5 px-3.5 pb-2.5">
        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[11px] font-medium text-emerald-300">
          {item.prptDivNm ? `공매 ${item.prptDivNm}` : "공매"}
        </span>
        {item.failedCount > 0 && (
          <span className="text-[11px] font-medium text-rose-300">
            #유찰{item.failedCount}회
          </span>
        )}
      </div>

      {/* footer: 마감(개찰)일 · D-day */}
      {(bidEndYmd || (!isResults && dday)) && (
        <div className="flex items-center justify-between gap-2 border-t border-white/5 px-3.5 py-2 text-[11px] text-white/55">
          <span>
            {isResults ? "개찰일" : "입찰 마감"}
            {bidEndYmd && ` ${bidEndYmd}`}
          </span>
          {!isResults && dday && (
            <span className="rounded bg-rose-500/15 px-1.5 py-0.5 font-semibold text-rose-300">
              {dday}
            </span>
          )}
        </div>
      )}
    </article>
  );
}
