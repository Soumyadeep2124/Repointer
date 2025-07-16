import { FiPlay, FiPause, FiRotateCcw } from "react-icons/fi";

const SortingControls = ({ isPlaying, setIsPlaying, steps, setSteps, array, target, type, dsaConfigMap, setCurrentStep, setLogs, setArray, setInput, setHighlight }) => {
  return (
    <>
      <button
        onClick={() => {
          if (!isPlaying) {
            if (steps.length === 0 && dsaConfigMap[type]?.getSteps) {
              const newSteps = dsaConfigMap[type].getSteps(array, target);
              setSteps(newSteps);
              setCurrentStep(0);
              setLogs([]);
            }
          }
          setIsPlaying(!isPlaying);
        }}
        className={`px-4 py-2 rounded-xl text-sm flex-1 flex justify-center items-center gap-2 transition duration-300 ${
          isPlaying ? "bg-white text-orange-500 border border-orange-500" : "bg-orange-500 text-white"
        }`}
      >
        {isPlaying ? <FiPause /> : <FiPlay />} {isPlaying ? "Pause" : "Play"}
      </button>

      <button
        onClick={() => {
          setIsPlaying(false);
          setCurrentStep(0);
          const reset = [5, 2, 8, 1, 9, 3];
          setArray(reset);
          setInput(reset.join(", "));
          setHighlight([]);
          setLogs([]);
          setSteps([]);
        }}
        className="flex-1 border border-[#2c2f36] text-white rounded-xl text-sm py-2 flex items-center justify-center gap-2"
      >
        <FiRotateCcw /> Reset
      </button>
    </>
  );
};

export default SortingControls;

