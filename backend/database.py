from dotenv import load_dotenv
import os
import psycopg2
from qdrant_client import QdrantClient

load_dotenv()

def get_qdrant_client():
    """Initializes and returns a QdrantClient instance."""
    qdrant_url = os.getenv("QDRANT_URL")
    qdrant_api_key = os.getenv("QDRANT_API_KEY")

    # Use QDRANT_URL if provided, otherwise use local mode
    if qdrant_url and qdrant_url.strip():
        return QdrantClient(
            url=qdrant_url,
            api_key=qdrant_api_key,
            timeout=60
        )
    else:
        # Use local mode with a local path
        return QdrantClient(path="./qdrant_data")

def get_db_connection():
    """Establishes and returns a connection to the Neon database."""
    conn = psycopg2.connect(os.getenv("NEON_DB_URL"))
    return conn

def init_db():
    """Initializes the database by creating the chat_history table if it doesn't exist."""
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS chat_history (
            id SERIAL PRIMARY KEY,
            user_query TEXT NOT NULL,
            ai_response TEXT NOT NULL,
            timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    """)
    conn.commit()
    cur.close()
    conn.close()

qdrant_client = get_qdrant_client()
