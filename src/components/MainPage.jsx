import React from 'react'
import Navbar from './subComponents/Navbar'
import Hero from './subComponents/Hero'
import AboutUs from './subComponents/AboutUs'
import KeyFeatures from './subComponents/KeyFeatures'
import Footer from './subComponents/footer'

function MainPage() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='w-[98.7vw] h-[20vh] bg-[#3B3B3B] extra'>

      </div>
      <Hero/>
      <div className='w-[98.7vw]  bg-[#C81243] flex items-center aboutus'>
        <AboutUs/>
      </div>
      <div className='w-[98.7vw] h-[120vh] bg-[#3B3B3B] flex items-center featureHeight'>
        <KeyFeatures/>
      </div>
      <div className='w-[98.7vw] h-[100vh] bg-[#C81243] downloads'>
        <Footer/>
      </div>
    </div>
  )
}

export default MainPage
