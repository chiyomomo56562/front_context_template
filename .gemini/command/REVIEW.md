# Code Review Checklist

이 체크리스트는 프로젝트의 아키텍처 정책 및 코딩 컨벤션을 준수하는지 검토하기 위한 기준입니다.

## 1. Architecture & Data Flow
- [ ] **단방향 흐름:** 데이터가 반드시 `api -> mapper -> hooks -> components` 순서로 흐르는가? (컴포넌트 내 원본 응답 직접 사용 금지)
- [ ] **의존성 규칙:** Feature 간 직접 참조가 없으며, 하위 레이어(`shared`)가 상위 레이어를 역참조하지 않는가?

## 2. Component & State (VAC)
- [ ] **View 순수성:** View 컴포넌트 내에 로직, API 호출, 상태 변경이 없는가? (순수 UI 렌더링 전담)
- [ ] **서버 상태:** Server State는 오직 **React Query**로만 관리하며, Global State(Zustand 등)에 중복 저장하지 않았는가?
- [ ] **사이드 이펙트:** 모든 Side Effect(API 호출 등)는 오직 `hooks` 또는 `Container`에서만 처리되는가?

## 3. Styling & Quality
- [ ] **스타일링:** 인라인 스타일이나 매직 넘버(예: `w-[13px]`) 없이 TailwindCSS 유틸리티 클래스만 사용했는가?
- [ ] **테스트 로직:** Mapper, 핵심 Hook 등에 대해 Vitest/MSW 기반의 단위 테스트가 작성되었는가?