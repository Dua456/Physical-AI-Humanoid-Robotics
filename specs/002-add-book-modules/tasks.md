# Tasks: Expand AI Book with Modules 2, 3, and 4

**Spec**: `specs/002-add-book-modules/spec.md`
**Plan**: `specs/002-add-book-modules/plan.md`

## Phase 1: Setup and Scaffolding

- [x] T001 Create Module 2 directory: `mkdir physical-ai-book/docs/02-module-2-digital-twin`
- [x] T002 Create Module 2 category file in `physical-ai-book/docs/02-module-2-digital-twin/_category_.json`
- [x] T003 Create Module 3 directory: `mkdir physical-ai-book/docs/03-module-3-isaac`
- [x] T004 Create Module 3 category file in `physical-ai-book/docs/03-module-3-isaac/_category_.json`
- [x] T005 Create Module 4 directory: `mkdir physical-ai-book/docs/04-module-4-vla`
- [x] T006 Create Module 4 category file in `physical-ai-book/docs/04-module-4-vla/_category_.json`

## Phase 2: Content File Creation

### User Story 1: Create Module 2 Lessons
- [x] T007 [US1] Create `physical-ai-book/docs/02-module-2-digital-twin/01-physics-in-gazebo.md`
- [x] T008 [US1] Create `physical-ai-book/docs/02-module-2-digital-twin/02-unity-for-robotics.md`
- [x] T009 [US1] Create `physical-ai-book/docs/02-module-2-digital-twin/03-simulating-sensors.md`

### User Story 2: Create Module 3 Lessons
- [x] T010 [US2] Create `physical-ai-book/docs/03-module-3-isaac/01-isaac-sim-intro.md`
- [x] T011 [US2] Create `physical-ai-book/docs/03-module-3-isaac/02-isaac-ros-vslam.md`
- [x] T012 [US2] Create `physical-ai-book/docs/03-module-3-isaac/03-nav2-for-humanoids.md`

### User Story 3: Create Module 4 Lessons
- [x] T013 [US3] Create `physical-ai-book/docs/04-module-4-vla/01-voice-to-action.md`
- [x] T014 [US3] Create `physical-ai-book/docs/04-module-4-vla/02-cognitive-planning.md`
- [x] T015 [US3] Create `physical-ai-book/docs/04-module-4-vla/03-capstone-project.md`

## Dependencies

- Phase 1 tasks must be completed before Phase 2 tasks.
- Within Phase 1, T001 must be completed before T002, T003 before T004, and T005 before T006.
- Within Phase 2, tasks for a specific module depend on the corresponding directory creation task in Phase 1. For example, T007, T008, and T009 depend on T001.

## Parallel Execution Examples

- Tasks T001, T003, and T005 can be run in parallel.
- Once the directories are created, all the content file creation tasks in Phase 2 can be run in parallel.
