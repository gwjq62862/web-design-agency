import Image from 'next/image'
import React from 'react'

const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-20 bg-dark-bg relative overflow-hidden">

      <div className="absolute inset-0 z-0 ">
        <Image
          src='/bg-testimonial.png'
          fill
          alt='background wave'
          className='object-cover'
        />
      </div>

      <div className='relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1200px] mx-auto'>


        <div className='relative shrink-0'>
          <div className='w-[200px] h-[200px] lg:w-[256px] lg:h-[256px] rounded-full overflow-hidden '>
            <Image
              src={'/Testimonial.png'}
              fill
              alt='Wade Warrens'
              className='object-cover grayscale'
            />
          </div>


          <div className='absolute bottom-[10px] right-[-10px] lg:right-0 bg-primary w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center border-[6px] border-black'>
            <Image
              src={'/Quote.svg'}
              alt='quote'
              width={40}
              height={40}
              className='lg:w-[50px] lg:h-[50px]'
            />
          </div>
        </div>

        {/* Content Area */}
        <div className='flex flex-col text-center lg:text-left'>
          <p className='text-gray leading-relaxed lg:leading-relaxed font-light text-xl lg:text-2xl mb-8 italic'>
            "Lorem ipsum dolor sit amet consectetur. Eget ultricies ut sit velit magna dolor porttitor magna fringilla. Volutpat est in arcu tristique commodo senectus sagittis leo lacus. Ullamcorper et fringilla eget fusce."
          </p>

          <div className='flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6'>

            <h4 className='font-extrabold text-white text-[24px] leading-none'>
              Wade Warrens
            </h4>


            <div className='flex  items-center justify-center gap-[24px]'>

              <span className='uppercase  text-[13px] text-primary font-semibold tracking-[2px] leading-none'>
                Azure Data Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection