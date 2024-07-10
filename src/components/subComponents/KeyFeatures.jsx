import React from 'react'

function KeyFeatures() {
  return (
    <div>
      <img src='heading.svg' className='ml-40 keyFeatHead'/>
      <div className='flex justify-start items-center w-[98.7vw] mt-12 ml-40 boxes'>
        <div className='w-[28rem] h-[14rem] bg-[#FFCE31] flex flex-col justify-start items-center text-center rounded-tl-3xl box bordergiven1'>
            <img src='seamless.svg' className='mt-4 h-[3rem]'/>
            <p className='mt-4 text-black font-medium font-poppins text-lg'>Effortlessly buy, rent, or borrow books with<br/> transparent pricing based on condition<br/> and availability.</p>
        </div>
        <div className='w-[28rem] h-[14rem] bg-[#FFCE31] ml-8 flex flex-col justify-start items-center text-center border-r-8 border-black borderBox box bordergiven1'>
            <img src='marketplace.svg' className='mt-4 h-[3]'/>
            <p className='mt-4 text-black font-medium font-poppins text-lg'>Explore a dedicated marketplace for<br/> book-related products, including<br/> accessories like bookmarks and book<br/> covers.</p>
        </div>
      </div>
      <div className='flex justify-start items-center w-[98.7vw] mt-12 ml-40 boxes'>
            <div className='w-[28rem] h-[14rem] bg-[#FFCE31] flex flex-col justify-start items-center text-center border-b-8 border-black borderBox specialborderbox box bordergiven1'>
                <img src='books.svg' className='mt-4 h-[3rem]'/>
                <p className='mt-4 text-black font-medium font-poppins text-lg'>Effortlessly buy, rent, or borrow books with<br/> transparent pricing based on condition<br/> and availability.</p>
            </div>
            <div className='w-[28rem] h-[14rem] bg-[#FFCE31] ml-8 flex flex-col justify-start items-center text-center rounded-br-3xl border-b-8 border-r-8 border-black borderBox box bordergiven1'>
                <img src='recommender.svg' className='mt-4 h-[3rem]'/>
                <p className='mt-4 text-black font-medium font-poppins text-lg'>Explore a dedicated marketplace for<br/> book-related products, including<br/> accessories like bookmarks and book<br/> covers.</p>
            </div>
      </div>
    </div>
  )
}

export default KeyFeatures
