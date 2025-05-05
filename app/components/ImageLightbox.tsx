"use client";
import { useState } from 'react';

export const ImageLightbox = ({ images, videos }: { images: string[], videos: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const allMedia = [...images, ...videos];

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {allMedia.map((src, index) => (
          <div key={src} className="relative group">
            {src.match(/\.(mp4|webm|mov)$/i) ? (
              <video 
                className="cursor-pointer rounded-xl mx-auto max-h-full object-cover"
                autoPlay loop
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              >
                <source src={src} type={`video/${src.split('.').pop()}`} />
              </video>
            ) : (
              <img
                className="cursor-pointer rounded-lg mx-auto max-h-full object-cover"
                src={src}
                loading="lazy"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                alt={`Media ${index + 1}`}
              />
            )}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
              {src.match(/\.(mp4|webm|mov)$/i) ? 'VIDEO' : 'IMAGE'}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-80"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          
          {allMedia[currentIndex].match(/\.(mp4|webm|mov)$/i) ? (
            <video 
              className="max-h-[90vh] max-w-[90vw]"
              controls
              autoPlay
              loop
            >
              <source 
                src={allMedia[currentIndex]} 
                type={`video/${allMedia[currentIndex].split('.').pop()}`} 
              />
            </video>
          ) : (
            <img 
              className="max-h-[90vh] max-w-[90vw] object-contain"
              src={allMedia[currentIndex]}
              alt={`Fullscreen view`}
            />
          )}
          
          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {allMedia.length}
          </div>
        </div>
      )}
    </>
  );
};