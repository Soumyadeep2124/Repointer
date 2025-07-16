import React, { useEffect, useState } from "react";
import { SpeechToText } from "./SpeechToText";
import axiosClient from "../../utils/axiosClient";
import { ElevenLabs } from "./ElevenLabs";

const QuestionAI = () => {

    const cleanMarkdown = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')        // Bold (**text**)
    .replace(/\*(.*?)\*/g, '$1')            // Italic (*text*)
    .replace(/__(.*?)__/g, '$1')            // Underline (__text__)
    .replace(/`([^`]*)`/g, '$1')            // Inline code `text`
    .replace(/~~(.*?)~~/g, '$1')            // Strikethrough ~~text~~
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')     // Links [text](url)
    .replace(/!\[.*?\]\(.*?\)/g, '')        // Images ![alt](url)
    .replace(/#+\s?(.*)/g, '$1')            // Headers # Heading
    .replace(/>\s?(.*)/g, '$1')             // Blockquotes > quote
    .replace(/[*`~_#>\[\]]/g, '')           // Residual markdown characters
    .trim();
};

  const { transcript, isListening, startListening, stopListening } = SpeechToText();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (transcript) {
      sendToGemini(transcript);
    }
  }, [transcript]);

  const sendToGemini = async (text) => {
    try {
      setLoading(true); 
      const response = await axiosClient.post("/ai/question", {
        messages: [{ role: "user", parts: [text] }],
      });

      const aiResponse = response.data.message;
      console.log("Gemini Response:", aiResponse);
      const cleanedText = cleanMarkdown(aiResponse);

      await ElevenLabs(cleanedText);
    } 
    catch (error) {
    alert("🚨 Server is busy. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-6 bg-gradient-to-br from-[#0e0f1a] to-[#1a1c2b] border border-white/10 rounded-2xl shadow-[0_0_30px_2px_rgba(251,146,60,0.05)]">
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 border-1 rounded-2xl">
          <div className="text-white rounded-full p-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 14.25c-2.485 0-4.5-2.015-4.5-4.5S9.515 5.25 12 5.25s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0 0
                   c-3.038 0-5.5 1.791-5.5 4v.75a.75.75 0 00.75.75h9.5a.75.75 0 00.75-.75v-.75
                   c0-2.209-2.462-4-5.5-4z" />
            </svg>
          </div>
          <h2 className="text-white font-bold text-l pr-5">Ask Avanta</h2>
        </div>

        <div>
          <button
            disabled={loading}
            onClick={() => {
              if (isListening) stopListening();
              else startListening();
            }}
            className={`flex items-center gap-2 px-2 py-2 rounded-lg font-medium text-white transition ${
              loading
                ? "bg-orange-500 animate-pulse cursor-not-allowed"
                : isListening
                ? "bg-red-500 hover:bg-red-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {loading ? (
              "Thinking..."
            ) : isListening ? (
              <>
                {/* Mic animation */}
                <div className="relative w-4 h-4">
                  <div className="absolute animate-ping w-4 h-4 bg-white rounded-full opacity-75" />
                  <div className="relative w-4 h-4 bg-white rounded-full" />
                </div>
                Stop
              </>
            ) : (
              " Start"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAI;

