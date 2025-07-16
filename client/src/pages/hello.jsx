import React from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { TbTargetArrow, TbFlame, TbBolt, TbTrophy } from 'react-icons/tb';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#fb923c', '#facc15', '#34d399', '#60a5fa', '#a78bfa'];

const pieData = [
  { name: 'Arrays', value: 45 },
  { name: 'Linked Lists', value: 30 },
  { name: 'Trees', value: 25 },
  { name: 'Graphs', value: 15 },
  { name: 'Dynamic Programming', value: 8 },
];

const barData = [
  { day: 'Mon', value: 5 },
  { day: 'Tue', value: 8 },
  { day: 'Wed', value: 3 },
  { day: 'Thu', value: 12 },
  { day: 'Fri', value: 6 },
  { day: 'Sat', value: 15 },
  { day: 'Sun', value: 10 },
];

const iconMap = {
  'Problem Solver': <TbTargetArrow className="text-white text-2xl" />,
  'Streak Master': <TbFlame className="text-white text-2xl" />,
  'Speed Demon': <TbBolt className="text-white text-2xl" />,
  'Course Completer': <TbTrophy className="text-white text-2xl" />,
};

const hello = () => {
  return (
    <div className="bg-[#0f111c] text-white min-h-screen p-6 font-sans">
      {/* Weekly Progress & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Weekly Progress */}
        <div className="bg-[#1f2333] p-6 rounded-xl border border-[#2a2e38]">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-orange-400">📊</span> Weekly Progress
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#1f2333', borderColor: '#2a2e38' }} />
              <Bar dataKey="value" fill="#fb923c" radius={[5, 5, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements */}
        <div className="bg-[#1f2333] p-6 rounded-xl border border-[#2a2e38]">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TbTrophy className="text-orange-400 text-xl" /> Achievements
          </h2>
          {[
            {
              title: 'Problem Solver',
              description: 'Solved 100+ problems',
              achieved: true,
            },
            {
              title: 'Streak Master',
              description: '30-day solving streak',
              achieved: true,
            },
            {
              title: 'Speed Demon',
              description: 'Solved 10 problems in 1 hour',
              achieved: false,
            },
            {
              title: 'Course Completer',
              description: 'Completed 3 courses',
              achieved: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-4 rounded-lg mb-3 border ${
                item.achieved ? 'bg-gradient-to-r from-[#2a2e38] to-[#1f2333] border-orange-500' : 'bg-[#1f2333] border-[#2a2e38] opacity-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-md ${
                  item.achieved ? 'bg-gradient-to-br from-orange-500 to-[#b45309]' : 'bg-[#2a2e38]'
                }`}>
                  {iconMap[item.title]}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              {item.achieved && <FaCheck className="text-orange-400 text-xl" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default hello;


