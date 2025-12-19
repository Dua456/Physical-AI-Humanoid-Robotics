import requests
import json

# Test the backend API
def test_backend():
    # Test the root endpoint
    try:
        response = requests.get("http://localhost:8001")
        print("Root endpoint response:", response.json())
    except Exception as e:
        print("Error connecting to root endpoint:", e)

    # Test the chat endpoint
    try:
        chat_data = {"message": "Hello"}
        response = requests.post("http://localhost:8001/api/chat", json=chat_data)
        print("Chat endpoint response:", response.json())
    except Exception as e:
        print("Error connecting to chat endpoint:", e)

if __name__ == "__main__":
    test_backend()