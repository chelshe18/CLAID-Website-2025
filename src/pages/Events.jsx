import React from "react";

const Events = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="headers text-5xl mb-4">Upcoming Events</h1>
        <p className="headers opacity-80">
          Stay up to date with our latest social, cultural, tutoring, and
          performance events!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-5xl shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=b18136dfddf1bf899b8707499e4ec9316884a0c6685de304fec88e9aa4bc1415%40group.calendar.google.com&ctz=America%2FChicago"
            className="w-full h-[700px] border-0"
            frameBorder="0"
            scrolling="no"
            title="CLAID Google Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events;
