import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Home = () => {
  return (
    <main className="bg-white">
      {/* ================= HERO BANNER ================= */}
      <section className="bg-gradient-to-b from-[#FFF5F5] to-white">
        <div className="container mx-auto px-6 min-h-[70vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Text */}
            <div className="text-left">
              <h1 className="maintext text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
                CLAID @ UIUC
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-4">
                Building connections between students who share a passion for
                Chinese language and culture since 2015.
              </p>

              <p className="text-gray-600 mb-10">
                We welcome everybody of all majors, cultures, and interests!
              </p>

              {/* Contact */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-md">
                <span className="contacttext text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="opacity-75">claiduiuc@gmail.com</span>
                </span>

                <Link
                  to="/connect"
                  className="uppercase tracking-wide no-underline px-7 py-3 bg-[#D66A6A] text-white font-semibold rounded-xl shadow hover:brightness-110 active:scale-95 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={logo}
                alt="CLAID Logo"
                className="w-full max-w-[340px] xl:max-w-[420px] h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / CHAT ================= */}
      <section className="py-24 bg-white">
        <div className="text-center mb-12">
          <h2 className="headers text-3xl md:text-4xl font-bold">
            What's CLAID all about?
          </h2>
          <div className="h-1 w-20 bg-[#D66A6A] mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-600">
            Explore our three branches — click a card to learn more.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            <Link
              to="/events"
              className="group w-full max-w-sm rounded-3xl overflow-hidden
             bg-white border border-gray-100
             shadow-md hover:shadow-2xl
             transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/events/lantern2.jpg"
                  alt="Events"
                  className="w-full h-full object-cover
                 transition-transform duration-500
                 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Events
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Bringing the community together through cultural celebrations
                  and fun socials.
                </p>

                <span
                  className="inline-block text-sm font-semibold text-[#D66A6A]
                     group-hover:tracking-wide transition-all"
                >
                  Learn more →
                </span>
              </div>
            </Link>
            <Link
              to="/performance"
              className="group w-full max-w-sm rounded-3xl overflow-hidden
             bg-white border border-gray-100
             shadow-md hover:shadow-2xl
             transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/performance/show2.png"
                  alt="Performance"
                  className="w-full h-full object-cover
                 transition-transform duration-500
                 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Performance
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Showcasing Chinese culture through dance, creativity, and
                  performances throughout the year.
                </p>

                <span
                  className="inline-block text-sm font-semibold text-[#D66A6A]
                     group-hover:tracking-wide transition-all"
                >
                  Learn more →
                </span>
              </div>
            </Link>
            <Link
              to="/tutoring"
              className="group w-full max-w-sm rounded-3xl overflow-hidden
             bg-white border border-gray-100
             shadow-md hover:shadow-2xl
             transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/tutoring/chinese corner.png"
                  alt="Tutoring"
                  className="w-full h-full object-cover
                 transition-transform duration-500
                 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Tutoring
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Promoting language learning and cultural exchange through
                  tutoring and Chinese Corner.
                </p>

                <span
                  className="inline-block text-sm font-semibold text-[#D66A6A]
                     group-hover:tracking-wide transition-all"
                >
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
