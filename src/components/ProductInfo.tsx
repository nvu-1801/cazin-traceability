"use client";

import React from "react";

export default function ProductInfo() {
  return (
    <section className="w-full px-5 py-6 md:py-10 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Khối 2: Thông tin cơ bản */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            TRÀ TÍA TÔ TÚI LỌC CAZIN
          </h1>
          
          <div className="mb-8">
            <p className="text-textMain font-normal not-italic text-base md:text-[17px] leading-relaxed text-justify mb-3">
              Trà tía tô túi lọc CAZIN là sự kết tinh từ nguồn dược liệu tuyển chọn tại Gia Lai, kết hợp hài hòa giữa tía tô, sả và gừng, mang hương thơm thanh dịu và vị ấm tự nhiên đặc trưng. Được chế biến từ 100% nguyên liệu tự nhiên, không hương liệu, không chất bảo quản, sản phẩm mang đến trải nghiệm thưởng trà tiện lợi và chất lượng.
            </p>
            <p className="text-textMain font-normal not-italic text-base md:text-[17px] leading-relaxed text-justify">
              Mỗi tách trà không chỉ lưu giữ tinh túy của thảo mộc Việt, mà còn gửi gắm giá trị của vùng đất Gia Lai và mang tinh hoa trà thảo mộc Gia Lai đến với người tiêu dùng.
            </p>
          </div>

          {/* Thành phần */}
          <div className="mb-6">
            <h3 className="font-semibold text-primary mb-2 text-lg">Thành phần:</h3>
            <p className="text-textMain text-base">Tía tô 80% (thân và lá), Sả 10%, Gừng 10%.</p>
          </div>

          {/* Grid thông số */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/50">
            <div className="flex flex-col">
              <span className="text-base font-semibold text-primary mb-1">Khối lượng tịnh</span>
              <span className="text-textMain text-[15px] font-normal">80g</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-primary mb-1">Hạn sử dụng</span>
              <span className="text-textMain text-[15px] font-normal">12 tháng</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-primary/10 md:pl-4">
              <span className="text-base font-semibold text-primary mb-1">Quy cách</span>
              <span className="text-textMain text-[15px] font-normal">40 túi lọc × 2g/hộp</span>
            </div>
            <div className="col-span-2 md:col-span-3 flex flex-col pt-2 border-t border-primary/10">
              <span className="text-base font-semibold text-primary mb-1">Chất liệu bao bì</span>
              <span className="text-textMain text-[15px] font-normal">Túi lọc giấy; hộp giấy cứng đảm bảo an toàn dùng trong thực phẩm.</span>
            </div>
          </div>
        </div>

        {/* Khối 3: Thông tin chi tiết (Static List) */}
        <div className="flex flex-col space-y-8 mt-10">
          
          {/* Khối 1: Thông tin nguyên liệu */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Thông tin nguyên liệu</h3>
            <p className="text-textMain text-[15px] leading-relaxed">
              Tía tô, sả và gừng được thu mua từ các vùng nguyên liệu tại Canh Vinh, An Khê và các vùng lân cận thuộc tỉnh Gia Lai.
            </p>
          </div>

          {/* Khối 2: Công dụng nổi bật */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Công dụng nổi bật</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="text-textMain text-[15px]">Tăng cường sức đề kháng</li>
              <li className="text-textMain text-[15px]">Giảm ho, tiêu đờm</li>
              <li className="text-textMain text-[15px]">Dưỡng nhan, sáng da</li>
              <li className="text-textMain text-[15px]">Hỗ trợ gout</li>
              <li className="text-textMain text-[15px]">Giải độc gan, giảm mỡ máu</li>
            </ul>
          </div>

          {/* Khối 3: Hướng dẫn sử dụng */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Hướng dẫn sử dụng</h3>
            <div className="mt-1">
              <p className="mb-4 font-medium text-primary">Dùng 1 túi trà 2g cho mỗi lần pha.</p>
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
                  <p className="text-textMain text-[15px] leading-relaxed">Ngâm 01 túi trà với 120ml nước nóng trong 5 phút.</p>
                </div>
                
                <div className="bg-[#E3F2FD]/60 rounded-xl p-4 border border-[#BBDEFB]/50">
                  <div className="flex items-center gap-2 mb-2 text-[#1565C0] font-medium text-lg">
                    {/* Snowflake icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15m10.607-5.303l-10.607 10.607m10.607 0L7.393 6.697" />
                    </svg>
                    Uống lạnh
                  </div>
                  <p className="text-textMain text-[15px] leading-relaxed">Ngâm 01 túi trà với 90ml nước nóng trong 5 phút, thêm đá tùy khẩu vị.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Khối 4: Lưu ý & Bảo quản */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Lưu ý & Bảo quản</h3>
            <p className="text-textMain text-[15px] leading-relaxed">
              <strong>Bảo quản:</strong> Để nơi khô ráo, thoáng mát.<br/>
              <strong>Khuyến cáo:</strong> Không sử dụng khi sản phẩm có dấu hiệu ẩm mốc, biến màu hoặc có mùi lạ. Không sử dụng hương liệu, chất bảo quản.
            </p>
          </div>

          {/* Khối 5: Thông tin truy xuất */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Thông tin truy xuất</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="text-textMain text-[15px]"><strong className="font-semibold text-primary">Ngày sản xuất:</strong> Xem trên bao bì</li>
              <li className="text-textMain text-[15px]"><strong className="font-semibold text-primary">Số bản tự công bố:</strong> 03/NCD/2023</li>
              <li className="text-textMain text-[15px]"><strong className="font-semibold text-primary">TCCS:</strong> 04:2023</li>
              <li className="text-textMain text-[15px]"><strong className="font-semibold text-primary">Xuất xứ:</strong> Việt Nam</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
