import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from 'react-router';

const CodingIntro = () => {
  return (
    <div className=" bg-[#0d1117] text-white font-sans flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 gap-10 mt-10 mb-20">
    
      {/* Left Section (Code Image) */}
      <div className="bg-[#0d1117] rounded-xl border-l-2 border-orange-500 w-full md:w-1/2 shadow-lg ml-20">
        <img src={assets.Code} alt="icon" className="w-auto h-120 rounded-2xl" />
      </div>
      

      {/* Right Section */}
      <div className="md:w-1/2 mr-20 pl-10">
        <div className="flex items-center space-x-3 pb-5">
          <div className="bg-orange-500 text-white p-2 rounded-md flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  </div>

          <h1 className="text-5xl font-bold">CodeLab <span className="text-orange-500">Pro</span></h1>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed max-w-lg pb-20">
          Master coding through interactive challenges, real-time competitions, and AI-powered learning. Code, compete, and level up your programming skills.
        </p>

        <div className="flex items-center gap-4">
          <NavLink to='/codingpage' onClick={()=>scrollTo(0,0)}>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-l font-semibold h-12 hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.7)] hover:scale-[1.05]">
            ▶ Start Coding
          </button>
          </NavLink>
          <button className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded-md text-l font-semibold flex items-center gap-2 h-12">
            🏆 Join Contest
          </button>
        </div>

        <div className="flex gap-10 pt-7 text-center text-sm">
          <div>
            <p className="text-orange-500 text-2xl font-bold">2.5M+</p>
            <p className="text-gray-400">Problems Solved</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl font-bold">500K+</p>
            <p className="text-gray-400">Active Coders</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl font-bold">1200+</p>
            <p className="text-gray-400">Companies Hiring</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CodingIntro;
