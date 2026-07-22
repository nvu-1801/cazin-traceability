"use client";

import Header from "@/src/components/Header";
import ProductGallery from "@/src/components/ProductGallery";
import ProductInfo from "@/src/components/ProductInfo";
import ValidationModal from "@/src/components/ValidationModal";

export default function Home() {
  const handleValid = () => {
    console.log("Đã xác thực thành công");
  };

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Khối 1: Hình ảnh sản phẩm (Mobile-first) */}
      <ProductGallery />
      
      {/* Khối 2 & 3: Thông tin sản phẩm cơ bản và Accordion */}
      <ProductInfo />
      
      {/* Vùng trống tiếp tục test scroll effect */}
      <div className="h-[40vh] flex flex-col items-center justify-center pb-12">
        <div className="text-center space-y-4 px-4">
          <p className="text-bodytext/70 max-w-md mx-auto italic">
            (Không gian cuộn trang...)
          </p>
        </div>
      </div>
      
      <ValidationModal onValid={handleValid} />
    </main>
  );
}
