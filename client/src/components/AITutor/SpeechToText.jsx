import { useState, useRef } from 'react';

export const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null); // persist between renders

  const initializeRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true; // ✅ allow longer speech
    recognition.lang = 'en-IN'; //hi-IN
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const result = Array.from(event.results)
        .map(r => r[0].transcript)
        .join(" ");
      setTranscript(result);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      stopListening();
    };

    recognition.onend = () => {
      setIsListening(false); // If you want to auto-restart, handle it here
    };

    recognitionRef.current = recognition;
  };

  const startListening = () => {
    if (!recognitionRef.current) initializeRecognition();
    recognitionRef.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };
  return { transcript, isListening, startListening, stopListening };
};
