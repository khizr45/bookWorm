import React, { useRef } from 'react'
import Navbar from './subComponents/Navbar'
import Hero from './subComponents/Hero'
import AboutUs from './subComponents/AboutUs'
import KeyFeatures from './subComponents/KeyFeatures'
import Footer from './subComponents/footer'

function MainPage() {
    const aboutRef = useRef(null)
    const featureRef = useRef(null)
    const downloadRef = useRef(null)

     const scroller = (section) => {
        if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
          } else if (section === 'features' && featureRef.current) {
            featureRef.current.scrollIntoView({ behavior: 'smooth' });
          } else if (section === 'download' && downloadRef.current) {
            downloadRef.current.scrollIntoView({ behavior: 'smooth' });
          }
       }
  return (
    <div className='flex flex-col'>
      <Navbar scroll = {scroller}/>
      <div className='w-[98.7vw] h-[20vh] bg-[#3B3B3B] extra'>

      </div>
      <Hero/>
      <div className='w-[98.7vw]  bg-[#C81243] flex items-center aboutus' ref={aboutRef} id='about'>
        <AboutUs/>
      </div>
      <div className='w-[98.7vw] h-[120vh] bg-[#3B3B3B] flex items-center featureHeight' ref={featureRef} id='features'>
        <KeyFeatures/>
      </div>
      <div className='w-[98.7vw] h-[100vh] bg-[#C81243] downloads' ref={downloadRef} id='download'>
        <Footer/>
      </div>
    </div>
  )
}

export default MainPage
