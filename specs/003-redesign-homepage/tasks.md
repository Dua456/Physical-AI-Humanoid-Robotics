# Tasks: Redesign Homepage

**Spec**: `specs/003-redesign-homepage/spec.md`
**Plan**: `specs/003-redesign-homepage/plan.md`

## Phase 1: Environment Setup & Core Components

- [x] T001 Install Spline Component: `npm install @splinetool/react-spline`
- [x] T002 Cleanup existing homepage file: `rm physical-ai-book/src/pages/index.js`
- [x] T003 Create `physical-ai-book/src/pages/index.tsx` with basic page structure.
- [x] T004 Create `physical-ai-book/src/pages/index.module.css` with core styling and dark background.

## Phase 2: Hero Section Implementation

### User Story 1: View High-End 3D Hero Section
- [x] T005 [US1] Implement split-screen layout CSS in `physical-ai-book/src/pages/index.module.css`.
- [x] T006 [US1] Integrate 3D robot using `@splinetool/react-spline` wrapped in `@docusaurus/BrowserOnly` in `physical-ai-book/src/pages/index.tsx`.
- [x] T007 [US1] Implement Neon Gradient Heading CSS in `physical-ai-book/src/pages/index.module.css`.
- [x] T008 [US1] Apply Neon Gradient Heading to "The Physical AI Textbook" in `physical-ai-book/src/pages/index.tsx`.

## Phase 3: Curriculum Section Implementation

### User Story 2: Navigate through Curriculum Cards
- [x] T009 [US2] Implement 4-column grid CSS in `physical-ai-book/src/pages/index.module.css`.
- [x] T010 [US2] Create React components for 4 navigation cards (Module 1, 2, 3, 4) in `physical-ai-book/src/pages/index.tsx`.
- [x] T011 [US2] Implement Glassmorphism style CSS for cards in `physical-ai-book/src/pages/index.module.css`.
- [x] T012 [US2] Implement hover effect (lift and glow) CSS for cards in `physical-ai-book/src/pages/index.module.css`.
- [x] T013 [US2] Ensure correct documentation paths for links in `physical-ai-book/src/pages/index.tsx`.

## Dependencies

- Phase 1 tasks must be completed before Phase 2 and 3 tasks.
- T003 and T004 depend on T002.
- T006 and T008 depend on T005.
- T010, T011, T012, T013 depend on T009.

## Parallel Execution Examples

- Tasks within Phase 1 (except T001, T002) can be parallelized after dependencies are met.
- Tasks within Phase 2 (T005, T006, T007, T008) can be developed concurrently after Phase 1 is complete.
- Tasks within Phase 3 (T009, T010, T011, T012, T013) can be developed concurrently after Phase 1 is complete.
