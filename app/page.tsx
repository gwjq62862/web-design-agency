import Navbar from "@/components/layout/Navbar";
import AttributeSection from "@/components/sections/AttibuteSection";
import Hero from "@/components/sections/HeroSection";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen">
     
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <AttributeSection/>
    </main>
  );
}
