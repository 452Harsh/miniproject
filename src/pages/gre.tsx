import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout';


const gre = () => {
  const images = ['/gre1.png', '/gre2.png', '/gre3.png', '/gre4.png', '/gre5.png'];

  return (
    <div className='h-full flex flex-col '>
       <Layout images = { images}/>
    </div>
  )
}

export default gre