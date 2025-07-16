import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Editor from '@monaco-editor/react';
import { useParams } from 'react-router';
import axiosClient from "../utils/axiosClient";
import SubmissionHistory from "../components/SubmissionHistory";
import ChatAi from '../components/ChatAi';
import Editorial from '../components/Editorial';

const langMap = {
  cpp: 'C++',
  java: 'Java',
  javascript: 'JavaScript'
};

const ProblemPage = () => {
  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [submitResult, setSubmitResult] = useState(null);
  const [activeLeftTab, setActiveLeftTab] = useState('description');
  const [activeRightTab, setActiveRightTab] = useState('code');
  const [leftPanelWidth, setLeftPanelWidth] = useState(50);
  const isResizing = useRef(false);
  const editorRef = useRef(null);
  let { problemId } = useParams();

  const { handleSubmit } = useForm();

  useEffect(() => {
    const fetchProblem = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get(`/problem/problemById/${problemId}`);
        const initialCode = response.data.startCode.find(sc => sc.language === langMap[selectedLanguage]).initialCode;
        setProblem(response.data);
        setCode(initialCode);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching problem:', error);
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId]);

  useEffect(() => {
    if (problem) {
      const initialCode = problem.startCode.find(sc => sc.language === langMap[selectedLanguage]).initialCode;
      setCode(initialCode);
    }
  }, [selectedLanguage, problem]);

  const handleEditorChange = (value) => setCode(value || '');
  const handleEditorDidMount = (editor) => editorRef.current = editor;
  const handleLanguageChange = (language) => setSelectedLanguage(language);

  const handleRun = async () => {
    setLoading(true);
    setRunResult(null);
    try {
      const response = await axiosClient.post(`/submission/run/${problemId}`, { code, language: selectedLanguage });
      setRunResult(response.data);
      setActiveRightTab('testcase');
    } catch (error) {
      setRunResult({ success: false, error: 'Internal server error' });
      setActiveRightTab('testcase');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCode = async () => {
    setLoading(true);
    setSubmitResult(null);
    try {
      const response = await axiosClient.post(`/submission/submit/${problemId}`, { code, language: selectedLanguage });
      setSubmitResult(response.data);
      setActiveRightTab('result');
    } catch (error) {
      setSubmitResult(null);
      setActiveRightTab('result');
    } finally {
      setLoading(false);
    }
  };

  const getLanguageForMonaco = (lang) => lang;
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (loading && !problem) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0e0f1a]">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  const handleMouseDown = () => isResizing.current = true;
  const handleMouseUp = () => isResizing.current = false;
  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const percentage = (e.clientX / window.innerWidth) * 100;
    if (percentage > 20 && percentage < 80) setLeftPanelWidth(percentage);
  };

  return (
    <div className="h-screen flex bg-[#0e0f1a] text-white" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="flex flex-col border-r border-white/10" style={{ width: `${leftPanelWidth}%` }}>
        <div className="tabs px-4 bg-[#1c1f2b] border-b border-white/10 text-orange-500">
          {['description', 'editorial', 'solutions', 'submissions', 'chatAI'].map(tab => (
            <button
              key={tab}
              className={`tab hover:text-orange-300 ${activeLeftTab === tab ? 'tab-active text-white border-b-2 border-orange-500' : ''}`}
              onClick={() => setActiveLeftTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
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
              {activeLeftTab === 'editorial' && <Editorial secureUrl={problem.secureUrl} thumbnailUrl={problem.thumbnailUrl} duration={problem.duration} />}
              {activeLeftTab === 'solutions' && problem.referenceSolution?.map((solution, i) => (
                <div key={i} className="bg-[#1f2233] rounded-lg mb-4">
                  <div className="bg-[#2a2e3f] px-4 py-2 rounded-t-lg font-semibold">{problem.title} - {solution.language}</div>
                  <div className="p-4 text-sm">
                    <pre className="bg-[#1c1f2b] p-3 rounded overflow-x-auto">
                      <code>{solution.completeCode}</code>
                    </pre>
                  </div>
                </div>
              ))}
              {activeLeftTab === 'submissions' && <SubmissionHistory problemId={problemId} />}
              {activeLeftTab === 'chatAI' && <ChatAi problem={problem} />}
            </>
          )}
        </div>
      </div>

      <div className="cursor-col-resize w-[5px] bg-gray-500 hover:bg-orange-500" onMouseDown={handleMouseDown}></div>

      <div className="flex flex-col" style={{ width: `${100 - leftPanelWidth}%` }}>
        <div className="tabs bg-[#1c1f2b] px-4 border-b border-white/10 text-orange-500">
          {['code', 'testcase', 'result'].map(tab => (
            <button
              key={tab}
              className={`tab hover:text-orange-300 ${activeRightTab === tab ? 'tab-active text-white border-b-2 border-orange-500' : ''}`}
              onClick={() => setActiveRightTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex-1 flex flex-col bg-[#12131b]">
          {activeRightTab === 'code' && (
            <>
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <div className="flex gap-2">
                  {['javascript', 'java', 'cpp'].map(lang => (
                    <button
                      key={lang}
                      className={`btn btn-sm rounded px-3 ${selectedLanguage === lang ? 'bg-orange-500 text-white' : 'bg-[#26293a] text-white hover:bg-orange-500 hover:text-white'}`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang === 'cpp' ? 'C++' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <Editor height="100%" language={getLanguageForMonaco(selectedLanguage)} value={code} onChange={handleEditorChange} onMount={handleEditorDidMount} theme="vs-dark" />
              <div className="p-4 border-t border-white/10 flex justify-between bg-[#1b1e2c]">
                <button className="btn btn-sm bg-transparent text-orange-500 hover:text-white hover:bg-orange-500" onClick={() => setActiveRightTab('testcase')}>Console</button>
                <div className="flex gap-2">
                  <button className={`btn btn-outline btn-sm border-orange-500 text-orange-500 ${loading ? 'loading' : ''}`} onClick={handleRun} disabled={loading}>Run</button>
                  <button className={`btn btn-sm bg-orange-500 text-white ${loading ? 'loading' : ''}`} onClick={handleSubmitCode} disabled={loading}>Submit</button>
                </div>
              </div>
            </>
          )}

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
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
