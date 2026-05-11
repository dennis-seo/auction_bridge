import { X } from "lucide-react";
import type { AuctionItemDto } from "../../shared/bridge";
import {
  discountPct,
  formatDateYmd,
  formatKrwKo,
  timeRemainingLabel,
} from "../../shared/format";
import { Button } from "../ui/Button";

interface Props {
  /** 같은 좌표에 묶인 매물 1건 이상. 2건 이상이면 상단에 "{카테고리} (N건)" 헤더 + 스크롤 목록. */
  items: AuctionItemDto[];
  onClose: () => void;
  /** 상세 페이지로 이동 — 어느 매물의 상세인지 itemId 와 함께 전달. */
  onDetail: (itemId: string) => void;
}

/**
 * 좌측 슬라이딩 패널.
 * - 1건: 단일 카드 (예전 동작 유지)
 * - N건: 같은 좌표 매물 전체를 스크롤 가능한 카드 리스트로 표시
 */
export function AuctionDetailPanel({ items, onClose, onDetail }: Props) {
  if (items.length === 0) return null;
  const isMulti = items.length > 1;
  const header = items[0];

  return (
    <aside className="pointer-events-auto absolute left-0 top-0 z-20 flex h-full w-[360px] flex-col bg-brand-deepNavy/95 shadow-[8px_0_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
      <div className="flex items-start justify-between px-6 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-brand-blue40/20 px-2.5 py-0.5 text-xs font-medium text-brand-blue80">
            {isMulti
              ? `${header.categoryDisplayName} (${items.length}건)`
              : header.categoryDisplayName}
          </span>
          {!isMulti && header.statusLabel && (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/70">
              {header.statusLabel}
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

      {isMulti && (
        <p className="px-6 pb-2 text-xs text-white/55">{header.address}</p>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-5">
        {isMulti ? (
          <ul className="flex flex-col gap-3">
            {items.map((it) => (
              <li key={it.id}>
                <AuctionListCard item={it} onDetail={() => onDetail(it.id)} />
              </li>
            ))}
          </ul>
        ) : (
          <SingleAuctionView item={header} onDetail={() => onDetail(header.id)} />
        )}
      </div>
    </aside>
  );
}

function SingleAuctionView({
  item,
  onDetail,
}: {
  item: AuctionItemDto;
  onDetail: () => void;
}) {
  const hasMeta = !!(item.appraisalText || item.minBidText || item.bidEndShort);
  return (
    <div className="flex h-full flex-col">
      {item.thumbnailUrl && (
        <img
          src={item.thumbnailUrl}
          alt={item.address}
          className="h-36 w-full rounded-lg object-cover"
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
    </div>
  );
}

/**
 * N건 모드에서 사용되는 매물 카드 — 두 디자인의 장점 통합:
 *  - Design 1 의 강조 요소: cltr_mng_no, 할인 배지, 마감 카운트다운, 자산구분 태그
 *  - Design 2 의 정보 밀도: 풀 주소(단지+동+호수) 한 줄, "9억9500만원" 한국식 표기,
 *    하단 배지 행(공매 기타일반재산 / #유찰N회), 일자/상태 footer
 *
 * 서버 list 응답에 아직 안 들어온 필드(자산구분명/처분방식명/용도명/cltr_mng_no)는
 * placeholder/임시값으로 비워둔다. 서버 머지 후 매핑만 보충하면 자리 채워짐.
 */
function AuctionListCard({
  item,
  onDetail,
}: {
  item: AuctionItemDto;
  onDetail: () => void;
}) {
  // 그룹 내 매물들은 공통 주소를 panel 헤더에 한 번 노출하므로, 카드에서는 단지명+동+호수만 표시.
  // 원본 주소는 [상세보기] 페이지에서 확인.
  const unitLabel = item.buildingUnitLabel ?? item.title ?? null;
  const apprKrw = formatKrwKo(item.appraisalPrice);
  const minKrw = formatKrwKo(item.minBidPrice);
  const pct = discountPct(item.appraisalPrice, item.minBidPrice);
  const bidEndYmd = formatDateYmd(item.bidEndAt);
  const remaining = timeRemainingLabel(item.bidEndAt);

  return (
    <article className="overflow-hidden rounded-lg bg-white/5 transition hover:bg-white/[0.07]">
      <div className="flex gap-3 p-3">
        <div className="min-w-0 flex-1">
          {/* 상단: 카테고리 + (서버 머지 후) 처분방식 태그 */}
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] font-medium text-white/85">
              {item.categoryDisplayName}
            </span>
            {item.statusLabel && (
              <span className="rounded bg-orange-500/20 px-1.5 py-0.5 text-[11px] font-medium text-orange-200">
                {item.statusLabel}
              </span>
            )}
          </div>

          {/* 단지명 + 동 + 호수 — 공통 주소는 panel 헤더 + 상세보기 페이지에서 노출. */}
          <p
            className="mt-2 line-clamp-2 break-keep text-[13px] font-medium leading-snug text-white"
            title={unitLabel ?? undefined}
          >
            {unitLabel ?? "동/호수 정보 없음"}
          </p>
        </div>

        {/* 썸네일 — 우상단 */}
        {item.thumbnailUrl ? (
          <img
            src={item.thumbnailUrl}
            alt=""
            className="h-16 w-16 flex-shrink-0 rounded-md object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-16 w-16 flex-shrink-0 rounded-md bg-white/5" />
        )}
      </div>

      {/* 가격 영역 */}
      {(apprKrw || minKrw) && (
        <div className="space-y-0.5 px-3 pb-2 text-sm">
          {apprKrw && (
            <div className="flex items-baseline gap-2">
              <span className="w-5 text-[11px] text-white/55">감</span>
              <span className="text-white/80">{apprKrw}</span>
            </div>
          )}
          {minKrw && (
            <div className="flex items-baseline gap-2">
              <span className="w-5 text-[11px] text-red-300">최</span>
              <span className="text-base font-semibold text-red-300">{minKrw}</span>
              {pct != null && (
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[11px] font-semibold text-red-300">
                  ↓{pct}%
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* 하단 배지 행 */}
      <div className="flex flex-wrap items-center gap-1.5 px-3 pb-2">
        {/* TODO(server): 서버가 prpt_div_nm 을 list 응답에 추가하면 "공매 {prpt_div_nm}" 으로 교체. */}
        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[11px] font-medium text-emerald-300">
          공매
        </span>
        {item.failedCount > 0 && (
          <span className="text-[11px] font-medium text-rose-300">
            #유찰{item.failedCount}회
          </span>
        )}
      </div>

      {/* footer: 마감일 · 카운트다운 · cltr_mng_no */}
      <div className="flex items-center justify-between gap-2 border-t border-white/5 px-3 py-2 text-[11px] text-white/55">
        <div className="flex items-center gap-1.5">
          {bidEndYmd && <span>{bidEndYmd}</span>}
          {remaining && <span className="text-rose-300">· {remaining}</span>}
        </div>
        {/* TODO(server): cltr_mng_no 가 list 응답에 들어오면 여기에 표기. 현재는 내부 id 로 임시. */}
        <span className="font-mono text-white/40">#{item.id}</span>
      </div>

      <button
        type="button"
        onClick={onDetail}
        className="block w-full border-t border-white/5 bg-white/5 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10"
      >
        상세보기
      </button>
    </article>
  );
}
