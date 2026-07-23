"use client";

import { useState, useEffect } from "react";

export default function ValidationModal({ onValid }: { onValid: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Tự động tắt sau 1.5 giây để mô phỏng "đang tải/truy xuất"
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onValid();
      }, 500); // thời gian fade-out animation
    }, 1200);
    
    return () => clearTimeout(timer);
  }, [onValid]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center animate-fade-in-up">
        {/* Logo */}
        <div className="w-16 h-16 rounded-full bg-[#583679] flex items-center justify-center text-cream font-bold text-3xl shadow-lg mb-6">
          C
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#583679] tracking-wide mb-2">CAZIN</h2>
        
        {/* Subtitle / Loading */}
        <div className="flex items-center gap-3 text-bodytext/70 text-sm">
          <svg className="animate-spin h-4 w-4 text-tiato" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Đang truy xuất dữ liệu...
        </div>
      </div>
    </div>
  );
}
