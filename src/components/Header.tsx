"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto px-5 flex items-center justify-between max-w-5xl">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-tiato flex items-center justify-center text-cream font-bold text-lg shadow-sm group-hover:bg-tiato/90 transition-colors">
            C
          </div>
          <span className="font-semibold text-tiato text-xl tracking-tight">CAZIN</span>
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
