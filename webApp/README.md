# auctionbridge-web

React + Vite + TypeScript + Tailwind + shadcn 스타일.
공유 비즈니스 로직은 `shared` Kotlin Multiplatform 모듈의 JS 빌드 결과물(`auctionbridge-shared`)을 import.

## 개발 흐름

```powershell
# 0) shared 모듈을 JS 라이브러리로 빌드 (한 번만, 또는 shared 코드 변경 후 매번)
cd ..
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
.\gradlew.bat :shared:jsBrowserProductionLibraryDistribution

# 1) webApp 의존성 설치 (최초 1회)
cd webApp
npm install

# 2) 개발 서버 (포트 8080)
npm run dev

# 3) 프로덕션 빌드
npm run build
npm run preview
```

## 구조

- `src/shared/` — Kotlin/JS 브리지 import + React hooks
- `src/pages/` — 라우트별 페이지 컴포넌트
- `src/components/` — 재사용 UI
  - `ui/` — Button, Card 등 기본 빌딩블록 (shadcn 스타일)
- `src/styles/globals.css` — Tailwind directives + 다크 테마

## 라우트

- `/` — MainPage (Bento Grid)
- `/map/:categoryId` — MapPage (Phase 1 에서 본격 구현)
- `/detail/:itemId` — DetailPage (Phase 2)

## Vercel 배포

자동 배포(권장):

1. Vercel 대시보드 → **Add New… → Project** → 이 GitHub repo import.
2. **Root Directory**: `webApp` 으로 지정 (모노레포 — `webApp/vercel.json` 의 설정이 적용됨).
3. **Framework Preset**: Vite (자동 감지).
4. **Environment Variables** 에 다음 두 개 입력 (`webApp/.env.production.example` 참고):
   - `VITE_KAKAO_JS_KEY` — 카카오 Maps JavaScript 키
   - `VITE_API_BASE_URL` — FastAPI 서버의 절대 URL (예: `https://api.example.com`)
5. **Deploy** 클릭. main push 마다 자동 재배포된다.

### 카카오 도메인 화이트리스트

[카카오 developers 콘솔](https://developers.kakao.com) → 내 애플리케이션 → **플랫폼 → Web** 사이트 도메인에
Vercel 프로젝트 도메인(`https://<project>.vercel.app` 또는 custom domain)을 반드시 추가해야 SDK 가 작동한다.

### shared 모듈 산출물 동기화

`webApp` 은 npm `file:` 의존성으로 `../shared/build/dist/js/productionLibrary` 를 사용한다.
Vercel 빌드 환경엔 Java/Gradle 이 없으므로 산출물 자체를 git 으로 추적한다.

`shared/src` 변경 시 처리 방식 두 가지:

1. **자동 (권장)** — main 에 push 하면 GitHub Actions(`.github/workflows/build-shared-js.yml`)
   가 산출물을 재빌드해 같은 브랜치에 자동 커밋한다. Vercel 은 그 후속 커밋을 받아 다시 빌드.
2. **수동** — 로컬에서 직접 빌드 후 커밋:
   ```powershell
   $env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
   .\gradlew.bat :shared:jsBrowserProductionLibraryDistribution
   git add shared/build/dist/js/productionLibrary
   git commit -m "chore(shared): rebuild JS production library"
   ```

> 참고: shared/src 와 webApp 동시 변경 시 Vercel 에서 두 번 빌드될 수 있다(첫 번째는 stale dist).
> 이는 단순함 우선 트레이드오프. 필요하면 별도 production 브랜치 + Action으로 분리 가능.
