import Image from "next/image";

const certImages = [
  "/certificates/1.png",
  "/certificates/2.png",
  "/certificates/3.png",
  "/certificates/4.png",
  "/certificates/5.png"
];

export default function Certificates() {
  return (
    <section className="w-full px-5 py-8 md:py-12 bg-white border-t border-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-tiato mb-8 inline-flex items-center gap-3">
          Chứng nhận chất lượng
          <span className="w-16 h-1 bg-[#4A4A4A]/20 rounded-full"></span>
        </h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 w-full">
          {certImages.map((src, index) => (
            <div 
              key={index} 
              className="relative w-full rounded-2xl overflow-hidden border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 cursor-default flex items-center justify-center"
            >
              {/* Vị trí ảnh không cố định height để responsive theo tỉ lệ nội dung */}
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
                <Image 
                  src={src}
                  alt={`Chứng nhận chất lượng ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
