import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Check, X, Sparkles } from 'lucide-react';
import { PolaroidPhoto } from '../content';

interface PhotoEditorModalProps {
  photo: PolaroidPhoto | null;
  onClose: () => void;
  onSave: (photoId: string, newUrl: string, newCaption: string) => void;
}

export function PhotoEditorModal({ photo, onClose, onSave }: PhotoEditorModalProps) {
  if (!photo) return null;

  const [url, setUrl] = useState(photo.url);
  const [caption, setCaption] = useState(photo.caption);
  const [previewError, setPreviewError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUrl(event.target.result as string);
          setPreviewError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(photo.id, url, caption);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#faf5ec] border-2 border-[#d5c3af] rounded-2xl p-6 shadow-scrapbook-lg text-[#4a3b2e]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#8b7664] hover:text-[#3d2f23] rounded-full hover:bg-[#ede0d0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#e2d5c3]">
          <Camera className="w-5 h-5 text-[#b66d60]" />
          <h3 className="text-lg font-note font-bold text-[#453426]">Edit Polaroid Memory</h3>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Photo Preview */}
          <div className="flex justify-center">
            <div className="w-44 bg-white p-2.5 pb-6 rounded shadow-sm border border-[#e4d7c7] text-center rotate-1">
              <div className="w-full h-32 bg-[#eee5d8] rounded overflow-hidden flex items-center justify-center">
                {url && !previewError ? (
                  <img
                    src={url}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    onError={() => setPreviewError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#98826e] flex flex-col items-center text-xs">
                    <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                    <span>No image preview</span>
                  </div>
                )}
              </div>
              <p className="mt-2 font-handwriting text-sm text-[#4c3b2d] truncate">
                {caption || 'Your caption here'}
              </p>
            </div>
          </div>

          {/* Upload from device */}
          <div>
            <label className="block text-xs font-semibold text-[#5e4b3c] mb-1">
              Upload from your device:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-xs text-[#6e5a48] file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#ebdccb] file:text-[#453527] hover:file:bg-[#decaba] cursor-pointer"
            />
          </div>

          {/* Or enter Image URL */}
          <div>
            <label className="block text-xs font-semibold text-[#5e4b3c] mb-1">
              Or paste an Image URL:
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setPreviewError(false);
              }}
              placeholder="https://..."
              className="w-full px-3 py-1.5 text-xs bg-white border border-[#d6c7b3] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b66d60]"
            />
          </div>

          {/* Caption text */}
          <div>
            <label className="block text-xs font-semibold text-[#5e4b3c] mb-1">
              Polaroid Caption:
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. One of my favourite moments."
              className="w-full px-3 py-1.5 text-sm font-handwriting bg-white border border-[#d6c7b3] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b66d60]"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e5d8c7]">
            <span className="text-[10px] text-[#8e7b69] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#b66d60]" />
              Saves instantly to this session
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-medium text-[#715d4d] hover:bg-[#ebdccb] rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-medium text-white bg-[#8f6d53] hover:bg-[#795941] rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                Apply Photo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
