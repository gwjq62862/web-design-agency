import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    title: string;
    image: string;
    date: string;
    category: string;
}

const BlogCard = ({ title, image, date, category }: BlogCardProps) => {
    return (
        <div className='w-full max-w-[400px] h-full flex flex-col group cursor-pointer'>
            {/* Image Container */}
            <div className='w-full h-[340px] mb-[24px] relative overflow-hidden'>
                <Image 
                    src={image} 
                    fill 
                    alt={title} 
                    className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500' 
                />

              
                <div className='py-[9px] px-[13px] absolute right-[20px] bottom-[20px] bg-white z-10'>
                    <span className='font-bold uppercase text-[12px] text-black tracking-wider'>
                        {date}
                    </span>
                </div>
            </div>

          
            <div className='flex items-center gap-[12px] mb-[12px]'>
                <div className='bg-primary h-[2px] w-[30px]'></div>
                <span className='text-gray font-medium text-[14px]'>
                    {category}
                </span>
                <span className='text-gray text-[14px]'>•</span>
                <span className='text-gray font-medium text-[14px]'>
                    Comments are closed
                </span>
            </div>

           
            <div className='flex-1'>
                <h3 className='font-extrabold text-[24px] text-white mb-[24px] leading-tight group-hover:text-primary transition-colors'>
                    {title}
                </h3>
            </div>

            {/* Bottom Divider Line */}
            <div className='bg-gray w-full h-px mt-auto'></div>
        </div>
    )
}

export default BlogCard