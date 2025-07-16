import { format, subDays, eachDayOfInterval } from 'date-fns';

const ContributionGrid = ({ dailyProgress }) => {
  const today = new Date();
  const allDays = eachDayOfInterval({
    start: subDays(today, 364),
    end: today,
  });

  const progressMap = {};
  dailyProgress.forEach(entry => {
    progressMap[entry.date] = entry.count;
  });

  const data = allDays.map(date => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return {
      date: dateStr,
      count: progressMap[dateStr] || 0
    };
  });

  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const getColor = (count) => {
    if (count === 0) return 'bg-[#1f2333] border border-[#2a2e38]';
    if (count <= 1) return 'bg-orange-200';
    if (count <= 2) return 'bg-orange-300';
    if (count <= 3) return 'bg-orange-400';
    if (count <= 4) return 'bg-orange-500';
    return 'bg-orange-600';
  };

  return (
    <div className="bg-[#1f2333] py-6 px-10 mt-5 rounded-xl border border-[#2a2e38] text-white ">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
             viewBox="0 0 24 24" strokeWidth={1.5} 
             stroke="currentColor" className="w-6 h-6 text-orange-500">
          <path strokeLinecap="round" strokeLinejoin="round" 
                d="M12 9v3l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Daily progress tracker
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.map((day, j) => (
                <div
                  key={`${day.date}-${j}`}
                  className={`w-5 h-5 ${getColor(day.count)} rounded-sm`}
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


