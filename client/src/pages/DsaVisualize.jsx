import React, { useEffect, useRef, useState } from "react";
import { FiPlay, FiRotateCcw, FiPause } from "react-icons/fi";
const compareSound = new Audio("../../compare.mp3");
const swapSound = new Audio("../../swap.mp3");
const success = new Audio("../../success.mp3");
import { NavLink } from "react-router";
import { useParams } from "react-router";
import CodeSnippets from "../components/DsaComponent/CodeSnippet";
import DsaVideo from "../components/DsaComponent/DsaVideo";
import dsaConfigMap from "../utils/DsaConfigMap";
import SortingControls from "../components/DsaComponent/DsaControls/SortingControl";
import SearchingControls from "../components/DsaComponent/DsaControls/SearchingControl";
import StructureControls from "../components/DsaComponent/DsaControls/StructureControl";

const DsaVisualize = () => {
  const { type } = useParams();
  const [array, setArray] = useState([5, 2, 8, 1, 9, 3]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(600);
  const [highlight, setHighlight] = useState([]);
  const [input, setInput] = useState("5, 2, 8, 1, 9, 3");
  const [logs, setLogs] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [target, setTarget] = useState("");
  const logContainerRef = useRef(null);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length) {
      const timer = setTimeout(() => {
        const step = steps[currentStep];
        handleStep(step);
        setCurrentStep((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    if (isPlaying && currentStep === steps.length) {
      success.currentTime = 0;
      success.play();
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    const config = dsaConfigMap[type];

    if (!config) {
      setSelectedAlgorithm("Unknown Algorithm");
      setSteps([]);
      return;
    }

    setSelectedAlgorithm(config.label);

    if (!config.getSteps) {
      setSteps([]);
      return;
    }

    let preparedArray = array;
    if (config.requiresSort) {
      preparedArray = [...array].sort((a, b) => a - b);
      setArray(preparedArray);
    }

    const steps = config.getSteps(preparedArray, target);
    setSteps(steps);
  }, [type, array, target]);

  const handleStep = (step) => {
    const newArray = [...array];
    const [i, j] = step.indices;
    setHighlight([i, j]);
    if (step.type === "swap") {
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      setArray(newArray);
      setLogs((prev) => [...prev, `Swapped index ${i} and ${j}`]);
      swapSound.currentTime = 0;
      swapSound.play();
    } else {
      setLogs((prev) => [...prev, `Compared index ${i} and ${j}`]);
      compareSound.currentTime = 0;
      compareSound.play();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const numbers = value
      .split(",")
      .map((v) => parseInt(v.trim()))
      .filter((v) => !isNaN(v));
    if (numbers.length > 0) {
      setArray(numbers);
      setSteps([]);
      setHighlight([]);
      setCurrentStep(0);
      setIsPlaying(false);
    }
  };

  const maxValue = Math.max(...array, 1);

  return (
    <div className="bg-[#16161a] fixed top-0 left-0 md:w-screen md:h-screen px-1 text-white font-sans">
      <div className=" grid mt-1 lg:grid-cols-[1fr_2fr] gap-1">
        <div className="bg-[#0f111c] border border-[#2a2e38] p-6 h-[98vh] rounded-l space-y-6 shadow-[0_0_20px_2px_rgba(251,146,60,0.3)]">
          <NavLink to="/dsapage" onClick={() => scrollTo(0, 0)}>
            <button className="flex items-center gap-2 text-white hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </button>
          </NavLink>

          <div className="mt-5 space-y-3">
  <div className="flex gap-2 items-end">
    <div className="flex-1">
      <label className="text-sm text-gray-400">Input Data</label>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="bg-[#10131e] w-full px-5 py-2 mt-2 rounded-xl border border-[#2c2f36] text-white"
        placeholder="e.g. 5, 2, 8, 1, 9, 3"
      />
    </div>

    <button
      onClick={() => {
        const random = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));
        setArray(random);
        setInput(random.join(", "));
        setSteps([]);
        setHighlight([]);
        setCurrentStep(0);
        setIsPlaying(false);
      }}
      className="mt-[22px] border border-[#2c2f36] rounded-xl px-4 py-2 text-sm text-white hover:text-orange-500"
    >
      Random Data
    </button>
  </div>

  {dsaConfigMap[type]?.requiresTarget && (
    <div>
      <label className="text-sm text-gray-400">Target Value</label>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
        className="bg-[#10131e] w-full px-5 py-2 mt-2 rounded-xl border border-[#2c2f36] text-white"
        placeholder="e.g. 8"
      />
    </div>
  )}
</div>




          <div>
            <label className="text-sm text-gray-400">Animation Speed</label>
            <input type="range" min="100" max="1000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full mt-2 accent-orange-500" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Fast</span><span>{speed}ms</span><span>Slow</span>
            </div>
          </div>

          <div>
  <label className="text-sm text-gray-400">Controls</label>
  <div className="flex gap-2 mt-2">
    {["bubblesort", "quicksort", "heapsort", "mergesort", "insertionsort", "selectionsort"].includes(type) && (
      <SortingControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        steps={steps}
        setSteps={setSteps}
        array={array}
        target={target}
        type={type}
        dsaConfigMap={dsaConfigMap}
        setCurrentStep={setCurrentStep}
        setLogs={setLogs}
        setArray={setArray}
        setInput={setInput}
        setHighlight={setHighlight}
      />
    )}

    {["linearsearch", "binarysearch"].includes(type) && (
      <SearchingControls
        setSteps={setSteps}
        array={array}
        target={target}
        type={type}
        dsaConfigMap={dsaConfigMap}
        setCurrentStep={setCurrentStep}
        setLogs={setLogs}
        setIsPlaying={setIsPlaying}
        setArray={setArray}
        setInput={setInput}
        setHighlight={setHighlight}
      />
    )}

    {["stack", "queue", "linkedlist","array"].includes(type) && (
      <StructureControls
        array={array}
        setArray={setArray}
        setInput={setInput}
        setLogs={setLogs}
        type={type}
      />
    )}
  </div>
</div>



          <div>
            <label className="text-sm text-gray-400">Progress</label>
            <div className="bg-[#1c1e29] h-3 rounded-xl mt-2">
              <div className="h-3 bg-orange-500 rounded-xl" style={{ width: `${(currentStep / steps.length) * 100 || 0}%` }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-1">Step {currentStep} of {steps.length}</div>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-2">Steps</h5>
            <div ref={logContainerRef} className="text-s text-gray-300 h-[30vh] overflow-y-auto pl-5 pt-2 rounded-2xl">
              {logs.map((log, idx) => <div key={idx}>• {log}</div>)}
            </div>
          </div>
        </div>

      {/* visualization and code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-[47vh]">
          <div className="md:col-span-2 bg-[#0f111c] border border-[#2a2e38] rounded-l p-6 shadow-[0_0_20px_2px_rgba(251,146,60,0.3)]">
            <h4 className="text-xl font-normal pb-5 px-5">{selectedAlgorithm} Visualization</h4>
            <div className="bg-[#10131e] h-60 rounded-xl flex items-end justify-center gap-4 p-4">
              {array.map((num, idx) => (
                <div key={idx} className={`w-8 rounded-t-md flex items-end justify-center text-white text-sm font-semibold transition-all duration-300 ${highlight.includes(idx) ? "bg-yellow-400" : "bg-orange-500"}`} style={{ height: `${(num / maxValue) * 100}%` }}>
                  {num}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-10 mt-4">
              <span className="text-orange-400 font-semibold">Current: {highlight[0] !== undefined ? array[highlight[0]] : "-"}</span>
              <span className="text-white font-semibold">Index: {highlight[0] ?? "-"}</span>
            </div>
            <div className="text-center text-gray-400 mt-2 text-sm">
              {currentStep === 0 ? `Initialize: Starting ${selectedAlgorithm} algorithm` : isPlaying ? "Playing..." : "Paused"}
            </div>
          </div>

          <div className="bg-[#0f111c] border border-[#2a2e38] rounded-l p-6 shadow-[0_0_20px_2px_rgba(251,146,60,0.3)] h-[47vh] overflow-y-auto">
            <h4 className="text-xl font-normal mb-4">Implementation</h4>
            <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
              {CodeSnippets[type] || "Code not available for this structure."}
            </pre>
          </div>

          <div className="grid grid-cols-2 grid-rows-[3fr_1fr] gap-1 h-[47vh]">
            <DsaVideo type={type}/>
            <div className="bg-[#0f111c] p-1 rounded-l text-center shadow-[0_0_20px_2px_rgba(251,146,60,0.3)]">
              <h5 className="text-white font-bold text-l mb-2">Time Complexity</h5>
              <p className="text-orange-500 text-l font-bold">{dsaConfigMap[type]?.timeComplexity}</p>
              <p className="text-gray-400 text-sm">Worst case scenario</p>
            </div>
            <div className="bg-[#0f111c] p-1 rounded-l text-center shadow-[0_0_20px_2px_rgba(251,146,60,0.3)]">
              <h5 className="text-white font-bold text-l mb-2">Space Complexity</h5>
              <p className="text-orange-500 text-l font-bold">{dsaConfigMap[type]?.spaceComplexity}</p>
              <p className="text-gray-400 text-sm">Constant space usage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsaVisualize;
