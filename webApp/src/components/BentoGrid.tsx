import type { CategoryInfoDto } from "../shared/bridge";
import { CategoryCard } from "./CategoryCard";
import { cn } from "../lib/cn";

interface Props {
  categories: CategoryInfoDto[];
  onSelect: (id: string) => void;
}

/**
 * Bento 레이아웃 — Featured 1 (full width 큰 카드), Half 4 (2x2), Wide 1 (full width).
 * 6개 카드 가정. 카테고리 순서: 아파트(Featured), 자동차/오피스텔/주택/상가(Half), 토지(Wide).
 */
export function BentoGrid({ categories, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 px-4">
      {categories.map((c) => (
        <div
          key={c.id}
          className={cn(
            c.span === "Featured" && "col-span-2",
            c.span === "Wide" && "col-span-2",
          )}
        >
          <CategoryCard
            info={c}
            onClick={() => onSelect(c.id)}
          />
        </div>
      ))}
    </div>
  );
}
