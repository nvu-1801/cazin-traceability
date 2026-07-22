"use client";

import { useState } from "react";

function AccordionItem({ 
  title, 
  content, 
  defaultOpen = false 
}: { 
  title: string; 
  content: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-tiato/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group hover:bg-gray-50 transition-colors duration-300 p-3 -mx-3 rounded-xl"
      >
        <span className="font-semibold text-tiato/90 text-[17px] md:text-[19px] group-hover:text-tiato transition-colors">
          {title}
        </span>
        <div className={`flex items-center justify-center w-7 h-7 rounded-full bg-tiato/5 transition-transform duration-300 ${isOpen ? "rotate-180 bg-tiato/10" : ""}`}>
          <svg 
            className="h-4 w-4 text-tiato" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pt-4 pb-2 text-[15px] md:text-[16px] text-bodytext leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductInfo() {
  return (
    <section className="w-full px-5 py-6 md:py-10 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Khối 2: Thông tin cơ bản */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-tiato mb-4">
            TRÀ TÍA TÔ TÚI LỌC CAZIN
          </h1>
          
          <p className="text-bodytext/80 text-[15px] md:text-[17px] leading-relaxed italic mb-6">
            Trà tía tô túi lọc CAZIN là sự kết tinh từ nguồn dược liệu tuyển chọn tại Gia Lai, kết hợp hài hòa giữa tía tô, sả và gừng, mang hương thơm thanh dịu và vị ấm tự nhiên đặc trưng. Được chế biến từ 100% nguyên liệu tự nhiên, không hương liệu, không chất bảo quản...
          </p>

          {/* Thành phần */}
          <div className="mb-6">
            <h3 className="font-semibold text-tiato mb-2 text-lg">Thành phần:</h3>
            <p className="text-bodytext md:text-[16px]">Tía tô 80% (thân và lá), Sả 10%, Gừng 10%.</p>
          </div>

          {/* Grid thông số */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-50">
            <div className="flex flex-col">
              <span className="text-xs text-bodytext/60 uppercase tracking-wider mb-1">Khối lượng tịnh</span>
              <span className="font-medium text-tiato md:text-lg">80g</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-bodytext/60 uppercase tracking-wider mb-1">Hạn sử dụng</span>
              <span className="font-medium text-tiato md:text-lg">12 tháng</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-tiato/5 md:pl-4">
              <span className="text-xs text-bodytext/60 uppercase tracking-wider mb-1">Quy cách</span>
              <span className="font-medium text-tiato md:text-lg">40 túi lọc × 2g/hộp</span>
            </div>
          </div>
        </div>

        {/* Khối 3: Hướng dẫn & Công dụng (Accordion) */}
        <div className="space-y-1">
          <AccordionItem 
            title="Công dụng nổi bật" 
            defaultOpen={true}
            content={
              <ul className="space-y-3">
                {[
                  "Tăng cường sức đề kháng",
                  "Giảm ho, tiêu đờm",
                  "Dưỡng nhan, sáng da",
                  "Hỗ trợ gout",
                  "Giải độc gan, giảm mỡ máu"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#3E5C40] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            } 
          />
          
          <AccordionItem 
            title="Hướng dẫn sử dụng" 
            content={
              <div className="mt-1">
                <p className="mb-4 font-medium text-tiato/90">Dùng 1 túi trà 2g cho mỗi lần pha.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FFF4E5]/60 rounded-xl p-4 border border-[#FFE0B2]/50">
                    <div className="flex items-center gap-2 mb-2 text-[#D84315] font-medium text-lg">
                      {/* Fire/Hot icon */}
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                      Uống nóng
                    </div>
                    <p className="text-bodytext/90 leading-relaxed">Ngâm 01 túi trà với 120ml nước nóng trong 5 phút.</p>
                  </div>
                  
                  <div className="bg-[#E3F2FD]/60 rounded-xl p-4 border border-[#BBDEFB]/50">
                    <div className="flex items-center gap-2 mb-2 text-[#1565C0] font-medium text-lg">
                      {/* Snowflake icon */}
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15m10.607-5.303l-10.607 10.607m10.607 0L7.393 6.697" />
                      </svg>
                      Uống lạnh
                    </div>
                    <p className="text-bodytext/90 leading-relaxed">Ngâm 01 túi trà với 90ml nước nóng trong 5 phút, thêm đá tùy khẩu vị.</p>
                  </div>
                </div>
              </div>
            } 
          />

          <AccordionItem 
            title="Bảo quản" 
            content={
              <ul className="list-disc pl-5 space-y-2 marker:text-tiato/60">
                <li>Để nơi khô ráo, thoáng mát.</li>
                <li>Không sử dụng khi sản phẩm có dấu hiệu ẩm mốc, biến màu.</li>
                <li>Không sử dụng hương liệu, chất bảo quản.</li>
              </ul>
            } 
          />
        </div>
      </div>
    </section>
  );
}
