import {Routes, Route ,Navigate} from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from "./authSlice";
import { useEffect } from "react";
import AdminCreate from "./components/AdminComponent/AdminCreate";
import ProblemPage from "./pages/ProblemPage";
import Admin from "./pages/Admin";
import AdminVideo from "./components/AdminComponent/AdminVideo";
import AdminDelete from "./components/AdminComponent/AdminDelete";
import AdminUpload from "./components/AdminComponent/AdminUpload";
import DsaDashboard from "./pages/DsaDashboard";
import CoursesDashboard from "./pages/CoursesDashboard";
import CodingDashboard from "./pages/CodingDashboard";
import DsaVisualize from "./pages/DsaVisualize"
import StudyPage from "./pages/StudyPage";
import UserDashboard from "./pages/UserDashboard";

function App(){
  
  const dispatch = useDispatch();
  const {isAuthenticated,user,loading} = useSelector((state)=>state.auth);

  // check initial authentication
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return(
  <>
    <Routes>
      {/* <Route path="/" element={isAuthenticated ?<Homepage></Homepage>:<Navigate to="/signup" />}></Route> */}
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/login" element={isAuthenticated?<Navigate to="/" />:<Login></Login>}></Route>
      <Route path="/signup" element={isAuthenticated?<Navigate to="/" />:<Signup></Signup>}></Route>
      <Route path="/admin" element={isAuthenticated && user?.role === 'admin' ? <Admin /> : <Navigate to="/" />} />
      <Route path="/user" element={isAuthenticated && user?.role === 'user' ? <UserDashboard /> : <Navigate to="/" />} />

      <Route path="/codingpage" element={isAuthenticated? <CodingDashboard></CodingDashboard>: <Signup></Signup>}></Route>
      <Route path="/dsapage" element={isAuthenticated? <DsaDashboard></DsaDashboard>: <Signup></Signup>}></Route>
      <Route path="/dsapage/:type" element={isAuthenticated? <DsaVisualize></DsaVisualize>: <Signup></Signup>}></Route>
      <Route path="/coursespage" element={isAuthenticated? <CoursesDashboard></CoursesDashboard>: <Signup></Signup>}></Route>
      <Route path="/studypage" element={isAuthenticated? <StudyPage></StudyPage>: <Signup></Signup>}></Route>

      <Route path="/admin/create" element={isAuthenticated && user?.role === 'admin' ? <AdminCreate /> : <Navigate to="/" />} />
      <Route path="/admin/delete" element={isAuthenticated && user?.role === 'admin' ? <AdminDelete /> : <Navigate to="/" />} />
      <Route path="/admin/video" element={isAuthenticated && user?.role === 'admin' ? <AdminVideo /> : <Navigate to="/" />} />
      <Route path="/admin/upload/:problemId" element={isAuthenticated && user?.role === 'admin' ? <AdminUpload /> : <Navigate to="/" />} />
      <Route path="/problem/:problemId" element={<ProblemPage/>}></Route>
      
    </Routes>
  </>
  )
}

export default App;