import React from "react";


const Contest = () => {

  return (

<div className="mt-15 space-y-10 bg-[#0e0f1a] mx-10 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Live Contests</h2>
            <p className="text-gray-400">Compete with programmers worldwide</p>
          </div>
          <button className="border border-gray-700 hover:border-white px-4 py-2 rounded-md text-sm text-white">
            View All Contests →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Contest 1 */}
          <div className="border-gray-700 border rounded-xl p-6 bg-[#111 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Weekly Contest 420</h3>            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — July 30, 2025</p>
              <p><span className="text-white">Duration</span> — 90 min</p>
              <p className="text-green-400 font-medium">$5000</p>
            </div>
            <button className="w-full bg-[#5c2e1e] text-white py-2 mt-4 rounded-md font-semibold cursor-not-allowed">Coming soon</button>
          </div>

          {/* Contest 2 */}
          <div className="border-gray-700 border rounded-xl p-6 bg-[#111 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Biweekly Contest 145</h3></div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — August 20, 2025</p>
              <p><span className="text-white">Duration</span> — 75 min</p>
              <p className="text-green-400 font-medium">$3000</p>
            </div>
            <button className="w-full bg-[#5c2e1e] text-white py-2 mt-4 rounded-md font-semibold cursor-not-allowed">Coming soon</button>
          </div>

          {/* Contest 3 */}
          <div className="border border-gray-700 rounded-xl p-6 bg-[#111] space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Algorithm Sprint</h3>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — July 21, 2025</p>
              <p><span className="text-white">Duration</span> — 60 min</p>
              <p className="text-green-400 font-medium">$2000</p>
            </div>
            <button className="w-full bg-[#5c2e1e] text-white py-2 mt-4 rounded-md font-semibold cursor-not-allowed">Coming soon</button>
          </div>
        </div>
      </div>
  );
}

export default Contest;