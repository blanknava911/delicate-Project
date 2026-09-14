import React, { useEffect } from 'react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

interface MediaLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl: string;
  caption: string;
  isVideo?: boolean;
}

export function MediaLightbox({
  isOpen,
  onClose,
  mediaUrl,
  caption,
  isVideo,
}: MediaLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#fdfbf7] border-2 border-[#d9c7b0] rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 rounded-full bg-[#ebdccb] hover:bg-[#dfcdb9] text-[#4a392b] transition-colors cursor-pointer z-20 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-[#201812]/5 max-h-[72vh]">
          {isVideo ? (
            <video
              src={mediaUrl}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-md"
            />
          ) : (
            <img
              src={mediaUrl}
              alt={caption}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-md image-render-crisp"
            />
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="font-handwriting text-xl sm:text-2xl text-[#3e2e21] font-bold">
            "{caption}"
          </p>
          <span className="text-xs font-sans text-[#8f7762] mt-1 block">
            Original Full-Resolution View
          </span>
        </div>
      </div>
    </div>
  );
}
