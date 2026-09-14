import React, { useState } from 'react';
import { CuteBears } from './CuteBears';
import { WashiTape, RibbonBow, DoodleHeart } from './PaperElements';

interface StartScreenProps {
  headline: string;
  subheadline?: string;
  yesText: string;
  notYetText: string;
  gentleMessage: string;
  onEnter: () => void;
}

export function StartScreen({
  headline,
  subheadline,
  yesText,
  notYetText,
  gentleMessage,
  onEnter,
}: StartScreenProps) {
  const [showNotYetModal, setShowNotYetModal] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 paper-dots overflow-hidden">
      {/* Soft background floating elements */}
      <div className="absolute top-10 left-10 opacity-30 pointer-events-none">
        <DoodleHeart className="w-12 h-12" fill="#e8c4bb" stroke="#cfa196" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-30 pointer-events-none">
        <DoodleHeart className="w-16 h-16" fill="#ded3c3" stroke="#beaf9d" />
      </div>

      {/* Main Centered Opening Scrapbook Card */}
      <div className="relative w-full max-w-lg bg-[#fdfbf7] border-2 border-[#e5d5c0] rounded-3xl p-6 sm:p-10 shadow-scrapbook-lg text-center transition-all">
        {/* Top Washi Tape and Bow */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <WashiTape color="bg-[#ebd8c4]/90" rotate="-rotate-1" width="w-32" />
          <div className="-mt-2">
            <RibbonBow className="w-12 h-8" color="#d38b82" />
          </div>
        </div>

        {/* Headline */}
        <div className="mt-4 mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-[#3f3124] leading-snug whitespace-pre-line">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-1 text-sm font-note text-[#876f5a] tracking-wide">
              {subheadline}
            </p>
          )}
        </div>

        {/* Cute Illustration: two small bear-like characters, one comforting the other */}
        <div className="my-5 flex justify-center">
          <CuteBears scene="comforting" />
        </div>

        {/* Two Buttons: YES & NOT YET */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs mx-auto">
          {/* YES BUTTON */}
          <button
            type="button"
            onClick={onEnter}
            id="start-yes-btn"
            className="w-full sm:w-1/2 py-3 px-6 rounded-full bg-[#8c6b52] hover:bg-[#785942] active:scale-98 text-[#fcf9f4] font-sans font-semibold text-base shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#785a43]"
          >
            {yesText}
          </button>

          {/* NOT YET BUTTON (Never runs away, never guilt-trips) */}
          <button
            type="button"
            onClick={() => setShowNotYetModal(true)}
            id="start-not-yet-btn"
            className="w-full sm:w-1/2 py-3 px-6 rounded-full bg-[#f4ebe1] hover:bg-[#ebdccb] active:scale-98 text-[#685240] font-sans font-medium text-base shadow-xs hover:shadow-sm transition-all cursor-pointer border border-[#decbb8]"
          >
            {notYetText}
          </button>
        </div>

        <p className="mt-5 text-[12px] font-sans text-[#a28e7c]">
          Take your time. There is no rush or pressure.
        </p>
      </div>

      {/* Gentle Modal for NOT YET */}
      {showNotYetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#fffdfa] border-2 border-[#e3d3be] rounded-2xl p-6 sm:p-8 shadow-scrapbook-lg text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape color="bg-[#e4ede2]/90" rotate="rotate-2" width="w-24" />
            </div>

            <div className="my-2 flex justify-center">
              <DoodleHeart className="w-10 h-10" fill="#edd0cb" stroke="#cb8e83" />
            </div>

            <h3 className="text-xl sm:text-2xl font-handwriting font-bold text-[#453629] mb-3">
              I understand completely
            </h3>

            <p className="text-base sm:text-lg font-serif text-[#5a483a] leading-relaxed whitespace-pre-line mb-6">
              {gentleMessage}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShowNotYetModal(false)}
                className="py-2.5 px-5 rounded-full bg-[#f2e7dc] hover:bg-[#e7d8ca] text-[#5e4b3c] font-sans text-sm font-medium transition-colors cursor-pointer border border-[#dec9b4]"
              >
                Close note
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowNotYetModal(false);
                  onEnter();
                }}
                className="py-2.5 px-5 rounded-full bg-[#8c6b52] hover:bg-[#785942] text-white font-sans text-sm font-medium transition-colors shadow-sm cursor-pointer"
              >
                Read whenever you're ready
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
