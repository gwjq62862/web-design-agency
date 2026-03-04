import Image from "next/image"
import Button from "../ui/button"

const AboutSection = () => {
  return (
    <section className='px-6 md:px-10 xl:px-[80px] py-[60px] lg:py-[100px] bg-dark-bg overflow-hidden'>
     
      <div className='flex flex-col lg:flex-row items-center justify-between gap-[40px] xl:gap-[130px] max-w-[1400px] mx-auto'>

        {/* Left Side: Image Section */}
        <div className='relative flex-shrink-1 lg:flex-shrink-0 order-2 lg:order-1'>
          
          {/* Background Decorative Circle */}
          <div className='absolute -top-5 -left-5 lg:-top-10 lg:-left-10 w-24 h-24 lg:w-40 lg:h-40 bg-gray/10 rounded-full z-0' />

          {/* Image Container Fix:
              Added 'max-w-full' and 'aspect-square' to prevent squishing 
              at 1270px width.
          */}
          <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[588px] xl:h-[588px] rounded-full overflow-hidden z-10 border-4 border-white/5'>
            <Image
              src={'/about-img.png'}
              alt='about Image'
              fill
              className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
            />
          </div>

          <div className='absolute bottom-[30px] lg:bottom-[40px] left-0 w-[30px] h-[30px] lg:w-[42px] lg:h-[42px] bg-primary rounded-full z-20 shadow-xl' />
        </div>

        {/* Right Side: Text Content Section */}
        <div className='flex flex-col flex-1 max-w-[620px] order-1 lg:order-2 text-center lg:text-left items-center lg:items-start'>
          
          <div className='flex items-center gap-2 mb-4'>
            <span className='w-2 h-2 bg-primary rounded-full' />
            <span className='font-medium text-[12px] lg:text-[14px] uppercase tracking-[2px] text-gray'>
              About The Agency
            </span>
          </div>

          {/* Headline Fix: 
              Responsive font sizing (text-[32px] for tablet/small desktop)
          */}
          <h2 className='font-extrabold text-[32px] md:text-[40px] xl:text-[50px] leading-[1.2] xl:leading-[1.1] text-white mb-[24px] xl:mb-[32px]'>
            We’re Top Notch & <br className='hidden xl:block' />
            <span className='text-primary'>Best Web Design & SEO</span> Agency
          </h2>

          <p className='text-[16px] xl:text-[18px] font-semibold text-primary mb-[20px] xl:mb-[24px] leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur. Metus vitae a aenean mi aenean nulla elementum eget viverra. 
          </p>

          <p className='text-[14px] xl:text-[15px] font-medium text-gray mb-[32px] xl:mb-[40px] leading-[1.8]'>
            Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et tortor sem. Ut tempor velit magna aliquet dignissim in purus molestie congue.
          </p>

          <div className='w-fit'>
            <Button text='Discover More' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection