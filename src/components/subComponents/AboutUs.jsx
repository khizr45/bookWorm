import React from 'react'

function AboutUs() {
  return (
    <div className='h-[80vh] aboutusHeight p-4'>
      <img src='aboutus.svg' className='ml-40 aboutusPic'/>
      <div className='flex justify-around items-center w-[98.7vw] aboutus'>
        <p className='font-poppins text-white font-normal mb-20 aboutusSvg w-[30vw] aboutuspara'>Bookworm is a comprehensive platform designed for book enthusiasts. It offers a seamless experience for buying, renting, and borrowing books from fellow users. Our application goes beyond transactions by fostering a lively community for book discussions, reviews, and recommendations. With transparent pricing and a focus on book condition, Bookworm ensures you make informed decisions.</p>
        <div className='flex justify-between items-center w-[45%] mt-4 aboutus gap-8'>
            <div className='flex flex-col justify-start items-center w-[55%] h-[60vh] border-4 border-[#FFCE31] rounded-lg firstbox'>
                <img src='visionlogo.svg' className='mt-4'/>
                <img src='ourvision.svg' className='mt-2'/>
                <p className='mt-4 font-poppins text-white font-normal'>To create a vibrant and<br/> inclusive community where<br/> book lovers can seamlessly<br/> connect, explore, and share<br/> their passion for reading.</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[55%] h-[60vh] border-4 border-[#FFCE31] rounded-lg  firstbox'>
                <img src='missionlogo.svg' className='mt-4'/>
                <img src='mission.svg' className='mt-2'/>
                <p className='mt-4 font-poppins text-white font-normal'>To provide an innovative and<br/> user-friendly platform that<br/> integrates the buying,<br/> renting, and borrowing of<br/> books, fostering an engaging<br/> environment for book<br/> enthusiasts worldwide.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
