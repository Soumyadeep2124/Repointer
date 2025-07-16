import React, { useState } from "react";
import Footer from '../components/Footer';
import FeaturedCourses from '../components/HomeComponent/Featured Courses';
import Navbar from '../components/HomeComponent/Navbar';
import StudyPage from './StudyPage';


const CoursesDashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Courses"); 

  return (
    <div className='bg-[#0e0f1a]'>
      
    <Navbar/>
<FeaturedCourses selectedCategory={selectedCategory} />

    <Footer/>
    </div>
   
  );
};

export default CoursesDashboard;