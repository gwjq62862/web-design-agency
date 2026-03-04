"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

const navItems = ["Home", "Service", "About", "Contact", "Blog", "Career"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic for transparency switch
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 h-[90px] px-8 flex items-center justify-between
      ${isOpen ? "bg-black" : scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black lg:bg-transparent"}
    `}>
      
      <div className="z-50 shrink-0">
        <Image src="/logo.svg" width={62} height={20} alt="Logo" />
      </div>

    
      <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-14">
        {navItems.map((item) => (
          <li key={item} className="text-[16px] font-semibold cursor-pointer hover:text-primary transition-colors">
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden z-50 p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        {navItems.map((item) => (
          <li 
            key={item} 
            className="list-none text-[24px] font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;