export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center leading-none ${className}`}>
      <div className="flex items-center text-[#0B1F3A] dark:text-white font-serif font-bold text-3xl tracking-wider">
        <span>REXG</span>
        <div className="relative mx-0.5 flex items-center justify-center h-[0.8em] w-[0.8em]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[1.2em] h-[1.2em] text-[#C9A14A]">
             <path d="M5 19H19V21H5V19ZM12 3L9.5 8.5L4 8L7 13L5 17H19L17 13L20 8L14.5 8.5L12 3Z" fill="currentColor"/>
          </svg>
        </div>
        <span>TE</span>
      </div>
      <div className="text-[#C9A14A] text-[0.62rem] tracking-[0.42em] font-semibold uppercase mt-1">
        Immigration
      </div>
      <div className="text-[#0B1F3A]/70 dark:text-white/70 text-[0.48rem] tracking-[0.22em] font-medium uppercase mt-1">
        Immigration Advisory
      </div>
    </div>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#C9A14A] ${className}`}>
        <path d="M5 19H19V21H5V19ZM12 3L9.5 8.5L4 8L7 13L5 17H19L17 13L20 8L14.5 8.5L12 3Z" fill="currentColor"/>
    </svg>
  );
}
