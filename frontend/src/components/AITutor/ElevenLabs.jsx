// utils/speakWithElevenLabs.js
import axios from "axios";

const ELEVEN_LABS_API_KEY = "sk_b40f0eaa942f5b171359bacc54e37a94cbe481653e32dd21";
const VOICE_ID = "qSV5UqvHBC0Widy71Esh"; 

export const ElevenLabs = async (text) => {
    

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text: text,
        model_id: "eleven_monolingual_v1",
        "voice_settings": {
  "stability": 0.4,
  "similarity_boost": 0.8,
  "style": 0.75,
  "use_speaker_boost": true
}
      },
      {
        headers: {
          "xi-api-key": ELEVEN_LABS_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "blob",
      }
    );
console.log("Sending to ElevenLabs:", text);
    // Convert audio blob to audio and play
    const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (err) {
    console.error("Error in ElevenLabs API:", err);
  }
};