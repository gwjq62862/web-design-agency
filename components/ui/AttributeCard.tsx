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
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
      />


      <div className='absolute bottom-[20px] left-[20px] right-[20px] bg-black/90 min-h-[76px] py-4 flex items-center'>


        <span className='text-[18px] xl:text-[22px] font-extrabold text-white ml-[24px] xl:ml-[32px] pr-[70px] leading-tight'>
          {title}
        </span>


        <div className='absolute -top-[24px] right-[20px] w-[58px] h-[58px] bg-primary rounded-full flex items-center justify-center shadow-lg shrink-0'>
          <Image
            src={icon}
            alt='icon'
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  )
}
export default AttributeCard