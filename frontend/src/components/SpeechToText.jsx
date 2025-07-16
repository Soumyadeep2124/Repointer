import { useState } from 'react';

export const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  let recognition;

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      stopListening();
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      stopListening();
    };
    recognition.start();
  };

  const stopListening = () => {
    if (recognition) recognition.stop();
    setIsListening(false);
  };

  return { transcript, isListening, startListening };
};
