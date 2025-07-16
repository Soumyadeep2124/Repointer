import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from 'react-router';
import { BsRocketTakeoff } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


const WelcomeSection = () => {

  return (

    
    <div className="min-h-screen bg-[#0e0f1a] text-white font-sans ">
      {/* Hero Section */}
      <div className="bg-[linear-gradient(140deg,_rgba(249,115,22,0.1)_35%,_transparent_25%)] ">
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle,_rgba(249,115,22,0.4)_0%,_rgba(249,115,22,0)_30%)]">
        <div className="mx-25 mt-10 px-6 p-16 text-center">
          <h1 className="text-7xl font-extrabold mb-4">
            Welcome to  <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Repointer</span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto mb-20 font-light">
            Struggling with scattered courses, practice chaos, infinite scrolling, and zero guidance? <br></br> Join Repointer, your all-in-one solution <span className="text-orange-300">powered with AI</span>
          </p>
          <div className="py-7 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-l font-medium shadow-lg shadow-orange-400/30">
                      <BsRocketTakeoff className="text-xl" />
                      Start Learning Today
                    </button>
          
                    <button className="flex items-center gap-2 border border-orange-500 hover:border-white px-6 py-3 rounded-xl text-sm text-white bg-white/10 hover:bg-white/20 transition-all">
                      <FaPlay className="text-xl" />
                      Watch Demo
                    </button>
                  </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-10">
            {[
              {
                icon: assets.Course_Logo,
                title: "Interactive Courses",
                desc: "Learn with video lessons, quizzes, and real-time progress tracking",
                bg: "bg-[#2a2617]",
                color: "border-yellow-500",
                borderShadow: "hover:shadow-[0_0_20px_5px_rgba(253,224,71,0.4)]",
                titleHover: "group-hover:text-yellow-500",
                path: "/coursespage"
              },
              {
                icon: assets.DSA_Logo,
                title: "DSA Visualizer",
                desc: "Understand algorithms with step-by-step animated visuals",
                bg: "bg-[#1b1532]",
                color: "border-purple-500",
                borderShadow: "hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]",
                titleHover: "group-hover:text-purple-300",
                path: "/dsaPage"
              },
              {
                icon: assets.Coding_Logo,
                title: "Coding Platform",
                desc: "Practice, compete, and level up your coding skills",
                color: "border-green-500",
                borderShadow: "hover:shadow-[0px_0px_20px_5px_rgba(34,197,94,0.2)]",
                titleHover: "group-hover:text-green-400",
                path: "/codingpage"
              }
            ].map((item, idx) => (
              <NavLink to={`${item.path}`}>
              <div key={idx} data-aos="fade-up" className={`group bg-[#12131f] rounded-2xl p-5 shadow-lg border-b-2 transition-all duration-300 transform hover:scale-[1.02] animate-bounce-1 ${item.color} ${item.borderShadow}`} >
                <div className={`w-15 h-15 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 text-xl ${item.color} duration-300 transform group-hover:rotate-6 group-hover:scale-[1.1]`}>
                  <img src={item.icon} alt="icon" className="w-15 h-15 rounded-2xl" /></div>
                <h3 className={`font-bold text-xl text-center pb-1 text-white transition-all transform duration-300 group-hover:scale-[1.05] ${item.titleHover}`}>{item.title}</h3>
                <p className="text-sm font-light text-center text-white/60">{item.desc}</p>
              </div>
              </NavLink>
            ))}
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

