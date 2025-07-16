const Problem = require("../models/problem");
const Submission = require("../models/submission");
const User = require("../models/user");
const {getLanguageById,submitBatch,submitToken} = require("../utils/problemUtility");

const submitCode = async (req, res) => {
  try {
    const userId = req.result._id;
    const problemId = req.params.id;
    let { code, language } = req.body;

    if (!userId || !code || !problemId || !language)
      return res.status(400).send("Some field missing");

    if (language === 'cpp') language = 'c++';

    // Fetch the problem
    const problem = await Problem.findById(problemId);

    // Create initial submission entry
    const submittedResult = await Submission.create({
      userId,
      problemId,
      code,
      language,
      status: 'pending',
      testCasesTotal: problem.hiddenTestCases.length,
    });

    const languageId = getLanguageById(language);

    const submissions = problem.hiddenTestCases.map((testcase) => ({
      source_code: code,
      language_id: languageId,
      stdin: testcase.input,
      expected_output: testcase.output,
    }));

    const submitResult = await submitBatch(submissions);
    const resultToken = submitResult.map((value) => value.token);
    const testResult = await submitToken(resultToken);

    // Evaluate test case results
    let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = 'accepted';
    let errorMessage = null;

    await Problem.findByIdAndUpdate(problemId, { $inc: { submissions: 1 } });

    for (const test of testResult) {
      if (test.status_id === 3) {
        testCasesPassed++;
        runtime += parseFloat(test.time);
        memory = Math.max(memory, test.memory);
      } else {
        status = test.status_id === 4 ? 'error' : 'wrong';
        errorMessage = test.stderr;
      }
    }

    if (status === 'accepted') {
      await Problem.findByIdAndUpdate(problemId, { $inc: { correctSubmissions: 1 } });
    }

    // await problem.updateOne({ $addToSet: { problemSolved: problemId } });

    // Update the submission result
    submittedResult.status = status;
    submittedResult.testCasesPassed = testCasesPassed;
    submittedResult.errorMessage = errorMessage;
    submittedResult.runtime = runtime;
    submittedResult.memory = memory;
    await submittedResult.save();

    // Accepted: update user stats
    if (status === 'accepted') {
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0]; // 'YYYY-MM-DD'
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      // Get fresh user object with full fields
      const user = await User.findById(userId);

      // 1. Add problemId to problemSolved if not exists
      const alreadySolved = user.problemSolved.includes(problemId);
      if (!alreadySolved) {
        user.problemSolved.push(problemId);
      }

      // 2. Update dailyProgress
      const dayIndex = user.dailyProgress.findIndex((entry) => entry.date === todayStr);
      if (dayIndex !== -1) {
        user.dailyProgress[dayIndex].count += 1;
      } else {
        user.dailyProgress.push({ date: todayStr, count: 1 });
      }

      // 3. Update streak
      const lastSolvedStr = user.lastProblemSolvedAt
        ? user.lastProblemSolvedAt.toISOString().split('T')[0]
        : null;

      if (!lastSolvedStr || lastSolvedStr < yesterdayStr) {
        user.streak = 1;
      } else if (lastSolvedStr === yesterdayStr) {
        user.streak += 1;
      }

      // 4. Update lastProblemSolvedAt
      user.lastProblemSolvedAt = today;

      await user.save();
    }

    const accepted = status === 'accepted';

    res.status(201).json({
      accepted,
      totalTestCases: submittedResult.testCasesTotal,
      passedTestCases: testCasesPassed,
      runtime,
      memory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error " + err);
  }
};



const runCode = async(req,res)=>{
    
     // 
     try{
      const userId = req.result._id;
      const problemId = req.params.id;

      let {code,language} = req.body;

     if(!userId||!code||!problemId||!language)
       return res.status(400).send("Some field missing");

   //    Fetch the problem from database
      const problem =  await Problem.findById(problemId);
   //    testcases(Hidden)
      if(language==='cpp')
        language='c++'

   //    Judge0 code ko submit karna hai

   const languageId = getLanguageById(language);

   const submissions = problem.visibleTestCases.map((testcase)=>({
       source_code:code,
       language_id: languageId,
       stdin: testcase.input,
       expected_output: testcase.output
   }));


   const submitResult = await submitBatch(submissions);
   
   const resultToken = submitResult.map((value)=> value.token);

   const testResult = await submitToken(resultToken);

    let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = true;
    let errorMessage = null;

    for(const test of testResult){
        if(test.status_id==3){
           testCasesPassed++;
           runtime = runtime+parseFloat(test.time)
           memory = Math.max(memory,test.memory);
        }else{
          if(test.status_id==4){
            status = false
            errorMessage = test.stderr
          }
          else{
            status = false
            errorMessage = test.stderr
          }
        }
    }

   
  
   res.status(201).json({
    success:status,
    testCases: testResult,
    runtime,
    memory
   });
      
   }
   catch(err){
     res.status(500).send("Internal Server Error "+ err);
   }
}


module.exports = {submitCode,runCode};



//     language_id: 54,
//     stdin: '2 3',
//     expected_output: '5',
//     stdout: '5',
//     status_id: 3,
//     created_at: '2025-05-12T16:47:37.239Z',
//     finished_at: '2025-05-12T16:47:37.695Z',
//     time: '0.002',
//     memory: 904,
//     stderr: null,
//     token: '611405fa-4f31-44a6-99c8-6f407bc14e73',


// User.findByIdUpdate({
// })

//const user =  User.findById(id)
// user.firstName = "Mohit";
// await user.save();