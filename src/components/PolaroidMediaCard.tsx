import React, { useState, useRef, useEffect } from 'react';
import { PolaroidPhoto } from '../content';
import { WashiTape, PaperClip } from './PaperElements';
import { Play, Pause, Volume2, VolumeX, Upload, Film, Image as ImageIcon, Maximize2, AlertCircle } from 'lucide-react';
import { MediaLightbox } from './MediaLightbox';

interface PolaroidMediaCardProps {
  key?: React.Key;
  photo: PolaroidPhoto;
  idx: number;
  onMediaChange?: (id: string, newUrl: string) => void;
}

export function PolaroidMediaCard({ photo, idx, onMediaChange }: PolaroidMediaCardProps) {
  const [mediaUrl, setMediaUrl] = useState<string>(() => {
    const saved = localStorage.getItem(`polaroid_media_${photo.id}`);
    if (saved && !saved.includes('/src/assets/images/')) {
      return saved;
    }
    return photo.url;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isVideo = Boolean(photo.isVideo) || mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.mov') || mediaUrl.endsWith('.webm');

  // Keep state in sync if prop changes
  useEffect(() => {
    setMediaUrl(photo.url);
    setVideoError(false);
  }, [photo.url]);

  // Handle local file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setMediaUrl(objectUrl);
    setVideoError(false);
    try {
      sessionStorage.setItem(`polaroid_media_${photo.id}`, objectUrl);
    } catch {
      // Ignore quota errors
    }
    if (onMediaChange) {
      onMediaChange(photo.id, objectUrl);
    }
    if (isVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div
        className={`group relative bg-white border border-[#e5d8c8] p-3.5 pb-6 rounded-xs shadow-scrapbook hover:shadow-scrapbook-lg hover:scale-101 transition-all duration-300 ${photo.rotation}`}
      >
        {/* Top Washi Tape or Paperclip */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          {idx % 2 === 0 ? (
            <WashiTape color={photo.tapeColor} rotate="rotate-1" width="w-20" />
          ) : (
            <div className="relative -top-2">
              <PaperClip className="w-5 h-10" />
            </div>
          )}
        </div>

        {/* Hidden file input for replacing or selecting exact user media */}
        <input
          ref={fileInputRef}
          type="file"
          accept={isVideo ? 'video/*' : 'image/*'}
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Media Box - aspect-[3/4] matches 640x853 portraits perfectly for full-quality edge-to-edge display */}
        <div className="relative w-full aspect-[3/4] bg-[#f5efe6] overflow-hidden rounded-xs border border-[#eae0d2] select-none flex items-center justify-center">
          {isVideo ? (
            <div className="relative w-full h-full bg-[#1b1511] flex items-center justify-center overflow-hidden">
              {/* Real HTML5 Video element */}
              <video
                ref={videoRef}
                src={mediaUrl}
                playsInline
                loop
                muted={isMuted}
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Video Error/Incomplete Prompt */}
              {videoError && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-[#251b14]/90 flex flex-col items-center justify-center p-4 text-center cursor-pointer z-10 text-white"
                >
                  <AlertCircle className="w-8 h-8 text-[#e3a89a] mb-2" />
                  <p className="font-handwriting text-lg text-[#f7ede2] mb-1">
                    Upload full video file
                  </p>
                  <p className="text-[11px] text-[#cfb7a3] mb-3 max-w-[180px] leading-tight">
                    The uploaded video was incomplete. Click to choose your original video file to play in HD.
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#966f53] hover:bg-[#855f45] text-white text-xs font-sans shadow-sm transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Choose HD Video</span>
                  </span>
                </div>
              )}

              {/* Vintage Film Badge */}
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-[#ebd8c5] text-[10px] font-note uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 z-10 pointer-events-none">
                <Film className="w-3 h-3 text-[#d39682]" />
                <span>Video</span>
              </div>

              {/* Expand to Fullscreen / Lightbox */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-xs z-10 cursor-pointer shadow-xs"
                title="View full resolution"
              >
                <Maximize2 className="w-3 h-3" />
              </button>

              {/* Video Controls Overlay */}
              {!videoError && (
                <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none">
                  <div />
                  {/* Play / Pause Center Icon when paused */}
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="pointer-events-auto self-center p-3.5 rounded-full bg-white/90 hover:bg-white text-[#4a392b] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      title="Play video"
                    >
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </button>
                  )}

                  {/* Bottom Control Bar */}
                  <div className="flex items-center justify-between pointer-events-auto bg-black/60 backdrop-blur-xs rounded-lg px-2.5 py-1 text-white text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-1 hover:text-[#e8cbb5] cursor-pointer"
                        title={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      </button>
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="p-1 hover:text-[#e8cbb5] cursor-pointer"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Upload or Select Video File */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[10px] flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                      title="Select / replace video file"
                    >
                      <Upload className="w-2.5 h-2.5" />
                      <span>Choose file</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full h-full flex items-center justify-center bg-[#f5efe6] cursor-zoom-in group/img"
            >
              <img
                src={mediaUrl}
                alt={photo.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Click to zoom indicator badge */}
              <div className="absolute top-2 left-2 opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-full backdrop-blur-xs shadow-xs">
                <Maximize2 className="w-3 h-3" />
              </div>

              {/* Quick Upload / Replace button on hover */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white px-2 py-1 rounded-full backdrop-blur-xs text-[10px] flex items-center gap-1 cursor-pointer shadow-sm"
                title="Select / replace photo"
              >
                <ImageIcon className="w-3 h-3" />
                <span>Change photo</span>
              </button>
            </div>
          )}
        </div>

        {/* Handwritten Caption */}
        <div className="mt-3.5 text-center px-1">
          <p className="font-handwriting text-base sm:text-lg text-[#4a392b] leading-tight min-h-[44px] flex items-center justify-center font-semibold">
            "{photo.caption}"
          </p>
          {photo.date && (
            <span className="block text-[11px] font-sans text-[#a08a78] mt-1">
              — {photo.date}
            </span>
          )}
        </div>
      </div>

      {/* Full-Resolution Lightbox Modal */}
      <MediaLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        mediaUrl={mediaUrl}
        caption={photo.caption}
        isVideo={isVideo}
      />
    </>
  );
}
