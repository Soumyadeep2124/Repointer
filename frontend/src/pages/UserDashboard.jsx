import React from 'react'
import Progress from '../components/UserComponent/Progress'
import Navbar from '../components/HomeComponent/Navbar'
import UserSolvedProblems from '../components/UserComponent/UserSolvedProblems'
import Footer from '../components/Footer'
import Contribution from '../components/UserComponent/Contribution'


const UserDashboard = () => {
  return (
    <div className='bg-[#0f111c]'>
        <Navbar/>
        <Progress/>
        <UserSolvedProblems/>
        <Footer/>
        
    </div>
  )
}

export default UserDashboard