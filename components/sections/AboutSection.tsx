import Image from "next/image"
import Button from "../ui/button"

const AboutSection = () => {
  return (
    <section className='px-10 lg:px-[80px] py-[100px] bg-black overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-[60px] lg:gap-[130px]'>


        <div className='relative shrink-0'>

          <div className='absolute -top-10 -left-10 w-40 h-40 bg-gray/10 rounded-full z-0' />

          <div className='relative w-[300px] h-[300px] lg:w-[588px] lg:h-[588px] rounded-full overflow-hidden z-10'>
            <Image
              src={'/about-img.png'}
              alt='about Image'
              fill
              className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
            />
          </div>


          <div className='absolute bottom-[40px] left-0 w-[42px] h-[42px] bg-primary rounded-full z-20' />
        </div>


        <div className='flex flex-col max-w-[620px]'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='w-2 h-2 bg-primary rounded-full' /> {/* Small Orange Dot */}
            <span className='font-medium text-[14px] uppercase tracking-[2px] text-gray'>
              About The Agency
            </span>
          </div>

          <h2 className='font-extrabold text-[40px] lg:text-[50px] leading-[1.1] text-white mb-[32px]'>
            We’re Top Notch & <br />
            <span className='text-primary'>Best Web Design & SEO</span> Agency
          </h2>

          <p className='text-[18px] font-semibold text-primary mb-[24px] leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur. Metus vitae a aenean mi aenean nulla elementum eget viverra. Tellus phasellus velit aliquam.
          </p>

          <p className='text-[15px] font-medium text-gray mb-[40px] leading-[1.8]'>
            Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et tortor sem. Ut tempor velit magna aliquet dignissim in purus molestie congue. Imperdiet sit ante urna massa eu. Massa magna pellentesque rhoncus ornare ut. Ullamcorper varius.
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