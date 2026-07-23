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
    <div className="border-b border-[#583679]/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group hover:bg-gray-50 transition-colors duration-300 p-3 -mx-3 rounded-xl"
      >
        <span className="font-semibold text-[#583679] text-[17px] md:text-[19px] group-hover:text-[#583679] transition-colors">
          {title}
        </span>
        <div className={`flex items-center justify-center w-7 h-7 rounded-full bg-[#583679]/5 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#583679]/10" : ""}`}>
          <svg 
            className="h-4 w-4 text-[#583679]" 
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
          <h1 className="text-2xl md:text-4xl font-bold text-[#583679] mb-4">
            TRÀ TÍA TÔ TÚI LỌC CAZIN
          </h1>
          
          <div className="text-bodytext/80 text-[15px] md:text-[17px] leading-relaxed italic mb-6 space-y-3">
            <p>
              Trà tía tô túi lọc CAZIN là sự kết tinh từ nguồn dược liệu tuyển chọn tại Gia Lai, kết hợp hài hòa giữa tía tô, sả và gừng, mang hương thơm thanh dịu và vị ấm tự nhiên đặc trưng. Được chế biến từ 100% nguyên liệu tự nhiên, không hương liệu, không chất bảo quản, sản phẩm mang đến trải nghiệm thưởng trà tiện lợi và chất lượng.
            </p>
            <p>
              Mỗi tách trà không chỉ lưu giữ tinh túy của thảo mộc Việt, mà còn gửi gắm giá trị của vùng đất Gia Lai và mang tinh hoa trà thảo mộc Gia Lai đến với người tiêu dùng.
            </p>
          </div>

          {/* Thành phần */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#583679] mb-2 text-lg">Thành phần:</h3>
            <p className="text-bodytext md:text-[16px]">Tía tô 80% (thân và lá), Sả 10%, Gừng 10%.</p>
          </div>

          {/* Grid thông số */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/50">
            <div className="flex flex-col">
              <span className="text-xs text-[#583679] uppercase tracking-wider mb-1">Khối lượng tịnh</span>
              <span className="font-medium text-[#583679] md:text-lg">80g</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#583679] uppercase tracking-wider mb-1">Hạn sử dụng</span>
              <span className="font-medium text-[#583679] md:text-lg">12 tháng</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-[#583679]/10 md:pl-4">
              <span className="text-xs text-[#583679] uppercase tracking-wider mb-1">Quy cách</span>
              <span className="font-medium text-[#583679] md:text-lg">40 túi lọc × 2g/hộp</span>
            </div>
            <div className="col-span-2 md:col-span-3 flex flex-col pt-2 border-t border-[#583679]/10">
              <span className="text-xs text-[#583679] uppercase tracking-wider mb-1">Chất liệu bao bì</span>
              <span className="font-medium text-[#583679] md:text-lg">Túi lọc giấy; hộp giấy cứng đảm bảo an toàn dùng trong thực phẩm.</span>
            </div>
          </div>
        </div>

        {/* Khối 3: Hướng dẫn & Công dụng (Accordion) */}
        <div className="space-y-1">
          <AccordionItem 
            title="Thông tin nguyên liệu" 
            content={
              <p className="text-bodytext/90 leading-relaxed flex items-start gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#583679] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                Tía tô, sả và gừng được thu mua từ các vùng nguyên liệu tại Canh Vinh, An Khê và các vùng lân cận thuộc tỉnh Gia Lai.
              </p>
            } 
          />

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
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#583679] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
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
                <p className="mb-4 font-medium text-[#583679]">Dùng 1 túi trà 2g cho mỗi lần pha.</p>
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
            title="Lưu ý & Bảo quản" 
            content={
              <p className="text-bodytext/90 leading-relaxed">
                <strong>Bảo quản:</strong> Để nơi khô ráo, thoáng mát.<br/>
                <strong>Khuyến cáo:</strong> Không sử dụng khi sản phẩm có dấu hiệu ẩm mốc, biến màu hoặc có mùi lạ. Không sử dụng hương liệu, chất bảo quản.
              </p>
            } 
          />

          <AccordionItem 
            title="Thông tin truy xuất" 
            content={
              <ul className="space-y-2 text-bodytext/90">
                <li><strong className="font-semibold text-[#583679]">Ngày sản xuất:</strong> Xem trên bao bì</li>
                <li><strong className="font-semibold text-[#583679]">Số bản tự công bố:</strong> 03/NCD/2023</li>
                <li><strong className="font-semibold text-[#583679]">TCCS:</strong> 04:2023</li>
                <li><strong className="font-semibold text-[#583679]">Xuất xứ:</strong> Việt Nam</li>
              </ul>
            } 
          />
        </div>
      </div>
    </section>
  );
}
