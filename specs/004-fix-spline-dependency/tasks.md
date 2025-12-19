# Tasks: Fix Spline Dependency Error

**Spec**: `specs/004-fix-spline-dependency/spec.md`
**Plan**: `specs/004-fix-spline-dependency/plan.md`

## Phase 1: Dependency Management and Cache Clean-up

- [ ] T001 Uninstall problematic version: `npm uninstall @splinetool/react-spline`
- [ ] T002 Install stable version: `npm install @splinetool/react-spline@2.2.6`
- [ ] T003 Clean Docusaurus cache: `npm run docusaurus clear`

## Dependencies

- T001 must be completed before T002.
- T002 must be completed before T003.

## Parallel Execution Examples

- N/A (tasks are sequential due to dependencies).
