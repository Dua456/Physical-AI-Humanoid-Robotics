# Tasks: Integrate RAG Backend

This document outlines the tasks required to integrate the RAG backend with the Docusaurus frontend.

## Phase 1: Setup

*There are no setup tasks for this feature.*

## Phase 2: Foundational Tasks

*There are no foundational tasks for this feature.*

## Phase 3: User Story 1 - AI Chat Component

**Goal**: Implement a React component to interact with the RAG API.
**Independent Test Criteria**:
- The component renders an input field and a "Send" button.
- A POST request is sent to `http://127.0.0.1:8000/api/chat` on submit.
- The response from the backend is displayed.
- A loading state is handled.

### Implementation Tasks

- [ ] T001 [US1] Create the file `physical-ai-book/src/components/AIChat.js`.
- [ ] T002 [US1] In `physical-ai-book/src/components/AIChat.js`, write a functional React component named `AIChat`.
- [ ] T003 [US1] In `physical-ai-book/src/components/AIChat.js`, use the `useState` hook to manage `input`, `response`, and `loading` states.
- [ ] T004 [US1] In `physical-ai-book/src/components/AIChat.js`, add a form containing a text input for user messages and a "Send" button.
- [ ] T005 [US1] In `physical-ai-book/src/components/AIChat.js`, implement the form's submission handler to send a POST request to `http://127.0.0.1:8000/api/chat` with the body `{ "message": "user input" }`.
- [ ] T006 [US1] In `physical-ai-book/src/components/AIChat.js`, display the backend response below the input form and handle the loading state.
- [ ] T007 [US1] In `physical-ai-book/src/components/AIChat.js`, apply basic inline styles for a clean and user-friendly layout.

## Phase 4: User Story 2 - AI Demo Page

**Goal**: Create a new documentation page to host the AI Chat component.
**Independent Test Criteria**:
- A new page is created at `docs/ai-demo.mdx`.
- The page has the title "Talk to the Textbook".
- The `AIChat` component is successfully imported and rendered on the page.
- The page is listed in the sidebar at the first position.

### Implementation Tasks

- [ ] T008 [US2] Create the file `physical-ai-book/docs/ai-demo.mdx`.
- [ ] T009 [US2] In `physical-ai-book/docs/ai-demo.mdx`, add the frontmatter `sidebar_position: 1`.
- [ ] T010 [US2] In `physical-ai-book/docs/ai-demo.mdx`, add a main header: `## Talk to the Textbook`.
- [ ] T011 [US2] In `physical-ai-book/docs/ai-demo.mdx`, import the chat component with `import AIChat from '@site/src/components/AIChat';`.
- [ ] T012 [US2] In `physical-ai-book/docs/ai-demo.mdx`, render the `<AIChat />` component below the header.

## Dependencies

- **US2 is dependent on US1.** The `ai-demo.mdx` page cannot be fully implemented until the `AIChat` component is complete.

## Parallel Execution

- Tasks within **US1** should be executed sequentially.
- Tasks within **US2** can be executed after US1 is complete.

## Implementation Strategy

The implementation will follow these steps:
1.  **MVP First**: Complete all tasks for User Story 1 to create a functional chat component.
2.  **Incremental Delivery**: Complete all tasks for User Story 2 to integrate the component into the documentation site.
