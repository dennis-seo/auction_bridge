import { useEffect, useRef, useState } from "react";
import { ArrowUpDown, Check, ChevronDown } from "lucide-react";
import { sortOptionsFor } from "./searchOptions";

interface Props {
  tabId: string;
  sortId: string;
  onSelect: (sortId: string) => void;
}

/**
 * 정렬 드롭다운 — 탭별 옵션(진행중 6종 / 매각결과 3종).
 * 바깥 클릭/ESC 로 닫힘. 선택된 항목에 체크 표시.
 */
export function SortDropdown({ tabId, sortId, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const options = sortOptionsFor(tabId);
  const current = options.find((o) => o.id === sortId) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 text-xs font-medium text-white/85 transition hover:bg-white/10"
      >
        <ArrowUpDown className="h-3.5 w-3.5 text-white/55" aria-hidden="true" />
        {current.label}
        <ChevronDown
          className={`h-3.5 w-3.5 text-white/55 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="정렬"
          className="absolute right-0 top-full z-40 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-brand-deepNavy shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
        >
          {options.map((o) => {
            const selected = o.id === current.id;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setOpen(false);
                    if (!selected) onSelect(o.id);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition ${
                    selected
                      ? "bg-brand-blue40/15 font-medium text-brand-blue80"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {o.label}
                  {selected && <Check className="h-4 w-4" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
