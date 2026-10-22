import { useNavigate, useParams } from "react-router-dom";
import { useDetailScreen } from "../shared/hooks";
import type { AuctionDetailDto, AuctionRoundJsDto, RightsAnalysisDto } from "../shared/bridge";
import { ErrorToast } from "../components/ErrorToast";

export function DetailPage() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { vm, state } = useDetailScreen(itemId ?? "");

  return (
    <div className="mx-auto flex min-h-screen max-w-[1080px] flex-col bg-brand-ink text-white">
      <TopBar onBack={() => navigate(-1)} />

      {state?.isLoading || !state ? (
        <Loading />
      ) : state.detail ? (
        <DetailBody detail={state.detail} />
      ) : (
        <EmptyOrError message={state.errorMessage ?? "상세 정보를 불러오지 못했습니다"} />
      )}

      {state?.errorMessage && state.detail == null && vm && (
        <ErrorToast
          title="상세 정보 불러오기 실패"
          message={state.errorMessage}
          onDismiss={() => navigate(-1)}
        />
      )}
    </div>
  );
}

function TopBar({ onBack }: { onBack: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-white/5 bg-brand-ink/85 px-3 backdrop-blur">
      <button
        type="button"
        aria-label="뒤로가기"
        onClick={onBack}
        className="rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M12.5 4 6.5 10l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h1 className="text-sm font-semibold tracking-tight text-white/90">매물 상세</h1>
    </header>
  );
}

function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-1 items-center justify-center"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-brand-deepNavy/85 px-5 py-3.5 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]">
        <span
          aria-hidden="true"
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
        />
        <span className="text-sm font-medium">불러오는 중…</span>
      </div>
    </div>
  );
}

function EmptyOrError({ message }: { message: string }) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 text-center">
      <div>
        <p className="text-2xl">😞</p>
        <p className="mt-3 text-sm text-white/80">{message}</p>
      </div>
    </div>
  );
}

function DetailBody({ detail }: { detail: AuctionDetailDto }) {
  const rounds = Array.from(detail.rounds ?? []);
  return (
    <main className="flex flex-col gap-4 px-4 pb-12 pt-3 sm:px-6">
      <Hero detail={detail} />
      <Section title="가격">
        <PriceBlock detail={detail} />
      </Section>
      {(detail.bidBeginDisplay || detail.bidEndDisplay) && (
        <Section title="일정">
          <ScheduleBlock detail={detail} />
        </Section>
      )}
      {rounds.length > 0 && (
        <Section title="회차 이력">
          <RoundsBlock rounds={rounds} />
        </Section>
      )}
      <Section title="입찰 정보">
        <InfoGrid
          rows={[
            ["사건번호", detail.caseNumber],
            ["법원", detail.courtName],
            ["관리번호", detail.cltrMngNo],
            ["매각방식", detail.dspsMthod],
            ["입찰방법", detail.bidMthod],
            ["입찰구분", detail.bidDiv],
            ["경쟁방법", detail.cptnMthod],
            ["용도(대)", detail.usgLcls],
            ["용도(중)", detail.usgMcls],
            ["용도(소)", detail.usgScls],
            ["진행 횟수", detail.progressCount > 0 ? `${detail.progressCount}회` : null],
            ["유찰 횟수", detail.failedCount > 0 ? `${detail.failedCount}회` : null],
          ]}
        />
        <BidOptionChips detail={detail} />
      </Section>
      <AssetTypeSection detail={detail} />
      {detail.rightsAnalysis && (
        <Section title="권리분석">
          <RightsBlock rights={detail.rightsAnalysis} />
        </Section>
      )}
      <Section title="기관">
        <InfoGrid
          rows={[
            ["요청기관", detail.requestOrgNm],
            ["공고기관", detail.announceOrgNm],
            ["대상 평가/유의", detail.evcRsbyTarget],
          ]}
        />
      </Section>
    </main>
  );
}

