# Lesson 4.1: Voice-to-Action

## Introduction: Bridging Voice and Robotics

The ability for robots to understand and act upon spoken commands is a significant step towards more intuitive human-robot interaction (HRI). This involves converting human speech into text (Speech-to-Text), understanding the intent of that text (Natural Language Understanding), and then translating that intent into actionable robot commands.

OpenAI Whisper is a general-purpose speech recognition model that can transcribe audio into text. It is trained on a large dataset of diverse audio and is capable of robust speech recognition across various languages and domains.

## OpenAI Whisper for Speech-to-Text

Whisper can be used to accurately transcribe spoken commands, which can then be processed by other systems to generate robot actions.

### Key Features of Whisper:
- **Multilingual**: Transcribes in multiple languages and translates into English.
- **Robustness**: Handles various audio conditions (noise, accents, technical jargon).
- **Accuracy**: Achieves high accuracy on a wide range of speech inputs.

### Conceptual Workflow:

1.  **Audio Input**: A microphone captures spoken commands.
2.  **Whisper Transcription**: The audio is fed to the Whisper model, which outputs a text transcription.
3.  **Intent Recognition**: A Natural Language Understanding (NLU) component analyzes the text to extract the user's intent and any relevant parameters (e.g., "go to the kitchen" -> intent: `navigate`, parameter: `location=kitchen`).
4.  **Action Generation**: The recognized intent and parameters are translated into a sequence of robot actions or a ROS 2 command.

## Simple Example (Python with `openai-whisper` library)

This example demonstrates how to use the `openai-whisper` Python library to transcribe an audio file.

```python
import whisper
import os

def transcribe_audio(audio_path):
    """
    Transcribes an audio file using the OpenAI Whisper model.
    """
    if not os.path.exists(audio_path):
        print(f"Error: Audio file not found at {audio_path}")
        return None

    try:
        # Load the Whisper model (e.g., 'base', 'small', 'medium', 'large')
        # 'base' is a good starting point for quick transcription
        model = whisper.load_model("base")
        print(f"Transcribing audio from: {audio_path}")
        result = model.transcribe(audio_path)
        return result["text"]
    except Exception as e:
        print(f"An error occurred during transcription: {e}")
        return None

if __name__ == "__main__":
    # Create a dummy audio file for demonstration (requires pydub and soundfile)
    # In a real scenario, you'd have an actual .wav or .mp3 file
    try:
        from pydub import AudioSegment
        from pydub.generators import WhiteNoise
        
        # Generate 3 seconds of white noise
        noise = WhiteNoise().to_audio_segment(duration=3000)
        # Add a simple voice saying "Hello robot, go forward" (this is a placeholder and won't actually be spoken)
        # For a real test, you'd record your voice.
        
        # Create a dummy audio file named "command.wav"
        dummy_audio_path = "command.wav"
        noise.export(dummy_audio_path, format="wav")
        print(f"Created a dummy audio file: {dummy_audio_path}")

        # You would replace "command.wav" with your actual audio file
        transcription = transcribe_audio(dummy_audio_path)

        if transcription:
            print("\nTranscription:")
            print(transcription)
            # Example of simple intent recognition (very basic)
            if "go forward" in transcription.lower():
                print("Intent recognized: Move robot forward")
            elif "stop" in transcription.lower():
                print("Intent recognized: Stop robot")
            else:
                print("Intent: Unclear command")

        # Clean up the dummy audio file
        os.remove(dummy_audio_path)
        print(f"Cleaned up dummy audio file: {dummy_audio_path}")

    except ImportError:
        print("Please install pydub and soundfile to run the dummy audio generation:")
        print("pip install pydub soundfile")
        print("\nTo transcribe an existing audio file, run this script with your file path:")
        print("python your_script_name.py /path/to/your/audio.wav")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

```

### How to Use (Requires `openai-whisper` installation)

1.  **Install Whisper**:
    ```bash
    pip install -U openai-whisper
    ```
2.  **Prepare an audio file**: You'll need an audio file (e.g., `.wav`, `.mp3`) containing spoken commands. For testing, you can record your voice.
3.  **Run the script**:
    ```bash
    python your_script_name.py # If using the dummy audio generation
    # OR
    python your_script_name.py /path/to/your/actual_command.wav
    ```
This will output the transcribed text, which can then be used by subsequent robotics modules for action.
