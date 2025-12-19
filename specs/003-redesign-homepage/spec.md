# Feature Specification: Redesign Homepage

**Feature Branch**: `003-redesign-homepage`
**Created**: 2025-12-14
**Status**: Draft
**Input**: User description: "Action: REDESIGN the Homepage to be High-End, Futuristsic, and 3D-Integrated. Please WRITE the code for `src/pages/index.tsx` and `src/pages/index.module.css` from scratch to achieve the following: **1. Hero Section Requirements (The Top Part):** - **Layout:** Split screen. Left side has Text, Right side has a 3D Robot. - **3D Engine:** Use `@splinetool/react-spline` to render the 3D scene. - **CRITICAL:** You MUST wrap the Spline component inside `@docusaurus/BrowserOnly` to prevent server-side rendering errors. - **Scene URL:** Use this 3D Robot scene: `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode` - **Typography:** The Main Heading ""The Physical AI Textbook"" must use a **Neon Gradient Effect** (Cyan to Blue). - **Background:** Pure Black or very dark grey to make the 3D element pop. **2. Curriculum Section Requirements (The Bottom Part):** - **Grid:** A 4-column grid below the hero section. - **Cards:** Create 4 Navigation Cards for Module 1, 2, 3, and 4. - **Style:** Use **Glassmorphism**. The cards should look like frosted glass (translucent, blur effect, thin white border) floating on the dark background. - **Interactivity:** Add a hover effect where the card lifts up and glows. **3. Execution:** - Implement the React logic in `index.tsx`. - Implement the CSS classes in `index.module.css`. - Ensure all links point to the correct docs paths (`/docs/module-1...` etc). GO!"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View High-End 3D Hero Section (Priority: P1)

As a user, I want to see a high-end, futuristic, and 3D-integrated hero section on the homepage, so that I am immediately engaged and understand the modern nature of the content.

**Why this priority**: The hero section is the first impression and critical for user engagement.

**Independent Test**: The homepage loads with a split-screen layout, text on the left, a 3D robot on the right, a neon gradient main heading, and a dark background.

**Acceptance Scenarios**:

1.  **Given** I navigate to the homepage, **When** the page loads, **Then** I see "The Physical AI Textbook" with a neon gradient effect.
2.  **Given** I navigate to the homepage, **When** the page loads, **Then** I see a 3D robot rendered on the right side of the hero section.
3.  **Given** I navigate to the homepage, **When** the page loads, **Then** the hero section has a pure black or very dark grey background.

---

### User Story 2 - Navigate through Curriculum Cards (Priority: P1)

As a user, I want to easily navigate to different modules using visually appealing glassmorphism cards below the hero section, so that I can quickly access the content I'm interested in.

**Why this priority**: Easy navigation is essential for content discovery and user experience.

**Independent Test**: A 4-column grid of glassmorphism-styled navigation cards is displayed below the hero section, with hover effects and correct links.

**Acceptance Scenarios**:

1.  **Given** I view the homepage below the hero section, **When** the page loads, **Then** I see a 4-column grid containing 4 navigation cards for Module 1, 2, 3, and 4.
2.  **Given** I view the navigation cards, **When** I hover over a card, **Then** the card lifts up and glows.
3.  **Given** I click on a Module card, **When** the link is followed, **Then** I am redirected to the correct documentation path (e.g., `/docs/module-1...`).

---

### Edge Cases

-   What happens if the Spline scene fails to load? (A fallback or loading indicator should be displayed, preventing a broken layout).
-   How does the layout adapt to different screen sizes? (Responsive design should ensure usability on various devices).

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The homepage MUST include a hero section with a split-screen layout.
-   **FR-002**: The left side of the hero section MUST display textual content.
-   **FR-003**: The right side of the hero section MUST display a 3D robot rendered using `@splinetool/react-spline`.
-   **FR-004**: The 3D Spline component MUST be wrapped inside `@docusaurus/BrowserOnly`.
-   **FR-005**: The Spline scene URL MUST be `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`.
-   **FR-006**: The main heading "The Physical AI Textbook" MUST have a neon gradient effect (Cyan to Blue).
-   **FR-007**: The hero section background MUST be pure black or very dark grey.
-   **FR-008**: The homepage MUST include a curriculum section below the hero section.
-   **FR-009**: The curriculum section MUST display navigation cards in a 4-column grid.
-   **FR-010**: There MUST be 4 navigation cards, one for each Module (1, 2, 3, 4).
-   **FR-011**: The navigation cards MUST be styled with a glassmorphism effect (translucent, blur, thin white border).
-   **FR-012**: The navigation cards MUST include a hover effect that makes the card lift up and glow.
-   **FR-013**: The navigation card links MUST point to the correct documentation paths (e.g., `/docs/module-1-ros2`, `/docs/02-module-2-digital-twin`).

### Key Entities *(include if feature involves data)*

-   **Homepage**: The main landing page of the Docusaurus site.
-   **Hero Section**: The top, visually prominent section of the homepage.
-   **Curriculum Section**: The section below the hero, displaying module navigation.
-   **Navigation Card**: A clickable UI element representing a module.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: The homepage loads without any server-side rendering errors related to the 3D component.
-   **SC-002**: The 3D robot model from the specified Spline URL is visible and rendered correctly on the homepage.
-   **SC-003**: The main heading displays the specified neon gradient effect.
-   **SC-004**: All 4 navigation cards are visible, correctly styled with glassmorphism, and responsive in a 4-column grid.
-   **SC-005**: Hovering over a navigation card triggers the specified lift and glow effect.
-   **SC-006**: Clicking each navigation card successfully redirects to its respective module documentation page.
-   **SC-007**: The visual design is perceived as high-end and futuristic by stakeholders.