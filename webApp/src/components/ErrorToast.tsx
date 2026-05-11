interface Props {
  /** 카드 상단의 굵은 라벨 — 예: "매물 불러오기 실패". */
  title: string;
  /** 본문 — 사람이 읽을 에러 메시지. */
  message: string;
  /** × 닫기 버튼 클릭 핸들러. */
  onDismiss: () => void;
}

/**
 * 화면 우하단 고정 오버레이로 에러를 노출. MapPage / MainPage 공용.
 *
 * pointer-events 는 컨테이너에서만 활성화해 지도/페이지 인터랙션을 가리지 않는다.
 * z-index 30 — 다른 floating UI(컨트롤·로딩) 와 같은 레벨로 떠 있되 모달 위로는 안 감.
 */
export function ErrorToast({ title, message, onDismiss }: Props) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="pointer-events-auto fixed bottom-6 right-6 z-30 flex max-w-sm items-start gap-3 rounded-xl border border-red-400/40 bg-red-950/85 px-4 py-3 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      <span aria-hidden="true" className="mt-0.5 text-base leading-none">
        ⚠️
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-200">
          {title}
        </p>
        <p className="mt-1 break-words text-sm text-white/90">{message}</p>
      </div>
      <button
        type="button"
        aria-label="닫기"
        onClick={onDismiss}
        className="-mr-1 -mt-1 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          ×
        </span>
      </button>
    </div>
  );
}
