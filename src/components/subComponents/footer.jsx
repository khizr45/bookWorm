import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-around downloads'>
      <img src='footer.svg' className='mt-16 footerpic'/>
      <div className='flex flex-col justify-center mt-4 footerall'>
        <h2 className='text-white text-3xl font-bold font-poppins'>Download Our App</h2>
        <p className='text-white font-normal font-poppins mt-8 w-[35vw] footerpara'>Unlock the full potential of Bookworm by downloading our app. Whether you're at home or on the move, our app provides you with seamless access to buying, renting, and borrowing books. Stay connected with fellow book lovers, receive personalized recommendations, and never miss out on the latest additions to our marketplace. Enjoy a smooth, intuitive, and engaging reading experience with Bookworm, anytime and anywhere.</p>
        <div className='flex justify-evenly items-center mt-12 mr-24 buttons2 gap-8'>
            <img src='Googleplaybutton.svg' className='h-[4rem] cursor-pointer'/>
            <img src='AppStoreButton.svg'  className='h-[4rem] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
