import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
  return (
    <footer className='relative px-6 md:px-10 lg:px-[80px] pt-[60px] lg:pt-[80px] pb-[40px] bg-[#0A0A0A] overflow-hidden'>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 lg:opacity-30">
        <Image src='/footer-bg.png' fill alt='footer bg' className='object-cover' priority />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto'>
        
        {/* Top Part: Logo & Socials */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-[40px] gap-8'>
          <Image src="/footer-logo.png" alt="footer logo" width={200} height={45} className="lg:w-[220px]" />
          <div className='flex gap-4'>
            {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
              <div key={social} className='w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer group'>
                <Image src={`/${social}.svg`} width={18} height={18} alt={social} className="group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        <div className='bg-white/10 w-full h-px mb-[60px] lg:mb-[80px]'></div>

       
        <div className='flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-[60px]'>
          
          {/* Left Side: Email & Copyright */}
          <div className='flex flex-col text-center lg:text-left items-center lg:items-start max-w-full lg:max-w-[600px]'>
            <div>
              <p className='text-gray font-normal text-[18px] lg:text-[20px] mb-4 uppercase tracking-wider'>Let's start working together</p>
           
              <h4 className='text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-extrabold text-white break-all md:break-words leading-[1.1] hover:text-primary transition-colors cursor-pointer'>
                info@stylusmarketing.ca
              </h4>
            </div>
         
            <span className='hidden lg:block text-gray/40 text-[14px] mt-[100px]'>
              © Copyright 2023 by Stylus Marketing
            </span>
          </div>

        
          <div className='flex flex-col items-center lg:items-end w-full lg:w-auto'>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] xl:gap-x-[80px] gap-y-8 mb-[60px] lg:mb-[80px] text-center lg:text-left'>
              <div className='flex flex-col gap-4'>
                <h5 className='text-white font-bold mb-2 uppercase text-[14px] tracking-widest'>Quick Links</h5>
                {['Contact Us', 'About Us', 'Services', 'Hiring', 'Our Blog'].map(link => (
                  <span key={link} className='text-gray/70 hover:text-primary cursor-pointer transition-colors text-[15px]'>{link}</span>
                ))}
              </div>
              <div className='flex flex-col gap-4'>
                <h5 className='text-white font-bold mb-2 uppercase text-[14px] tracking-widest'>Services</h5>
                {['Website Development', 'SEO Services', 'Social Media Marketing', 'Google Ads Management'].map(link => (
                  <span key={link} className='text-gray/70 hover:text-primary cursor-pointer transition-colors text-[15px]'>{link}</span>
                ))}
              </div>
            </div>

            
            <div className='relative flex flex-col sm:flex-row w-full max-w-[450px] h-auto sm:h-[60px] rounded-lg overflow-hidden border border-white/10'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='flex-1 bg-white/5 md:bg-white px-6 py-4 sm:py-0 text-white md:text-black outline-none placeholder:text-gray/50'
              />
              <button className='bg-primary px-8 py-4 sm:py-0 text-white font-bold hover:bg-white hover:text-primary transition-all duration-300'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

    
        <div className='lg:hidden text-center text-gray/40 text-[14px] mt-10'>
           © Copyright 2023 by Stylus Marketing
        </div>

     
        <div className='flex flex-wrap justify-center gap-4 md:gap-8 mt-[60px] lg:mt-[100px] pt-8 border-t border-white/5 text-[12px] md:text-[14px] text-gray/40 text-center'>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className='hidden md:inline'>•</span>
          <span>Stylus Marketing Agency</span>
          <span className='hidden md:inline'>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection