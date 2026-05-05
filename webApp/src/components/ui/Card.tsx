import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl bg-brand-deepNavy", className)}
        {...props}
      />
    );
  },
);
