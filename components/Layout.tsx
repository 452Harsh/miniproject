import React from 'react'

const Layout = ({images}) => {
  return (
    <div className='h-full flex flex-col '>
      <div>
       {images.map((image, index) => (
        <img width={1400} height={1650} src={image} key={index} />
      ))}
      </div>
    </div>
  )
}

export default Layout