import React, { useState } from "react";

const Tutoring = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../assets/tutoring", false, /\.(png|jpe?g|webp)$/),
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="bg-white">
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Hero / Intro */}
          <h1 className="headers text-4xl md:text-5xl mb-6">Tutoring</h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            CLAID Tutoring Branch runs two main tutoring programs: Chinese
            Corner and the one-on-one tutoring program, aimed at helping
            students improve their Mandarin Chinese skills. In addition , to
            foster a broader environment for cultural exchange, the tutoring
            branch organizes social events and cultural celebrations in
            collaboration with other student associations on campus.
          </p>

          {/* =============================
              Chinese Corner Section
          ============================== */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Chinese Corner</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
              <p>
                <span className="font-medium">When:</span> Every Thursday
              </p>

              <p>
                <span className="font-medium">Time:</span> 7:00 PM – 8:30 PM
              </p>

              <p>
                <span className="font-medium">Location:</span> Illini Union
                Basement
              </p>
            </div>

            <div className="mt-6 text-gray-700 leading-relaxed">
              <p className="mb-4">
                Chinese Corner is a weekly language and cultural exchange event
                open to everyone interested in learning or practicing Mandarin
                Chinese. During these sessions, tutors lead discussions in three
                groups: beginner, intermediate, and advanced-level speakers.
                Chinese Corner serves as a space for both cultural exchange and
                language learning, it’s fun and social.
              </p>

              <p>
                Whether you are a beginner or fluent speaker, Chinese Corner
                provides a welcoming space to meet new friends and practice
                language skills.
              </p>
            </div>
          </div>

          {/* =============================
              Tutoring Gallery
          ============================== */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Photo Album
            </h3>

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl aspect-[4/3] bg-black">
              <img
                src={images[currentImageIndex]}
                alt="Tutoring gallery"
                className="w-full h-full object-contain bg-black transition-opacity duration-500"
              />

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2
                bg-white/70 hover:bg-white
                text-gray-800
                w-10 h-10 rounded-full
                flex items-center justify-center
                shadow-sm transition"
              >
                ‹
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2
                bg-white/70 hover:bg-white
                text-gray-800
                w-10 h-10 rounded-full
                flex items-center justify-center
                shadow-sm transition"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-6 bg-gray-800"
                      : "w-2.5 bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tutoring;
