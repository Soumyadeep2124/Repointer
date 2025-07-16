import React, { useState } from "react";
import { FaStar, FaPlayCircle, FaPlay } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router";

const devcourses = [
  {
    title: "Data Structures & Algorithm",
    author: "Rohit Negi",
    rating: 4.9,
    reviews: "100k+",
    price: "Free",
    badge: "Trending",
    badgeColor: "bg-blue-500",
    thumbnail: assets.DSA,
    category: "webd",
  },
  {
    title: "Nexus",
    author: "Rohit Negi",
    rating: 5.0,
    reviews: "30k+",
    price: "100 bitcoin",
    badge: "Popular",
    badgeColor: "bg-green-500",
    thumbnail: assets.Nexus,
    category: "webd",
  },
  {
    title: "System Design LLD",
    author: "Aditya Tandoni",
    rating: 4.9,
    reviews: "50k+",
    price: "20 bitcoin",
    badge: "New",
    badgeColor: "bg-purple-500",
    thumbnail: assets.SystemDesign,
    category: "webd",
  },
  {
    title: "System design HLD",
    author: "Rohit Negi",
    rating: 4.9,
    reviews: "10k+",
    price: "10 bitcoin",
    badge: "Top Pick",
    badgeColor: "bg-red-500",
    thumbnail: assets.SystemDesign2,
    category: "webd",
  },
];

const gateCourses = [
  {
    title: "Computer Networks",
    author: "Amit Khurana",
    rating: 4.8,
    reviews: "80k+",
    price: "10 bitcoin",
    badge: "Trending",
    badgeColor: "bg-blue-500",
    thumbnail: assets.cn,
    category: "gate",
  },
  {
    title: "Operating System",
    author: "Vishvadeep Gothi",
    rating: 4.9,
    reviews: "60k+",
    price: "30 bitcoin",
    badge: "Popular",
    badgeColor: "bg-green-500",
    thumbnail: assets.os,
    category: "gate",
  },
  {
    title: "Discrete Mathematics",
    author: "Amit Khurana",
    rating: 4.7,
    reviews: "45k+",
    price: "50 bitcoin",
    badge: "Top Rated",
    badgeColor: "bg-yellow-500",
    thumbnail: assets.dm,
    category: "gate",
  },
  {
    title: "Database Management System",
    author: "Rohit Negi",
    rating: 5.0,
    reviews: "90k+",
    price: "Free",
    badge: "Editor's Pick",
    badgeColor: "bg-red-500",
    thumbnail: assets.dbms,
    category: "gate",
  },
];

const emergingCourses = [
  {
    title: "Gen AI Fundamentals",
    author: "Rohit Negi",
    rating: 4.9,
    reviews: "70k+",
    price: "Free",
    badge: "Trending",
    badgeColor: "bg-blue-500",
    thumbnail: assets.GenAi,
    category: "emerging",
  },
  {
    title: "Computer Vision",
    author: "Anjali Sinha",
    rating: 5.0,
    reviews: "85k+",
    price: "Free",
    badge: "Popular",
    badgeColor: "bg-green-500",
    thumbnail: assets.computerVision,
    category: "emerging",
  },
  {
    title: "Cyber Security",
    author: "Aditya Tandoni",
    rating: 4.8,
    reviews: "40k+",
    price: "Free",
    badge: "Top Pick",
    badgeColor: "bg-purple-500",
    thumbnail: assets.CyberSecurity,
    category: "emerging",
  },
  {
    title: "Data Science",
    author: "Rohit Negi",
    rating: 4.9,
    reviews: "65k+",
    price: "Free",
    badge: "New",
    badgeColor: "bg-red-500",
    thumbnail: assets.DataScience,
    category: "emerging",
  },
];

const FeaturedCourses = () => {
  const [search, setSearch] = useState("");

  const allCourses = [...devcourses, ...gateCourses, ...emergingCourses];
  const matchedCourse = allCourses.find((course) =>
    course.title.toLowerCase() === search.toLowerCase().trim()
  );

  const renderCourses = (data, label) => {
    if (search && matchedCourse && matchedCourse.category !== data[0]?.category) return null;

    const filtered = data.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filtered.length === 0) return null;

    return (
      <div className="mb-8 pt-7">
        <h2 className="text-2xl font-bold mb-4 px-5 py-2 border-1 border-orange-500 rounded-xl w-[30vw]">
          <svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     strokeWidth={1.5} 
     stroke="currentColor" 
     className="w-10 h-10 text-orange-500 inline mr-5">
  <path strokeLinecap="round" strokeLinejoin="round" 
        d="M12 6v12m0-12C9.243 6 7 8.243 7 11s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
</svg>

          {label}
          </h2>
        <div className="flex gap-5 overflow-x-auto p-2 scroll-smooth">
          {filtered.map((course, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-x-scroll w-95 flex-shrink-0 border border-white/10 shadow-md bg-[#12131f] hover:scale-[1.01] transition hover:shadow-[0_0_20px_5px_rgba(249,115,22,0.4)]"
            >
              <div className="relative h-55 bg-[#3a2b23] flex items-center justify-center">
                <img
                  src={course.thumbnail}
                  alt="thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <FaPlayCircle className="text-orange-500 text-5xl" />
                <span
                  className={`absolute top-3 right-3 text-xs text-white px-2 py-1 rounded-md font-medium border-1 ${course.badgeColor}`}
                >
                  {course.badge}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-s text-white/60">by {course.author}</p>
                </div>
                <div className="flex items-center text-sm space-x-2 pb-10">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold text-lg">{course.rating}</span>
                  <span className="text-white/50 text-lg">({course.reviews})</span>
                  <span className="bg-[#251c17] text-orange-500 px-5 py-1 ml-auto rounded-full text-l border-1 border-orange-500/20">
                    {course.price}
                  </span>
                </div>
                {course.title === "Data Structures & Algorithm" ? (
                  <NavLink to="/studypage" onClick={() => scrollTo(0, 0)}>
                    <button className="w-full h-10 py-2 bg-orange-700 text-white rounded-md text-l font-medium hover:bg-orange-600 transition flex items-center animate-pulse justify-center gap-2">
                      <FaPlay className="text-xs" />
                      Join Now : Free For Today
                    </button>
                  </NavLink>
                ) : (
                  <button className="w-full h-10 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2">
                    <FaPlay className="text-xs" />
                    Coming soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#0e0f1a] text-white px-20 font-sans mt-5 text-l 0">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search course by name..."
        className="mb-2 mt-20 px-4 py-2 rounded-md bg-[#12131f] border border-white/10 text-white w-full"
      />
      {renderCourses(devcourses, "Web Development Courses")}
      {renderCourses(gateCourses, "GATE Courses")}
      {renderCourses(emergingCourses, "Emerging Tech Courses")}
    </div>
  );
};

export default FeaturedCourses;



