import React from 'react'
import Link from 'next/link';

const Card = ({ title, description, image ,link}:any) => {
    return (
        <div className="flex flex-col items-center p-2 h-full w-80 border border-white ">
          <h1 className='text-2xl font-serif py-4 text-gray-800'>{title}</h1>
          <img  src={image} alt={title} className="w-full rounded-lg bg-gray-200" />
          <p className="text-black p-8 text-lg">{description}</p>
          <button className='bg-blue-400 p-3 rounded-full w-44'> <Link href={link}> Read More</Link></button>
        </div>
      );
}

export default Card