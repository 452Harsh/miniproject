import React from 'react'
import Image from 'next/image'



const Banner = () => {
  return (
    <div className='flex justify-between bg-gray-200 border border-b-black'>
        <div className='flex flex-col  justify-center p-32 gap-4 '>
        <div className='text-white font-serif text-3xl'>One <span className='text-amber-500'>Distination</span> for</div>
        <div className='font-serif text-4xl text-amber-600'>Complete Exam preparation</div>
        </div>
        <Image className='flex justify-end' src="/showcase.svg" alt="Loading" width={700} height={700}/>
    </div>
  )
}

export default Banner