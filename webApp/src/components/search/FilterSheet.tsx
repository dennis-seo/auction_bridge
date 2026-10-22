import { useState, type ReactNode } from "react";
import { X } from "lucide-react";
import type { SearchFilterDto } from "../../shared/bridge";
import { Button } from "../ui/Button";
import {
  AREA_PRESETS,
  FAILED_PRESETS,
  FILTER_CATEGORIES,
  PRICE_PRESETS,
  SIDO_LIST,
} from "./searchOptions";

/** 필터 시트 [적용] 시 SearchPage 로 넘기는 편집 결과. vm.applyFilter 의 원시 파라미터와 1:1. */
export interface FilterDraft {
  regionSido: string | null;
  regionSigungu: string | null;
  categoryIds: string[];
  minPrice: number | null;
  maxPrice: number | null;
  minFailedCount: number | null;
  maxFailedCount: number | null;
  minAreaSqm: number | null;
  maxAreaSqm: number | null;
}

interface Props {
  /** 현재 적용된 필터 — 시트가 열릴 때 draft 초기값. */
  filter: SearchFilterDto;
  onApply: (draft: FilterDraft) => void;
  onClear: () => void;
  onClose: () => void;
}

/**
 * 필터 편집 시트 — 모바일은 하단 시트, sm 이상은 우측 패널.
 * 로컬 draft 로만 편집하고 [적용] 시 한 번에 vm.applyFilter 로 반영.
 * (열려 있는 동안에만 mount 되므로 filter → draft 동기화 effect 불필요)
 */
export function FilterSheet({ filter, onApply, onClear, onClose }: Props) {
  const [draft, setDraft] = useState<FilterDraft>(() => ({
    regionSido: filter.regionSido ?? null,
    regionSigungu: filter.regionSigungu ?? null,
    categoryIds: Array.from(filter.categoryIds),
    minPrice: filter.minPrice ?? null,
    maxPrice: filter.maxPrice ?? null,
    minFailedCount: filter.minFailedCount ?? null,
    maxFailedCount: filter.maxFailedCount ?? null,
    minAreaSqm: filter.minAreaSqm ?? null,
    maxAreaSqm: filter.maxAreaSqm ?? null,
  }));

  const toggleCategory = (id: string) =>
    setDraft((d) => ({
      ...d,
      categoryIds: d.categoryIds.includes(id)
        ? d.categoryIds.filter((c) => c !== id)
        : [...d.categoryIds, id],
    }));

  return (
    <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="검색 필터">
      {/* 배경 딤 */}
      <button
        type="button"
        aria-label="필터 닫기"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-[2px]"
      />

      {/* 시트 본체 — 모바일: 하단 시트 / sm+: 우측 패널 */}
      <section className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-2xl bg-brand-deepNavy shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.7)] sm:inset-x-auto sm:inset-y-0 sm:right-0 sm:max-h-none sm:w-[400px] sm:rounded-none sm:rounded-l-2xl sm:shadow-[-8px_0_40px_-12px_rgba(0,0,0,0.7)]">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-base font-semibold text-white">필터</h2>
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-5">
          {/* 지역 */}
          <FilterSection title="지역">
            <select
              aria-label="시/도 선택"
              value={draft.regionSido ?? ""}
              onChange={(e) =>
                setDraft((d) => ({
                  ...d,
                  regionSido: e.target.value || null,
                  // 시/도가 바뀌면 시/군/구는 무효 — 항상 초기화.
                  regionSigungu: null,
                }))
              }
              className="h-11 w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-3.5 text-sm text-white outline-none transition focus:border-brand-blue80/60 [&>option]:bg-brand-deepNavy"
            >
              <option value="">전체 지역</option>
              {SIDO_LIST.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </FilterSection>

          {/* 용도 */}
          <FilterSection title="용도">
            <div className="flex flex-wrap gap-2">
              {FILTER_CATEGORIES.map((c) => {
                const active = draft.categoryIds.includes(c.id);
                return (
                  <ChipButton
                    key={c.id}
                    active={active}
                    onClick={() => toggleCategory(c.id)}
                  >
                    {c.label}
                  </ChipButton>
                );
              })}
            </div>
          </FilterSection>

          {/* 최저가 */}
          <FilterSection title="최저 입찰가">
            <PresetRow
              presets={PRICE_PRESETS}
              min={draft.minPrice}
              max={draft.maxPrice}
              onSelect={(min, max) =>
                setDraft((d) => ({ ...d, minPrice: min, maxPrice: max }))
              }
            />
          </FilterSection>

          {/* 유찰 횟수 */}
          <FilterSection title="유찰 횟수">
            <PresetRow
              presets={FAILED_PRESETS}
              min={draft.minFailedCount}
              max={draft.maxFailedCount}
              onSelect={(min, max) =>
                setDraft((d) => ({ ...d, minFailedCount: min, maxFailedCount: max }))
              }
            />
          </FilterSection>

          {/* 면적 */}
          <FilterSection title="전용 면적">
            <PresetRow
              presets={AREA_PRESETS}
              min={draft.minAreaSqm}
              max={draft.maxAreaSqm}
              onSelect={(min, max) =>
                setDraft((d) => ({ ...d, minAreaSqm: min, maxAreaSqm: max }))
              }
            />
          </FilterSection>
        </div>

        <footer className="flex gap-2.5 border-t border-white/10 px-5 py-4">
          <Button variant="outline" className="w-28" onClick={onClear}>
            초기화
          </Button>
          <Button className="flex-1" onClick={() => onApply(draft)}>
            적용
          </Button>
        </footer>
      </section>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2.5 text-[13px] font-semibold text-white/70">{title}</h3>
      {children}
    </section>
  );
}

function ChipButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-9 rounded-full border px-3.5 text-xs font-medium transition ${
        active
          ? "border-brand-blue80/70 bg-brand-blue40/25 text-brand-blue80"
          : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

/** min/max 프리셋 라디오 행 — 현재 (min,max) 와 값이 일치하는 프리셋을 활성 표시. */
function PresetRow({
  presets,
  min,
  max,
  onSelect,
}: {
  presets: ReadonlyArray<{ label: string; min: number | null; max: number | null }>;
  min: number | null;
  max: number | null;
  onSelect: (min: number | null, max: number | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {presets.map((p) => (
        <ChipButton
          key={p.label}
          active={p.min === min && p.max === max}
          onClick={() => onSelect(p.min, p.max)}
        >
          {p.label}
        </ChipButton>
      ))}
    </div>
  );
}
