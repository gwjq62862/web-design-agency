import Image from 'next/image'
import React from 'react'

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
  return (
    <div className='bg-black w-full max-w-[290px] h-[330px] flex flex-col justify-center items-center px-[30px] text-center group hover:bg-[#1A1A1A] transition-all duration-300'>
      {/* Icon Area */}
      <div className='mb-6'>
        <Image src={icon} width={96} height={96} alt={title} className='grayscale group-hover:grayscale-0 transition-all duration-300' />
      </div>

      {/* Title */}
      <h3 className='text-[18px] font-extrabold text-white mb-4 leading-tight'>
        {title}
      </h3>

      {/* Description */}
      <p className='font-medium text-gray text-[14px] leading-relaxed mb-8'>
        {description}
      </p>

      
      <div className='bg-gray h-[2px] w-[190px] relative overflow-hidden'>
    
        <div className='absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500' />
      </div>
    </div>
  )
}

export default ServiceCard