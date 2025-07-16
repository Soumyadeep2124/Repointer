import React from 'react';
import { format, subDays, eachDayOfInterval } from 'date-fns';

const getDummyData = () => {
  const today = new Date();
  const days = eachDayOfInterval({
    start: subDays(today, 364),
    end: today,
  });

  // Dummy logic: solve 0–5 questions randomly
  return days.map(date => ({
    date: format(date, 'yyyy-MM-dd'),
    count: Math.floor(Math.random() * 6), // 0 to 5
  }));
};

// Map solved count to shades of orange
const getColor = count => {
  if (count === 0) return 'bg-[#1f2333]'; // empty
  if (count <= 1) return 'bg-orange-200';
  if (count <= 2) return 'bg-orange-300';
  if (count <= 3) return 'bg-orange-400';
  if (count <= 4) return 'bg-orange-500';
  return 'bg-orange-600';
};

const ContributionGrid = () => {
  const data = getDummyData();

  // Group into weeks
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <div className="bg-[#0f111c] p-6 rounded-xl border border-[#2a2e38] text-white">
      <h2 className="text-lg font-semibold mb-4">🔥 Daily Progress Tracker</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.map((day, j) => (
                <div
                  key={`${day.date}-${j}`}
                  className={`w-4 h-4 ${getColor(day.count)} rounded-sm`}
                  title={`${day.date}: ${day.count} solved`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-400">Data from the past 365 days</div>
      </div>
    </div>
  );
};

export default ContributionGrid;
