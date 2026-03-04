import React from 'react'

const SliderSection = () => {
  return (
    <section className='py-6 lg:py-[40px] bg-dark-bg overflow-hidden '>
   
      <div className='flex whitespace-nowrap overflow-hidden group'>
        <div className='flex animate-marquee shrink-0'>
          
      
          <div className='font-extrabold text-[60px] md:text-[100px] lg:text-[180px] uppercase flex items-center gap-10 lg:gap-20 pr-10 lg:pr-20 text-white'>
            <span>Web Design</span> <span className='text-primary'>-</span> 
            <span>Web Development</span> <span className='text-primary'>-</span> 
            <span>SEO Agency</span> <span className='text-primary'>-</span>
          </div>

          <div className='font-extrabold text-[60px] md:text-[100px] lg:text-[180px] uppercase flex items-center gap-10 lg:gap-20 pr-10 lg:pr-20 text-white'>
            <span>Web Design</span> <span className='text-primary'>-</span> 
            <span>Web Development</span> <span className='text-primary'>-</span> 
            <span>SEO Agency</span> <span className='text-primary'>-</span>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SliderSection