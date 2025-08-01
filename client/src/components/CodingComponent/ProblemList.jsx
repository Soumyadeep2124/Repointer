import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { logoutUser } from '../../authSlice';
import { FiUsers, FiStar, FiShare2, FiBookmark, FiClock } from "react-icons/fi";


function ProblemList() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [problems, setProblems] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: 'all',
    tag: 'all',
    status: 'all'
  });

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await axiosClient.get('/problem/getAllProblem');
        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    const fetchSolvedProblems = async () => {
      try {
        const { data } = await axiosClient.get('/problem/problemSolvedByUser');
        setSolvedProblems(data);
      } catch (error) {
        console.error('Error fetching solved problems:', error);
      }
    };

    fetchProblems();
    if (user) fetchSolvedProblems();
  }, [user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setSolvedProblems([]);
  };

  const filteredProblems = problems.filter(problem => {
    const difficultyMatch = filters.difficulty === 'all' || problem.difficulty === filters.difficulty;
    const tagMatch = filters.tag === 'all' || problem.tags === filters.tag;
    const statusMatch = filters.status === 'all' || 
                      solvedProblems.some(sp => sp._id === problem._id);
    return difficultyMatch && tagMatch && statusMatch;
  });


  //extra
  const getDifficultyBadgeColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'badge-success';
      case 'medium': return 'badge-warning';
      case 'hard': return 'badge-error';
      default: return 'badge-neutral';
    }
  };

  const getIcon = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return <FiClock className="text-green-500" />;
      case 'medium': return <FiClock className="text-yellow-500" />;
      case 'hard': return <FiClock className="text-red-500" />;
      default: return <FiUsers />;
    }
  };
//


  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-6 md:p-12 pt-50">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 pt-20">
        <select 
          className="select select-bordered"
          value={filters.status}
          onChange={(e) => setFilters({...filters, status: e.target.value})}
        >
          <option value="all">All Problems</option>
          <option value="solved">Solved Problems</option>
        </select>

        <select 
          className="select select-bordered"
          value={filters.difficulty}
          onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

       <select 
  className="select select-bordered"
  value={filters.tag}
  onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
>
  <option value="all">All Tags</option>
  <option value="array">Array</option>
  <option value="string">String</option>
  <option value="linkedList">Linked List</option>
  <option value="stack">Stack</option>
  <option value="tree">Tree</option>
  <option value="graph">Graph</option>
  <option value="dp">DP</option>
  <option value="greedy">Greedy</option>
  <option value="recursion">Recursion</option>
  <option value="slidingWindow">Sliding Window</option>
</select>


      </div>

      {/* Problem List */}
      {filteredProblems.map((problem, index) => (

        
        <div key={problem._id} className="bg-[#12141c] border border-gray-700 rounded-xl p-6 mb-5">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="pt-1">{getIcon(problem.difficulty)}</div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <NavLink to={`/problem/${problem._id}`} className="hover:text-orange-500">
                    {problem.title}
                  </NavLink>
                  <span className={`text-xs bg-$
                    {problem.difficulty === "Easy"
                      ? "orange-400"
                      : problem.difficulty === "Medium"
                      ? "gray-600"
                      : "red-700"} text-white rounded-full px-2 py-0.5`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-xs bg-gray-800 border border-gray-700 text-white rounded-full px-2 py-0.5">
                    {problem.tags}
                  </span>
                </h3>
              </div>
              
            </div>
            
            <div className="flex flex-col items-end gap-2 ">
              <NavLink to={`/problem/${problem._id}`}>
               <button className={`text-white text-sm font-semibold px-3 py-1 rounded-md ${solvedProblems.some(sp => sp._id === problem._id) ? "bg-green-500" : "bg-orange-500"}`}>
                {solvedProblems.some(sp => sp._id === problem._id) ? "✓ Solved" : "Solve"}
               </button>
              </NavLink>
              <div className="flex gap-3 text-gray-400">
                <FiBookmark className="cursor-pointer" />
                <FiShare2 className="cursor-pointer" />
              </div>
            </div>
            
          </div>

          <div className="text-gray-400 text-xs flex gap-6 pt-2 items-center ">
          <p className="text-gray-400 text-sm">{problem.description || "A coding problem to solve."}</p>

            <div className="flex items-center gap-1">
              <FiUsers /> Acceptance: {problem.submissions > 0 ? `${((problem.correctSubmissions / problem.submissions) * 100).toFixed(1)}%` : "N/A"}
            </div>
            <div className="flex items-center gap-1">
              <FiUsers /> {problem.submissions || "Unknown"} submissions
            </div>
          </div>

          <div className="text-sm text-gray-400 pt-2">
            <span className="text-white">Companies:</span>
            {(problem.companies || ["N/A"]).map((company, i) => (
              <span
                key={i}
                className="bg-gray-800 border border-gray-700 text-xs text-white rounded-full px-2 py-0.5 ml-2"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemList;