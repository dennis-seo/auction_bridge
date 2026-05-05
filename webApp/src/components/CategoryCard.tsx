import type { CategoryInfoDto } from "../shared/bridge";
import { cn } from "../lib/cn";

interface Props {
  info: CategoryInfoDto;
  onClick: () => void;
}

export function CategoryCard({ info, onClick }: Props) {
  const isFeatured = info.span === "Featured";
  // brand-blue40 → deepNavy 그라데이션. 비활성은 흐리게.
  const gradient = `linear-gradient(135deg, ${info.themeColorHex}, #1B263B)`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!info.isEnabled}
      className={cn(
        "group relative flex w-full flex-col rounded-2xl px-5 py-4 text-left transition",
        "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]",
        info.isEnabled ? "hover:scale-[1.01]" : "opacity-60",
      )}
      style={{ background: info.isEnabled ? gradient : undefined, backgroundColor: info.isEnabled ? undefined : "#1B263B" }}
    >
      {!info.isEnabled && (
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">
          준비 중
        </span>
      )}
      {info.isEnabled && (
        <span className="absolute right-4 top-4 text-xs text-white/85">
          현재 {info.ongoingCount.toLocaleString()}건 진행 중
        </span>
      )}

      <div className="mt-2 flex items-end gap-2">
        <span className={cn("text-2xl", isFeatured ? "text-3xl" : "")}>{info.emoji}</span>
      </div>
      <div className={cn("mt-2 font-bold text-white", isFeatured ? "text-2xl" : "text-lg")}>
        {info.displayName}
      </div>
      {info.isEnabled && (
        <div className="mt-1 text-sm text-white/75">지금 보러가기 →</div>
      )}
    </button>
  );
}
