import React, { useState, useEffect } from 'react';
import { WashiTape, PushPin, DoodleHeart } from './PaperElements';

interface WindowCollageProps {
  mainText: string;
  subNote: string;
  labels: {
    clock: string;
    hangingCharm: string;
    window: string;
    plushBear: string;
    paperHeart: string;
  };
}

export function WindowCollage({ mainText, subNote, labels }: WindowCollageProps) {
  const [timeAngle, setTimeAngle] = useState(0);

  // Soft ticking clock animation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAngle((prev) => (prev + 6) % 360);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Scrapbook Collage Canvas */}
      <div className="relative bg-[#fcf8f2] border-2 border-[#decbb7] rounded-2xl p-6 sm:p-10 shadow-scrapbook-lg overflow-hidden">
        {/* Decorative corner washi tapes */}
        <div className="absolute -top-2 left-6">
          <WashiTape color="bg-[#ebd5c1]/90" rotate="-rotate-3" width="w-28" />
        </div>
        <div className="absolute -top-2 right-6">
          <WashiTape color="bg-[#d5e0d5]/90" rotate="rotate-2" width="w-28" />
        </div>

        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-[#f4ebe1] rounded-full text-xs font-note uppercase tracking-wider text-[#826a57] mb-2 border border-[#e5d5c3]">
            Collage of Thoughts
          </span>
          <h2 className="text-2xl sm:text-3xl font-handwriting font-bold text-[#443528]">
            What I want you to know
          </h2>
          <div className="w-20 h-0.5 bg-[#e0ceba] mx-auto mt-2 rounded-full" />
        </div>

        {/* Bedroom Window & Collage Interactive Scene */}
        <div className="relative w-full max-w-2xl mx-auto bg-[#faf4ec] border border-[#dfceba] rounded-xl p-4 sm:p-6 shadow-inner mb-8">
          <div className="relative h-[340px] sm:h-[400px] w-full flex items-center justify-center overflow-hidden rounded-lg bg-[#fbf6ef]">
            {/* Wallpaper pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8f7660_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            {/* 1. WINDOW WITH BLUE SKY & PAPER CLOUDS */}
            <div className="absolute left-6 sm:left-12 top-8 w-44 sm:w-56 h-56 sm:h-68 bg-[#dfebf4] rounded-t-full border-4 border-[#bca085] shadow-md overflow-hidden z-10">
              {/* Sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#bfe0f2] via-[#cfe8f5] to-[#fceee0]" />
              
              {/* Gentle warm sun */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#fae8b4] shadow-[0_0_12px_rgba(250,232,180,0.8)] opacity-90" />

              {/* Drifting paper clouds */}
              <div className="absolute top-8 left-2 flex gap-2 animate-[pulse_4s_ease-in-out_infinite] opacity-85">
                <div className="w-16 h-6 bg-white/90 rounded-full shadow-xs" />
                <div className="w-8 h-8 -ml-8 -mt-2 bg-white/90 rounded-full" />
              </div>

              <div className="absolute top-18 right-3 flex gap-2 animate-[pulse_5s_ease-in-out_infinite] opacity-75">
                <div className="w-20 h-6 bg-white/90 rounded-full shadow-xs" />
                <div className="w-10 h-10 -ml-12 -mt-3 bg-white/90 rounded-full" />
              </div>

              {/* Window grid panes */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
                <div className="border-r-2 border-b-2 border-[#bca085]" />
                <div className="border-b-2 border-[#bca085]" />
                <div className="border-r-2 border-[#bca085]" />
                <div />
              </div>

              {/* Wooden Windowsill */}
              <div className="absolute bottom-0 inset-x-0 h-4 bg-[#a6866b] border-t border-[#8e6e53]" />
            </div>

            {/* Window Label Annotation */}
            <div className="absolute left-2 sm:left-6 bottom-4 z-20 hidden sm:flex items-center gap-2">
              <span className="text-xs font-handwriting text-[#6c5949] font-medium bg-[#fcf8f2] px-2 py-0.5 rounded border border-[#dac7b3] shadow-xs">
                {labels.window}
              </span>
              <span className="text-[#a58d76] text-xs font-note">↑</span>
            </div>

            {/* 2. TICKING WALL CLOCK */}
            <div className="absolute right-8 sm:right-16 top-6 z-10 flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fcfaf5] border-3 border-[#8b6f58] shadow-md flex items-center justify-center">
                {/* Clock markings */}
                <div className="absolute top-1 w-1 h-1 rounded-full bg-[#6a5442]" />
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#6a5442]" />
                <div className="absolute left-1 w-1 h-1 rounded-full bg-[#6a5442]" />
                <div className="absolute right-1 w-1 h-1 rounded-full bg-[#6a5442]" />
                
                {/* Center pin */}
                <div className="w-2 h-2 rounded-full bg-[#8b6f58] z-20" />

                {/* Hour hand */}
                <div className="absolute w-0.5 h-4 bg-[#543e2e] origin-bottom -translate-y-2 rounded-full" />

                {/* Minute / Ticking hand */}
                <div
                  className="absolute w-0.5 h-6 bg-[#b66d60] origin-bottom -translate-y-3 rounded-full transition-transform duration-300"
                  style={{ transform: `rotate(${timeAngle}deg) translateY(-6px)` }}
                />
              </div>

              {/* Clock Label */}
              <div className="mt-1 text-center">
                <span className="text-[11px] sm:text-xs font-handwriting text-[#78614f] bg-[#fcf8f2] px-2 py-0.5 rounded border border-[#decbb8] shadow-xs">
                  {labels.clock}
                </span>
              </div>
            </div>

            {/* 3. HANGING CHARM / STAR (Swaying gently) */}
            <div className="absolute right-32 sm:right-48 top-0 z-10 flex flex-col items-center origin-top animate-[bounce_3.5s_ease-in-out_infinite]">
              {/* String */}
              <div className="w-0.5 h-20 bg-[#baa48d]" />
              {/* Little golden star charm */}
              <div className="relative -mt-1 p-1">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#deb367] drop-shadow-sm fill-current">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
                </svg>
              </div>
              {/* Little dangling bell or gem */}
              <div className="w-2 h-2 rounded-full bg-[#c87d65] shadow-xs" />

              {/* Hanging Charm Label */}
              <span className="mt-1 text-[11px] font-handwriting text-[#78614f] bg-[#fcf8f2] px-1.5 py-0.5 rounded border border-[#decbb8] whitespace-nowrap shadow-xs">
                {labels.hangingCharm}
              </span>
            </div>

            {/* 4. TINY PLUSH BEAR SITTING ON SILL / BENCH */}
            <div className="absolute left-28 sm:left-40 bottom-6 sm:bottom-8 z-20 flex flex-col items-center">
              <svg viewBox="0 0 80 80" className="w-14 sm:w-18 h-14 sm:h-18 drop-shadow-sm">
                {/* Plush Ears */}
                <circle cx="26" cy="22" r="8" fill="#cfa98b" stroke="#7e5d45" strokeWidth="1.5" />
                <circle cx="26" cy="22" r="4" fill="#eed9c8" />
                <circle cx="54" cy="22" r="8" fill="#cfa98b" stroke="#7e5d45" strokeWidth="1.5" />
                <circle cx="54" cy="22" r="4" fill="#eed9c8" />

                {/* Plush Body */}
                <ellipse cx="40" cy="56" rx="20" ry="18" fill="#cfa98b" stroke="#7e5d45" strokeWidth="1.5" />
                <ellipse cx="40" cy="56" rx="12" ry="11" fill="#eed9c8" />

                {/* Head */}
                <circle cx="40" cy="34" r="18" fill="#cfa98b" stroke="#7e5d45" strokeWidth="1.5" />
                <ellipse cx="40" cy="39" rx="8" ry="6" fill="#eed9c8" />
                <ellipse cx="40" cy="37" rx="2.5" ry="1.5" fill="#4d3525" />
                <path d="M40 38v2" stroke="#4d3525" strokeWidth="1" />
                <path d="M38 41q2 1 4 0" stroke="#4d3525" strokeWidth="1" fill="none" />

                <circle cx="34" cy="32" r="1.8" fill="#4d3525" />
                <circle cx="46" cy="32" r="1.8" fill="#4d3525" />
                <ellipse cx="32" cy="37" rx="3" ry="2" fill="#f2a89f" opacity="0.6" />
                <ellipse cx="48" cy="37" rx="3" ry="2" fill="#f2a89f" opacity="0.6" />

                {/* Tiny knitted bow */}
                <path d="M36 47c-4-2-7 1-4 3c3 1 4-3 4-3z M44 47c4-2 7 1 4 3c-3 1-4-3-4-3z" fill="#b86b62" />
                <circle cx="40" cy="48" r="1.5" fill="#8e463e" />
              </svg>

              {/* Plush Bear Label */}
              <span className="text-[11px] sm:text-xs font-handwriting text-[#78614f] bg-[#fcf8f2] px-2 py-0.5 rounded border border-[#decbb8] whitespace-nowrap shadow-xs">
                {labels.plushBear}
              </span>
            </div>

            {/* 5. PAPER HEART PINNED TO WALL */}
            <div className="absolute right-6 sm:right-14 bottom-10 z-20 flex flex-col items-center -rotate-6">
              <div className="relative bg-[#fbe7e4] border border-[#dfaba4] p-3 rounded-lg shadow-sm">
                <PushPin className="-top-3 left-3 absolute" color="#d36f62" />
                <DoodleHeart className="w-8 h-8 text-[#c96c5f]" fill="#f7cac3" stroke="#b45749" />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-handwriting text-[#78614f] bg-[#fcf8f2] px-2 py-0.5 rounded border border-[#decbb8] shadow-xs">
                {labels.paperHeart}
              </span>
            </div>
          </div>
        </div>

        {/* Heartfelt Reflection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Statement */}
          <div className="md:col-span-7 relative bg-[#fffdfa] border border-[#e2d5c3] p-6 sm:p-7 rounded-xl shadow-scrapbook">
            <div className="absolute -top-3 left-8">
              <WashiTape color="bg-[#ebdcc9]/90" rotate="-rotate-1" width="w-24" />
            </div>
            <p className="text-[#45372b] font-serif text-base sm:text-lg leading-relaxed whitespace-pre-line pt-2">
              {mainText}
            </p>
          </div>

          {/* Sub Note */}
          <div className="md:col-span-5 relative bg-[#fdf5eb] border border-[#e4d3bf] p-6 rounded-xl shadow-scrapbook flex flex-col justify-center">
            <div className="absolute -top-3 right-8">
              <WashiTape color="bg-[#e2eade]/90" rotate="rotate-2" width="w-20" />
            </div>
            <span className="text-xs font-note uppercase tracking-wider text-[#98816c] mb-1">
              A gentle reminder
            </span>
            <p className="text-[#5a483a] font-handwriting text-lg sm:text-xl leading-relaxed whitespace-pre-line">
              {subNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
