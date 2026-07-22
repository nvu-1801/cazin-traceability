"use client";

import { useState, useEffect } from "react";

export default function ValidationModal({ onValid }: { onValid: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleVerify = () => {
    setIsVerifying(true);
    // Giả lập thời gian xử lý verify nhẹ nhàng
    setTimeout(() => {
      setIsVisible(false);
      // Đợi hiệu ứng fade-out trước khi unmount (hoặc trigger onValid)
      setTimeout(onValid, 300);
    }, 800);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVerifying ? 'opacity-0' : 'opacity-100'}`}>
      {/* Lớp nền mờ */}
      <div className="absolute inset-0 bg-[#4A4A4A]/20 backdrop-blur-sm" />
      
      {/* Modal box */}
      <div className="relative w-full max-w-[340px] rounded-3xl bg-cream p-8 shadow-2xl ring-1 ring-black/5 animate-fade-in-up">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tiato/10 mb-5">
            <svg className="h-7 w-7 text-tiato" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-medium text-tiato mb-3">Xác thực hệ thống</h2>
          <p className="text-sm text-bodytext/80 mb-8 leading-relaxed">
            Hệ thống cần xác nhận bạn là người dùng thật để hiển thị thông tin sản phẩm an toàn.
          </p>
          
          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full rounded-full bg-tiato px-4 py-3.5 text-sm font-medium text-cream shadow-sm hover:bg-tiato/90 transition-all active:scale-[0.98] disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {isVerifying ? (
              <span className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
            ) : (
              "Tiếp tục xem"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
