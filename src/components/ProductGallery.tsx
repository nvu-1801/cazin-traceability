import Image from "next/image";

const images = [
  "/images/1.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png"
];

export default function ProductGallery() {
  return (
    <section className="w-full pt-8 pb-8">
      {/* Container cuộn ngang với CSS Scroll Snap */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative flex-none w-[85vw] max-w-[320px] aspect-square snap-center rounded-3xl overflow-hidden shadow-sm bg-tiato/5 ring-1 ring-black/5"
          >
            <Image
              src={src}
              alt={`Hình ảnh sản phẩm ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain transition-transform duration-500 hover:scale-105"
              priority={index === 0} // Ưu tiên load ảnh đầu tiên
            />
          </div>
        ))}
      </div>
      
      {/* Indicator dạng chấm tròn (chỉ để trang trí) */}
      <div className="flex justify-center gap-1.5 mt-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`h-1.5 rounded-full transition-all duration-300 ${index === 0 ? "w-4 bg-tiato" : "w-1.5 bg-tiato/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
