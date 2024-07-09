import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-around downloads'>
      <img src='footer.svg' className='mt-16'/>
      <div className='flex flex-col justify-center mt-4'>
        <h2 className='text-white text-3xl font-bold font-poppins'>Download Our App</h2>
        <p className='text-white font-normal font-poppins mt-8'>Unlock the full potential of Bookworm by downloading our app.<br/> Whether you're at home or on the move, our app provides you with<br/> seamless access to buying, renting, and borrowing books. Stay<br/> connected with fellow book lovers, receive personalized<br/> recommendations, and never miss out on the latest additions to<br/> our marketplace. Enjoy a smooth, intuitive, and engaging reading<br/> experience with Bookworm, anytime and anywhere.</p>
        <div className='flex justify-evenly items-center mt-12 mr-24 buttons2 gap-8'>
            <img src='Googleplaybutton.svg' className='h-[4rem] cursor-pointer'/>
            <img src='AppStoreButton.svg'  className='h-[4rem] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
