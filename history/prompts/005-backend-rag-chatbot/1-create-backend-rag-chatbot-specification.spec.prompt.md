---
id: 1
title: Create Backend RAG Chatbot Specification
stage: spec
date: 2025-12-15
surface: agent
model: gemini-1.5-pro
feature: backend-rag-chatbot
branch: 005-backend-rag-chatbot
user: Minahil Fatima
command: /sp.specify
labels: [backend, rag, chatbot]
links:
  spec: specs/005-backend-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-backend-rag-chatbot/spec.md
  - specs/005-backend-rag-chatbot/checklists/requirements.md
tests:
  - none
---

## Prompt

# Project Specification: Backend & RAG Chatbot Module ## 1. Module Overview We are building the "Backend Module" for the Physical AI Textbook. This backend will serve as the intelligence layer, handling the RAG (Retrieval Augmented Generation) chatbot, database interactions, and AI processing. ## 2. Technology Stack - **Language:** Python 3.10+ - **Framework:** FastAPI (High-performance web framework) - **Vector Database:** Qdrant Cloud (for storing book content embeddings) - **Relational Database:** Neon Serverless Postgres (for chat history & user logs) - **AI Engine:** OpenAI Agents SDK / ChatKit (GPT-4o-mini) - **Authentication:** Better-Auth (Future integration) ## 3. Directory Structure All backend code must reside in a root-level folder named `backend/`. - `backend/main.py`: The FastAPI application entry point. - `backend/ingest.py`: Script to process Docusaurus Markdown files. - `backend/database.py`: Database connection logic (Neon & Qdrant). - `backend/models.py`: Pydantic models for request/response validation. ## 4. Core Features & Functional Requirements ### Feature A: Content Ingestion (ingest.py) - **Goal:** Make the book content searchable by AI. - **Logic:** 1. Recursively scan the `../docs` directory for `.md` and `.mdx` files. 2. Split text into logical chunks (approx 500-1000 tokens). 3. Generate embeddings using OpenAI (`text-embedding-3-small`). 4. Upsert vectors into a Qdrant collection named `textbook_rag`. ### Feature B: RAG Chat API (`POST /api/chat`) - **Goal:** Answer user questions based *strictly* on the book content. - **Logic:** 1. Receive `{ "message": "What is ROS 2?" }`. 2. Convert query to vector embedding. 3. Search Qdrant for top 3 most relevant text chunks. 4. Construct a System Prompt containing the retrieved context. 5. Generate answer using OpenAI. 6. **Requirement:** Store the User Query and AI Response in Neon Postgres (`chat_history` table). ### Feature C: Contextual Explanation (`POST /api/explain`) - **Goal:** Explain specific text selected by the user in the UI. - **Logic:** 1. Receive `{ "selected_text": "Code snippet or complex sentence..." }`. 2. Send directly to OpenAI with a prompt: "You are a tutor. Explain this specific text simply." 3. Bypass vector search for this specific feature. ## 5. Constraints & Configuration - **CORS:** Must accept requests from `http://localhost:3000` (Docusaurus Frontend). - **Environment:** All sensitive keys (`OPENAI_API_KEY`, `QDRANT_URL`, `NEON_DB_URL`) must be loaded from a `.env` file.

## Response snapshot

Feature 'backend-rag-chatbot' has been created. The specification is available at specs/005-backend-rag-chatbot/spec.md

## Outcome

- ✅ Impact: Created a new feature specification for the Backend RAG Chatbot module.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - `specs/005-backend-rag-chatbot/spec.md`
  - `specs/005-backend-rag-chatbot/checklists/requirements.md`
  - `history/prompts/005-backend-rag-chatbot/1-create-backend-rag-chatbot-specification.spec.prompt.md`
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: The process of creating the feature specification was smooth. The initial script for creating the feature failed, but I was able to recover and create the necessary files manually. The provided feature description was very detailed, which made it easy to create a comprehensive specification.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-new-feature.ps1` script failed due to an issue with argument parsing.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
