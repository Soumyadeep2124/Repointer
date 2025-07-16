import React from 'react'
import DsaTopics from '../components/DsaComponent/DsaTopics'
import Navbar from '../components/HomeComponent/Navbar'
import DsaHeader from '../components/DsaComponent/DsaHeader'
import Footer from '../components/Footer'

const DsaDashboard = () => {
  return (
    <div className='bg-[#0e0f1a]'>
        <Navbar/>
        <DsaHeader/>
        <DsaTopics/>
        <Footer/>
    </div>
  )
}

export default DsaDashboard