import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e0f1a] flex flex-col items-center justify-center px-6 text-white font-sans relative overflow-hidden">
      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-10">
        <div className="text-2xl font-semibold text-white flex items-center gap-1">
          <div className="bg-orange-500 text-white rounded-lg px-2 py-1 text-xl">💡</div>
          <span className="text-white">Learn</span>
          <span className="text-orange-500">Hub</span>
        </div>

        <div className="flex gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Courses</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-white/80 hover:text-white">Sign In</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg shadow-lg shadow-orange-500/30 transition-all">
            Get Started →
          </button>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center z-10 mt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Master Coding with <br />
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            AI-Powered Learning
          </span>
        </h1>
        <p className="text-white/70 mt-6 max-w-xl mx-auto text-base md:text-lg">
          Transform your programming journey with interactive courses, real-time feedback, and personalized learning paths that adapt to your pace.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg shadow-orange-400/30">
            <BsRocketTakeoff className="text-lg" />
            Start Learning Free
          </button>

          <button className="flex items-center gap-2 border border-white/30 hover:border-white px-6 py-3 rounded-xl text-sm text-white bg-white/10 hover:bg-white/20 transition-all">
            <FaPlay className="text-sm" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-10 w-full flex justify-center gap-12 text-white/80 text-center text-sm">
        <div>
          <div className="text-white text-lg font-semibold">50K+</div>
          <div className="text-white/50 text-xs">Students Worldwide</div>
        </div>
        <div>
          <div className="text-white text-lg font-semibold">200+</div>
          <div className="text-white/50 text-xs">Expert Instructors</div>
        </div>
        <div>
          <div className="text-white text-lg font-semibold">95%</div>
          <div className="text-white/50 text-xs">Success Rate</div>
        </div>
        <div>
          <div className="text-white text-lg font-semibold">24/7</div>
          <div className="text-white/50 text-xs">Support Available</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
