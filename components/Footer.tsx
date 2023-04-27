import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-slate-700 p-16 gap-16'>
        <div className='w-3/5 gap-2'>
            <h2 className='text-2xl'>About</h2>
            <span className='text-md font-serif'>Hello folks I hope through website Have cleared all your doubts regarding competitive exams If you wish toconnect with us then please log on to our details given below. Regards from manzil.com Creators - Aman Kumar, Harsh Tuli, Priyanshu Gurwani, Ayush Balwani</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-2xl font-serif'>Quick Link</span>
            <span className='text-md font-serif'>About us</span>
            <span className='text-md font-serif'>Contribute</span>
            <span className='text-md font-serif'>Privacy Policy</span>
        </div>
    </div>
  )
}

export default Footer