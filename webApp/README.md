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
