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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)] py-3" 
          : "bg-cream/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-[120px] h-[40px]">
            <Image 
              src="/logo/logo.png" 
              alt="CAZIN Logo" 
              fill
              sizes="120px"
              className="object-contain object-left"
            />
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="text-xs font-medium text-bodytext/70 hover:text-tiato transition-colors tracking-widest uppercase">
            VI | EN
          </button>
        </div>
      </div>
    </header>
  );
}
