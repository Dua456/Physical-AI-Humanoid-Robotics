# Feature Specification: Backend & RAG Chatbot Module

## 1. Introduction & Business Value

**1.1. Feature Overview**
This feature introduces a backend module for the Physical AI Textbook. The backend will power a Retrieval Augmented Generation (RAG) chatbot, enabling users to ask questions and receive answers based on the book's content. It will also provide contextual explanations for selected text.

**1.2. Business Value**
This feature will significantly enhance the learning experience by providing an interactive way for users to engage with the textbook content. It will help users to quickly find information and clarify concepts, leading to a deeper understanding of the material.

**1.3. User Personas**
- **Student:** A learner using the Physical AI Textbook to study and understand complex topics.
- **Educator:** A teacher or instructor using the textbook as a resource for their course.

## 2. User Stories & Scenarios

**2.1. User Stories**

*   **As a Student, I want to ask questions about the book's content so that I can quickly clarify my doubts.**
*   **As a Student, I want to get an explanation for a specific piece of text so that I can understand complex concepts better.**
*   **As an Educator, I want my students to be able to interact with the book's content in a conversational way so that they can learn more effectively.**

**2.2. User Scenarios**

*   **Scenario 1: Asking a question**
    1.  The user opens the chatbot interface.
    2.  The user types a question, e.g., "What is ROS 2?".
    3.  The chatbot returns a concise answer based on the book's content.

*   **Scenario 2: Getting an explanation**
    1.  The user highlights a piece of text in the textbook.
    2.  The user clicks on an "Explain" button.
    3.  The chatbot provides a simplified explanation of the selected text.

## 3. Functional Requirements

**3.1. Content Ingestion**
- The system must be able to recursively scan the `../docs` directory for `.md` and `.mdx` files.
- The system must split the text from the files into logical chunks (approximately 500-1000 tokens).
- The system must generate embeddings for the text chunks using the OpenAI `text-embedding-3-small` model.
- The system must upsert the vectors into a Qdrant collection named `textbook_rag`.

**3.2. RAG Chat API (`POST /api/chat`)**
- The API must accept a JSON object with a "message" field.
- The API must convert the user's query into a vector embedding.
- The API must search the Qdrant `textbook_rag` collection for the top 3 most relevant text chunks.
- The API must construct a system prompt containing the retrieved context.
- The API must generate an answer using the OpenAI `GPT-4o-mini` model.
- The API must store the user query and the AI response in a Neon Postgres `chat_history` table.

**3.3. Contextual Explanation API (`POST /api/explain`)**
- The API must accept a JSON object with a "selected_text" field.
- The API must send the selected text directly to the OpenAI `GPT-4o-mini` model with a prompt to explain the text simply.
- This feature must bypass the vector search.

**3.4. Configuration**
- The system must accept requests from `http://localhost:3000` (CORS).
- All sensitive keys (e.g., `OPENAI_API_KEY`, `QDRANT_URL`, `NEON_DB_URL`) must be loaded from a `.env` file.

## 4. Non-Functional Requirements

**4.1. Performance**
- The RAG Chat API should respond to user queries within 3 seconds.
- The Contextual Explanation API should respond within 2 seconds.

**4.2. Scalability**
- The system should be able to handle at least 100 concurrent users.

## 5. Key Entities & Data Model

**5.1. Qdrant Collection**
- **`textbook_rag`**:
    - **vector**: The text embedding.
    - **payload**: The original text chunk.

**5.2. Neon Postgres Table**
- **`chat_history`**:
    - `id`: Unique identifier (UUID).
    - `user_query`: The user's question (TEXT).
    - `ai_response`: The AI's answer (TEXT).
    - `created_at`: Timestamp (TIMESTAMPTZ).

## 6. Assumptions & Constraints

**6.1. Assumptions**
- The Docusaurus content is located in the `../docs` directory relative to the backend.
- The user has access to OpenAI, Qdrant, and Neon credentials.

**6.2. Constraints**
- The backend will be written in Python 3.10+ using the FastAPI framework.
- The system will use Qdrant Cloud for the vector database and Neon Serverless Postgres for the relational database.
- The AI engine will be OpenAI's `GPT-4o-mini` model.

## 7. Success Criteria

- **95% of user questions are answered with relevant information from the textbook.**
- **90% of users find the contextual explanations helpful.**
- **The RAG Chat API has an average response time of less than 3 seconds.**
- **The system maintains 99.9% uptime.**