# Tasks for Backend & RAG Chatbot Module

This document outlines the tasks required to implement the Backend & RAG Chatbot Module.

## Phase 1: Setup

- [x] T001 Create `backend` directory in the project root
- [x] T002 Create `backend/requirements.txt` with initial dependencies
- [x] T003 Create `backend/.env` file for environment variables
- [x] T004 Create `backend/main.py` with a basic FastAPI server

## Phase 2: Foundational

- [ ] T005 [P] Create `backend/database.py` to handle database connections
- [ ] T006 [P] Implement Neon Postgres connection logic in `backend/database.py`
- [ ] T007 [P] Implement Qdrant client connection logic in `backend/database.py`
- [ ] T008 [P] Create `backend/models.py` for Pydantic models

## Phase 3: User Story 1 - Content Ingestion

**Goal**: As an Educator, I want the book's content to be searchable so that the AI can use it to answer questions.

**Independent Test Criteria**:
- Run the ingestion script and verify that the `textbook_rag` collection in Qdrant is populated with vectors.

**Tasks**:

- [ ] T009 [US1] Create `backend/ingest.py`
- [ ] T010 [US1] Implement logic to recursively scan `docs/` for `.md` and `.mdx` files in `backend/ingest.py`
- [ ] T011 [US1] Implement text chunking logic in `backend/ingest.py`
- [ ] T012 [US1] Implement embedding generation using OpenAI in `backend/ingest.py`
- [ ] T013 [US1] Implement vector upsert to Qdrant in `backend/ingest.py`

## Phase 4: User Story 2 - RAG Chat API

**Goal**: As a Student, I want to ask questions about the book's content so that I can quickly clarify my doubts.

**Independent Test Criteria**:
- Send a `POST` request to `/api/chat` with a question and verify that the response is a relevant answer from the book and that the chat history is saved to the database.

**Tasks**:

- [ ] T014 [US2] Implement `POST /api/chat` endpoint in `backend/main.py`
- [ ] T015 [US2] Implement query vectorization in the `/api/chat` endpoint
- [ ] T016 [US2] Implement Qdrant search logic in the `/api/chat` endpoint
- [ ] T017 [US2] Implement system prompt construction in the `/api/chat` endpoint
- [ ] T018 [US2] Implement answer generation with OpenAI in the `/api/chat` endpoint
- [ ] T019 [US2] Implement chat history storage in Neon Postgres in the `/api/chat` endpoint

## Phase 5: User Story 3 - Contextual Explanation API

**Goal**: As a Student, I want to get an explanation for a specific piece of text so that I can understand complex concepts better.

**Independent Test Criteria**:
- Send a `POST` request to `/api/explain` with a piece of text and verify that the response is a simplified explanation.

**Tasks**:

- [ ] T020 [US3] Implement `POST /api/explain` endpoint in `backend/main.py`
- [ ] T021 [US3] Implement direct call to OpenAI for explanation in the `/api/explain` endpoint

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T022 Implement comprehensive unit tests for all modules
- [ ] T023 Implement integration tests for the full API flows
- [ ] T024 Document the API endpoints using OpenAPI

## Dependencies

- User Story 2 is dependent on User Story 1.
- User Story 3 is independent.

## Parallel Execution

- Tasks within Phase 2 can be executed in parallel.
- Tasks within each User Story phase can be parallelized to some extent (e.g., writing tests and implementation code).

## Implementation Strategy

The implementation will follow a phased approach, starting with the foundational setup and then implementing each user story incrementally. The MVP will consist of User Story 1 and User Story 2, providing the core RAG functionality. User Story 3 can be implemented as a separate feature.
