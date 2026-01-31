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
            <div className="text-center lg:text-left">
              <h1 className="maintext text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
                CLAID @ UIUC
              </h1>

              <p className="maintext text-xl md:text-2xl leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0 mb-4">
                Building connections between students who share a passion for
                Chinese language and culture since 2015.
              </p>

              <p className="maintext text-lg opacity-80 mb-10">
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
                  className="no-underline px-7 py-3 bg-[#D66A6A] text-white font-semibold rounded-xl shadow hover:brightness-110 active:scale-95 transition"
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
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headers text-3xl md:text-4xl font-bold">
              What's CLAID all about?
            </h2>
            <div className="h-1 w-20 bg-[#D66A6A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="chat shadow-2xl rounded-3xl p-8 bg-white border border-gray-50 space-y-4">
            <div data-time="16:35" className="msg sent">
              What even is CLAID?
            </div>

            <div data-time="16:36" className="msg rcvd">
              We're a Chinese student org known for our dance showcase, food
              events, and cultural celebrations!
            </div>

            <div data-time="16:37" className="msg sent">
              Ok, but how is that different from every other org?
            </div>

            <div data-time="16:37" className="msg rcvd">
              You'll see at our events that we're REALLY focused on quality and
              genuine connections with attendees.
            </div>

            <div data-time="16:38" className="msg rcvd">
              We're really quality of events &gt; quantity :)
            </div>

            <div data-time="16:38" className="msg sent">
              Wow! I've always been hesitant to participate since I'm not
              Chinese. Is that okay? :')
            </div>

            <div data-time="16:38" className="msg rcvd">
              Of course! Our events are absolutely for everybody and are
              designed for that purpose! Everybody learns together
            </div>

            <div data-time="16:40" className="msg sent">
              Great! How can I learn more? 😍
            </div>

            <div data-time="16:41" className="msg rcvd">
              You're on the right website 😉
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
