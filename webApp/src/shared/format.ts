// 가격/할인/날짜/카운트다운 — 매물 카드와 마커에서 공용으로 쓰는 표시 유틸.

/**
 * KRW 원 단위 값을 한국식 "N억N만원" 으로 포맷.
 * - 916_000_000 → "9억1600만원"
 * - 603_900_000 → "6억390만원"
 * - 995_000_000 → "9억9500만원"
 * - 50_000_000  → "5000만원"
 * - 0 또는 null/undefined → null
 */
export function formatKrwKo(won: number | null | undefined): string | null {
  if (won == null || !isFinite(won) || won <= 0) return null;
  const eok = Math.floor(won / 100_000_000);
  const man = Math.floor((won % 100_000_000) / 10_000);
  const parts: string[] = [];
  if (eok > 0) parts.push(`${eok}억`);
  if (man > 0) parts.push(`${man}만`);
  if (parts.length === 0) return null;
  return parts.join("") + "원";
}

/**
 * 감정가 대비 최저가 할인율(정수). 둘 다 0 초과여야 한다.
 * - appraisal=916M, minBid=603.9M → 34 (=Math.round(34.07))
 * 반환값이 0 이하면 null (UI 가 배지 안 그림).
 */
export function discountPct(
  appraisal: number | null | undefined,
  minBid: number | null | undefined,
): number | null {
  if (
    appraisal == null ||
    minBid == null ||
    !isFinite(appraisal) ||
    !isFinite(minBid) ||
    appraisal <= 0 ||
    minBid <= 0 ||
    minBid >= appraisal
  ) {
    return null;
  }
  const pct = Math.round((1 - minBid / appraisal) * 100);
  return pct > 0 ? pct : null;
}

/** ISO-8601 → "YYYY-MM-DD". 비정상이면 null. */
export function formatDateYmd(iso: string | null | undefined): string | null {
  if (!iso || iso.length < 10) return null;
  // 단순 substring — kotlinx-datetime 등 무거운 의존성 회피.
  const y = iso.slice(0, 4);
  const m = iso.slice(5, 7);
  const d = iso.slice(8, 10);
  if (!/^\d{4}$/.test(y) || !/^\d{2}$/.test(m) || !/^\d{2}$/.test(d)) return null;
  return `${y}-${m}-${d}`;
}

/**
 * 마감까지 남은 시간을 사람이 읽을 라벨로. 음수(이미 지남) 또는 파싱 실패 시 null.
 * 우선순위: 일 단위 > 시간 단위 > 분 단위 → 너무 가까우면 "마감 임박".
 *   - 3일 이상 → "N일 남음"
 *   - 1일 이상 → "N일 N시간 남음"
 *   - 1시간 이상 → "N시간 남음"
 *   - 10분 이상 → "N분 남음"
 *   - 그 외(임박) → "마감 임박"
 */
export function timeRemainingLabel(
  iso: string | null | undefined,
  now: number = Date.now(),
): string | null {
  if (!iso) return null;
  const target = Date.parse(iso);
  if (isNaN(target)) return null;
  const diffMs = target - now;
  if (diffMs <= 0) return null;
  const totalMin = Math.floor(diffMs / 60_000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  if (days >= 3) return `${days}일 남음`;
  if (days >= 1) return hours > 0 ? `${days}일 ${hours}시간 남음` : `${days}일 남음`;
  if (hours >= 1) return `${hours}시간 남음`;
  if (totalMin >= 10) return `${mins}분 남음`;
  return "마감 임박";
}
