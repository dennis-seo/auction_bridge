import { Menu } from "lucide-react";
import { Button } from "./ui/Button";

interface Props {
  isLoggedIn: boolean;
  userName: string | null | undefined;
  onLoginToggle: () => void;
}

export function MainTopBar({ isLoggedIn, userName, onLoginToggle }: Props) {
  return (
    <header className="flex h-14 items-center justify-between px-4">
      <button
        type="button"
        aria-label="메뉴"
        className="rounded-full p-2 text-white/85 hover:bg-white/5"
      >
        <Menu className="h-6 w-6" />
      </button>
      <Button
        variant="outline"
        size="sm"
        onClick={onLoginToggle}
        className="rounded-full"
      >
        {isLoggedIn ? `${userName ?? "사용자"} · 로그아웃` : "로그인"}
      </Button>
    </header>
  );
}
