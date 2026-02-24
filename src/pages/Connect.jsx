import React, { useState } from "react";

const MyForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact us here</h2>
      <form method="post" action="https://formspree.io/f/mqkonnbr">
        <div className="mb-4">
          <input
            type="text"
            id="formName"
            name="name"
            className=" px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="formEmail"
            name="email"
            className=" px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            type="text"
            id="formMessage"
            name="message"
            className="w-3/4 aspect-[2/1] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-1/2 bg-[#D16F6F] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
const Connect = () => {
  const [wechatHover, setWechatHover] = useState(false);
  const [newsHover, setNewsHover] = useState(false);

  const onHover = () => {
    setWechatHover(true);
  };
  const onLeave = () => {
    setWechatHover(false);
  };
  const onHover2 = () => {
    setNewsHover(true);
  };
  const onLeave2 = () => {
    setNewsHover(false);
  };

  return (
    <div class="flex w-full">
      <MyForm />
      <div className="p-8 w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center pb-20">
          Or join us here!
        </h2>
        <div class="w-full flex justify-center pb-16">
          <a
            href="https://www.instagram.com/claiduiuc/"
            class="w-1/3"
            target="_blank"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/insta.gif`}
              class="aspect-auto cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
              href="https://www.instagram.com/claiduiuc/"
            />
          </a>

          <div class="w-1/3 my-auto">
            <a href="https://discord.gg/zZbdTnfArs" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/discord2.gif`}
                class="w-[90px] aspect-auto mx-auto cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
              />
            </a>
          </div>

          <div class="relative w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/wechat.gif`}
              class="aspect-auto cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            />
            {wechatHover && (
              <span className="absolute top-0 right-0 m-2 p-2 bg-black text-white text-sm">
                Wechat ID: Claiduiuc
              </span>
            )}
          </div>
        </div>
        {/* next line of stuff*/}
        <div class="w-full flex justify-center">
          <a
            href="https://facebook.us14.list-manage.com/subscribe?u=ba9933f02b165786f46a3d3f6&id=e3e1a85a96"
            class="w-1/2 flex justify-center items-center relative"
            target="_blank"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/newsletter.gif`}
              class="w-1/3 aspect-auto cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
              onMouseEnter={onHover2}
              onMouseLeave={onLeave2}
            />
            {newsHover && (
              <span className="absolute bottom-0 right-0 m-2 p-2 bg-black text-white text-sm">
                Join our newsletter!
              </span>
            )}
          </a>

          <div class="w-1/2 my-auto mx-auto">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=OGVmZWJkMDI5OWM1MjE5YWM3MjQxZDE3MzNlYjU2NmMwMTg3MmQzMzBiZmU0MTc0NGY0NjQ3ZWNmODEwYmEwZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/calendar.gif`}
                class="w-1/3 aspect-auto mx-auto cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
