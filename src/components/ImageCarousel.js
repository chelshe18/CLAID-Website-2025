import React, { useState, useCallback } from "react";

const ImageCarousel = ({
  images = [],
  aspectRatio = "aspect-[4/3]",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const [popupImage, setPopupImage] = useState(null);

  const total = images.length;

  const go = useCallback(
    (direction) => {
      if (total === 0) return;
      setCurrentIndex((prev) => (prev + direction + total) % total);
    },
    [total],
  );

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const getRelativeIndex = (index) => {
    let diff = index - currentIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  const getSlideStyle = (relativeIndex) => {
    const abs = Math.abs(relativeIndex);

    if (abs > 2) {
      return {
        opacity: 0,
        transform: `translateX(${relativeIndex * 180}px) translateZ(-300px) scale(0.5)`,
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    const translateX = relativeIndex * 230;
    const rotateY = relativeIndex * -45;
    const scale = relativeIndex === 0 ? 1 : 0.72;
    const translateZ = relativeIndex === 0 ? 120 : -140;

    return {
      transform: `
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      opacity: relativeIndex === 0 ? 1 : 0.45,
      zIndex: relativeIndex === 0 ? 100 : 10 - abs,
      pointerEvents: "auto",
    };
  };

  return (
    <div className={`w-full ${className}`} data-testid="image-carousel">
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl bg-transparent`}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => {
            const relativeIndex = getRelativeIndex(index);
            const { src, alt = "Gallery image" } = image;

            return (
              <button
                key={src}
                type="button"
                onClick={() => {
                  if (index === currentIndex) {
                    setPopupImage(image);
                  } else {
                    goTo(index);
                  }
                }}
                aria-label={
                  index === currentIndex
                    ? `Open image ${index + 1}`
                    : `Go to image ${index + 1}`
                }
                className="absolute h-[72%] w-[58%] max-w-[650px] overflow-visible rounded-xl bg-transparent transition-all duration-700 ease-in-out"
                style={getSlideStyle(relativeIndex)}
              >
                {imgErrors[src] ? (
                  <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
                    Image unavailable
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={alt}
                    onError={() =>
                      setImgErrors((prev) => ({
                        ...prev,
                        [src]: true,
                      }))
                    }
                    className="h-full w-full object-contain bg-transparent"
                    data-testid={
                      index === currentIndex
                        ? "carousel-image"
                        : `carousel-image-${index}`
                    }
                  />
                )}
              </button>
            );
          })}
        </div>

        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              data-testid="carousel-prev"
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2
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
              className="absolute right-4 top-1/2 z-30 -translate-y-1/2
                         flex h-10 w-10 items-center justify-center
                         rounded-full bg-white/70 text-gray-800 shadow-sm
                         transition hover:bg-white focus-visible:outline
                         focus-visible:outline-2 focus-visible:outline-gray-800"
            >
              ›
            </button>
          </>
        )}

        {total > 1 && (
          <span className="absolute bottom-3 right-4 z-30 rounded-full bg-black/50 px-2.5 py-0.5 text-xs text-white">
            {currentIndex + 1} / {total}
          </span>
        )}
      </div>

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

      {popupImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded-xl bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPopupImage(null)}
              aria-label="Close image popup"
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-gray-800 shadow-md hover:bg-gray-100"
            >
              ×
            </button>

            <img
              src={popupImage.src}
              alt={popupImage.alt || "Gallery image"}
              className="max-h-[80vh] max-w-[85vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
