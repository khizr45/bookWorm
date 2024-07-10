import React from 'react'

function Hero() {
  return (
    <div className='w-[98.7vw] bg-[#3B3B3B] p-4 herowidth'>
      <div className='flex justify-evenly items-center h-[100%] w-full mb-12 hero'>
        <div className='w-[40vw] heropara ml-32'>
            <h2 className='text-white font-poppins font-bold text-5xl w-[45vw] headtopwidth'>Bookworm: Your</h2>
            <h2 className='text-white font-poppins font-bold text-5xl mt-3 herotop'>Ultimate Book Hub</h2>
            <p className='text-white font-poppins mt-8'>Discover a world where every book lover's dream comes true. Buy,rent, and borrow books with ease while enjoying personalized recommendations and engaging community discussions. Download Bookworm today and revolutionize you reading experience!</p>
            <div className='flex mt-12 w-[100%] buttons gap-8'>
                <img src='Googlepink.svg' className='h-[4rem] cursor-pointer'/>
                <img src='apppink.svg' className='h-[4rem] cursor-pointer'/>
            </div>
        </div>
        <img src='Hero.svg' className='heroImage'/>
      </div>
    </div>
  )
}

export default Hero
