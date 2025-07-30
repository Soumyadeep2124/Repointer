import React from 'react'
import WelcomeSection from '../components/HomeComponent/WelcomeSection'
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
        <Footer/>
    </div>
  )
}

export default LandingPage