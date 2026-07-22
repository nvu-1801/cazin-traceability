export default function Footer() {
  return (
    <footer className="w-full bg-[#2D1421] text-white px-6 py-10 mt-auto rounded-b-[2.5rem] sm:rounded-b-[3rem]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        
        <div className="space-y-1">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
            C
          </div>
          <h3 className="font-semibold tracking-wider text-lg">CAZIN</h3>
          <p className="text-white/60 text-sm italic">Khát vọng nâng tầm nông sản Việt</p>
        </div>

        <div className="w-16 h-px bg-white/20 mx-auto"></div>

        <div className="space-y-3 text-sm text-white/80 leading-relaxed">
          <p className="font-medium text-white">HỘ KINH DOANH NGUYỄN CẢNH DUY</p>
          
          <div className="flex items-start justify-center gap-2">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Thôn Tăng Lợi, Xã Canh Vinh, Tỉnh Gia Lai</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.04l-4.14-.58a2.25 2.25 0 00-2.31 1.134l-1.02 1.632A11.25 11.25 0 016.75 7.5l1.632-1.02a2.25 2.25 0 001.134-2.31l-.58-4.14A2.25 2.25 0 007.872 0H6.5a2.25 2.25 0 00-2.25 2.25v.75z" />
            </svg>
            <span>0914 417 583</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>tradungcazin@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
