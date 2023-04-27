import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout';


const gate = () => {
  const images = ['/gate1.png', '/gate2.png', '/gate3.png', '/gate4.png'];

  return (
    <div className='h-full flex flex-col '>
       <Layout images = { images}/>
    </div>
  )
}

export default gate