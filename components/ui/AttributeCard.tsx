import Image from 'next/image'
import React from 'react'

interface AttributeCardProps {
  title: string;
  image: string;
  icon: string;
}

const AttributeCard = ({ title, image, icon }: AttributeCardProps) => {
  return (
    <div className='relative h-[300px] w-full max-w-[400px] overflow-visible group'>
      {/* Background Image */}
      <Image 
        src={image} 
        alt={title} 
        fill 
        className='object-cover grayscale group-hover:grayscale-0 transition-all duration-500' 
      />

      {/* Black Content Box (Bottom Overlay) */}
      <div className='absolute bottom-[20px] left-[20px] right-[20px] bg-black/90 h-[76px] flex items-center'>
          <span className='text-[22px] font-extrabold text-white ml-[32px]'>
            {title}
          </span>
          
          {/* Circular Icon */}
          <div className='absolute -top-[24px] right-[20px] w-[58px] h-[58px] bg-primary rounded-full flex items-center justify-center shadow-lg'>
            <Image 
              src={icon} 
              alt='attribute icon' 
              width={30} 
              height={30} 
            />
          </div>
      </div>
    </div>
  )
}

export default AttributeCard