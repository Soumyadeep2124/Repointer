import React from "react";

const ProblemCategories = () => {
  const categories = [
    {
      title: "Arrays & Strings",
      problems: 42,
      difficulty: "Easy to Hard",
      progress: 18,
      icon: "📊",
      color: "bg-blue-500"
    },
    {
      title: "Dynamic Programming",
      problems: 28,
      difficulty: "Medium to Hard",
      progress: 19,
      icon: "🧩",
      color: "bg-purple-600"
    },
    {
      title: "Trees & Graphs",
      problems: 35,
      difficulty: "Easy to Hard",
      progress: 14,
      icon: "🌳",
      color: "bg-green-500"
    },
    {
      title: "Sorting & Searching",
      problems: 24,
      difficulty: "Easy to Medium",
      progress: 17,
      icon: "🔍",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="bg-[#0d1117] text-white px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold mb-2">Problem Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {categories.map((cat, i) => (
          <div key={i} className="border border-gray-800 rounded-xl p-6 bg-[#131313] space-y-2">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center text-2xl`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
                <p className="text-gray-400 text-sm">{cat.problems} problems • {cat.difficulty}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mt-3">Progress</p>
              <div className="relative w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full"
                  style={{ width: `${cat.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-white text-right mt-1 font-medium">{cat.progress}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemCategories;
