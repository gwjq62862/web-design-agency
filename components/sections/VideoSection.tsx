import Image from 'next/image'
import React from 'react'

const VideoSection = () => {
  return (
    <section className='px-5 lg:px-[80px] py-[60px] bg-black flex justify-center'>
      <div className='relative w-full max-w-[1280px] aspect-1280/560 overflow-hidden group'>
    
        <Image 
          src={'/video-img.png'} 
          fill 
          alt='video image' 
          className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700' 
        />

      
        <div className='absolute right-0 top-0 bottom-0 h-full w-[30%] lg:w-[365px] z-10'>
          <Image 
            src={'/Design.png'} 
            fill 
            alt='orange design shape'
            className='object-contain object-right'
          />
        </div>

     
        <div className='absolute bottom-[10%] lg:bottom-[76px] right-[10%] lg:right-[168px] z-20 cursor-pointer hover:scale-110 transition-transform'>
          <Image 
            src={'/Play-Button.svg'} 
            width={170} 
            height={170} 
            alt='play icon' 
            className='w-[100px] h-[100px] lg:w-[170px] lg:h-[170px]'
          />
        </div>
        
      </div>
    </section>
  )
}

export default VideoSection