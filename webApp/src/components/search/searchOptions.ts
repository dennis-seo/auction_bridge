// 검색 화면에서 쓰는 정적 옵션들 — 카테고리 라벨, 시/도 목록, 탭별 정렬, 필터 프리셋.
// id 값들은 shared(AuctionCategory / SearchSort / SearchTab)의 canonical id 와 1:1.

/** AuctionCategory.id → 표시명 (shared AuctionCategory.displayName 과 동일). */
export const CATEGORY_LABELS: Record<string, string> = {
  apartment: "아파트",
  villa: "빌라/연립",
  car: "자동차",
  officetel: "오피스텔",
  house: "주택",
  store: "상가",
  land: "토지",
};

export function categoryLabel(id: string | null | undefined): string | null {
  if (!id) return null;
  return CATEGORY_LABELS[id] ?? id;
}

/** 필터 시트의 용도 다중 선택 대상 — 부동산 검색이므로 car 제외. */
export const FILTER_CATEGORIES: ReadonlyArray<{ id: string; label: string }> = [
  { id: "apartment", label: "아파트" },
  { id: "villa", label: "빌라/연립" },
  { id: "officetel", label: "오피스텔" },
  { id: "house", label: "주택" },
  { id: "store", label: "상가" },
  { id: "land", label: "토지" },
];

/** 시/도 17개 — 서버 region_sido 원문과 동일한 정식 명칭. */
export const SIDO_LIST: ReadonlyArray<string> = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원특별자치도",
  "충청북도",
  "충청남도",
  "전북특별자치도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

export interface SortOption {
  id: string;
  label: string;
}

/** 진행중 탭 정렬 — 서버 /api/v1/realty canonical sort 와 1:1. */
export const ONGOING_SORTS: ReadonlyArray<SortOption> = [
  { id: "newest", label: "최신순" },
  { id: "deadline", label: "마감임박순" },
  { id: "price_asc", label: "최저가 낮은순" },
  { id: "price_desc", label: "최저가 높은순" },
  { id: "ratio_asc", label: "할인율 높은순" },
  { id: "failed_count", label: "유찰 많은순" },
];

/** 매각결과 탭 정렬 — repository 가 opbd_at_desc 계열로 변환하는 부분집합. */
export const RESULTS_SORTS: ReadonlyArray<SortOption> = [
  { id: "newest", label: "개찰 최신순" },
  { id: "ratio_asc", label: "낙찰가율 낮은순" },
  { id: "price_desc", label: "낙찰가 높은순" },
];

export function sortOptionsFor(tabId: string): ReadonlyArray<SortOption> {
  return tabId === "results" ? RESULTS_SORTS : ONGOING_SORTS;
}

/** 최저 입찰가 범위 프리셋 (원). null = 무제한. */
export const PRICE_PRESETS: ReadonlyArray<{
  label: string;
  min: number | null;
  max: number | null;
}> = [
  { label: "전체", min: null, max: null },
  { label: "1억 이하", min: null, max: 100_000_000 },
  { label: "1~3억", min: 100_000_000, max: 300_000_000 },
  { label: "3~5억", min: 300_000_000, max: 500_000_000 },
  { label: "5~10억", min: 500_000_000, max: 1_000_000_000 },
  { label: "10억 이상", min: 1_000_000_000, max: null },
];

/** 유찰 횟수 프리셋. */
export const FAILED_PRESETS: ReadonlyArray<{
  label: string;
  min: number | null;
  max: number | null;
}> = [
  { label: "전체", min: null, max: null },
  { label: "0회", min: 0, max: 0 },
  { label: "1회 이상", min: 1, max: null },
  { label: "2회 이상", min: 2, max: null },
  { label: "3회 이상", min: 3, max: null },
];

/** 전용 면적 프리셋 (㎡). */
export const AREA_PRESETS: ReadonlyArray<{
  label: string;
  min: number | null;
  max: number | null;
}> = [
  { label: "전체", min: null, max: null },
  { label: "60㎡ 이하", min: null, max: 60 },
  { label: "60~85㎡", min: 60, max: 85 },
  { label: "85~135㎡", min: 85, max: 135 },
  { label: "135㎡ 이상", min: 135, max: null },
];
