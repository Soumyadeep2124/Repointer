import React, { useState, useEffect } from 'react';
import { useSpeechToText } from './hooks/useSpeechToText';

const VoiceAssistant = () => {
  const { transcript, startListening, isListening } = useSpeechToText();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleAIFlow = async () => {
      if (transcript) {
        setLoading(true);
        const geminiResponse = await getGeminiResponse(transcript);
        await speakWithElevenLabs(geminiResponse);
        setLoading(false);
      }
    };
    handleAIFlow();
  }, [transcript]);

  return (
    <div>
      <button
        onClick={startListening}
        disabled={isListening || loading}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg"
      >
        {isListening ? "Listening..." : loading ? "Processing..." : "🎤 Ask AI"}
      </button>
    </div>
  );
};

export default VoiceAssistant;
