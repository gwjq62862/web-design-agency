import React from 'react'
import AttributeCard from '../ui/AttributeCard';

const attributes = [
  {
    title: "Creative Agency",
    image: "/attribute-1.png",
    icon: "/icon-1.svg"
  },
  {
    title: "Quality Work",
    image: "/attribute-2.png",
    icon: "/icon-2.svg"
  },
  {
    title: "Professional Team",
    image: "/attribute-3.png",
    icon: "/icon-3.svg"
  }
];

const AttributeSection = () => {
  return (
    <section className='lg:px-[80px] md:px-[40px] px-[20px] py-[60px] lg:py-[100px] bg-dark-bg'>
    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px] justify-items-center max-w-[1400px] mx-auto'>
        {attributes.map((attr, index) => (
          <div key={index} className="w-full flex justify-center">
            <AttributeCard
              title={attr.title}
              image={attr.image}
              icon={attr.icon}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AttributeSection