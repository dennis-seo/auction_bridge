import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, Map as MapIcon, SlidersHorizontal } from "lucide-react";
import { useSearchScreen } from "../shared/hooks";
import { ErrorToast } from "../components/ErrorToast";
import { SearchTabs } from "../components/search/SearchTabs";
import { SortDropdown } from "../components/search/SortDropdown";
import { SearchListCard } from "../components/search/SearchListCard";
import { FilterSheet, type FilterDraft } from "../components/search/FilterSheet";

/**
 * 목록 검색 화면 — 탭(진행중/매각결과) + 필터/정렬 + 카드 리스트 + 무한스크롤.
 *
 * URL 의 ?category=&tab= 은 "진입 시점 초기값"으로만 사용한다.
 * 이후 탭/필터 변경은 vm 액션으로 처리 — useSearchScreen deps 가 바뀌면
 * VM 이 재생성되어 필터/스크롤 상태가 날아가므로 초기값을 고정해 넘긴다.
 */
export function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [initial] = useState(() => ({
    category: searchParams.get("category"),
    tab: searchParams.get("tab") ?? "ongoing",
  }));
  const { vm, state } = useSearchScreen(initial.category, initial.tab);

  // 무한스크롤 sentinel — 뷰포트에 들어오면 다음 페이지 로드.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !vm) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) vm.loadNextPage();
      },
      { rootMargin: "320px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [vm, state?.tabId, state?.items.length]);

  const handleApplyFilter = (d: FilterDraft) => {
    vm?.applyFilter(
      d.regionSido,
      d.regionSigungu,
      d.categoryIds,
      d.minPrice,
      d.maxPrice,
      d.minFailedCount,
      d.maxFailedCount,
      d.minAreaSqm,
      d.maxAreaSqm,
    );
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[720px] flex-col bg-brand-ink text-white">
      {/* 상단 헤더 + 탭 + 필터/정렬 행 — sticky 로 스크롤 시 고정 */}
      <div className="sticky top-0 z-20 bg-brand-ink/90 backdrop-blur">
        <header className="flex h-14 items-center gap-1 px-2">
          <button
            type="button"
            aria-label="뒤로가기"
            onClick={() => navigate(-1)}
            className="rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-sm font-semibold tracking-tight text-white/90">매물 검색</h1>
        </header>

        <SearchTabs
          tabId={state?.tabId ?? initial.tab}
          onSelect={(id) => vm?.selectTab(id)}
        />

        <div className="flex items-center justify-between gap-2 px-4 py-2.5">
          <button
            type="button"
            onClick={() => vm?.openFilterSheet()}
            className="relative flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 text-xs font-medium text-white/85 transition hover:bg-white/10"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-white/55" aria-hidden="true" />
            필터
            {state && state.filter.activeCount > 0 && (
              <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand-blue40 px-1 text-[10px] font-bold leading-none text-white">
                {state.filter.activeCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2.5">
            {state && !state.isLoading && (
              <span className="text-xs text-white/50">
                총 <b className="font-semibold text-white/80">{state.total.toLocaleString()}</b>건
              </span>
            )}
            <SortDropdown
              tabId={state?.tabId ?? initial.tab}
              sortId={state?.sortId ?? "newest"}
              onSelect={(id) => vm?.setSort(id)}
            />
          </div>
        </div>
      </div>

      {/* 리스트 본문 — 하단 "지도 보기" floating 버튼에 가리지 않도록 여유 패딩 */}
      <main className="flex flex-1 flex-col px-4 pb-28">
        {!state || state.isLoading ? (
          <LoadingBlock />
        ) : state.items.length === 0 ? (
          <EmptyBlock onReset={() => vm?.clearFilter()} hasFilter={state.filter.activeCount > 0} />
        ) : (
          <>
            <ul className="flex flex-col gap-3">
              {state.items.map((item) => (
                <li key={item.id}>
                  <SearchListCard
                    item={item}
                    tabId={state.tabId}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  />
                </li>
              ))}
            </ul>

            {/* 무한스크롤 sentinel + 추가 로딩 인디케이터 */}
            {state.hasMore && <div ref={sentinelRef} aria-hidden="true" className="h-1" />}
            {state.isLoadingMore && (
              <div className="flex justify-center py-5" role="status" aria-label="더 불러오는 중">
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              </div>
            )}
            {!state.hasMore && state.items.length > 0 && (
              <p className="py-6 text-center text-xs text-white/35">마지막 매물까지 확인했어요</p>
            )}
          </>
        )}
      </main>

      {/* 목록 ↔ 지도 전환 — replace 시맨틱으로 왕복 백스택 누적 방지 (홈 진입 항목은 유지) */}
      <button
        type="button"
        onClick={() => navigate(`/map/${initial.category ?? "apartment"}`, { replace: true })}
        className="fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-brand-deepNavy/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm transition hover:bg-brand-deepNavy"
      >
        <MapIcon className="h-4 w-4" aria-hidden="true" />
        지도 보기
      </button>

      {/* 필터 시트 */}
      {state?.isFilterSheetOpen && vm && (
        <FilterSheet
          filter={state.filter}
          onApply={handleApplyFilter}
          onClear={() => {
            vm.clearFilter();
            vm.closeFilterSheet();
          }}
          onClose={() => vm.closeFilterSheet()}
        />
      )}

      {state?.errorMessage && vm && (
        <ErrorToast
          title="매물 검색 실패"
          message={state.errorMessage}
          onDismiss={() => vm.dismissError()}
        />
      )}
    </div>
  );
}

function LoadingBlock() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="매물 불러오는 중"
      className="flex flex-1 items-center justify-center py-24"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-brand-deepNavy/85 px-5 py-3.5 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <span
          aria-hidden="true"
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
        />
        <span className="text-sm font-medium">매물 불러오는 중…</span>
      </div>
    </div>
  );
}

function EmptyBlock({ hasFilter, onReset }: { hasFilter: boolean; onReset: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 py-24 text-center">
      <p className="text-3xl" aria-hidden="true">
        🔍
      </p>
      <p className="text-sm text-white/60">조건에 맞는 매물이 없어요</p>
      {hasFilter && (
        <button
          type="button"
          onClick={onReset}
          className="mt-1 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/5"
        >
          필터 초기화
        </button>
      )}
    </div>
  );
}
