---
id: 7
title: Refactor Backend API to Use Local Embedding Model
stage: refactor
date: 2025-12-15
surface: agent
model: gemini-1.5-pro
feature: backend-rag-chatbot
branch: 005-backend-rag-chatbot
user: Minahil Fatima
command: /sp.tasks
labels: [backend, rag, chatbot, sentence-transformers, api]
links:
  spec: specs/005-backend-rag-chatbot/spec.md
  plan: specs/005-backend-rag-chatbot/plan.md
  tasks: specs/005-backend-rag-chatbot/tasks.md
  ticket: null
  adr: null
  pr: null
files:
  - backend/main.py
tests:
  - none
---

## Prompt

/sp.tasks @workspace My OpenAI quota is exceeded. I need to switch the Backend API to use the FREE local embedding model. **IMMEDIATE ACTION:** Rewrite `backend/main.py` completely to implement the RAG Chat API using `sentence-transformers` instead of OpenAI. **Requirements for the new `main.py`:** 1. **Imports:** - `FastAPI`, `HTTPException`, `pydantic` models. - `sentence_transformers` (SentenceTransformer). - `qdrant_client`. - `database` (init_db, get_db_connection). - `contextlib` (asynccontextmanager). 2. **Lifespan Manager:** - Use `@asynccontextmanager` to load the `SentenceTransformer('all-MiniLM-L6-v2')` model ONLY ONCE when server starts (Global variable). - Also run `init_db()` on startup. 3. **API Endpoint `POST /api/chat`:** - Input: JSON `{ "message": "your question" }`. - Logic: 1. Encode the user's message using the global `model.encode(message)`. 2. Search Qdrant collection `textbook_rag` for top 3 similar chunks. 3. **Construct Response:** Since we don't have an LLM, format the response as: "Based on the textbook, here is the relevant info:\n\n" + (Join the text of the top 3 results). 4. Save the Query and Response to Postgres `chat_history`. - Return: `{ "response": "..." }`. 4. **CORS:** Keep the CORS middleware for `http://localhost:3000`. Write the complete functional code.

## Response snapshot

Successfully overwrote file: D:\MINAHIL\GIAIC\Hackathon\backend\main.py.

## Outcome

- ✅ Impact: Refactored the backend API to use a local sentence-transformer model for the RAG chat functionality.
- 🧪 Tests: No tests were run.
- 📁 Files:
  - `backend/main.py`
  - `history/prompts/005-backend-rag-chatbot/7-refactor-backend-api-to-use-local-embedding-model.refactor.prompt.md`
- 🔁 Next prompts: /sp.implement
- 🧠 Reflection: The backend API was successfully refactored to use a local embedding model. This completes the switch from OpenAI for the core RAG functionality.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
