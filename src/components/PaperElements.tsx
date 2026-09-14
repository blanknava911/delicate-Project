import React from 'react';

// Authentic washi tape strip
export function WashiTape({
  className = '',
  color = 'bg-[#e6d5be]/85',
  rotate = 'rotate-[-2deg]',
  width = 'w-24',
}: {
  className?: string;
  color?: string;
  rotate?: string;
  width?: string;
}) {
  return (
    <div
      className={`h-5 ${width} ${color} ${rotate} shadow-sm backdrop-blur-[1px] relative overflow-hidden pointer-events-none select-none z-10 ${className}`}
      style={{
        maskImage: 'repeating-linear-gradient(90deg, #000 0px, #000 96%, transparent 97%, transparent 100%)',
        clipPath: 'polygon(0% 10%, 3% 0%, 97% 0%, 100% 12%, 98% 88%, 100% 100%, 2% 98%, 0% 88%)',
      }}
    >
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#856d54_1px,transparent_1px)] [background-size:6px_6px]" />
    </div>
  );
}

// Realistic Paper Clip
export function PaperClip({ className = '', rotate = 'rotate-12' }: { className?: string; rotate?: string }) {
  return (
    <svg
      viewBox="0 0 24 48"
      className={`w-6 h-12 text-[#9c8977] drop-shadow-sm pointer-events-none select-none ${rotate} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4v34a6 6 0 0 1-12 0V14a10 10 0 0 1 20 0v26a3 3 0 0 1-6 0V16" />
    </svg>
  );
}

// Vintage Push Pin
export function PushPin({ className = '', color = '#c87d65' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`w-7 h-7 drop-shadow-md pointer-events-none select-none ${className}`}
      fill="none"
    >
      <circle cx="16" cy="14" r="7" fill={color} stroke="#a25842" strokeWidth="1.5" />
      <circle cx="14" cy="12" r="2.5" fill="#fff" opacity="0.6" />
      <path d="M16 21v7" stroke="#686058" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="16" cy="21" rx="4" ry="2" fill="#8d4b38" />
    </svg>
  );
}

// Hand-drawn Doodle Heart
export function DoodleHeart({
  className = '',
  fill = '#de9b8e',
  stroke = '#b66d60',
}: {
  className?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`w-7 h-7 pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 30C18 30 5 22 5 13C5 8.5 8.5 5 13 5C15.5 5 17.5 6.5 18 8C18.5 6.5 20.5 5 23 5C27.5 5 31 8.5 31 13C31 22 18 30 18 30Z"
        fill={fill}
        fillOpacity="0.8"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.5 0.5"
      />
    </svg>
  );
}

// Hand-tied Ribbon Bow
export function RibbonBow({ className = '', color = '#d68c85' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 50 34"
      className={`w-10 h-7 pointer-events-none select-none drop-shadow-sm ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left loop */}
      <path
        d="M24 14C17 7 6 6 8 14C10 20 20 16 24 15"
        fill={color}
        fillOpacity="0.75"
        stroke="#9e5852"
        strokeWidth="1.5"
      />
      {/* Right loop */}
      <path
        d="M26 14C33 7 44 6 42 14C40 20 30 16 26 15"
        fill={color}
        fillOpacity="0.75"
        stroke="#9e5852"
        strokeWidth="1.5"
      />
      {/* Center knot */}
      <ellipse cx="25" cy="14.5" rx="3.5" ry="3" fill={color} stroke="#9e5852" strokeWidth="1.5" />
      {/* Left tail */}
      <path
        d="M23 16C19 23 15 28 11 31"
        stroke="#9e5852"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right tail */}
      <path
        d="M27 16C31 23 35 28 39 31"
        stroke="#9e5852"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Vintage Postage Stamp
export function VintageStamp({
  className = '',
  text = 'THANK YOU',
  imageSrc,
}: {
  className?: string;
  text?: string;
  imageSrc?: string;
}) {
  return (
    <div className={`relative p-2 bg-[#faf5ed] border border-[#d6c7b2] rounded-xs shadow-scrapbook text-center ${className}`}>
      <div className="border border-dashed border-[#cbbca7] p-1.5 flex flex-col items-center">
        <span className="text-[9px] font-sans font-extrabold tracking-widest text-[#8c745f] leading-none mb-1">
          POSTAGE
        </span>
        {imageSrc && (
          <div className="my-1 w-16 sm:w-20 aspect-3/4 overflow-hidden rounded-xs border border-[#cfc1ad] bg-[#ebdccb] shadow-xs relative">
            <img
              src={imageSrc}
              alt="Us together"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Postal cancellation mark overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
              <svg viewBox="0 0 100 60" className="w-full h-full text-[#5e4b3c]" stroke="currentColor" fill="none" strokeWidth="1.5">
                <circle cx="25" cy="30" r="18" strokeDasharray="3 2" />
                <path d="M45 20 C 60 15, 75 25, 95 20" />
                <path d="M45 30 C 60 25, 75 35, 95 30" />
                <path d="M45 40 C 60 35, 75 45, 95 40" />
              </svg>
            </div>
          </div>
        )}
        <span className="text-xs font-handwriting text-[#b56e60] font-bold leading-tight">
          {text}
        </span>
        <span className="text-[8px] text-[#8c745f] font-serif uppercase tracking-wider mt-0.5">
          Air Mail
        </span>
      </div>
      {/* Stamp perforation imitation */}
      <div className="absolute -top-1 left-2 right-2 flex justify-between pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#fcf8f2]" />
        ))}
      </div>
      <div className="absolute -bottom-1 left-2 right-2 flex justify-between pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#fcf8f2]" />
        ))}
      </div>
    </div>
  );
}
