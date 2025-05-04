"use client";
import { useState } from 'react';

export const ImageLightbox = ({ images }: { images: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={src}
            className="cursor-pointer rounded-xl hover:opacity-80 mx-auto"
            src={src}
            loading="lazy"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
            alt={`Image ${index + 1}`}
          />
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
          <img 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            src={images[currentIndex]}
            alt={`Fullscreen view`}
          />
          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};