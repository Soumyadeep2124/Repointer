import React from "react";
import { FiZap, FiCode, FiActivity, FiFilter } from "react-icons/fi";
import { BsSearch, BsList } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const DsaHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#0e0f1a] rounded-2xl pt-25 pb-10 px-20">
      <div>
        <h1 className="text-3xl font-extrabold flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#f97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="20" y="20" width="60" height="10" rx="2" />
              <rect x="25" y="35" width="50" height="10" rx="2" />
              <rect x="30" y="50" width="40" height="10" rx="2" />
              <line x1="50" y1="65" x2="50" y2="85" />
              <polyline points="45,80 50,85 55,80" />
            </svg>
          </div>
          Explore <span className="text-orange-500">Data Structures</span>
        </h1>
        <div className="flex gap-4 mt-4 flex-wrap">
          <span className="flex items-center gap-2 px-4 py-1.5 border border-orange-400 rounded-full text-orange-300 text-sm">
            <FiZap /> Real-time
          </span>
          <span className="flex items-center gap-2 px-4 py-1.5 border border-orange-400 rounded-full text-orange-300 text-sm">
            <FiCode /> Code Implementation
          </span>
          <span className="flex items-center gap-2 px-4 py-1.5 border border-blue-600 rounded-full text-blue-400 text-sm">
            <FiActivity /> Complexity Analysis
          </span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="w-[30vw]">
        <div className="flex items-center bg-[#0a0e17] border border-[#2c2f36] px-4 py-3 rounded-2xl">
          <BsSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search functinality will be implemented soon..."
            className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DsaHeader;
