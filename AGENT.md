## 1. Tech Stack

- **Language:**
- **Framework:**
- **State Management:**
- **Server State:**
- **Styling:**
- **Build Tool:**
- **Node.js:**
- **ESLint:**
- **Prettier:**

> ⚠️ **버전 반드시 명시 (예: Node.js 20.11.0)**
> 

## 2. Global DO NOT

- **components에서 직접 외부 API 호출 x** → 반드시 hooks 또는 api 레이어 사용
- **VAC 내부에서 비즈니스 로직 작성 x** → 모든 판단 로직은 Container/Hooks에서 처리
- **컴포넌트에서 직접 state 변경 x** → hooks를 통해서만 변경 (Action 사용)
- **shared → features 의존 x** → 단방향 의존성 유지 (하위 레이어는 상위를 참조하지 않아야 함)
- **api.ts에서 데이터 가공 x** → 순수 네트워크 요청만 담당 (transform은 hooks 또는 mapper에서 수행)

## 3. Commands

- **실행:** `npm run dev`
- **테스트:** `npm run test`
- **빌드:** `npm run build`
- **린트:** `npm run lint`
- **프리티어:** `npm run format`