# Tasks: Upgrade Chatbot UI to Floating Widget

This document outlines the tasks required to transform the AI Chatbot into a global, floating widget similar to Intercom.

## Phase 1: Setup

*There are no setup tasks for this feature.*

## Phase 2: Foundational Tasks

*There are no foundational tasks for this feature.*

## Phase 3: User Story 1 - Refactor AI Chat Component into a Floating Widget

**Goal**: Convert the static chat block into a floating button that toggles a popup chat window.
**Independent Test Criteria**:
- A floating button is visible in the bottom-right corner.
- Clicking the button opens a styled chat window (approx. 350x500px).
- The chat window has a header with a functional "Close" button.
- User messages are styled as bubbles on the right (blue/green), and AI messages are on the left (gray).
- The existing chat API communication logic remains functional.

### Implementation Tasks

- [ ] T001 [US1] In `physical-ai-book/src/components/AIChat.js`, introduce a state variable (e.g., `isChatOpen`) to manage the visibility of the chat popup.
- [ ] T002 [US1] In `physical-ai-book/src/components/AIChat.js`, redesign the component to render a floating action button fixed to the bottom-right of the viewport.
- [ ] T003 [US1] In `physical-ai-book/src/components/AIChat.js`, implement the conditional rendering of the chat window based on the `isChatOpen` state.
- [ ] T004 [US1] In `physical-ai-book/src/components/AIChat.js`, structure the chat window with a header containing a title and a "Close" button, a message display area, and an input form at the bottom.
- [ ] T005 [US1] In `physical-ai-book/src/components/AIChat.js`, refactor the state to hold a list of message objects (e.g., `{ text: string, sender: 'user' | 'ai' }`) to facilitate bubble styling.
- [ ] T006 [US1] In `physical-ai-book/src/components/AIChat.js`, apply inline styles or CSS to display messages as chat bubbles, with user messages aligned right and AI messages aligned left.
- [ ] T007 [US1] In `physical-ai-book/src/components/AIChat.js`, ensure the message display area is scrollable when content overflows.

## Phase 4: User Story 2 - Integrate Chat Widget Globally

**Goal**: Ensure the floating chat widget is available on every page of the Docusaurus site by swizzling the Layout component.
**Independent Test Criteria**:
- The floating chat button appears on both the homepage and other documentation pages.
- The original site layout and functionality remain intact.
- The old, static chat component is no longer rendered on the `ai-demo.mdx` page.

### Implementation Tasks

- [ ] T008 [US2] Create the directory `physical-ai-book/src/theme/Layout`.
- [ ] T009 [US2] Create the file `physical-ai-book/src/theme/Layout/index.js`.
- [ ] T010 [US2] In `physical-ai-book/src/theme/Layout/index.js`, add the necessary imports: `React`, `Layout from '@theme-original/Layout'`, and `AIChat from '@site/src/components/AIChat'`.
- [ ] T011 [US2] In `physical-ai-book/src/theme/Layout/index.js`, define and export a `LayoutWrapper` component that renders the original `<Layout {...props} />` and the `<AIChat />` component side-by-side using a React Fragment.
- [ ] T012 [US2] In `physical-ai-book/docs/ai-demo.mdx`, remove the explicit import and rendering of the `<AIChat />` component to prevent duplication.

## Dependencies

- **US2 is dependent on US1.** The global layout wrapper requires the refactored floating `AIChat` component to be complete.

## Parallel Execution

- Tasks within **US1** should be executed sequentially.
- Tasks within **US2** should be executed sequentially after US1 is complete.

## Implementation Strategy

1.  **Component Refactor**: First, complete all tasks for User Story 1 to rebuild the `AIChat.js` component as a floating widget.
2.  **Global Integration**: Once the component is ready, complete User Story 2 to inject it into the global site layout.
3.  **Cleanup**: Finally, remove the old component from the `ai-demo.mdx` page.
