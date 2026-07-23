"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Check initial position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 md:px-8 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-14 h-14 relative flex items-center justify-center bg-white rounded-full overflow-hidden p-1.5 shadow-sm">
            <Image 
              src="/logo/logo.png" 
              alt="CAZIN Logo" 
              fill
              sizes="56px"
              className="object-contain p-0.5"
            />  
          </div>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-xs font-medium text-black hover:text-[#583679] transition-colors tracking-widest uppercase">
            VI | EN
          </button>
          
          <button className="bg-[#583679] text-white px-5 py-2 md:px-6 md:py-2.5 text-sm rounded-full font-medium hover:bg-[#4a2135] transition-colors shadow-sm">
            Liên hệ
          </button>
        </div>
      </div>
    </header>
  );
}
