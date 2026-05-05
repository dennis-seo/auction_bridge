import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMainScreen } from "../shared/hooks";
import { MainTopBar } from "../components/MainTopBar";
import { BentoGrid } from "../components/BentoGrid";

export function MainPage() {
  const navigate = useNavigate();
  const { vm, state } = useMainScreen();

  // transientMessage (예: "준비 중입니다") 를 잠깐 띄우고 자동 소비
  useEffect(() => {
    if (!state?.transientMessage || !vm) return;
    const timer = window.setTimeout(() => vm.consumeMessage(), 2000);
    return () => window.clearTimeout(timer);
  }, [state?.transientMessage, vm]);

  if (!state || !vm) {
    return <div className="grid h-screen place-items-center text-white/70">로딩 중…</div>;
  }

  const headline = state.isLoggedIn
    ? `안녕하세요, ${state.userName ?? "사용자"}님`
    : "어떤 자산을 살펴볼까요?";

  return (
    <div className="mx-auto flex min-h-screen max-w-[1080px] flex-col bg-brand-ink text-white">
      <MainTopBar
        isLoggedIn={state.isLoggedIn}
        userName={state.userName}
        onLoginToggle={() => vm.toggleLogin()}
      />

      <h1 className="px-5 pt-2 text-2xl font-bold">{headline}</h1>
      <p className="px-5 pb-3 text-sm text-brand-slate">초보자도 쉽게 보는 경공매 정보</p>

      <BentoGrid
        categories={state.categories}
        onSelect={(id) => {
          const target = state.categories.find((c) => c.id === id);
          if (target?.isEnabled) {
            navigate(`/map/${id}`);
          } else {
            vm.onDisabledCategoryClick(target?.displayName ?? "이 카테고리");
          }
        }}
      />

      {state.transientMessage && (
        <div className="pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
          {state.transientMessage}
        </div>
      )}
    </div>
  );
}
