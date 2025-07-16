// // Visualize.jsx
// import React from "react";
// import { FiPlay, FiRotateCcw } from "react-icons/fi";
// import { HiOutlineDownload, HiOutlineEyeOff } from "react-icons/hi";
// import { BsArrowLeftRight } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
// import { BiBarChart } from "react-icons/bi";
// import { MdOutlineSpeed } from "react-icons/md";
// import { LuPanelTopOpen } from "react-icons/lu";

// const Visualize = () => {
//   return (
//     <div className="bg-[#0e0f1a] min-h-screen px-6 md:px-12 py-10 text-white font-sans">

//       {/* Visualization + Code */}
//       <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Control Panel */}
//         <div className="bg-[#0f111c] border border-[#2a2e38] p-6 rounded-2xl space-y-6">
//           <h4 className="text-xl font-bold text-orange-500 mb-4">Control Panel</h4>
//           <div>
//             <label className="text-sm text-gray-400">Algorithm</label>
//             <div className="bg-[#10131e] text-white px-4 py-2 rounded-xl flex justify-between items-center border border-[#2c2f36]">
//               Bubble Sort <IoIosArrowDown />
//             </div>
//           </div>
//           <div>
//             <label className="text-sm text-gray-400">Input Data</label>
//             <input
//               type="text"
//               value="5, 2, 8, 1, 9, 3"
//               readOnly
//               className="bg-[#10131e] w-full px-4 py-2 rounded-xl border border-[#2c2f36] text-white"
//             />
//             <button className="w-full mt-2 border border-[#2c2f36] rounded-xl py-2 text-sm">Random Data</button>
//           </div>
//           <div>
//             <label className="text-sm text-gray-400">Animation Speed</label>
//             <input type="range" className="w-full mt-2" />
//             <div className="flex justify-between text-xs text-gray-400">
//               <span>Fast</span>
//               <span>600ms</span>
//               <span>Slow</span>
//             </div>
//           </div>
//           <div>
//             <label className="text-sm text-gray-400">Playback</label>
//             <div className="flex gap-2 mt-2">
//               <button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm flex-1 flex justify-center items-center gap-2">
//                 <FiPlay /> Play
//               </button>
//               <button className="px-4 py-2 border border-[#2c2f36] text-white rounded-xl text-sm flex-1">
//                 ||
//               </button>
//             </div>
//             <button className="w-full mt-2 border border-[#2c2f36] rounded-xl py-2 text-sm flex items-center justify-center gap-2">
//               <FiRotateCcw /> Reset
//             </button>
//           </div>
//           <div>
//             <label className="text-sm text-gray-400">Progress</label>
//             <div className="bg-[#1c1e29] h-3 rounded-xl mt-2">
//               <div className="h-3 bg-orange-500 rounded-xl w-[10%]"></div>
//             </div>
//             <div className="text-sm text-gray-400 mt-1">Step 0 of 10</div>
//           </div>

//           {/* Metrics */}
//           <div className="mt-6">
//             <h5 className="text-lg font-semibold text-orange-500 mb-2">
//               ⚛ Metrics
//             </h5>
//             <div className="text-sm space-y-1 text-gray-300">
//               <div>
//                 <span className="text-orange-400 font-semibold">O(n²)</span> Time &nbsp;&nbsp;&nbsp;&nbsp;
//                 <span className="text-orange-400 font-semibold">O(1)</span> Space
//               </div>
//               <div>Comparisons: <span className="text-white font-bold">24</span></div>
//               <div>Swaps: <span className="text-white font-bold">8</span></div>
//               <div>Time: <span className="text-white font-bold">1.2s</span></div>
//             </div>
//           </div>
//         </div>

//         {/* Visualizer and Code */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Visualizer */}
//           <div className="bg-[#0f111c] border border-[#2a2e38] rounded-2xl p-6">
//             <h4 className="text-xl font-bold mb-4 text-orange-500">Bubble Sort Visualization</h4>
//             <div className="bg-[#10131e] h-60 rounded-xl flex items-end justify-center gap-6 p-4">
//               {[5, 2, 8, 1, 9, 3].map((num, idx) => (
//                 <div
//                   key={idx}
//                   className={`h-[${num * 10}px] w-10 bg-orange-500 rounded-t-md flex items-end justify-center text-white text-sm font-semibold`}
//                 >
//                   {num}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center gap-10 mt-4">
//               <span className="text-orange-400 font-semibold">Current: 5</span>
//               <span className="text-white font-semibold">Index: 0</span>
//             </div>
//             <div className="text-center text-gray-400 mt-2 text-sm">
//               Initialize: Starting bubble sort algorithm
//             </div>
//           </div>

