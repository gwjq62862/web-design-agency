import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
  return (
    <footer className='relative px-5 lg:px-[80px] pt-[80px] pb-[40px] bg-[#0A0A0A] overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image src='/footer-bg.png' fill alt='footer bg' className='object-cover' />
      </div>

      <div className='relative z-10'>
        {/* Top Row: Logo & Socials */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-[40px] gap-6'>
          <Image src="/footer-logo.png" alt="footer logo" width={220} height={50} />
          <div className='flex gap-4'>
            {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
              <div key={social} className='w-[45px] h-[45px] rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer'>
                <Image src={`/${social}.svg`} width={20} height={20} alt={social} />
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className='bg-gray/20 w-full h-px mb-[80px]'></div>

        {/* Main Content Area */}
        <div className='flex flex-col lg:flex-row justify-between gap-[60px]'>
          
          {/* Left Column: Email & Copyright */}
          <div className='flex flex-col justify-between max-w-[600px]'>
            <div>
              <p className='text-gray font-normal text-[20px] mb-4'>Let's start working together</p>
              <h4 className='text-[35px] md:text-[55px] lg:text-[64px] font-extrabold text-white break-words leading-tight'>
                info@stylusmarketing.ca
              </h4>
            </div>
            <span className='text-gray/60 text-[14px] mt-[100px]'>
              © Copyright 2023 by Stylus Marketing
            </span>
          </div>

          {/* Right Column: Links & Subscribe */}
          <div className='flex flex-col justify-between items-end'>
            {/* Nav Links Grid */}
            <div className='grid grid-cols-2 gap-x-[60px] gap-y-4 mb-[80px] text-right lg:text-left'>
              <div className='flex flex-col gap-3'>
                {['Contact Us', 'About Us', 'Services', 'Hiring', 'Our Blog'].map(link => (
                  <span key={link} className='text-gray hover:text-white cursor-pointer transition-colors'>{link}</span>
                ))}
              </div>
              <div className='flex flex-col gap-3'>
                {['Website Development', 'SEO Services', 'Social Media Marketing', 'Google Ads Management'].map(link => (
                  <span key={link} className='text-gray hover:text-white cursor-pointer transition-colors'>{link}</span>
                ))}
              </div>
            </div>

            {/* Subscribe Box - Figma အတိုင်း အတိအကျ */}
            <div className='relative flex w-full max-w-[400px] h-[60px] rounded-lg overflow-hidden border border-white/10'>
              <input 
                type="email" 
                placeholder='Enter your email to subscribe' 
                className='flex-1 bg-white px-6 text-black outline-none placeholder:text-gray/50'
              />
              <button className='bg-primary px-8 text-white font-bold hover:bg-primary/90 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Small Links */}
        <div className='flex justify-center gap-8 mt-[100px] pt-8 border-t border-white/5 text-[14px] text-gray/40'>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Stylus Marketing</span>
          <span>•</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection