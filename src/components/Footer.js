import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D66A6A] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold">CLAID</h3>
          <p className="mt-2 text-sm text-white/90">
            Chinese Language Association for International Development
          </p>
        </div>

        <div className="md:w-1/3">
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="/"
                className="text-white/90 underline decoration-transparent hover:decoration-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white/90 underline decoration-transparent hover:decoration-white hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-white/90 underline decoration-transparent hover:decoration-white hover:text-white"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/performance"
                className="text-white/90 underline decoration-transparent hover:decoration-white hover:text-white"
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="/tutoring"
                className="text-white/90 underline decoration-transparent hover:decoration-white hover:text-white"
              >
                Tutoring
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h4 className="font-medium mb-2 text-white/95">Contact</h4>
          <p className="text-sm text-white/90">claiduiuc@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90">2026 CLAID.</p>
          <div className="mt-3 md:mt-0 text-white/80">
            <a href="/connect" className="underline">
              Connect
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
