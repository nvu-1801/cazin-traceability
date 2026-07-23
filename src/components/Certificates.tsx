import Image from "next/image";

const certImages = [
  { src: "/certificates/1.png", title: "GIẤY CHỨNG NHẬN ĐĂNG KÝ HỘ KINH DOANH" },
  { src: "/certificates/2.png", title: "GIẤY CHỨNG NHẬN ĐĂNG KÝ NHÃN HIỆU" },
  { src: "/certificates/3.png", title: "GIẤY CHỨNG NHẬN CƠ SỞ ĐỦ ĐIỀU KIỆN ATTP" },
  { src: "/certificates/4.png", title: "GIẤY CHỨNG NHẬN OCOP" },
  { src: "/certificates/5.png", title: "KẾT QUẢ KIỂM NGHIỆM TÚI LỌC GIẤY DO CÔNG TY TNHH CÔNG NGHỆ BAO BÌ VÀNG VIỆT NAM CUNG CẤP" }
];

export default function Certificates() {
  return (
    <section className="w-full px-5 py-8 md:py-12  bg-[#F6F6F6] border-t border-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#583679] mb-8 inline-flex items-center gap-3">
          Chứng nhận chất lượng
          <span className="w-16 h-1 bg-[#4A4A4A]/20 rounded-full"></span>
        </h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 w-full">
          {certImages.map((cert, index) => (
            <div 
              key={index} 
              className="border-2 border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 cursor-default"
            >
              {/* Tiêu đề đóng khung */}
              <div className="w-full bg-[#583679]/5 text-[#583679] font-bold uppercase text-center py-4 px-4 text-sm md:text-base border-b border-[#583679]/10 break-words flex items-center justify-center min-h-[4rem]">
                {cert.title}
              </div>
              
              {/* Vùng chứa ảnh */}
              <div className="p-4 w-full flex-1 relative flex items-center justify-center bg-gray-50/50">
                <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
                  <Image 
                    src={cert.src}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
