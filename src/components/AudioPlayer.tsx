import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Settings, Sparkles } from 'lucide-react';

interface AudioPlayerProps {
  customAudioUrl?: string;
  trackName?: string;
}

export function AudioPlayer({ customAudioUrl, trackName = 'Background Music' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isSynthesizer, setIsSynthesizer] = useState(!customAudioUrl);
  const [showSettings, setShowSettings] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>(customAudioUrl || '');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
  const melodyPattern = [0, 2, 4, 3, 2, 1, 0, 4, 2, 5, 4, 2, 3, 1, 0];
  const patternIndexRef = useRef(0);

  useEffect(() => {
    setAudioSrc(customAudioUrl || '');
    setIsSynthesizer(!customAudioUrl);
  }, [customAudioUrl]);

  const playMusicBoxNote = (freq: number) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(1, now);
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);

      const baseGain = volume * 0.28;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(baseGain, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.3);
      osc2.stop(now + 2.3);
    } catch {
      // Audio context might be restricted before user gesture.
    }
  };

  const startMusicBox = () => {
    if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    const firstFreq = notes[melodyPattern[patternIndexRef.current]];
    playMusicBoxNote(firstFreq);
    patternIndexRef.current = (patternIndexRef.current + 1) % melodyPattern.length;

    synthIntervalRef.current = window.setInterval(() => {
      const freq = notes[melodyPattern[patternIndexRef.current]];
      playMusicBoxNote(freq);
      if (Math.random() > 0.6) {
        setTimeout(() => playMusicBoxNote(notes[(patternIndexRef.current + 2) % notes.length]), 180);
      }
      patternIndexRef.current = (patternIndexRef.current + 1) % melodyPattern.length;
    }, 1100);
  };

  const stopMusicBox = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !isSynthesizer) audioRef.current.pause();
      stopMusicBox();
      setIsPlaying(false);
      return;
    }

    if (audioSrc && !isSynthesizer && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setIsSynthesizer(true);
        startMusicBox();
        setIsPlaying(true);
      });
      return;
    }

    setIsSynthesizer(true);
    startMusicBox();
    setIsPlaying(true);
  };

  useEffect(() => {
    return () => {
      stopMusicBox();
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setAudioSrc(objectUrl);
    setIsSynthesizer(false);
    if (isPlaying) {
      stopMusicBox();
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume;
          audioRef.current.play();
        }
      }, 100);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 select-none">
      <div className="flex items-center gap-1.5 bg-[#fcf8f2]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e8dac7] shadow-scrapbook">
        <button
          type="button"
          onClick={toggleMusic}
          id="music-toggle-btn"
          aria-label={isPlaying ? `Pause ${trackName}` : `Play ${trackName}`}
          className="flex items-center gap-2 text-xs font-sans font-medium text-[#6b5847] hover:text-[#45372b] transition-colors py-1 cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#f4ebe1] text-[#937b67]">
            {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#b56e60] animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
          </div>
          <span className="text-[13px] font-note tracking-wide text-[#705b4a]">
            {isPlaying ? `${trackName}: On` : 'Music: Off'}
          </span>
          {isPlaying && (
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#de9b8e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b66d60]"></span>
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Audio settings"
          className="p-1 text-[#a5917e] hover:text-[#5e4b3c] rounded-full hover:bg-[#f0e4d5] transition-colors cursor-pointer"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>

      {audioSrc && <audio ref={audioRef} src={audioSrc} loop onEnded={() => setIsPlaying(false)} />}

      {showSettings && (
        <div className="absolute top-12 right-0 w-72 p-4 bg-[#fbf7f0] border border-[#d6c7b2] rounded-xl shadow-scrapbook-lg text-[#554536] text-xs font-sans animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e8ddce]">
            <div className="flex items-center gap-1.5 font-bold font-note text-sm text-[#4e3e31]">
              <Music className="w-4 h-4 text-[#b66d60]" />
              <span>{trackName}</span>
            </div>
            <button onClick={() => setShowSettings(false)} className="text-[#968270] hover:text-[#4e3e31] text-sm leading-none">✕</button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[11px] mb-1 text-[#786655]">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (audioRef.current) audioRef.current.volume = val;
                }}
                className="w-full accent-[#b66d60] h-1.5 bg-[#ebdcc9] rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-[#eee2d4]">
              <p className="text-[11px] text-[#7d6957] mb-2 leading-relaxed">
                {audioSrc && !isSynthesizer ? `${trackName} is the default background song.` : 'Using the fallback gentle music-box melody.'}
              </p>
              <label className="block text-[11px] font-semibold text-[#544436] mb-1">Choose another song:</label>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="block w-full text-[11px] text-[#6d5a49] file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[11px] file:bg-[#ecdccb] file:text-[#524132] hover:file:bg-[#decaba] cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-1 text-[10px] text-[#937e6d] pt-1">
              <Sparkles className="w-3 h-3 text-[#c8985c]" />
              <span>Music remains off until you tap to play.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
