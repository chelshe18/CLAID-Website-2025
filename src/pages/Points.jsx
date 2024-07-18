import React from "react";

const CheckIn = () => {
  return (
    <div class="text-center pb-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Check in</h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="pointsEmail"
            name="email"
            className=" px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="pointsEventCode"
            name="eventCode"
            className=" px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Event code"
            required
          />
        </div>

        <button
          type="submit"
          className=" bg-[#D16F6F] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Check in
        </button>
      </form>
    </div>
  );
};

const CheckPoints = () => {
  return (
    <div class="text-center pb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Check your points!
      </h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="pointsEmail"
            name="email"
            className=" px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <button
          type="submit"
          className=" bg-[#D16F6F] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

const EventsAttended = () => {
  return (
    <div>
      <ul class="multi-column-list">
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
        <li>Event 1</li>
      </ul>
    </div>
  );
};
const PointsResults = () => {
  return (
    <div class="w-full flex bg-white p-8 rounded-lg shadow-md w-1/2 border">
      <div class="w-1/2 text-center">
        <CheckPoints />
        <h3 class="text-2xl mb-6 text-center">Points: 0</h3>
      </div>
      <div class="w-1/2">
        <h2 class="headers">Events attended:</h2>
        <EventsAttended />
      </div>
    </div>
  );
};
const Points = () => {
  return (
    <div>
      <CheckIn />
      {/* <PointsResults /> */}
    </div>
  );
};

export default Points;
