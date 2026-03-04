import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import AttributeSection from "@/components/sections/AttibuteSection";
import BlogSection from "@/components/sections/BlogSection";
import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import SliderSection from "@/components/sections/SliderSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoSection from "@/components/sections/VideoSection";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen">
     
     
        <Navbar />
  
      <Hero />
      <AttributeSection/>
      <AboutSection/>
      <SliderSection/>
      <VideoSection/>
      <ServiceSection/>
      <TestimonialSection/>
      <BlogSection/>
      <FooterSection/>
    </main>
  );
}
