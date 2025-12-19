# Implementation Plan: Backend & RAG Chatbot Module

## 1. Technical Context

This plan outlines the implementation of the Backend & RAG Chatbot Module, as detailed in the feature specification `specs/005-backend-rag-chatbot/spec.md`. The module will provide an intelligent layer for the Physical AI Textbook, enabling RAG-based question answering and contextual explanations.

**Key Technologies:**
- Language: Python 3.10+
- Framework: FastAPI
- Vector Database: Qdrant Cloud
- Relational Database: Neon Serverless Postgres
- AI Engine: OpenAI Agents SDK / ChatKit (GPT-4o-mini)

## 2. Constitution Check

- **Code Quality**: Adhere to Python best practices, including type hinting, docstrings, and clear, modular code structure.
- **Testing**: Implement unit and integration tests for all components, ensuring robust and reliable functionality.
- **Performance**: Optimize database queries and API endpoints to meet response time requirements (RAG Chat API < 3s, Contextual Explanation API < 2s).
- **Security**: Securely manage API keys and credentials using environment variables. Implement CORS policies as specified.
- **Architecture**: Maintain a clean separation of concerns between database, ingestion, and API layers.

## 3. Gates

- **Gate 1: Specification Approval**: The feature specification `specs/005-backend-rag-chatbot/spec.md` has been reviewed and approved. (Met)
- **Gate 2: Research & Design Completion**: All technical unknowns resolved, and core design artifacts (data models, API contracts) are defined. (Pending)
- **Gate 3: Core Feature Implementation**: All functional requirements for content ingestion, RAG chat, and contextual explanation are implemented. (Pending)
- **Gate 4: Testing & Validation**: All tests pass, and the system meets performance, scalability, and security NFRs. (Pending)

## 4. Phases

### Phase 0: Research & Initial Design [ ]

- [ ] Identify and document specific research areas for integrating FastAPI with Qdrant and Neon Postgres.
- [ ] Investigate best practices for managing OpenAI API keys and rate limits within a FastAPI application.
- [ ] Determine optimal chunking strategies for Docusaurus Markdown files, considering the token limits and retrieval effectiveness.
- [ ] Research and confirm the exact `psycopg2-binary` (or equivalent) dependency for Neon Postgres with Python.

### Phase 1: Environment Setup [ ]
  - [ ] Create `backend` directory in the project root.
  - [ ] Create `backend/requirements.txt` (fastapi, uvicorn, qdrant-client, openai, python-dotenv, psycopg2-binary).
  - [ ] Create `backend/.env` file structure for `OPENAI_API_KEY`, `QDRANT_URL`, `NEON_DB_URL`.
  - [ ] Create `backend/main.py` with a basic "Hello World" endpoint to verify the server runs.

### Phase 2: Database Layer [ ]
  - [ ] Create `backend/database.py` for handling connection to Neon Postgres, including connection pooling if necessary.
  - [ ] Implement database schema creation/migration logic for the `chat_history` table in Neon Postgres.
  - [ ] Setup Qdrant client connection logic in `backend/database.py`.

### Phase 3: Ingestion Engine [ ]
  - [ ] Create `backend/ingest.py`.
  - [ ] Implement logic to recursively scan the `../docs` directory for `.md` and `.mdx` files.
  - [ ] Implement text extraction and splitting logic into logical chunks (500-1000 tokens) from Markdown files.
  - [ ] Implement embedding generation using the OpenAI `text-embedding-3-small` model.
  - [ ] Implement upsert logic to add vectors and payloads to the Qdrant `textbook_rag` collection.

### Phase 4: API Development [ ]
  - [ ] Implement `POST /api/chat` endpoint in `backend/main.py`.
  - [ ] Integrate RAG logic: convert query to vector, search Qdrant, construct system prompt, generate answer with OpenAI.
  - [ ] Store user query and AI response in Neon Postgres `chat_history` table.
  - [ ] Implement `POST /api/explain` endpoint in `backend/main.py`.
  - [ ] Integrate direct LLM logic: send selected text to OpenAI with a tutor prompt.
  - [ ] Configure CORS to accept requests from `http://localhost:3000`.

### Phase 5: Testing and Integration [ ]
  - [ ] Implement unit tests for `backend/database.py`, `backend/ingest.py`, and API endpoints in `backend/main.py`.
  - [ ] Implement integration tests for the full RAG chat and contextual explanation flows.
  - [ ] Test API endpoints locally using `http://localhost:3000`.
  - [ ] Verify that sensitive keys are loaded correctly from `.env`.

## 5. Artifacts

- `specs/005-backend-rag-chatbot/plan.md` (this file)
- `backend/` directory with `main.py`, `ingest.py`, `database.py`, `requirements.txt`, `.env` structure
- OpenAPI schema for `api/chat` and `api/explain` endpoints (to be generated in Phase 0)
- `research.md` (to be generated in Phase 0)
- `data-model.md` (to be generated in Phase 1)