# Implementation Plan: Redesign Homepage

**Branch**: `003-redesign-homepage` | **Date**: 2025-12-14 | **Spec**: [specs/003-redesign-homepage/spec.md](spec.md)
**Input**: Feature specification from `specs/003-redesign-homepage/spec.md`

## Summary

This plan outlines the implementation steps for redesigning the Docusaurus homepage. The redesign focuses on creating a high-end, futuristic, and 3D-integrated user experience. Key components include a split-screen hero section featuring a 3D robot model rendered via Spline, a neon gradient main heading, and a dark background. Additionally, a curriculum section will be implemented below the hero, showcasing module navigation cards with a glassmorphism design and interactive hover effects.

## Technical Context

**Language/Version**: TypeScript/React, CSS
**Primary Dependencies**: React, Docusaurus, `@splinetool/react-spline`
**Storage**: Git repository, local file system
**Testing**: Manual verification of visual layout, 3D component rendering, CSS effects, and link navigation.
**Target Platform**: Web (Docusaurus site)
**Project Type**: Single project (documentation website)
**Performance Goals**: Smooth 3D rendering (aim for 60 FPS where possible), fast initial page load times for non-3D elements.
**Constraints**: Must operate within the Docusaurus framework. The 3D component must be wrapped in `@docusaurus/BrowserOnly` to prevent server-side rendering issues. The design must be responsive across various screen sizes.
**Scale/Scope**: Homepage (`src/pages/index.tsx` and `src/pages/index.module.css`) only.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Hands-On First:** The redesign enhances the user's initial experience with the "hands-on" nature of the book through visually engaging elements and improved content discovery.
*   [x] **Beginner-Friendly Content:** The redesign focuses on improving content access through clear and visually distinct navigation cards, making it easier for beginners to find relevant modules.
*   [x] **Docusaurus for Documentation:** The implementation directly targets and enhances the Docusaurus documentation site's homepage.

## Project Structure

### Documentation (this feature)

```text
specs/003-redesign-homepage/
├── plan.md              # This file (output of /sp.plan)
├── research.md          # (N/A for this feature)
├── data-model.md        # (N/A for this feature)
├── quickstart.md        # (N/A for this feature)
├── contracts/           # (N/A for this feature)
└── tasks.md             # (output of /sp.tasks)
```

### Source Code (repository root)

The implementation will modify the following files:

```text
physical-ai-book/
└── src/
    └── pages/
        ├── index.tsx           # Main React component for the homepage
        └── index.module.css    # CSS modules for styling the homepage
```

**Structure Decision**: The changes are confined to the existing Docusaurus homepage structure, leveraging its React-based page system and CSS modules for styling.

## Implementation Phases

### Phase 1: Environment Setup & Core Components

1.  **Install Spline Component**: Add `@splinetool/react-spline` dependency to `physical-ai-book/package.json` and install.
2.  **Basic Homepage Structure**: Create a minimal React component in `physical-ai-book/src/pages/index.tsx` to set up the main layout (hero and curriculum sections).
3.  **Core Styling**: Create initial styles in `physical-ai-book/src/pages/index.module.css` for the overall page structure and dark background.

### Phase 2: Hero Section Implementation

1.  **Split-Screen Layout**: Implement the CSS for the split-screen layout in `physical-ai-book/src/pages/index.module.css`.
2.  **3D Robot Integration**: Integrate `@splinetool/react-spline` into `physical-ai-book/src/pages/index.tsx` for the 3D robot, ensuring it's wrapped in `@docusaurus/BrowserOnly`.
3.  **Neon Gradient Heading**: Implement the "The Physical AI Textbook" heading with the specified neon gradient effect in `physical-ai-book/src/pages/index.tsx` and `physical-ai-book/src/pages/index.module.css`.

### Phase 3: Curriculum Section Implementation

1.  **4-Column Grid**: Implement the CSS for the 4-column grid in `physical-ai-book/src/pages/index.module.css`.
2.  **Navigation Cards**: Create React components for the 4 navigation cards (Module 1, 2, 3, 4) in `physical-ai-book/src/pages/index.tsx`.
3.  **Glassmorphism Style**: Implement the Glassmorphism CSS for the cards in `physical-ai-book/src/pages/index.module.css`.
4.  **Hover Effect**: Implement the lift and glow hover effect for the cards in `physical-ai-book/src/pages/index.module.css`.
5.  **Link Integration**: Ensure correct documentation paths are used for each navigation card's link in `physical-ai-book/src/pages/index.tsx`.