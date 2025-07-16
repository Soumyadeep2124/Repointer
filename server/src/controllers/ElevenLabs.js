// utils/speakWithElevenLabs.js
import axios from "axios";

const ELEVEN_LABS_API_KEY = "YOUR_ELEVEN_LABS_API_KEY";
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // Replace with desired voice

export const speakWithElevenLabs = async (text) => {
  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text: text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          "xi-api-key": ELEVEN_LABS_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "blob",
      }
    );

    // Convert audio blob to audio and play
    const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (err) {
    console.error("Error in ElevenLabs API:", err);
  }
};

