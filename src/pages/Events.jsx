import React from "react";
import ImageCarousel from "../components/ImageCarousel";

// To add/remove images, edit this array.
function loadEventImages() {
  try {
    const r = require.context("../assets/events", false, /\.(png|jpe?g|webp)$/);
    return r.keys().map((key) => ({ src: r(key), alt: "CLAID event photo" }));
  } catch {
    // Falls back gracefully in test environments
    return [];
  }
}

const eventImages = loadEventImages();

const Events = () => {
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

            <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=b18136dfddf1bf899b8707499e4ec9316884a0c6685de304fec88e9aa4bc1415%40group.calendar.google.com&ctz=America%2FChicago"
                className="w-full h-[700px] border-0"
                frameBorder="0"
                scrolling="no"
                title="CLAID Google Calendar"
              />
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

            <ImageCarousel images={eventImages} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