function Hero({ detail }: { detail: AuctionDetailDto }) {
  const imageUrls = Array.from(detail.imageUrls ?? []);
  const heroImage = detail.thumbnailUrl ?? imageUrls[0] ?? null;
  return (
    <section className="overflow-hidden rounded-2xl border border-white/5 bg-brand-deepNavy/40">
      {heroImage ? (
        <img
          src={heroImage}
          alt={detail.title ?? "매물 이미지"}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      ) : (
        <div className="grid aspect-[16/9] w-full place-items-center bg-brand-deepNavy/60 text-white/40">
          <span className="text-sm">이미지 없음</span>
        </div>
      )}
      <div className="space-y-2 px-4 py-4 sm:px-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="accent">{detail.assetTypeLabel}</Pill>
          <Pill tone="status">{detail.statusLabel}</Pill>
          {detail.prptDiv && <Pill tone="status">{detail.prptDiv}</Pill>}
          {detail.pvctTrgtYn && <Pill tone="warn">유의 대상</Pill>}
        </div>
        <h2 className="text-lg font-bold leading-snug">
          {detail.title ?? detail.address ?? "매물"}
        </h2>
        {detail.address && (
          <p className="text-sm text-brand-slate">{detail.address}</p>
        )}
      </div>
    </section>
  );
}

function PriceBlock({ detail }: { detail: AuctionDetailDto }) {
  const discount = computeDiscountPct(detail.appraisalPrice, detail.minBidPrice);
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <PriceCard
        label="감정가"
        primary={formatEokFull(detail.appraisalPrice) ?? detail.appraisalText ?? "—"}
        secondary={formatKrw(detail.appraisalPrice)}
      />
      <PriceCard
        label="최저 입찰가"
        primary={
          detail.minBidPriceText ??
          formatEokFull(detail.minBidPrice) ??
          detail.minBidText ??
          "—"
        }
        secondary={formatKrw(detail.minBidPrice)}
        accent
        badge={discount != null ? `−${discount}%` : null}
      />
    </div>
  );
}

function PriceCard({
  label,
  primary,
  secondary,
  accent,
  badge,
}: {
  label: string;
  primary: string;
  secondary?: string | null;
  accent?: boolean;
  badge?: string | null;
}) {
  return (
    <div
      className={
        "flex flex-col gap-1 rounded-xl border px-4 py-3 " +
        (accent
          ? "border-brand-blue40/50 bg-brand-blue40/15"
          : "border-white/5 bg-brand-deepNavy/40")
      }
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-white/55">{label}</span>
        {badge && (
          <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-[11px] font-semibold text-rose-200">
            {badge}
          </span>
        )}
      </div>
      <span className={"text-xl font-bold " + (accent ? "text-brand-blue80" : "text-white")}>
        {primary}
      </span>
      {secondary && (
        <span className="text-xs text-white/55">{secondary}</span>
      )}
    </div>
  );
}

function ScheduleBlock({ detail }: { detail: AuctionDetailDto }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ScheduleCard label="입찰 시작" value={detail.bidBeginDisplay ?? "—"} />
      <ScheduleCard label="입찰 종료" value={detail.bidEndDisplay ?? "—"} />
    </div>
  );
}

function ScheduleCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-brand-deepNavy/40 px-4 py-3">
      <span className="text-xs uppercase tracking-wide text-white/55">{label}</span>
      <span className="text-base font-semibold text-white">{value}</span>
    </div>
  );
}

const ROUNDS_GRID_COLS = "sm:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)_96px]";

