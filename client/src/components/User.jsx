import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { PieChart, Pie, Cell } from 'recharts';
import { TbClock } from 'react-icons/tb';

const COLORS = ['#fb923c', '#facc15', '#34d399', '#60a5fa', '#a78bfa'];

const pieData = [
  { name: 'Arrays', value: 45 },
  { name: 'Linked Lists', value: 30 },
  { name: 'Trees', value: 25 },
  { name: 'Graphs', value: 15 },
  { name: 'Dynamic Programming', value: 8 },
];


const User = () => {
  return (
    <div className="bg-[#0f111c] text-white min-h-screen p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          <span className="text-white">Student</span> <span className="text-orange-500">Dashboard</span>
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-[#1f2333] text-white px-4 py-2 rounded-md border border-[#2a2e38] w-64"
          />
          <div className="relative">
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
            <button className="text-white">🔔</button>
          </div>
          <button className="bg-orange-500 text-white rounded-full w-10 h-10">A</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Problems Solved', value: '247', growth: '+15.3%' },
          { label: 'Current Streak', value: '12 days', growth: '+2 days' },
          { label: 'Study Hours', value: '156h', growth: '+8.7%' },
          { label: 'Course Progress', value: '70%', growth: '+12%' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1f2333] p-4 rounded-lg border border-[#2a2e38] shadow-[0_0_10px_rgba(251,146,60,0.3)]"
          >
            <div className="text-lg font-semibold mb-2">{item.label}</div>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-green-400 text-sm">{item.growth} this week</div>
          </div>
        ))}
      </div>

      {/* Courses and Topic Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Enrolled Courses */}
        <div className="bg-[#1f2333] p-6 rounded-lg border border-[#2a2e38]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Enrolled Courses</h2>
            <button className="text-orange-500 text-sm">View All</button>
          </div>
          {[
            {
              title: 'Data Structures & Algorithms',
              instructor: 'Rohit Negi',
              videos: '112/150',
              hours: '40',
              rating: '4.9',
              level: 'Advanced',
              percent: 75,
            },
            {
              title: 'System Design Complete Course',
              instructor: 'Aditya Tandon',
              videos: '36/80',
              hours: '25',
              rating: '4.8',
              level: 'Expert',
              percent: 45,
            },
            {
              title: 'Machine Learning Fundamentals',
              instructor: 'Priya Sharma',
              videos: '108/120',
              hours: '35',
              rating: '4.9',
              level: 'Intermediate',
              percent: 90,
            },
          ].map((course, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-semibold">{course.title}</div>
                  <div className="text-sm text-gray-400">by {course.instructor} ・ {course.hours} hours ・ ⭐ {course.rating}</div>
                </div>
                <span className="bg-[#2a2e38] text-orange-400 px-2 py-0.5 text-xs rounded-full">{course.level}</span>
              </div>
              <div className="bg-[#2a2e38] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full"
                  style={{ width: `${course.percent}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-sm mt-1">
                <div>{course.videos} videos</div>
                <button className="bg-orange-500 text-white px-4 py-1 rounded flex items-center gap-2">
                  <FaPlay className="text-xs" /> Continue
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Topic Progress */}
        <div className="bg-[#1f2333] p-6 rounded-xl border border-[#2a2e38] mt-6">
  <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
    <TbClock className="text-orange-400" /> Topic Progress
  </h2>
  <div className="flex flex-col sm:flex-row gap-8 items-center justify-between">
    <PieChart width={250} height={250}>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        paddingAngle={2}
        dataKey="value"
        label={({ name, value }) => `${name}: ${value}/${{
          Arrays: 50,
          'Linked Lists': 35,
          Trees: 40,
          Graphs: 30,
          'Dynamic Programming': 25,
        }[name]}`}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div className="space-y-2 text-sm w-full max-w-xs">
      <div className="flex justify-between"><span className="text-[#fb923c]">● Arrays</span> <span className="text-white">45/50</span></div>
      <div className="flex justify-between"><span className="text-[#f97316]">● Linked Lists</span> <span className="text-white">30/35</span></div>
      <div className="flex justify-between"><span className="text-[#fbbf24]">● Trees</span> <span className="text-white">25/40</span></div>
      <div className="flex justify-between"><span className="text-[#fcd34d]">● Graphs</span> <span className="text-white">15/30</span></div>
      <div className="flex justify-between"><span className="text-[#fef08a]">● Dynamic Programming</span> <span className="text-white">8/25</span></div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default User;
