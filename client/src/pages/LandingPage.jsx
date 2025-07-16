import React from 'react'
import WelcomeSection from '../components/HomeComponent/WelcomeSection'
import FeaturedCourses from '../components/HomeComponent/Featured Courses'
import OurFeatures from '../components/HomeComponent/OurFeatures'
import CodingIntro from '../components/HomeComponent/CodingIntro'
import DsaIntro from '../components/HomeComponent/DsaIntro'
import Navbar from '../components/HomeComponent/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router'




const LandingPage = () => {
  return (
    <div className='bg-[#0e0f1a] '>
      <Navbar/>
        <WelcomeSection/>
        <OurFeatures/>
        <DsaIntro/>
        <CodingIntro/>
        <div className="flex justify-between items-center mx-25">
                <div>
                  <h2 className="text-4xl font-bold mb-1">
                    Featured <span className="text-orange-500">Cohort</span>
                  </h2>
                  <p className="text-white/60 pb-5">Hand-picked courses to boost your skills</p>
                </div>
                <NavLink to="/coursespage" onClick={() => scrollTo(0, 0)}>
                  <button className="border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm h-12">
                    Explore All →
                  </button>
                </NavLink>
        </div>
        <FeaturedCourses/>
        <Footer/>
    </div>
  )
}

export default LandingPage