import React from 'react'

function Navbar({scroll}) {
  return (
    <div className='flex justify-between bg-[#3B3B3B] items-center h-[12vh]'>
      <img src='logo.PNG' className='h-[60%] ml-10 mt-4 logo'/>
      <div className='flex justify-center mt-4 navbarOpts'>
        <h3 className='text-white font-poppins ml-8 cursor-pointer navbaropt'>Home</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer navbaropt' onClick={()=>{scroll('about')}}>About</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer navbaropt' onClick={()=>{scroll('features')}}>Features</h3>
        <h3 className='text-white font-poppins ml-8 cursor-pointer downloadNowButton navbaropt' onClick={()=>{scroll('download')}}>Download Now</h3>
      </div>
      <div className='w-[20%]'></div>
    </div>
  )
}

export default Navbar
