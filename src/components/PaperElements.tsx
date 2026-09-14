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
export function VintageStamp({ className = '', text = 'LOVE' }: { className?: string; text?: string }) {
  return (
    <div className={`relative p-2 bg-[#faf4ec] border border-[#d6c7b2] rounded-xs shadow-xs text-center ${className}`}>
      <div className="border border-dashed border-[#cbbca7] px-2 py-1 flex flex-col items-center">
        <span className="text-[9px] font-sans font-bold tracking-widest text-[#937b67]">POSTAGE</span>
        <span className="text-xs font-handwriting text-[#b56e60] font-bold">{text}</span>
        <span className="text-[8px] text-[#937b67] font-serif">Air Mail</span>
      </div>
      {/* Stamp perforation imitation */}
      <div className="absolute -top-1 left-2 right-2 flex justify-between">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#fcf8f2]" />
        ))}
      </div>
    </div>
  );
}
