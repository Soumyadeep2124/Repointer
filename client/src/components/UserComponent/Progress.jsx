import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { TbTargetArrow, TbFlame, TbBolt, TbTrophy, TbClock } from 'react-icons/tb';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays, eachDayOfInterval } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import axiosClient from '../../utils/axiosClient';
import ContributionGrid from './Contribution';

const COLORS = ['#fb923c', '#facc15', '#34d399', '#60a5fa', '#a78bfa'];

const Progress = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [problemCount, setProblemCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [coursesCompleted, setCoursesCompleted] = useState(0);
  const [progress, setProgress] = useState(0);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [dailyProgress, setDailyProgress] = useState([]);

  const userId = user?._id;

  const tagDisplayMap = {
  'array': 'Arrays',
  'linkedList': 'Linked Lists',
  'graph': 'Graphs',
  'dp': 'Dynamic Programming'
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get(`/user/profileInfo/${userId}`);
        
        const userData = res.data;

        const problems = userData.problemsSolved || [];


        setProblemCount(problems.length);
        setStreak(userData.streak || 0);
        setCoursesCompleted(userData.coursesCompleted || 0);
        setProgress(userData.progress);
        setDailyProgress(userData.dailyProgress || []);

        // Weekly progress logic (last 7 days)
        const progressMap = {};
        (userData.dailyProgress || []).forEach(entry => {
          progressMap[entry.date] = entry.count;
        });

        const today = new Date();
        const days = Array.from({ length: 7 }, (_, i) => {
          const d = subDays(today, 6 - i);
          const dateStr = format(d, 'yyyy-MM-dd');
          return {
            day: format(d, 'EEE'),
            value: progressMap[dateStr] || 0
          };
        });

        setBarData(days);

        // Topic wise problem count (mock logic)
        const topicMap = {
      'Arrays': 0,
      'Linked Lists': 0,
      'Graphs': 0,
      'Dynamic Programming': 0,
    };

        // Add this debug log to see actual tags
    console.log("🏷️ Problem Tags:", 
      userData.problemsSolved?.map(p => p.tags)
    );

    for (let p of userData.problemsSolved || []) {
      const displayName = tagDisplayMap[p.tags];
      if (displayName) {
        topicMap[displayName]++;
      }
    }


        const pie = Object.keys(topicMap).map(topic => ({
          name: topic,
          value: topicMap[topic],
        }));
        setPieData(pie);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    if (userId) fetchData();
  }, [userId]);

  return (
    <div className="bg-[#0f111c] text-white px-10 pt-25 mb-5 font-sans">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {[{
          label: 'Problems Solved',
          value: problemCount
        }, {
          label: 'Current Streak',
          value: streak
        }, {
          label: 'Courses Completed',
          value: coursesCompleted
        }, {
          label: 'Progress',
          value: progress
        }].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1f2333] p-4 rounded-lg border border-[#2a2e38] shadow-[0_0_10px_rgba(251,146,60,0.3)]"
          >
            <div className="text-lg font-semibold mb-2">{item.label}</div>
            <div className="text-2xl font-bold text-green-500">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Weekly Progress */}
        <div className="bg-[#1f2333] p-6 rounded-xl border border-[#2a2e38]">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14H3z" />
            </svg>
            Weekly Progress
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

        {/* Topic Progress */}
        <div className="bg-[#1f2333] p-6 rounded-xl border border-[#2a2e38]">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4v11H3V10zm7-5h4v16h-4V5zm7 8h4v8h-4v-8z" />
            </svg>
            Topic Progress
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
      isAnimationActive={false} // optional: disable animation for static charts
    >
      {pieData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>

  {/* Custom Legend with colored dots */}
  <div className="space-y-2 text-sm w-full max-w-xs">
    {pieData.map((entry, index) => (
      <div key={index} className="flex justify-between">
        <span style={{ color: COLORS[index % COLORS.length] }}>
          ● {entry.name}
        </span>
        <span className="text-white">{entry.value}</span>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
      <ContributionGrid dailyProgress={dailyProgress} />

    </div>
  );
};

export default Progress;