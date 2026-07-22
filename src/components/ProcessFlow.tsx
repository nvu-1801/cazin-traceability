import React from "react";

const steps = [
  {
    title: "Vùng nguyên liệu",
    description: "Thu mua từ Canh Vinh, An Khê và các vùng lân cận thuộc tỉnh Gia Lai.",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: "Sơ chế",
    description: "Nguyên liệu thân, lá Tía Tô được chọn lọc, rửa sạch và băm nhỏ.",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
      </svg>
    )
  },
  {
    title: "Sấy khô & Phối trộn",
    description: "Sấy khô đạt chuẩn, nghiền và phối trộn: gừng 10%, tía tô 80%, sả 10%.",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    title: "Đóng gói",
    description: "Đóng gói túi lọc, cho vào hộp giấy giữ hương, đảm bảo an toàn thực phẩm.",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    )
  }
];

export default function ProcessFlow() {
  return (
    <section className="w-full px-5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-tiato mb-10 inline-flex items-center gap-3">
          Quy trình sản xuất
          <span className="w-16 h-1 bg-tiato rounded-full"></span>
        </h2>

        <div className="relative pl-8 sm:pl-10 md:pl-12 border-l-2 border-tiato/20 py-2 space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vòng tròn Icon */}
              <div className="absolute -left-[49px] sm:-left-[57px] md:-left-[73px] top-0 md:-top-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream border-[3px] border-tiato flex items-center justify-center text-tiato z-10 shadow-sm">
                {step.icon}
              </div>
              
              {/* Nội dung */}
              <div className="pt-1.5 md:pt-3 pl-2 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-tiato mb-2">
                  Bước {index + 1}: {step.title}
                </h3>
                <p className="text-[15px] md:text-lg text-bodytext/80 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
