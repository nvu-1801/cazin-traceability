"use client";

import Header from "@/src/components/Header";
import ProductGallery from "@/src/components/ProductGallery";
import ProductInfo from "@/src/components/ProductInfo";
import ProcessFlow from "@/src/components/ProcessFlow";
import Certificates from "@/src/components/Certificates";
import Footer from "@/src/components/Footer";
import ValidationModal from "@/src/components/ValidationModal";

export default function Home() {
  const handleValid = () => {
    // Component ValidationModal đã tự động xử lý, onValid có thể dùng để trigger event gì đó
    console.log("Đã truy xuất xong dữ liệu");
  };

  return (
    <main className="relative min-h-screen flex flex-col">
      <Header />
      
      {/* Khối 1: Hình ảnh sản phẩm (Mobile-first) */}
      <ProductGallery />
      
      {/* Khối 2 & 3: Thông tin sản phẩm cơ bản và Accordion */}
      <ProductInfo />
      
      {/* Khối 4: Quy trình sản xuất */}
      <ProcessFlow />
      
      {/* Khối 5: Chứng nhận chất lượng */}
      <Certificates />
      
      {/* Khối 6: Footer */}
      <Footer />
      
      <ValidationModal onValid={handleValid} />
    </main>
  );
}
