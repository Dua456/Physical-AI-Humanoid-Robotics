# Implementation Plan: Expand AI Book with Modules 2, 3, and 4

**Branch**: `main` | **Date**: 2025-12-14 | **Spec**: [specs/002-add-book-modules/spec.md](specs/002-add-book-modules/spec.md)
**Input**: Feature specification from `specs/002-add-book-modules/spec.md`

## Summary

This plan outlines the steps to expand the Physical AI book by adding three new modules: "Module 2: The Digital Twin," "Module 3: The AI-Robot Brain," and "Module 4: Vision-Language-Action (VLA)." The work involves creating the necessary directory structure, category configuration files for the Docusaurus sidebar, and placeholder markdown files for each new lesson.

## Technical Context

**Language/Version**: Markdown
**Primary Dependencies**: Docusaurus
**Storage**: Git repository / local filesystem
**Testing**: Manual verification of generated files and a successful Docusaurus build.
**Target Platform**: Web (Docusaurus site)
**Project Type**: Single project (documentation)
**Performance Goals**: N/A
**Constraints**: Must adhere to Docusaurus project structure.
**Scale/Scope**: Addition of 3 modules and 9 lesson files.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Hands-On First:** The plan is to create the foundational structure for hands-on, project-based tutorials.
*   [x] **Beginner-Friendly Content:** The structure will house content designed to be accessible to beginners.
*   [x] **Docusaurus for Documentation:** The entire implementation is focused on adding content to the existing Docusaurus site.

## Project Structure

### Documentation (this feature)

The plan will create the following structure within the `physical-ai-book/docs/` directory:

```text
physical-ai-book/docs/
├── 02-module-2-digital-twin/
│   ├── _category_.json
│   ├── 01-physics-in-gazebo.md
│   ├── 02-unity-for-robotics.md
│   └── 03-simulating-sensors.md
├── 03-module-3-isaac/
│   ├── _category_.json
│   ├── 01-isaac-sim-intro.md
│   ├── 02-isaac-ros-vslam.md
│   └── 03-nav2-for-humanoids.md
└── 04-module-4-vla/
    ├── _category_.json
    ├── 01-voice-to-action.md
    ├── 02-cognitive-planning.md
    └── 03-capstone-project.md
```

**Structure Decision**: This structure follows the established pattern from Module 1, ensuring consistency and proper integration with the Docusaurus sidebar navigation.

## Implementation Phases

### Phase 1: Setup and Scaffolding

1.  **Create Module 2 Directory**: Create the folder `physical-ai-book/docs/02-module-2-digital-twin/`.
2.  **Create Module 2 Category File**: Create `physical-ai-book/docs/02-module-2-digital-twin/_category_.json` with the label "Module 2: The Digital Twin".
3.  **Create Module 3 Directory**: Create the folder `physical-ai-book/docs/03-module-3-isaac/`.
4.  **Create Module 3 Category File**: Create `physical-ai-book/docs/03-module-3-isaac/_category_.json` with the label "Module 3: The AI-Robot Brain".
5.  **Create Module 4 Directory**: Create the folder `physical-ai-book/docs/04-module-4-vla/`.
6.  **Create Module 4 Category File**: Create `physical-ai-book/docs/04-module-4-vla/_category_.json` with the label "Module 4: Vision-Language-Action".

### Phase 2: Content File Creation

1.  **Create Module 2 Lessons**: Create the following empty markdown files inside `physical-ai-book/docs/02-module-2-digital-twin/`:
    - `01-physics-in-gazebo.md`
    - `02-unity-for-robotics.md`
    - `03-simulating-sensors.md`
2.  **Create Module 3 Lessons**: Create the following empty markdown files inside `physical-ai-book/docs/03-module-3-isaac/`:
    - `01-isaac-sim-intro.md`
    - `02-isaac-ros-vslam.md`
    - `03-nav2-for-humanoids.md`
3.  **Create Module 4 Lessons**: Create the following empty markdown files inside `physical-ai-book/docs/04-module-4-vla/`:
    - `01-voice-to-action.md`
    - `02-cognitive-planning.md`
    - `03-capstone-project.md`
