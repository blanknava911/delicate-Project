/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { ScrapbookSections } from './components/ScrapbookSections';
import { AudioPlayer } from './components/AudioPlayer';
import { scrapbookContent } from './content';
import { BookOpen, ArrowUp, Heart } from 'lucide-react';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcf8f2] text-[#4a3f35] font-sans selection:bg-[#eddcd2] selection:text-[#5e4b3c] relative overflow-x-hidden">
      {/* Background Audio Player (Music is OFF by default) */}
      <AudioPlayer
        customAudioUrl={`${import.meta.env.BASE_URL}media/One%20Kiss.mp3`}
        trackName="One Kiss"
      />

      {!hasEntered ? (
        <StartScreen
          headline={scrapbookContent.startScreen.headline}
          subheadline={scrapbookContent.startScreen.subheadline}
          yesText={scrapbookContent.startScreen.yesButtonText}
          notYetText={scrapbookContent.startScreen.notYetButtonText}
          gentleMessage={scrapbookContent.startScreen.notYetGentleMessage}
          onEnter={() => {
            setHasEntered(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <div className="relative animate-in fade-in duration-500">
          {/* Subtle Top Bar */}
          <header className="sticky top-0 z-40 bg-[#fcf8f2]/90 backdrop-blur-md border-b border-[#ebdccb] px-4 py-2.5">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <button
                type="button"
                onClick={() => setHasEntered(false)}
                className="flex items-center gap-2 text-xs font-note text-[#806c5b] hover:text-[#4a3a2d] transition-colors py-1 px-2.5 rounded-full hover:bg-[#f3e7da] cursor-pointer"
                title="Return to cover card"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#b66d60]" />
                <span>Cover Card</span>
              </button>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-serif italic text-[#958170]">
                <Heart className="w-3 h-3 text-[#d68c85] fill-current" />
                <span>A digital scrapbook made with care</span>
              </div>

              <div className="w-28 sm:w-32" />
            </div>
          </header>

          <main>
            <ScrapbookSections content={scrapbookContent} />
          </main>

          <div className="fixed bottom-6 right-6 z-30">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-3 bg-[#faf4ec] hover:bg-[#f3e6d8] active:scale-95 text-[#6c5746] rounded-full shadow-scrapbook border border-[#d8c5b0] transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
