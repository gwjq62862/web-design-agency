import React from 'react'

const SliderSection = () => {
  return (
    <section className='py-[40px] bg-dark-bg overflow-hidden border-y border-gray/20'>
    
      <div className='flex whitespace-nowrap animate-marquee'>
        
    
        <h1 className='font-extrabold text-[120px] lg:text-[180px] uppercase flex items-center gap-10 pr-10 text-white'>
          Web Design <span className='text-primary'>-</span> 
          Web Development <span className='text-primary'>-</span> 
          SEO Agency <span className='text-primary'>-</span>
        </h1>

      
        <h1 className='font-extrabold text-[120px] lg:text-[180px] uppercase flex items-center gap-10 pr-10 text-white'>
          Web Design <span className='text-primary'>-</span> 
          Web Development <span className='text-primary'>-</span> 
          SEO Agency <span className='text-primary'>-</span>
        </h1>
        
      </div>
    </section>
  )
}

export default SliderSection