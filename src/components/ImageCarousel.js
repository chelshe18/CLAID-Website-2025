import React, { useState, useCallback } from "react";

const ImageCarousel = ({
  images = [],
  aspectRatio = "aspect-[4/3]",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const total = images.length;

  const go = useCallback(
    (direction) => {
      setImgError(false);
      setCurrentIndex((prev) => (prev + direction + total) % total);
    },
    [total],
  );

  const goTo = useCallback((index) => {
    setImgError(false);
    setCurrentIndex(index);
  }, []);

  if (total === 0) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-gray-100 text-gray-400 text-sm ${aspectRatio} ${className}`}
        role="img"
        aria-label="No images available"
      >
        No images available
      </div>
    );
  }

  const { src, alt = "Gallery image" } = images[currentIndex];

  return (
    <div className={`w-full ${className}`} data-testid="image-carousel">
      {/* Main image frame */}
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl bg-black`}
      >
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            Image unavailable
          </div>
        ) : (
          <img
            key={src}
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className="h-full w-full object-contain bg-black transition-opacity duration-500"
            data-testid="carousel-image"
          />
        )}

        {/* Arrows — only shown when there are multiple images */}
        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              data-testid="carousel-prev"
              className="absolute left-4 top-1/2 -translate-y-1/2
                         flex h-10 w-10 items-center justify-center
                         rounded-full bg-white/70 text-gray-800 shadow-sm
                         transition hover:bg-white focus-visible:outline
                         focus-visible:outline-2 focus-visible:outline-gray-800"
            >
              ‹
            </button>

            <button
              onClick={() => go(1)}
              aria-label="Next image"
              data-testid="carousel-next"
              className="absolute right-4 top-1/2 -translate-y-1/2
                         flex h-10 w-10 items-center justify-center
                         rounded-full bg-white/70 text-gray-800 shadow-sm
                         transition hover:bg-white focus-visible:outline
                         focus-visible:outline-2 focus-visible:outline-gray-800"
            >
              ›
            </button>
          </>
        )}

        {/* Counter badge */}
        {total > 1 && (
          <span className="absolute bottom-3 right-4 rounded-full bg-black/50 px-2.5 py-0.5 text-xs text-white">
            {currentIndex + 1} / {total}
          </span>
        )}
      </div>

      {/* Dot navigation */}
      {total > 1 && (
        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Image navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to image ${index + 1}`}
              onClick={() => goTo(index)}
              data-testid={`carousel-dot-${index}`}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-gray-800"
                  : "w-2.5 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
