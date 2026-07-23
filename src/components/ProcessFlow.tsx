"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Hook để bắt sự kiện cuộn trang
function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (targetRef.current) observer.unobserve(targetRef.current);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [options]);

  return [targetRef, isIntersecting] as const;
}

export default function ProcessFlow() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="w-full px-5 py-8 md:py-12 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#583679] mb-8 inline-flex items-center gap-3">
          Quy trình sản xuất
          <span className="w-16 h-1 bg-tiato rounded-full"></span>
        </h2>

        <div 
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Phần 1: Sơ đồ dạng Ảnh */}
          <div className="w-full mb-8 flex justify-center">
            <Image 
              src="/images/quy-trinh.png" 
              alt="Quy trình sản xuất" 
              width={1200}
              height={400}
              className="w-full h-auto max-w-4xl mx-auto object-contain"
            />
          </div>

          {/* Phần 2: Thuyết minh chi tiết */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-[#583679] mb-3 text-lg">Thuyết minh quy trình:</h3>
            <p className="text-bodytext/90 text-[15px] md:text-[16px] leading-relaxed">
              Nguyên liệu đầu vào thân và lá Tía Tô được chọn lọc kỹ về chất lượng, sau đó được rửa sạch, băm nhỏ. Tiếp đến đưa qua máy sấy khô đạt theo tiêu chuẩn quy định rồi tiến hành nghiền và phối trộn theo tỷ lệ: gừng 10%, tía tô 80%, sả 10%. Tiếp tục quy trình, trà Tía Tô được đóng gói túi lọc rồi cho vào hộp giấy có cấu tạo đặc biệt nhằm giữ lại mùi hương, mang lại vẻ sang trọng và đảm bảo an toàn cho người sử dụng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
