import requests
import json

def test_my_chatbot():
    # Local server ka address
    url = "http://127.0.0.1:8000/api/chat"
    
    # Sawal jo aap poochti hain
    payload = {
        "message": "What is Physical AI?"
    }
    
    headers = {
        "Content-Type": "application/json"
    }

    print(f"🚀 Sending question to chatbot: {payload['message']}")

    try:
        response = requests.post(url, data=json.dumps(payload), headers=headers)
        
        if response.status_code == 200:
            ai_answer = response.json().get("response")
            print("\n✅ AI Response:")
            print("-" * 30)
            print(ai_answer)
            print("-" * 30)
        else:
            print(f"❌ Error! Status Code: {response.status_code}")
            print(f"Details: {response.text}")
            
    except Exception as e:
        print(f"❌ Connection failed! Make sure your 'uvicorn main:app' is running.")
        print(f"Error details: {e}")

if __name__ == "__main__":
    test_my_chatbot()