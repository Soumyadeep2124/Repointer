// OurFeatures.jsx
import React from "react";
import {
  FaBrain,
  FaUsers,
  FaChartBar,
  FaDownload,
  FaUserTie,
  FaMobileAlt,
  FaCertificate,
  FaGlobe,
  FaBell
} from "react-icons/fa";

const features = [
  {
    title: "AI-Powered Learning Paths",
    description: "Our intelligent system creates personalized learning journeys based on your goals, learning style, and progress. Get recommendations tailored just for you.",
    icon: <FaBrain className="text-9xl text-orange-500 mt-3" />, 
    bg: "bg-[#2c1d19]",
    borderShadow: "hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.4)]",
    borderColor:"hover:border-orange-500",
    fontColor: "hover:text-orange-500",
    extra: (
      <div className="flex gap-2 mt-4">
        <span className="text-xs px-3 py-1 rounded-full bg-[#453c3a] text-orange-500">⚡ Smart Recommendations</span>
        <span className="text-xs px-3 py-1 rounded-full bg-[#453c3a] text-orange-500">🎯 Goal-Based Learning</span>
      </div>
    ),
    colSpan: "row-span-2"
  },
  {
    title: "Collaborative Group Learning",
    description:
      "Join study groups, participate in peer discussions, and learn together with like-minded students from around the world.",
    icon: <FaUsers className="text-5xl text-green-500" />, 
    bg: "bg-[#0f1d1a]",
    borderShadow: "hover:shadow-[0px_0px_20px_2px_rgba(34,197,94,0.2)]",
    borderColor: "hover:border-green-500",
    fontColor: "hover:text-green-500",
    colSpan: "col-span-2"
  },
  {
    title: "Progress Analytics",
    description:
      "Track your learning with detailed insights and performance metrics",
    icon: <FaChartBar className="text-3xl text-purple-400" />, 
    bg: "bg-[#1b1532]",
    borderShadow: "hover:shadow-[0_0_30px_2px_rgba(168,85,247,0.4)]",
    borderColor: "hover:border-purple-500",
    fontColor: "hover:text-purple-500",
    span: (
      <div className="w-full h-2 bg-purple-900/50 rounded-full mt-4">
        <div className="w-[78%] h-2 bg-purple-400 rounded-full"></div>
      </div>
    ),
    footer: <span className="text-green-400 text-xs font-semibold mt-1">78%</span>
  },
  {
    title: "Offline Learning",
    description: "Download content and learn anywhere, anytime",
    icon: <FaDownload className="text-3xl text-orange-400 mt-3" />, 
    bg: "bg-[#1e1b4b]",
    borderShadow: "hover:shadow-[0_0_20px_2px_rgba(129,140,248,0.4)]",
    borderColor: "hover:border-indigo-500",
    fontColor: "hover:text-indigo-500",
    footer: (
      <span className="text-orange-400 text-xs font-semibold mt-4 inline-block bg-[#442b25] px-3 py-1 rounded-full">
        500+ courses available
      </span>
    )
  },
  {
    title: "Live Mentoring",
    description: "Connect with expert mentors for personalized guidance",
    icon: <FaUserTie className="text-6xl text-blue-400 mt-3" />, 
    bg: "bg-[#13202b]",
    borderShadow: "hover:shadow-[0_0_20px_2px_rgba(96,165,250,0.4)]",
    borderColor: "hover:border-blue-500",
    fontColor: "hover:text-blue-500",
    footer: (
      <span className="text-green-400 text-xs font-semibold mt-2 inline-block">
        ● 15 mentors online now
      </span>
    ),
  },
  {
    title: "Certificates",
    description: "Earn industry-recognized credentials",
    icon: <FaCertificate className="text-3xl text-yellow-300 mt-3" />, 
    bg: "bg-[#2a2617]",
    borderShadow: "hover:shadow-[0_0_20px_2px_rgba(253,224,71,0.4)]",
    borderColor: "hover:border-yellow-500",
    fontColor: "hover:text-yellow-500",
    span: (
      <span className="text-yellow-300 text-xs font-semibold mt-4 inline-block">
        🏆 120+ verified certificates
      </span>
    )
  },
  {
    title: "Multi-language Support",
    description:
      "Learn in your preferred language with support for 15+ languages",
    icon: <FaGlobe className="text-3xl text-pink-400" />, 
    bg: "bg-[#2b1a2a]",
    borderShadow: "hover:shadow-[0_0_20px_2px_rgba(244,114,182,0.4)]",
    borderColor: "hover:border-pink-500",
    fontColor: "hover:text-pink-500",
    
    span: (
      <div className="flex gap-1 mt-3">
        {["🇺🇸 EN", "🇪🇸 ES", "🇫🇷 FR", "🇮🇳 +12"].map((lang, idx) => (
          <span
            key={idx}
            className="text-xs bg-[#1a2e30] px-2 py-1 rounded-full text-cyan-300"
          >
            {lang}
          </span>
        ))}
      </div>
    )
  }
];

const OurFeatures = () => {
  return (
    <div>
    <div>
        <h3 className="text-5xl font-bold pt-4 mb-4 mx-auto flex justify-center">Why Choose Repointer</h3>
        <p className="text-xl text-white/70 mb-15 flex justify-center">Discover the advanced features that make our learning platform exceptional</p>
    </div>
    
    <div className="bg-[#0e0f1a] py-6 px-20 rounded-2xl text-white font-sans mx-auto">
      <div className="grid gap-5" style={{ gridTemplateColumns: '4fr 3fr 3fr' }}>
        {features.map((feature, index) => (
          <div key={index} className={`rounded-2xl p-5 ${feature.bg} ${feature.colSpan || ""} border border-white/10 transition-all duration-300 transform hover:scale-[1.02] ${feature.borderShadow} ${feature.borderColor} ${feature.fontColor}` }>
            <div className="mb-4 px-5">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 px-3 ">{feature.title}</h3>
            <p className="text-l font-extralight text-white/70 mb-2 px-3">{feature.description}</p>
            {feature.span && <div className="px-3">{feature.span}</div>}
            {feature.extra && <div className="px-3 pt-10">{feature.extra}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default OurFeatures;