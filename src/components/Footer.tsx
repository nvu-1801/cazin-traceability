import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D1421] text-white px-6 py-10 mt-auto rounded-b-[2.5rem] sm:rounded-b-[3rem]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        
        <div className="space-y-1">
          <div className="w-12 h-12 mx-auto mb-3 relative flex items-center justify-center bg-white rounded-full overflow-hidden p-1">
            <Image alt="CAZIN Logo" className="object-contain w-full h-full" height={48} src="/logo/logo.png" width={48}/>
          </div>
          <h3 className="font-semibold tracking-wider text-lg">CAZIN</h3>
           <p className="text-white/60 text-sm italic">Khát vọng nâng tầm nông sản Việt</p>
          <p className="text-sm md:text-base italic text-white/80 mt-1">Tinh hoa trà thảo mộc Gia Lai</p>
        </div>

        <div className="w-16 h-px bg-white/20 mx-auto"></div>

        <div className="space-y-3 text-sm text-white/80 leading-relaxed">
          <div className="mb-4">
            <p className="font-bold text-white uppercase text-base">HỘ KINH DOANH NGUYỄN CẢNH DUY</p>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            <span><strong className="font-semibold text-white/90">Mã số thuế:</strong> 35K800206</span>
          </div>

          <div className="flex items-start justify-center gap-2">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span><strong className="font-semibold text-white/90">Địa chỉ:</strong> Thôn Tăng Lợi - Xã Canh Vinh - Tỉnh Gia Lai</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.04l-4.14-.58a2.25 2.25 0 00-2.31 1.134l-1.02 1.632A11.25 11.25 0 016.75 7.5l1.632-1.02a2.25 2.25 0 001.134-2.31l-.58-4.14A2.25 2.25 0 007.872 0H6.5a2.25 2.25 0 00-2.25 2.25v.75z" />
            </svg>
            <span><strong className="font-semibold text-white/90">Điện thoại:</strong> 0914 417 583</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span><strong className="font-semibold text-white/90">Email:</strong> tradungcazin@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span><strong className="font-semibold text-white/90">Website:</strong> tradungcazinbinhdinh.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
