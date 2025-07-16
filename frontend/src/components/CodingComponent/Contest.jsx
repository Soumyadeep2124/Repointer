import React from "react";


const Contest = () => {

  return (

<div className="mt-20 space-y-10 bg-[#0e0f1a] mx-10 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Live Contests</h2>
            <p className="text-gray-400">Compete with programmers worldwide</p>
          </div>
          <button className="border border-gray-700 hover:border-white px-4 py-2 rounded-md text-sm text-white">
            View All Contests →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contest 1 */}
          <div className="border border-orange-500 rounded-xl p-6 bg-[#131313] space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Weekly Contest 420</h3>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">UPCOMING</span>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — Dec 15, 2024</p>
              <p><span className="text-white">Duration</span> — 90 min</p>
              <p><span className="text-orange-400">15.2K</span> Participants</p>
              <p className="text-green-400 font-medium">$5000</p>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded-md font-semibold hover:bg-orange-600">Register</button>
          </div>

          {/* Contest 2 */}
          <div className="border border-green-500 rounded-xl p-6 bg-[#0d1f17] space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Biweekly Contest 145</h3>
              <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span> LIVE
              </span>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — Dec 12, 2024</p>
              <p><span className="text-white">Duration</span> — 75 min</p>
              <p><span className="text-orange-400">12.8K</span> Participants</p>
              <p className="text-green-400 font-medium">$3000</p>
            </div>
            <button className="w-full bg-green-500 text-white py-2 mt-4 rounded-md font-semibold hover:bg-green-600">Join Now</button>
          </div>

          {/* Contest 3 */}
          <div className="border border-gray-700 rounded-xl p-6 bg-[#111] space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Algorithm Sprint</h3>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="text-white">Date</span> — Dec 10, 2024</p>
              <p><span className="text-white">Duration</span> — 60 min</p>
              <p><span className="text-orange-400">8.9K</span> Participants</p>
              <p className="text-green-400 font-medium">$2000</p>
            </div>
            <button className="w-full bg-[#5c2e1e] text-white py-2 mt-4 rounded-md font-semibold cursor-not-allowed">View Results</button>
          </div>
        </div>
      </div>
  );
}

export default Contest;