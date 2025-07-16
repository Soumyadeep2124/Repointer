<div className="flex-1 overflow-y-auto p-6">
          {problem && (
            <>
              {activeLeftTab === 'description' && (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-2xl font-bold text-orange-500">{problem.title}</h1>
                    <div className={`badge badge-outline ${getDifficultyColor(problem.difficulty)}`}>{problem.difficulty}</div>
                    <div className="badge border border-orange-500 text-orange-500 bg-transparent">{problem.tags}</div>
                  </div>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{problem.description}</div>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">Examples:</h3>
                    <div className="space-y-4">
                      {problem.visibleTestCases.map((example, index) => (
                        <div key={index} className="bg-[#1f2233] p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Example {index + 1}</h4>
                          <div className="space-y-2 text-sm font-mono">
                            <div><strong>Input:</strong> {example.input}</div>
                            <div><strong>Output:</strong> {example.output}</div>
                            <div><strong>Explanation:</strong> {example.explanation}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeLeftTab === 'editorial' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-orange-500">Editorial</h2>
                  <Editorial secureUrl={problem.secureUrl} thumbnailUrl={problem.thumbnailUrl} duration={problem.duration} />
                </div>
              )}

              {activeLeftTab === 'solutions' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-orange-500">Solutions</h2>
                  {problem.referenceSolution?.map((solution, i) => (
                    <div key={i} className="bg-[#1f2233] rounded-lg mb-4">
                      <div className="bg-[#2a2e3f] px-4 py-2 rounded-t-lg font-semibold">{problem.title} - {solution.language}</div>
                      <div className="p-4 text-sm">
                        <pre className="bg-[#1c1f2b] p-3 rounded overflow-x-auto">
                          <code>{solution.completeCode}</code>
                        </pre>
                      </div>
                    </div>
                  )) || <p className="text-gray-500">Solutions will be available after you solve the problem.</p>}
                </div>
              )}

              {activeLeftTab === 'submissions' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-orange-500">My Submissions</h2>
                  <SubmissionHistory problemId={problemId} />
                </div>
              )}

              {activeLeftTab === 'chatAI' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-orange-500">Chat with AI</h2>
                  <ChatAi problem={problem} />
                </div>
              )}
            </>
          )}
        </div>



















import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaThLarge } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const CourseHeader = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-[#0d1117] text-white pt-25 px-20 rounded-xl">


{/* Category */}
<div className="pb-10 pt-5 px-5">
  <label className="text-xl font-light mb-2 block text-white">Search Couses by Category</label>
  <div className="relative">
    <select
      className="appearance-none w-[45vw] bg-[#0a0e17] text-white border border-[#1f2937] rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
      <option>All Courses</option>
      <option>DSA</option>
      <option>Web Development</option>
      <option>System Design</option>
      <option>Gen Ai</option>
    </select>
    <IoIosArrowDown className="absolute left-150 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
</div>
      </div>

  );
};

export default CourseHeader;


















{activeRightTab === 'testcase' && (
            <div className="flex-1 p-4 overflow-y-auto text-sm">
              <h3 className="font-semibold mb-4 text-orange-500">Test Results</h3>
              {runResult ? (
                <div className={`alert ${runResult.success ? 'alert-success' : 'alert-error'} bg-[#1b1e2c] text-white border-none`}>
                  <div>
                    {runResult.success ? (
                      <>
                        <h4 className="font-bold">✅ All test cases passed!</h4>
                        <p>Runtime: {runResult.runtime} sec</p>
                        <p>Memory: {runResult.memory} KB</p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold">❌ Error</h4>
                        <p>{runResult.error}</p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">Click "Run" to test your code with the example test cases.</p>
              )}
            </div>
          )}


















{activeRightTab === 'result' && (
            <div className="flex-1 p-4 overflow-y-auto text-sm">
              <h3 className="font-semibold mb-4 text-orange-500">Submission Result</h3>
              {submitResult ? (
                <div className={`alert ${submitResult.accepted ? 'alert-success' : 'alert-error'} bg-[#1b1e2c] text-white border-none`}>
                  <div>
                    {submitResult.accepted ? (
                      <>
                        <h4 className="font-bold text-lg">🎉 Accepted</h4>
                        <p>Test Cases Passed: {submitResult.passedTestCases}/{submitResult.totalTestCases}</p>
                        <p>Runtime: {submitResult.runtime} sec</p>
                        <p>Memory: {submitResult.memory} KB</p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold text-lg">❌ {submitResult.error}</h4>
                        <p>Test Cases Passed: {submitResult.passedTestCases}/{submitResult.totalTestCases}</p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">Click "Submit" to submit your solution for evaluation.</p>
              )}
            </div>
          )}








////USER DASHBOARD





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
      

      </div>