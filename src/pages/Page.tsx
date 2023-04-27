import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout';


const Page = () => {
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];

  return (
    <div className='h-full flex flex-col '>
       <Layout images = { images}/>
    </div>
  )
}

export default Page