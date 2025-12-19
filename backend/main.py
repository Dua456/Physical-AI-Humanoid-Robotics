import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from contextlib import asynccontextmanager
from qdrant_client import QdrantClient
import google.generativeai as genai
from dotenv import load_dotenv
from database import get_qdrant_client

load_dotenv()

# --- Database Setup ---
try:
    from database import init_db, get_db_connection
except ImportError:
    def init_db(): pass
    def get_db_connection(): return None

# --- Configuration ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

COLLECTION_NAME = "textbook_rag"
qdrant_client = None
CHOSEN_MODEL = None # Global model variable

class ChatMessage(BaseModel):
    message: str

# --- Lifespan Manager ---
@asynccontextmanager
async def lifespan(app: FastAPI):
    global qdrant_client, CHOSEN_MODEL

    # 1. Initialize Qdrant
    print("Initializing Qdrant client...")
    qdrant_client = get_qdrant_client()
    
    # 2. ✅ UNIVERSAL MODEL SETTING (Ahmed Style)
    print("Finding available Gemini model...")
    try:
        available_models = [m.name for m in genai.list_models() if 'generateContent' in m.supported_generation_methods]
        # Pehle flash-latest try karo, warna koi bhi pehla model utha lo
        if 'models/gemini-1.5-flash-latest' in available_models:
            CHOSEN_MODEL = 'gemini-1.5-flash-latest'
        elif 'models/gemini-1.5-flash' in available_models:
            CHOSEN_MODEL = 'gemini-1.5-flash'
        else:
            CHOSEN_MODEL = available_models[0].replace('models/', '')
        print(f"✅ Using Model: {CHOSEN_MODEL}")
    except Exception as e:
        print(f"❌ Error finding model: {e}")
        CHOSEN_MODEL = "gemini-pro" # Fallback

    # 3. Database
    try:
        init_db()
    except Exception: pass

    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  )

@app.get("/")
def read_root():
    return {"status": f"Backend Active using {CHOSEN_MODEL}"}

@app.post("/api/chat")
async def chat_handler(chat_message: ChatMessage):
    user_query = chat_message.message.strip()

    if user_query.lower() in ["hi", "hello", "hey"]:
        return {"response": "Hello! I am your AI Assistant. Ask me anything about the textbook!"}

    try:
        # 1. Embedding
        emb = genai.embed_content(
            model="models/text-embedding-004",
            content=user_query,
            task_type="retrieval_query"
        )
        
        # 2. Qdrant Search
        search_results = qdrant_client.search(
            collection_name=COLLECTION_NAME, 
            query_vector=emb['embedding'], 
            limit=5
        )

        context = "\n\n".join([res.payload['text'] for res in search_results if res.payload])
        
        if not context:
            return {"response": "I couldn't find relevant info in the textbook."}

        # 3. Generate Answer (Using Chosen Model)
        model = genai.GenerativeModel(CHOSEN_MODEL)
        prompt = f"Context: {context}\n\nQuestion: {user_query}\nAnswer (3-4 sentences):"
        
        response = model.generate_content(prompt)
        return {"response": response.text.strip()}

    except Exception as e:
        print(f"Error: {e}")
        return {"response": "Technical glitch, please try again!"}