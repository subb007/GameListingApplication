import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        
    },[])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] font-bold text-white'>{gameBanner.name}</h2>
        </div>
      <img src={gameBanner.background_image} className='md:h-[350px] w-full object-cover rounded-xl'/>
    </div>
  )
}

export default Banner
