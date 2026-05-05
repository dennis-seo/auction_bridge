import { Link, useParams } from "react-router-dom";

export function DetailPage() {
  const { itemId } = useParams();
  return (
    <div className="grid h-screen place-items-center bg-brand-ink text-center text-white/85">
      <div>
        <h1 className="text-2xl font-bold">상세 페이지 (준비 중)</h1>
        <p className="mt-2 text-white/60">itemId = {itemId}</p>
        <Link to="/" className="mt-6 inline-block text-brand-blue80 underline-offset-4 hover:underline">
          ← 메인으로
        </Link>
      </div>
    </div>
  );
}
