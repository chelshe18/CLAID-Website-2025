import React, { useState } from "react";

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../assets/events", false, /\.(png|jpe?g|webp)$/),
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
          {/* Header */}
          <h1 className="headers text-4xl md:text-5xl mb-6">Events</h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            CLAID Events Branch plans and hosts our social, cultural, and
            community-building events throughout the year. Anywhere from
            large-scale celebrations to casual study socials, our goal is to
            create welcoming spaces where members can connect, celebrate and
            learn Chinese culture, and have fun!
          </p>

          {/* =============================
              Upcoming Events Calendar
          ============================== */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>

            {/* Embedded Google Calendar */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=b18136dfddf1bf899b8707499e4ec9316884a0c6685de304fec88e9aa4bc1415%40group.calendar.google.com&ctz=America%2FChicago"
                className="w-full h-[700px] border-0"
                frameBorder="0"
                scrolling="no"
                title="CLAID Google Calendar"
              ></iframe>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Stay updated with all upcoming CLAID social events,
              collaborations, and community activities.
            </p>
          </div>

          {/* =============================
              Event Gallery
          ============================== */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Event Highlights
            </h3>

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl aspect-[4/3] bg-black">
              <img
                src={images[currentImageIndex]}
                alt="Events gallery"
                className="w-full h-full object-contain bg-black transition-opacity duration-500"
              />

              {/* Left */}
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

              {/* Right */}
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

export default Events;
