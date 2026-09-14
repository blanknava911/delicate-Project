import React, { useState } from 'react';
import { CuteBears } from './CuteBears';
import {
  WashiTape,
  PaperClip,
  PushPin,
  DoodleHeart,
  RibbonBow,
  VintageStamp,
} from './PaperElements';
import { WindowCollage } from './WindowCollage';
import { PhotoEditorModal } from './PhotoEditorModal';
import { ScrapbookContent, PolaroidPhoto } from '../content';
import { ChevronDown, Edit3 } from 'lucide-react';

interface ScrapbookSectionsProps {
  content: ScrapbookContent;
}

export function ScrapbookSections({ content }: ScrapbookSectionsProps) {
  // Photos state (allows on-the-fly photo swapping and caption editing)
  const [photos, setPhotos] = useState<PolaroidPhoto[]>(() => {
    const saved = localStorage.getItem('apology_photos_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return content.section2.photos;
      }
    }
    return content.section2.photos;
  });

  const [activeEditingPhoto, setActiveEditingPhoto] = useState<PolaroidPhoto | null>(null);

  // Final screen heart click state
  const [hasClickedFinalHeart, setHasClickedFinalHeart] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; left: number }[]>([]);

  const handleUpdatePhoto = (photoId: string, newUrl: string, newCaption: string) => {
    const updated = photos.map((p) =>
      p.id === photoId ? { ...p, url: newUrl, caption: newCaption } : p
    );
    setPhotos(updated);
    localStorage.setItem('apology_photos_v1', JSON.stringify(updated));
  };

  const handleFinalHeartClick = () => {
    setHasClickedFinalHeart(true);
    // Generate gentle floating hearts
    const newHearts = Array.from({ length: 9 }).map((_, i) => ({
      id: Date.now() + i,
      left: 20 + Math.random() * 60, // percentage
    }));
    setFloatingHearts(newHearts);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pb-28 text-[#4a3a2d]">
      {/* ========================================================
          SECTION 1 — INTRODUCTION
          ======================================================== */}
      <section
        id="section-intro"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center paper-dots relative"
      >
        <div className="w-full max-w-xl mx-auto bg-[#fffdfa] border-2 border-[#e7d8c4] rounded-3xl p-7 sm:p-10 shadow-scrapbook relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="bg-[#ebd8c5]/90" rotate="-rotate-1" width="w-28" />
          </div>

          <div className="mb-2">
            <span className="text-xs font-note tracking-wider text-[#917966] uppercase bg-[#f5ecdf] px-3 py-1 rounded-full border border-[#e4d3bf]">
              For {content.recipientName}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-handwriting font-bold text-[#3d2f23] mb-4">
            {content.section1.heading}
          </h1>

          <div className="my-6 flex justify-center">
            <CuteBears scene="together" />
          </div>

          <p className="text-base sm:text-lg font-serif text-[#564434] leading-relaxed max-w-md mx-auto whitespace-pre-line mb-8">
            {content.section1.text}
          </p>

          <button
            type="button"
            onClick={() => scrollToSection('section-weekend')}
            id="intro-continue-btn"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#8c6b52] hover:bg-[#785942] active:scale-98 text-white font-sans font-medium text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>{content.section1.continueButtonText}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — THE WEEKEND (PHOTO SCRAPBOOK)
          ======================================================== */}
      <section
        id="section-weekend"
        className="w-full max-w-5xl mx-auto px-4 py-20 relative"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#f5ebde] rounded-full text-xs font-note uppercase tracking-wider text-[#8b725e] mb-3 border border-[#e2d2be]">
            <DoodleHeart className="w-3.5 h-3.5" fill="#e0aba2" stroke="#b8695d" />
            <span>Cherished Memories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-[#3e3024] max-w-2xl mx-auto leading-snug">
            {content.section2.heading}
          </h2>
          <div className="w-24 h-0.5 bg-[#decebc] mx-auto mt-3 rounded-full" />
        </div>

        {/* Polaroid Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-12 items-start justify-center">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className={`group relative bg-white border border-[#e5d8c8] p-3 pb-6 rounded-xs shadow-scrapbook hover:shadow-scrapbook-lg hover:scale-102 transition-all duration-300 ${photo.rotation}`}
            >
              {/* Top Washi Tape or Paperclip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                {idx % 2 === 0 ? (
                  <WashiTape color={photo.tapeColor} rotate="rotate-1" width="w-20" />
                ) : (
                  <div className="relative -top-2">
                    <PaperClip className="w-5 h-10" />
                  </div>
                )}
              </div>

              {/* Photo Image Box */}
              <div className="relative w-full aspect-square bg-[#ebdccb] overflow-hidden rounded-xs border border-[#eae0d2]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[98%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Edit Photo Overlay button */}
                <button
                  type="button"
                  onClick={() => setActiveEditingPhoto(photo)}
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-xs text-xs flex items-center gap-1 cursor-pointer"
                  title="Change this photo or caption"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="text-[10px] pr-1">Replace</span>
                </button>
              </div>

              {/* Handwritten Caption */}
              <div className="mt-3 text-center px-1">
                <p className="font-handwriting text-base sm:text-lg text-[#4a392b] leading-tight min-h-[44px] flex items-center justify-center">
                  "{photo.caption}"
                </p>
                {photo.date && (
                  <span className="block text-[11px] font-sans text-[#a08a78] mt-1">
                    — {photo.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Accompanying Letter / Note for Section 2 */}
        <div className="max-w-2xl mx-auto relative bg-[#faf4ec] border border-[#dfceb9] p-6 sm:p-8 rounded-2xl shadow-scrapbook">
          <div className="absolute -top-3.5 right-12">
            <WashiTape color="bg-[#ebd5c1]/90" rotate="-rotate-2" width="w-24" />
          </div>
          <div className="absolute top-4 right-4">
            <VintageStamp text="THANK YOU" />
          </div>

          <p className="font-serif text-[#4d3c2e] text-base sm:text-lg leading-relaxed whitespace-pre-line pt-2">
            {content.section2.message}
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — WHAT I DID WRONG (NOTES)
          ======================================================== */}
      <section
        id="section-wrong"
        className="w-full max-w-5xl mx-auto px-4 py-20 relative"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#f4ebd9] rounded-full text-xs font-note uppercase tracking-wider text-[#8b725b] mb-2 border border-[#dfceb9]">
            Accountability & Honesty
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-[#3c2e22]">
            {content.section3.heading}
          </h2>
          <div className="w-24 h-0.5 bg-[#ddcebc] mx-auto mt-2 rounded-full" />
        </div>

        {/* Scrapbook Board with 6 Pinned Sticky Note Cards */}
        <div className="relative bg-[#f5ede2] border-2 border-[#d8c3ad] rounded-3xl p-6 sm:p-10 shadow-scrapbook-lg mb-10">
          <div className="absolute -top-3 left-8">
            <WashiTape color="bg-[#dfd1bd]/90" rotate="-rotate-2" width="w-28" />
          </div>
          <div className="absolute -top-3 right-8">
            <WashiTape color="bg-[#d5ded5]/90" rotate="rotate-2" width="w-28" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {content.section3.notes.map((note, index) => {
              // Varied note tilts and pastel sticky tones
              const noteStyles = [
                { bg: 'bg-[#fffdf2]', border: 'border-[#ebd99f]', pinColor: '#c86f62', rotate: '-rotate-1' },
                { bg: 'bg-[#fcf7ee]', border: 'border-[#e8d2be]', pinColor: '#7d8e6a', rotate: 'rotate-2' },
                { bg: 'bg-[#f8f5ee]', border: 'border-[#dad4be]', pinColor: '#c8865a', rotate: '-rotate-2' },
                { bg: 'bg-[#fbf4f0]', border: 'border-[#ebccbe]', pinColor: '#b46d62', rotate: 'rotate-1' },
                { bg: 'bg-[#f5f7f2]', border: 'border-[#cdd6c5]', pinColor: '#8a7768', rotate: '-rotate-1' },
                { bg: 'bg-[#fffbf0]', border: 'border-[#ead3a6]', pinColor: '#c86f62', rotate: 'rotate-2' },
              ];
              const style = noteStyles[index % noteStyles.length];

              return (
                <div
                  key={index}
                  className={`relative ${style.bg} border ${style.border} p-5 sm:p-6 rounded-xl shadow-scrapbook hover:scale-102 transition-transform duration-200 ${style.rotate}`}
                >
                  {/* Push pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <PushPin color={style.pinColor} />
                  </div>

                  <div className="pt-2">
                    <span className="inline-block text-[11px] font-sans font-bold text-[#98816c] mb-2 tracking-wider">
                      NOTE 0{index + 1}
                    </span>
                    <p className="font-handwriting text-lg sm:text-xl text-[#433325] leading-relaxed">
                      "{note}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Underneath the cards: sincere non-excuse reflection */}
          <div className="mt-10 pt-6 border-t border-[#dfcfbd] text-center max-w-xl mx-auto">
            <p className="font-serif italic text-base sm:text-lg text-[#5a483a] leading-relaxed">
              "{content.section3.footerNote}"
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — WHAT I WANT YOU TO KNOW (COLLAGE SCENE)
          ======================================================== */}
      <section id="section-know">
        <WindowCollage
          mainText={content.section4.mainText}
          subNote={content.section4.subNote}
          labels={content.section4.labels}
        />
      </section>

      {/* ========================================================
          SECTION 5 — MY APOLOGY LETTER
          ======================================================== */}
      <section
        id="section-letter"
        className="w-full max-w-3xl mx-auto px-4 py-20 relative"
      >
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-[#f4ebd9] rounded-full text-xs font-note uppercase tracking-wider text-[#8b725b] mb-2 border border-[#dfceb9]">
            Deeply Sincere
          </span>
          <h2 className="text-3xl sm:text-4xl font-handwriting font-bold text-[#3e3024]">
            {content.section5.letterTitle}
          </h2>
          <div className="w-20 h-0.5 bg-[#decebc] mx-auto mt-2 rounded-full" />
        </div>

        {/* Large Handwritten Scrapbook Letter (Tilted, Lined Paper) */}
        <div className="relative bg-[#fdfbf6] paper-lined border-2 border-[#decbb7] p-8 sm:p-12 md:p-16 rounded-2xl shadow-scrapbook-lg -rotate-0.5">
          {/* Taped corners */}
          <div className="absolute -top-3 -left-3">
            <WashiTape color="bg-[#ebd6c4]/90" rotate="-rotate-45" width="w-20" />
          </div>
          <div className="absolute -top-3 -right-3">
            <WashiTape color="bg-[#d7e2d6]/90" rotate="rotate-45" width="w-20" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <WashiTape color="bg-[#d7e2d6]/90" rotate="rotate-45" width="w-20" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <WashiTape color="bg-[#ebd6c4]/90" rotate="-rotate-45" width="w-20" />
          </div>

          {/* Ribbon Bow on top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <RibbonBow className="w-12 h-8" color="#d38b82" />
          </div>

          {/* Letter Header */}
          <div className="flex justify-between items-baseline border-b border-[#ebdcca] pb-3 mb-6">
            <h3 className="font-handwriting text-2xl sm:text-3xl text-[#443325] font-bold">
              {content.section5.letterGreeting}
            </h3>
            <span className="text-xs font-serif italic text-[#958170]">
              {content.section5.letterDate}
            </span>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-4 text-[#4a392b] font-serif text-base sm:text-lg leading-relaxed">
            {content.section5.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Letter Sign-off */}
          <div className="mt-8 pt-6 border-t border-[#ebdcca] flex flex-col items-end">
            <span className="font-serif italic text-[#786351] text-base">
              {content.section5.closing}
            </span>
            <span className="font-handwriting text-3xl sm:text-4xl text-[#3b2b1d] font-bold mt-1">
              {content.section5.signature}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — SMALL PROMISES
          ======================================================== */}
      <section
        id="section-promises"
        className="w-full max-w-4xl mx-auto px-4 py-16 relative"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#f4ebd9] rounded-full text-xs font-note uppercase tracking-wider text-[#8b725b] mb-2 border border-[#dfceb9]">
            Looking Forward
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-[#3e3024]">
            {content.section6.heading}
          </h2>
          <div className="w-20 h-0.5 bg-[#decebc] mx-auto mt-2 rounded-full" />
        </div>

        {/* Grid of Little Paper Tags with Strings / Tape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.section6.promises.map((promise, idx) => {
            const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={idx}
                className={`relative bg-[#fcf9f2] border border-[#dfcdb9] p-5 pt-8 rounded-xl shadow-scrapbook hover:scale-103 transition-transform duration-200 ${rot}`}
              >
                {/* Paper tag eyelet hole or washi tape */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#baa48f] bg-[#ede1d3] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fcf8f2]" />
                  </div>
                  <div className="w-0.5 h-3 bg-[#baa48f]" />
                </div>

                <p className="font-handwriting text-xl sm:text-2xl text-[#453426] text-center font-bold">
                  {promise}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SECTION 7 — FINAL SCREEN
          ======================================================== */}
      <section
        id="section-final"
        className="w-full max-w-xl mx-auto px-4 py-20 text-center relative"
      >
        <div className="relative bg-[#fffdfa] border-2 border-[#e6d6c2] rounded-3xl p-7 sm:p-10 shadow-scrapbook-lg">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="bg-[#ebd7c5]/90" rotate="rotate-1" width="w-28" />
          </div>

          <div className="my-4 flex justify-center">
            <CuteBears scene="side-by-side" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-handwriting font-bold text-[#3e3024] mb-4">
            {content.section7.heading}
          </h2>

          <p className="font-serif text-base sm:text-lg text-[#5a483a] leading-relaxed max-w-md mx-auto whitespace-pre-line mb-8">
            {content.section7.text}
          </p>

          {/* Final Heart Button & Animation */}
          <div className="relative inline-block">
            <button
              type="button"
              onClick={handleFinalHeartClick}
              id="final-heart-btn"
              className="w-16 h-16 rounded-full bg-[#f8ede4] hover:bg-[#f2e0d3] active:scale-95 text-2xl flex items-center justify-center border-2 border-[#dfc3b5] shadow-sm hover:shadow-md transition-all cursor-pointer mx-auto"
              title="A soft note of thanks"
            >
              {content.section7.heartButton}
            </button>

            {/* Floating pastel hearts */}
            {floatingHearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute bottom-12 pointer-events-none text-xl animate-heart-float"
                style={{
                  left: `${heart.left}%`,
                }}
              >
                🤍
              </div>
            ))}
          </div>

          {/* Reveal Message */}
          {hasClickedFinalHeart && (
            <div className="mt-6 p-4 bg-[#fbf5ed] border border-[#e2d2c0] rounded-xl animate-in fade-in zoom-in-95 duration-300">
              <p className="font-handwriting text-2xl font-bold text-[#4e3a2b]">
                {content.section7.thankYouMessage}
              </p>
              <p className="text-xs font-serif italic text-[#8c7664] mt-1">
                Take all the space and time you need.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Replacer Modal */}
      {activeEditingPhoto && (
        <PhotoEditorModal
          photo={activeEditingPhoto}
          onClose={() => setActiveEditingPhoto(null)}
          onSave={handleUpdatePhoto}
        />
      )}
    </div>
  );
}
