const TABS: ReadonlyArray<{ id: string; label: string }> = [
  { id: "ongoing", label: "진행중" },
  { id: "results", label: "매각결과" },
];

interface Props {
  tabId: string;
  onSelect: (tabId: string) => void;
}

/** 검색 화면 상단 탭 — 진행중 / 매각결과. */
export function SearchTabs({ tabId, onSelect }: Props) {
  return (
    <div role="tablist" className="flex border-b border-white/10">
      {TABS.map((t) => {
        const active = t.id === tabId;
        return (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onSelect(t.id)}
            className={`relative flex-1 py-3 text-sm font-medium transition-colors ${
              active ? "text-white" : "text-white/45 hover:text-white/70"
            }`}
          >
            {t.label}
            {active && (
              <span className="absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-brand-blue80" />
            )}
          </button>
        );
      })}
    </div>
  );
}
