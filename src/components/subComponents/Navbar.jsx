import React from 'react'

function Navbar() {
  function scrollToAbout(element){
   if(element === 'about'){
      window.scrollTo({
        top:900,
        behavior: 'smooth'
      })
   }else if(element === 'features'){
      window.scrollTo({
        top:1500,
        behavior: 'smooth'
      })
   }else if(element === 'download'){
      window.scrollTo({
        top: 2100,
        behavior: 'smooth'
      })
   }
  }
  return (
    <div className='flex justify-between bg-[#3B3B3B] items-center h-[12vh]'>
      <img src='logo.PNG' className='h-[60%] ml-10 mt-4 logo'/>
      <div className='flex justify-center mt-4 navbarOpts'>
        <h3 className='text-white font-poppins ml-8 cursor-pointer'>Home</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer' onClick={()=>{scrollToAbout('about')}}>About</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer' onClick={()=>{scrollToAbout('features')}}>Features</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer' onClick={()=>{scrollToAbout('download')}}>Download Now</h3>
      </div>
      <div className='w-[20%]'></div>
    </div>
  )
}

export default Navbar
