import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Information from './Information'
import Exams from './Exams'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Information/>
        <Exams/>
        <Footer/>
    </div>
  )
}

export default HomePage