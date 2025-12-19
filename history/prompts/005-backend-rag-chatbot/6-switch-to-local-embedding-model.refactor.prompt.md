---
id: 6
title: Switch to Local Embedding Model
stage: refactor
date: 2025-12-15
surface: agent
model: gemini-1.5-pro
feature: backend-rag-chatbot
branch: 005-backend-rag-chatbot
user: Minahil Fatima
command: /sp.tasks
labels: [backend, rag, chatbot, sentence-transformers]
links:
  spec: specs/005-backend-rag-chatbot/spec.md
  plan: specs/005-backend-rag-chatbot/plan.md
  tasks: specs/005-backend-rag-chatbot/tasks.md
  ticket: null
  adr: null
  pr: null
files:
  - backend/ingest.py
  - backend/requirements.txt
tests:
  - none
---

## Prompt

/sp.tasks @workspace My OpenAI quota is exceeded. I need to switch to a FREE local embedding model. **IMMEDIATE ACTION:** Rewrite `backend/ingest.py` completely to use `sentence-transformers` instead of OpenAI. **Requirements for the new code:** 1. **Imports:** Import `SentenceTransformer` from `sentence_transformers`. Remove `openai`. 2. **Setup:** - Initialize `model = SentenceTransformer('all-MiniLM-L6-v2')`. - Keep Qdrant client setup as is. 3. **Collection Logic (CRITICAL):** - The new model produces vectors of size **384**. - The script MUST delete/recreate the `textbook_rag` collection with `size=384` and `distance=Cosine`. 4. **Processing Logic:** - Instead of `openai.embeddings.create`, use `model.encode(chunk_text)`. - Convert the result to a list (`embedding.tolist()`) before uploading to Qdrant. - Keep the chunking and Qdrant upload logic same. Execute this rewrite immediately.

## Response snapshot

Successfully overwrote file: D:\MINAHIL\GIAIC\Hackathon\backend\ingest.py.
Successfully modified file: D:\MINAHIL\GIAIC\Hackathon\backend\requirements.txt (1 replacements).

## Outcome

- ✅ Impact: Switched the ingestion engine to use a local sentence-transformer model instead of OpenAI.
- 🧪 Tests: No tests were run.
- 📁 Files:
  - `backend/ingest.py`
  - `backend/requirements.txt`
  - `history/prompts/005-backend-rag-chatbot/6-switch-to-local-embedding-model.refactor.prompt.md`
- 🔁 Next prompts: /sp.implement
- 🧠 Reflection: The ingestion engine was successfully refactored to use a local embedding model. This will avoid OpenAI quota issues.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
