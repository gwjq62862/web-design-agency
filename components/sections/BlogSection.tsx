import React from 'react'
import BlogCard from '../ui/BlogCard';


const blogPosts = [
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        image: "/blog.png",
        date: "29 AUG",
        category: "Design"
    },
    {
        title: "Consectetur adipiscing elit sed do eiusmod",
        image: "/blog.png",
        date: "25 AUG",
        category: "Branding"
    },
    {
        title: "Tempore incidunt ut labore et dolore",
        image: "/blog.png",
        date: "20 AUG",
        category: "Marketing"
    }
];

const BlogSection = () => {
    return (
        <section className='py-[100px] px-5 lg:px-[80px] bg-dark-bg'>
            <div className='flex flex-col items-center mb-[60px]'>
                <div className='w-[8px] h-[8px] bg-primary rounded-full mb-[16px]'></div>
                <span className='uppercase text-gray text-[14px] font-medium tracking-[2px] mb-[8px]'>
                    Our Recent Posts
                </span>
                <h2 className='font-extrabold text-[40px] lg:text-[50px] max-w-[700px] text-white text-center leading-[1.2]'>
                    Our Latest <span className='text-primary'>News & Articles</span> From The <span className='text-primary'>Blog</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                {blogPosts.map((post, index) => (
                    <BlogCard 
                        key={index}
                        title={post.title}
                        image={post.image}
                        date={post.date}
                        category={post.category}
                    />
                ))}
            </div>
        </section>
    )
}

export default BlogSection