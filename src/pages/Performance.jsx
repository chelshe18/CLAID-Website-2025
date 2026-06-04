import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import showTrailer from "../assets/performance/CLAID 2026 Show Trailer.mp4";

function loadPerformanceImages() {
  try {
    const r = require.context(
      "../assets/performance",
      false,
      /\.(png|jpe?g|webp)$/,
    );
    return r
      .keys()
      .map((key) => ({ src: r(key), alt: "CLAID performance photo" }));
  } catch {
    return [];
  }
}

const performanceImages = loadPerformanceImages();

const Performance = () => {
  return (
    <main className="bg-white">
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
            <div className="mt-6">
              <video
                className="w-full rounded-xl shadow"
                controls
                preload="metadata"
              >
                <source src={showTrailer} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Performance Carousel */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Photo Gallery
            </h3>

            <ImageCarousel images={performanceImages} />
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
            />

            <iframe
              className="w-full aspect-video rounded-2xl shadow"
              src="https://www.youtube.com/embed/ssVo2egznF0?si=pXXalXJw4M4hG3tw"
              title="Past Showcase Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <iframe
              className="w-full aspect-video rounded-2xl shadow"
              src="https://www.youtube.com/embed/HEvq_-4zpLI?si=_a_ULlzgi-83r42x"
              title="Past Showcase Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Performance;
