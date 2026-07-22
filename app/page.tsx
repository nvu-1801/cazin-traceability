"use client";

import Header from "@/src/components/Header";
import ValidationModal from "@/src/components/ValidationModal";

export default function Home() {
  const handleValid = () => {
    console.log("Đã xác thực thành công");
  };

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Vùng trống để test scroll effect */}
      <div className="h-[150vh] flex flex-col items-center justify-center pt-24 pb-12">
        <div className="text-center space-y-4 px-4">
          <h1 className="text-2xl font-semibold text-tiato">
            Cuộn trang xuống để test Header
          </h1>
          <p className="text-bodytext/70 max-w-md mx-auto">
            (Scroll xuống để thấy hiệu ứng blur mờ. Nội dung các section khác sẽ được code sau)
          </p>
        </div>
      </div>
      
      <ValidationModal onValid={handleValid} />
    </main>
  );
}
