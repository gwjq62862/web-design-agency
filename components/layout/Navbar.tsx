import Image from "next/image";

const navItems = ["Home", "Service", "About", "Contact", "Blog", "Career"];

const Navbar = () => {
  return (
    <nav className="relative flex items-center h-[90px] px-8">
      {/* Logo (left) */}
      <div>
        <Image src="/logo.svg" width={62} height={20} alt="Logo" />
      </div>

    
      <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-14">
        {navItems.map((item) => (
          <li key={item} className="text-[16px] font-semibold cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;