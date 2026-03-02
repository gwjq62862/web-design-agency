import React from 'react'
import ServiceCard from '../ui/ServiceCard';


const services = [
  {
    title: "Website Development",
    icon: "/service-logo-1.svg",
    description: "Lorem ipsum dolor sit amet consectetur. Sit lobortis."
  },
  {
    title: "SEO Services",
    icon: "/service-logo-2.svg",
    description: "Lorem ipsum dolor sit amet consectetur. Sit lobortis."
  },
  {
    title: "Social Media Marketing",
    icon: "/service-logo-3.svg",
    description: "Lorem ipsum dolor sit amet consectetur. Sit lobortis."
  },
  {
    title: "Google Ads Management",
    icon: "/service-logo-4.svg",
    description: "Lorem ipsum dolor sit amet consectetur. Sit lobortis."
  }
];

const ServiceSection = () => {
  return (
    <section className='py-[100px] px-5 lg:px-[80px] bg-dark-bg'>

      <div className='flex flex-col items-center text-center mb-[60px]'>
       
        <div className='w-[10px] h-[10px] bg-primary rounded-full mb-4' />
        
        <span className='text-[14px] font-medium text-gray uppercase tracking-[2px] mb-2'>
          What We’re Offering
        </span>
        
        <h2 className='font-extrabold text-[40px] lg:text-[50px] text-white max-w-[700px] leading-[1.2]'>
          <span className='text-primary'>Services</span> We’re Providing To Our Customers
        </h2>
      </div>

  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection