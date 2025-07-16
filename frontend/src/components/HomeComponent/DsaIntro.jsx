import React from "react";
import { NavLink } from 'react-router';

const DsaIntro = () => {
  return (
    <div className=" bg-[#0d1117] text-white font-sans flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 mt-10">
      
      {/* Left Section */}
      <div className="md:w-1/2 pl-10">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-500 rounded-xl p-4 h-12 w-12 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
</div>

          <div>
            <h1 className="text-4xl font-bold">
              DSA <span className="text-orange-500">Visualizer</span>
            </h1>
          </div>
        </div>

        <p className="text-gray-400 text-lg max-w-md leading-relaxed pt-3">
          Master data structures and algorithms through interactive visualizations. Watch algorithms come to life with step-by-step animations and real-time code execution.
        </p>

        <div className="grid grid-cols-3 gap-2 pt-6 pb-5">
          <div>
            <p className="text-orange-500 text-2xl font-bold">25+</p>
            <p className="text-gray-400">Data Structures</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl font-bold">50+</p>
            <p className="text-gray-400">Algorithms</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl font-bold">100+</p>
            <p className="text-gray-400">Visualizations</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-3">
          <NavLink to='/dsapage' onClick={()=>scrollTo(0,0)}>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-l font-semibold h-12 hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.7)] hover:scale-[1.05]">
            ▶ Start Visualizing
          </button>
          </NavLink>
          <button className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded-md text-l font-semibold flex items-center gap-2 h-12">
            📖 Learn Concepts
          </button>
        </div>
      </div>

      {/* Right Section - Algorithm Preview */}
      <div className="bg-[#0d1117] border-r-2 border-orange-500 rounded-2xl w-full md:w-1/2 shadow-lg pr-10 pt-6 pb-4 px-6 relative">

        {/* Bar Chart */}
        <div className="flex items-end justify-between h-40 px-40">
          {[5, 2, 8, 9, 3].map((num, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-orange-500 w-10 rounded-t-md shadow-md"
                style={{ height: `${num * 10 + 20}px` }}
              ></div>
              <p className="text-sm text-gray-300 mt-1">{num}</p>
            </div>
          ))}
        </div>

        {/* Metadata Tags */}
        <div className="grid grid-cols-3 gap-4 pt-8 px-4">
          <div className="bg-[#0a1734] text-[#3b82f6] text-sm rounded-lg p-2 text-center shadow-inner">
            <span className="font-medium">O(n²)</span>
            <p className="text-xs text-white">Time</p>
          </div>
          <div className="bg-[#1e0032] text-purple-400 text-sm rounded-lg p-2 text-center shadow-inner">
            <span className="font-medium">O(1)</span>
            <p className="text-xs text-white">Space</p>
          </div>
          <div className="bg-[#002915] text-green-400 text-sm rounded-lg p-2 text-center shadow-inner">
            <span className="font-medium">Stable</span>
            <p className="text-xs text-white">Sort</p>
          </div>
        </div>

        {/* Optional Icons or Images */}
        <div className="absolute top-3 right-10 w-4 h-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3v18M6 12v9M16 6v15M21 9v12" />
</svg>

        </div>

      </div>
    </div>
  );
};

export default DsaIntro;
