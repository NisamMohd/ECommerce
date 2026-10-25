import React from 'react'

function Notification() {
  return (
    <div className='flex justify-center items-center bg-[#0E1422] h-10 w-full gap-2 inter max-sm:8'>
        <h3 className='text-white h-6.25 font-normal '>Get 25% OFF on your first order.</h3>
        <span className='text-white h-6.25 font-medium'>Order Now</span>
    </div>
  )
}

export default Notification