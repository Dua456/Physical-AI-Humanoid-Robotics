# Phase 3: Ingestion Engine

- [ ] Create `backend/ingest.py`.
- [ ] Implement logic to recursively scan the `../docs` directory for `.md` and `.mdx` files.
- [ ] Implement text extraction and splitting logic into logical chunks (500-1000 tokens) from Markdown files.
- [ ] Implement embedding generation using the OpenAI `text-embedding-3-small` model.
- [ ] Implement upsert logic to add vectors and payloads to the Qdrant `textbook_rag` collection.