//           {/* Implementation */}
//           <div className="bg-[#0f111c] border border-[#2a2e38] rounded-2xl p-6">
//             <h4 className="text-xl font-bold mb-4 text-orange-500">
//               ⌨️ Implementation
//             </h4>
//             <pre className="text-green-400 text-sm overflow-x-auto">
// {`def bubble_sort(arr):
//     n = len(arr)
//     for i in range(n):
//         for j in range(0, n-i-1):
//             if arr[j] > arr[j+1]:
//                 arr[j], arr[j+1] = arr[j+1], arr[j]
//     return arr`}
//             </pre>
//           </div>

//           {/* Complexity Section */}
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-gradient-to-br from-[#10253f] to-[#0c172a] p-6 rounded-xl text-center">
//               <h5 className="text-white font-bold text-lg mb-2">Time Complexity</h5>
//               <p className="text-blue-400 text-xl font-bold">O(n²)</p>
//               <p className="text-gray-400 text-sm">Worst case scenario</p>
//             </div>
//             <div className="bg-gradient-to-br from-[#2b1c3a] to-[#1e102a] p-6 rounded-xl text-center">
//               <h5 className="text-white font-bold text-lg mb-2">Space Complexity</h5>
//               <p className="text-purple-400 text-xl font-bold">O(1)</p>
//               <p className="text-gray-400 text-sm">Constant space usage</p>
//             </div>
//             <div className="bg-gradient-to-br from-[#0c1d1a] to-[#071f14] p-6 rounded-xl text-center">
//               <h5 className="text-white font-bold text-lg mb-2">Stability</h5>
//               <p className="text-green-400 text-xl font-bold">Stable</p>
//               <p className="text-gray-400 text-sm">Preserves relative order</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Visualize;

Visualize.jsx
import React, { useEffect, useRef, useState } from "react";
import { getBubbleSortSteps } from "./BubbleSort";
import { FiPlay, FiRotateCcw } from "react-icons/fi";

const Visualize = () => {
  const [array, setArray] = useState([5, 2, 8, 1, 9, 3]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(600);
  const [highlight, setHighlight] = useState([]);
  const [input, setInput] = useState("5, 2, 8, 1, 9, 3");
  const [logs, setLogs] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");
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
  }, [isPlaying, currentStep, steps]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleStep = (step) => {
    const newArray = [...array];
    const [i, j] = step.indices;
    setHighlight([i, j]);
    if (step.type === "swap") {
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      setArray(newArray);
      setLogs((prev) => [...prev, `Swapped index ${i} and ${j}`]);
    } else {
      setLogs((prev) => [...prev, `Compared index ${i} and ${j}`]);
    }
  };

  const startVisualization = () => {
    const newSteps = getBubbleSortSteps(array);
    setSteps(newSteps);
    setCurrentStep(0);
    setIsPlaying(true);
    setLogs([]);
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
    <div className="bg-[#0e0f1a] min-h-screen px-6 md:px-12 py-10 text-white font-sans">
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Control Panel */}
        <div className="bg-[#0f111c] border border-[#2a2e38] p-6 rounded-2xl space-y-6">
          <h4 className="text-xl font-bold text-orange-500 mb-4">
            Control Panel
          </h4>

          <div>
            <label className="text-sm text-gray-400">Algorithm</label>
            <select
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
              className="bg-[#10131e] text-white px-4 py-2 rounded-xl w-full border border-[#2c2f36]"
            >
              <option>Bubble Sort</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Input Data</label>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="bg-[#10131e] w-full px-4 py-2 rounded-xl border border-[#2c2f36] text-white"
            />
            <button
              onClick={() => {
                const random = Array.from({ length: 6 }, () =>
                  Math.floor(Math.random() * 20)
                );
                setArray(random);
                setInput(random.join(", "));
                setSteps([]);
                setHighlight([]);
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="w-full mt-2 border border-[#2c2f36] rounded-xl py-2 text-sm"
            >
              Random Data
            </button>
          </div>

          <div>
            <label className="text-sm text-gray-400">Animation Speed</label>
            <input
              type="range"
              min="100"
              max="1000"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full mt-2 accent-orange-500"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Fast</span>
              <span>{speed}ms</span>
              <span>Slow</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Playback</label>
            <div className="flex gap-2 mt-2">
              <button
                onClick={startVisualization}
                className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm flex-1 flex justify-center items-center gap-2"
              >
                <FiPlay /> Play
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 border border-[#2c2f36] text-white rounded-xl text-sm flex-1"
              >
                ||
              </button>
            </div>
            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep(0);
                setArray([5, 2, 8, 1, 9, 3]);
                setInput("5, 2, 8, 1, 9, 3");
                setHighlight([]);
                setLogs([]);
              }}
              className="w-full mt-2 border border-[#2c2f36] rounded-xl py-2 text-sm flex items-center justify-center gap-2"
            >
              <FiRotateCcw /> Reset
            </button>
          </div>

          <div>
            <label className="text-sm text-gray-400">Progress</label>
            <div className="bg-[#1c1e29] h-3 rounded-xl mt-2">
              <div
                className="h-3 bg-orange-500 rounded-xl"
                style={{ width: `${(currentStep / steps.length) * 100 || 0}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Step {currentStep} of {steps.length}
            </div>
          </div>

          {/* Logs */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold text-orange-500 mb-2">
              📝 Steps
            </h5>
            <div
              ref={logContainerRef}
              className="text-sm space-y-1 text-gray-300 max-h-32 overflow-y-auto pr-2"
            >
              {logs.map((log, idx) => (
                <div key={idx}>• {log}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Visualizer and Code */}
        <div className="lg:col-span-2 space-y-8">
          {/* Visualizer */}
          <div className="bg-[#0f111c] border border-[#2a2e38] rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4 text-orange-500">
              {selectedAlgorithm} Visualization
            </h4>
            <div className="bg-[#10131e] h-60 rounded-xl flex items-end justify-center gap-4 p-4">
              {array.map((num, idx) => (
                <div
                  key={idx}
                  className={`w-8 rounded-t-md flex items-end justify-center text-white text-sm font-semibold transition-all duration-300 ${
                    highlight.includes(idx) ? "bg-yellow-400" : "bg-orange-500"
                  }`}
                  style={{ height: `${(num / maxValue) * 100}%` }}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-10 mt-4">
              <span className="text-orange-400 font-semibold">
                Current:{" "}
                {highlight[0] !== undefined ? array[highlight[0]] : "-"}
              </span>
              <span className="text-white font-semibold">
                Index: {highlight[0] ?? "-"}
              </span>
            </div>
            <div className="text-center text-gray-400 mt-2 text-sm">
              {currentStep === 0
                ? "Initialize: Starting bubble sort algorithm"
                : isPlaying
                ? "Playing..."
                : "Paused"}
            </div>
          </div>

          {/* Implementation */}
          <div className="bg-[#0f111c] border border-[#2a2e38] rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4 text-orange-500">
              ⌨️ Implementation
            </h4>
            <pre className="text-green-400 text-sm overflow-x-auto">
              {`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`}
            </pre>
          </div>

          {/* Complexity Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#10253f] to-[#0c172a] p-6 rounded-xl text-center">
              <h5 className="text-white font-bold text-lg mb-2">
                Time Complexity
              </h5>
              <p className="text-blue-400 text-xl font-bold">O(n²)</p>
              <p className="text-gray-400 text-sm">Worst case scenario</p>
            </div>
            <div className="bg-gradient-to-br from-[#2b1c3a] to-[#1e102a] p-6 rounded-xl text-center">
              <h5 className="text-white font-bold text-lg mb-2">
                Space Complexity
              </h5>
              <p className="text-purple-400 text-xl font-bold">O(1)</p>
              <p className="text-gray-400 text-sm">Constant space usage</p>
            </div>
            <div className="bg-gradient-to-br from-[#0c1d1a] to-[#071f14] p-6 rounded-xl text-center">
              <h5 className="text-white font-bold text-lg mb-2">Stability</h5>
              <p className="text-green-400 text-xl font-bold">Stable</p>
              <p className="text-gray-400 text-sm">Preserves relative order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualize;
