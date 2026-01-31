import React, { useState } from "react";
import "../styles/carousel.css";

const Performance = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/performance/cpop.png",
    "/images/performance/show2.png",
    "/images/performance/wushu.png",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <main className="bg-white">
      {/* Hero / Intro */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="headers text-4xl md:text-5xl mb-6">Performance</h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            CLAID Performance Branch aims to spread Chinese culture through
            performance by hosting our annual Chinese New Year Showcase and by
            performing in various other cultural festivals throughout the year.
            The performance branch creates a community for those who are
            passionate about dance, giving members the opportunity to learn and
            perform various Chinese dances including C-pop, Flags, Fan,
            Longsleeves, and Glowsticks.
          </p>

          {/* Upcoming Event Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">
              Chinese New Year Showcase
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
              <p>
                <span className="font-medium">Date:</span> February 28, 2026
              </p>
              <p>
                <span className="font-medium">Time:</span> 7:00 PM – 9:00 PM
              </p>
              <p>
                <span className="font-medium">Location:</span> Lincoln Hall
                Auditorium
              </p>
            </div>
            <p className="mt-4 text-gray-700">[Insert show trailer]</p>
          </div>

          {/* Performance Carousel */}
          <div className="mb-16 px-4">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Photo Gallery
            </h3>
            <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 h-96 overflow-hidden rounded-3xl shadow-2xl">
              <button
                onClick={prevImage}
                className="absolute left-0 z-10 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full p-4 ml-4 transition-all duration-300 hover:scale-120 active:scale-95 shadow-lg hover:shadow-red-600/50 backdrop-blur-md"
                aria-label="Previous image"
              >
                ❮
              </button>

              <div className="w-full max-w-4xl h-full flex items-center justify-center px-20">
                <img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Performance gallery"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl carousel-fade-in"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-0 z-10 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full p-4 mr-4 transition-all duration-300 hover:scale-120 active:scale-95 shadow-lg hover:shadow-red-600/50 backdrop-blur-md"
                aria-label="Next image"
              >
                ❯
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                    index === currentImageIndex
                      ? "bg-gradient-to-r from-red-600 to-red-500 w-10 h-3 shadow-lg shadow-red-600/50"
                      : "bg-gray-500/40 hover:bg-gray-500/60 w-3 h-3"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Past Showcases */}
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Past Showcases
          </h3>

          <div className="flex flex-col gap-10">
            <iframe
              className="w-full aspect-video rounded-2xl shadow"
              src="https://www.youtube.com/embed/qIGDW_m1g_I?si=rdx6bMnbasXBHUBq"
              title="Past Showcase Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full aspect-video rounded-2xl shadow"
              src="https://www.youtube.com/embed/ssVo2egznF0?si=pXXalXJw4M4hG3tw"
              title="Past Showcase Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full aspect-video rounded-2xl shadow"
              src="https://www.youtube.com/embed/HEvq_-4zpLI?si=_a_ULlzgi-83r42x"
              title="Past Showcase Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Performance;
