"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

const navItems = ["Home", "Service", "About", "Contact", "Blog", "Career"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Main Nav */}
      <nav className={`fixed top-0 left-0 w-full h-[90px] px-8 flex items-center justify-between transition-all duration-300 z-50
        ${isOpen ? "bg-black" : scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black lg:bg-transparent"}
      `}>
        <div className="shrink-0">
          <Image src="/Logo.svg" width={62} height={20} alt="Logo" />
        </div>

        {/* Desktop */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-14">
          {navItems.map((item) => (
            <li key={item} className="text-[16px] font-semibold text-white cursor-pointer hover:text-primary transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Toggle */}
        <button 
          className="lg:hidden p-2 text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

    
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}>
        {navItems.map((item) => (
          <button 
            key={item} 
            className="text-[24px] font-bold text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;