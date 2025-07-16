import React, { useState } from "react";
import { FiPlay, FiPause, FiRotateCcw } from "react-icons/fi";

const SearchingControls = ({
  array,
  type,
  dsaConfigMap,
  setSteps,
  setCurrentStep,
  setLogs,
  setIsPlaying,
  setArray,
  setInput,
  setHighlight,
}) => {
  const [localTarget, setLocalTarget] = useState("");
  const [confirmedTarget, setConfirmedTarget] = useState(null); // this stores confirmed value
  const [message, setMessage] = useState("");

  const handleTargetSelect = () => {
    const parsedTarget = Number(localTarget);
    if (!isNaN(parsedTarget)) {
      setConfirmedTarget(parsedTarget);
      setMessage(`🎯 Target value "${parsedTarget}" selected`);
    } else {
      setMessage("❌ Please enter a valid number");
    }
  };

  const handlePlay = () => {
    if (confirmedTarget !== null && dsaConfigMap[type]?.getSteps) {
      const steps = dsaConfigMap[type].getSteps(array, confirmedTarget);
      setSteps(steps);
      setCurrentStep(0);
      setLogs([]);
      setHighlight([]);
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    const defaultArray = [5, 2, 8, 1, 9, 3];
    setArray(defaultArray);
    setInput(defaultArray.join(", "));
    setSteps([]);
    setLogs([]);
    setIsPlaying(false);
    setHighlight([]);
    setCurrentStep(0);
    setLocalTarget("");
    setConfirmedTarget(null);
    setMessage("");
  };

  return (
    <div className="w-full">
      {/* Target Input + Select Button */}
      <div className="flex gap-2 mb-2">
        <input
          type="number"
          placeholder="Enter Target"
          value={localTarget}
          onChange={(e) => setLocalTarget(e.target.value)}
          className="flex-1 bg-[#10131e] px-4 py-2 rounded-xl border border-[#2c2f36] text-white"
        />
        <button
          onClick={handleTargetSelect}
          className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm hover:bg-orange-600 transition"
        >
          Select Target
        </button>
      </div>

      {/* Message */}
      {message && (
        <p className="text-xs text-green-400 mb-2">{message}</p>
      )}

      {/* Play & Reset Buttons */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={handlePlay}
          disabled={confirmedTarget === null}
          className={`px-4 py-2 rounded-xl text-sm flex-1 flex justify-center items-center gap-2 transition duration-300 ${
            confirmedTarget === null
              ? "bg-gray-600 text-white cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          <FiPlay /> Play
        </button>

        <button
          onClick={handleReset}
          className="flex-1 border border-[#2c2f36] text-white rounded-xl text-sm py-2 flex items-center justify-center gap-2"
        >
          <FiRotateCcw /> Reset
        </button>
      </div>
    </div>
  );
};

export default SearchingControls;






