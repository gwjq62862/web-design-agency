import Image from 'next/image'
import React from 'react'

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
  return (
  
    <div className='bg-black w-full  min-h-[330px] flex flex-col justify-center items-center px-6 lg:px-[30px] py-10 text-center group hover:bg-[#1A1A1A] transition-all duration-300 border border-white/5'>
      
      <div className='mb-6 shrink-0'>
        <Image 
          src={icon} 
          width={80} 
          height={80} 
          alt={title} 
          className='lg:w-[96px] lg:h-[96px] grayscale group-hover:grayscale-0 transition-all duration-300' 
        />
      </div>

      <h3 className='text-[18px] lg:text-[20px] font-extrabold text-white mb-4 leading-tight'>
        {title}
      </h3>

      <p className='font-medium text-gray text-[14px] leading-relaxed mb-8'>
        {description}
      </p>

      {/* Animated Bottom Line */}
      <div className='bg-gray/20 h-[2px] w-[80%] max-w-[190px] relative overflow-hidden'>
        <div className='absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500' />
      </div>
    </div>
  )
}

export default ServiceCard