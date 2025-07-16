import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ChapterSection from "../components/CoursesComponent/ChapterSection";
import { NavLink } from "react-router";
import QuestionAI from "../components/AITutor/QuestionAi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../authSlice"; // adjust path if needed

const StudyPage = () => {
  const [videoData, setVideoData] = useState({
    url: "https://www.youtube.com/embed/y3OOaXrFy-Q?si=3MbtpVjG5dq5ra8H",
    title: "Introduction to AI",
    description: "This video provides an overview of artificial intelligence fundamentals."
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="h-screen w-screen grid grid-rows-[1fr_3fr1fr] grid-cols-[3fr_1fr] bg-[#0e0f1a] text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="col-span-2 flex items-center justify-between px-5 py-5 border-b border-white/10">
        <div className="flex gap-5">
          <NavLink to="/coursespage" onClick={() => scrollTo(0, 0)}>
            <button className="flex items-center gap-2 text-white hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </NavLink>
          <div>
            <h1 className="text-xl font-semibold">Data Structures & Algorithm (Zero to hero)</h1>
            <p className="text-sm text-white/70 mt-1">15 Chapters • 150+ Videos</p>
          </div>
        </div>

        {/* User Dropdown Button */}
        <div className="flex-none gap-4 border-orange-500 border-b rounded-2xl bg-[#201714]">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost text-white/90 hover:text-white transition text-sm flex items-center gap-2">
              <FaUserCircle className="text-xl" />
              {user?.firstName}
            </div>
            <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-[#1c1f2a] rounded-md w-48 border border-white/10 text-white">
              {user?.role === 'admin' && (
                <li><NavLink to="/admin" className="px-4 py-2 hover:bg-white/10 rounded-md transition">Admin Dashboard</NavLink></li>
              )}
              <li>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-md transition">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="overflow-hidden h-full">
        <div className="w-full h-full p-5">
          <iframe
            className="w-full h-full rounded-lg"
            src={videoData.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Chapter Section */}
      <div className="h-full p-3 overflow-hidden">
        <div className="h-full overflow-y-auto pr-2">
          <ChapterSection setVideoData={setVideoData} />
        </div>
      </div>

      {/* Footer Info */}
      <div className="col-span-2 h-full px-5 py-1 overflow-hidden">
        <div className="bg-[#1b1e2c] p-4 rounded-lg h-full overflow-hidden grid grid-cols-[3fr_1fr] gap-4">
          {/* Left: Video Name and Description */}
          <div className="h-full overflow-y-auto pr-2">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Introduction to AI</div>
              <div className="flex justify-around mb-2">
                <button
                  onClick={() =>
                    window.open(
                      'https://docs.google.com/spreadsheets/u/0/d/1Pud-vdSPhhljScynHvTUGRE5yxEV6dCMb45rOwoSt_Q/htmlview?pli=1#gid=0',
                      '_blank'
                    )
                  }
                  className="px-2 py-1 rounded-lg text-sm font-normal mx-10  flex items-center gap-2 bg-[#444447]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2h-6l-2 2H6a2 2 0 00-2 2v12a2 2 0 002 2h4z" />
                  </svg>
                  DSA Sheet
                </button>

                <button
                  onClick={() =>
                    window.open(
                      'https://drive.google.com/drive/folders/1N9UUtFHRe5a8h1vq3iEVEyvXM5sZDRHv',
                      '_blank'
                    )
                  }
                  className="px-2 py-1 rounded-lg text-sm font-normal flex items-center gap-2 bg-[#444447]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 012.828 0l1.172 1.172a2 2 0 010 2.828L13 15l-6 2 2-6z" />
                  </svg>
                  Notes
                </button>
              </div>
            </div>
            <p className="text-sm text-white/70 mt-1">
              This video provides an overview of artificial intelligence fundamentals. This is an extended description meant to demonstrate scroll behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
              Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="h-full flex justify-evenly items-center">
            <QuestionAI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPage;



// ../components/CoursesComponent/ChapterSection