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
          
          {/* 1. Thông tin nguyên liệu */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Thông tin nguyên liệu</h3>
            <p className="text-textMain text-[15px] leading-relaxed">
              Tía tô, sả và gừng được thu mua từ các vùng nguyên liệu tại Canh Vinh, An Khê và các vùng lân cận thuộc tỉnh Gia Lai.
            </p>
          </div>

          {/* 2. Công dụng nổi bật */}
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

          {/* 3. Hướng dẫn sử dụng */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Hướng dẫn sử dụng</h3>
            <div className="space-y-3">
              <p className="text-textMain text-[15px]">Dùng 1 túi trà 2g cho mỗi lần pha.</p>
              
              <div>
                <p className="text-textMain text-[15px] font-semibold mb-1">Uống nóng</p>
                <p className="text-textMain text-[15px]">Ngâm 01 túi trà với 120ml nước nóng trong 5 phút.</p>
              </div>
              
              <div>
                <p className="text-textMain text-[15px] font-semibold mb-1">Uống lạnh</p>
                <p className="text-textMain text-[15px]">Ngâm 01 túi trà với 90ml nước nóng trong 5 phút, thêm đá tùy khẩu vị.</p>
              </div>
            </div>
          </div>

          {/* 4. Lưu ý & Bảo quản */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Lưu ý & Bảo quản</h3>
            <div className="space-y-2">
              <p className="text-textMain text-[15px]">
                <span className="font-semibold">Bảo quản:</span> Để nơi khô ráo, thoáng mát.
              </p>
              <p className="text-textMain text-[15px]">
                <span className="font-semibold">Khuyến cáo:</span> Không sử dụng khi sản phẩm có dấu hiệu ẩm mốc, biến màu hoặc có mùi lạ. Không sử dụng hương liệu, chất bảo quản.
              </p>
            </div>
          </div>

          {/* 5. Thông tin truy xuất */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Thông tin truy xuất</h3>
            <div className="space-y-2">
              <p className="text-textMain text-[15px]"><span className="font-semibold">Ngày sản xuất:</span> Xem trên bao bì</p>
              <p className="text-textMain text-[15px]"><span className="font-semibold">Số bản tự công bố:</span> 03/NCD/2023</p>
              <p className="text-textMain text-[15px]"><span className="font-semibold">TCCS:</span> 04:2023</p>
              <p className="text-textMain text-[15px]"><span className="font-semibold">Xuất xứ:</span> Việt Nam</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