function RoundsBlock({ rounds }: { rounds: AuctionRoundJsDto[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-brand-deepNavy/30">
      <div
        className={
          "hidden gap-3 border-b border-white/10 px-4 py-2 text-[11px] uppercase tracking-wide text-white/45 sm:grid " +
          ROUNDS_GRID_COLS
        }
      >
        <span>회차</span>
        <span>기간</span>
        <span>최저 입찰가</span>
        <span className="text-right">결과</span>
      </div>
      {rounds.map((round, i) => (
        <RoundRow key={`${round.roundLabel ?? ""}-${i}`} round={round} />
      ))}
    </div>
  );
}

function RoundRow({ round }: { round: AuctionRoundJsDto }) {
  const saleInfo = [round.saleText ? `낙찰가 ${round.saleText}` : null, round.saleRatioText]
    .filter(Boolean)
    .join(" · ");
  return (
    <div
      className={
        "border-b border-white/5 px-4 py-2.5 last:border-b-0 " +
        (round.isCurrent ? "bg-brand-blue40/10" : "")
      }
    >
      {/* 데스크톱: 4열 테이블 행 */}
      <div className={"hidden items-center gap-3 sm:grid " + ROUNDS_GRID_COLS}>
        <span className="text-sm font-semibold text-white/90">
          {round.roundLabel ?? "—"}
          {round.isCurrent && <CurrentBadge />}
        </span>
        <span className="truncate text-sm text-white/75">{round.periodText ?? "—"}</span>
        <span className="truncate text-sm text-white/90">
          {round.minBidText ?? "—"}
          {saleInfo && <span className="ml-2 text-xs text-emerald-200/90">{saleInfo}</span>}
        </span>
        <span className="text-right">
          <RoundResultPill round={round} />
        </span>
      </div>
      {/* 모바일: 행 카드 */}
      <div className="flex flex-col gap-1 sm:hidden">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-white/90">
            {round.roundLabel ?? "—"}
            {round.isCurrent && <CurrentBadge />}
          </span>
          <RoundResultPill round={round} />
        </div>
        <div className="flex items-baseline justify-between gap-3 text-xs text-white/60">
          <span>{round.periodText ?? "—"}</span>
          <span className="text-sm font-medium text-white/85">{round.minBidText ?? "—"}</span>
        </div>
        {saleInfo && <p className="text-xs text-emerald-200/90">{saleInfo}</p>}
      </div>
    </div>
  );
}

function CurrentBadge() {
  return (
    <span className="ml-1.5 rounded-full bg-brand-blue40/25 px-1.5 py-0.5 text-[10px] font-semibold text-brand-blue80 align-middle">
      현재
    </span>
  );
}

function RoundResultPill({ round }: { round: AuctionRoundJsDto }) {
  if (!round.resultLabel) return null;
  const tone = (() => {
    switch ((round.status ?? "").toLowerCase()) {
      case "failed":
        return "bg-rose-500/20 text-rose-200";
      case "sold":
        return "bg-emerald-500/20 text-emerald-200";
      case "ongoing":
        return "bg-brand-blue40/25 text-brand-blue80";
      case "scheduled":
      default:
        return "bg-white/10 text-white/70";
    }
  })();
  return (
    <span className={"inline-block rounded-full px-2.5 py-0.5 text-xs font-medium " + tone}>
      {round.resultLabel}
    </span>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="px-1 text-sm font-bold tracking-tight text-white/85">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

function InfoGrid({ rows }: { rows: Array<[string, string | null | undefined]> }) {
  const filtered = rows.filter(([, v]) => v != null && String(v).length > 0);
  if (filtered.length === 0) {
    return <p className="px-1 text-sm text-white/50">표시할 정보가 없습니다.</p>;
  }
  return (
    <dl className="grid grid-cols-1 gap-x-6 gap-y-2 rounded-xl border border-white/5 bg-brand-deepNavy/30 px-4 py-3 sm:grid-cols-2">
      {filtered.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5 last:border-b-0 sm:border-b-0">
          <dt className="shrink-0 text-xs text-white/55">{k}</dt>
          <dd className="min-w-0 truncate text-right text-sm text-white/90">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function BidOptionChips({ detail }: { detail: AuctionDetailDto }) {
  const chips: Array<[string, boolean | null | undefined]> = [
    ["전자입찰", detail.elecGrprUse],
    ["공동입찰 가능", detail.collbBidPsbl],
    ["2회 일괄입찰 가능", detail.twtmGthrBidPsbl],
    ["대체입찰 가능", detail.subtBidPsbl],
  ];
  const visible = chips.filter(([, v]) => v === true);
  if (visible.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 px-1">
      {visible.map(([k]) => (
        <span
          key={k}
          className="rounded-full bg-brand-blue40/20 px-3 py-1 text-xs font-medium text-brand-blue80"
        >
          ✓ {k}
        </span>
      ))}
    </div>
  );
}

function AssetTypeSection({ detail }: { detail: AuctionDetailDto }) {
  if (detail.realty) {
    const r = detail.realty;
    return (
      <Section title="부동산 정보">
        <InfoGrid
          rows={[
            ["분류", r.propertyCategory],
            ["토지 면적", formatSqm(r.landSqms)],
            ["건물 면적", formatSqm(r.bldSqms)],
            ["대지권", r.alcYn == null ? null : r.alcYn ? "있음" : "없음"],
          ]}
        />
      </Section>
    );
  }
  if (detail.vehicle) {
    const v = detail.vehicle;
    return (
      <Section title="차량 정보">
        <InfoGrid
          rows={[
            ["분류", v.vehicleCategory],
            ["제조사", v.maker],
            ["차종", v.vehicleKind],
            ["모델", v.modelName],
            ["연식", v.yearModel],
            ["번호판", v.plateNo],
            ["주행거리", v.mileageKm != null ? `${formatNumber(v.mileageKm)} km` : null],
            ["배기량", v.displacementCc != null ? `${formatNumber(v.displacementCc)} cc` : null],
            ["변속기", v.transmission],
            ["연료", v.fuel],
            ["색상", v.color],
            ["수량", v.quantityText],
          ]}
        />
      </Section>
    );
  }
  if (detail.movable) {
    const m = detail.movable;
    return (
      <Section title="동산 정보">
        <InfoGrid
          rows={[
            ["제조사", m.maker],
            ["모델명", m.modelName],
            ["제조연도", m.manufactureYear],
            ["수량", m.quantityText],
            ["원산지", m.productionPlace],
            ["사용 연수", m.usePeriodYear != null ? `${m.usePeriodYear}년` : null],
            ["규격", m.sizeText],
            ["중량", m.weightText],
            ["보관 장소", m.custodyPlace],
            ["작가/저작자", m.authorName],
            ["회원권명", m.membershipName],
            ["상품명", m.commodityName],
            ["품명", m.productName],
          ]}
        />
      </Section>
    );
  }
  return null;
}

function RightsBlock({ rights }: { rights: RightsAnalysisDto }) {
  const tone =
    rights.riskLevel === 1
      ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
      : rights.riskLevel === 2
        ? "border-amber-400/40 bg-amber-500/10 text-amber-200"
        : rights.riskLevel === 3
          ? "border-rose-400/40 bg-rose-500/10 text-rose-200"
          : "border-white/10 bg-white/5 text-white/80";
  return (
    <div className={"flex flex-col gap-2 rounded-xl border px-4 py-3 " + tone}>
      {rights.riskLevelLabel && (
        <span className="text-xs font-semibold uppercase tracking-wide">
          위험도: {rights.riskLevelLabel}
        </span>
      )}
      {rights.summary && <p className="text-sm leading-relaxed">{rights.summary}</p>}
      {!rights.summary && !rights.riskLevelLabel && (
        <p className="text-sm text-white/60">권리분석 데이터가 없습니다.</p>
      )}
    </div>
  );
}

function Pill({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "accent" | "status" | "warn";
}) {
  const cls =
    tone === "accent"
      ? "bg-brand-blue40/20 text-brand-blue80"
      : tone === "warn"
        ? "bg-amber-500/20 text-amber-200"
        : "bg-white/10 text-white/85";
  return (
    <span className={"rounded-full px-2.5 py-0.5 text-xs font-medium " + cls}>
      {children}
    </span>
  );
}

// ---- helpers ----

function computeDiscountPct(appraisal: number | null | undefined, minBid: number | null | undefined): number | null {
  if (!appraisal || appraisal <= 0 || minBid == null || minBid <= 0) return null;
  const pct = Math.round((1 - minBid / appraisal) * 100);
  if (pct <= 0) return null;
  return pct;
}

/** "9억9500만원" 식 한국 표기. 0/null 은 null. */
function formatEokFull(value: number | null | undefined): string | null {
  if (value == null || value <= 0) return null;
  const eok = Math.floor(value / 100_000_000);
  const remainder = value - eok * 100_000_000;
  const man = Math.floor(remainder / 10_000);
  const parts: string[] = [];
  if (eok > 0) parts.push(`${eok.toLocaleString("ko-KR")}억`);
  if (man > 0) parts.push(`${man.toLocaleString("ko-KR")}만원`);
  if (parts.length === 0) return `${value.toLocaleString("ko-KR")}원`;
  if (eok > 0 && man === 0) return `${parts[0]}`;
  return parts.join(" ");
}

function formatKrw(value: number | null | undefined): string | null {
  if (value == null || value <= 0) return null;
  return `${value.toLocaleString("ko-KR")} 원`;
}

function formatSqm(value: number | null | undefined): string | null {
  if (value == null || value <= 0) return null;
  return `${value.toLocaleString("ko-KR", { maximumFractionDigits: 2 })} ㎡`;
}

function formatNumber(value: number | null | undefined): string | null {
  if (value == null) return null;
  return value.toLocaleString("ko-KR");
}
