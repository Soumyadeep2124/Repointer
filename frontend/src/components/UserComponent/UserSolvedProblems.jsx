import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import axiosClient from '../../utils/axiosClient';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const UserSolvedProblems = () => {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [allProblemsCount, setAllProblemsCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const userId = user?._id;

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const solvedRes = await axiosClient.get(`/problem/problemsSolvedByUser/${userId}`);
        const allRes = await axiosClient.get('/problem/getAllProblem'); // Assuming this gets all problems
        setSolvedProblems(solvedRes.data);
        setAllProblemsCount(allRes.data?.length || 0);
      } catch (error) {
        console.error("Failed to fetch problems", error);
      }
    };
    

    if (user) fetchSolvedProblems();
  }, [user]);

  const solvedCount = solvedProblems.length;
  const progress = allProblemsCount > 0 ? (solvedCount / allProblemsCount) * 100 : 0;

  return (
    <div className="bg-[#1f2333] p-6 rounded-lg border border-[#2a2e38] mx-10 my-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Solved Problems ({solvedCount} / {allProblemsCount})
        </h2>
        <button
          className="text-orange-500 text-sm"
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? "Hide" : "View All"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#2a2e38] h-2 rounded-full overflow-hidden mb-10">
        <div className="bg-orange-500 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Show only when View All is clicked */}
      {showAll && (
  <div className="space-y-4">
    {solvedProblems.map((problem) => (
      <div key={problem._id}>
        <div className="flex justify-between items-center mb-2 p-5 bg-[#333539] mt-2 rounded-xl">
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="#22c55e"/>
  <path d="M16 9l-5.5 5.5L8 12" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<div className="font-semibold">{problem.title}</div>
          </div>

            

            <div className="text-sm text-gray-400">
              Difficulty: {problem.difficulty} ・ Tags:{' '}
              {Array.isArray(problem.tags)
                ? problem.tags.join(', ')
                : (problem.tags || 'N/A')}
            </div>

            <div>
          <NavLink to={`/problem/${problem._id}`}>
            <button className="bg-orange-500 text-white px-4 py-1 rounded flex items-center gap-2">
              View
            </button>
          </NavLink>
            </div>


        </div>

            
      </div>
    ))}
  </div>
)}


      {/* If not showAll and nothing solved */}
      {!showAll && solvedCount === 0 && (
        <p className="text-gray-400 text-sm">You haven’t solved any problems yet.</p>
      )}
    </div>
  );
};

export default UserSolvedProblems;

