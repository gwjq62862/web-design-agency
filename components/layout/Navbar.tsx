"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const navItems = ["Home", "Service", "About", "Contact", "Blog", "Career"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between lg:justify-start h-[90px] px-8 bg-black text-white">
      {/* Logo */}
      <div className="z-50">
        <Image src="/logo.svg" width={62} height={20} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-14">
        {navItems.map((item) => (
          <li key={item} className="text-[16px] font-semibold cursor-pointer hover:text-primary transition-colors">
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        {navItems.map((item) => (
          <li 
            key={item} 
            className="list-none text-[24px] font-bold cursor-pointer"
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