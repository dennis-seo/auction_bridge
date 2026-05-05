import { ArrowLeft, Search } from "lucide-react";

interface Props {
  title: string;
  onBack: () => void;
}

/**
 * 상단 검색바 오버레이 — Phase 1 은 검색 로직 없이 시각만.
 */
export function MapSearchBar({ title, onBack }: Props) {
  return (
    <div className="pointer-events-auto absolute left-4 right-4 top-4 z-10 flex h-12 items-center gap-2 rounded-full bg-white/95 px-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] backdrop-blur md:left-auto md:right-4 md:w-[420px]">
      <button
        type="button"
        aria-label="뒤로"
        onClick={onBack}
        className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <span className="flex-1 truncate text-sm text-zinc-600">{title}</span>
      <button
        type="button"
        aria-label="검색"
        className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
}
