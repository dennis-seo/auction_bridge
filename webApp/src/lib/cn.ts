import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** clsx + tailwind-merge — Tailwind 유틸 클래스 충돌 자동 정리 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
