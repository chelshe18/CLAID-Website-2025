import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ float: "left" }}>
          <h1 class="maintext">CLAID @ UIUC</h1>
          <p class="maintext">
            Building connections between students who share a passion for
            Chinese language and culture since 2015
          </p>
          <p class="maintext">
            We welcome everybody of all majors, cultures, and interests!
          </p>
          <br></br>
          <div class="contactbox">
            <p class="contacttext">
              <b>Email:</b> claiduiuc@gmail.com
              <Link to="/connect" className="contactbutton">
                CONTACT
              </Link>
            </p>
          </div>
        </div>

        <div style={{ float: "right" }}>
          <img src={logo} class="mainimg" alt="claid logo" />
        </div>
      </div>
      <div class="w-full pl-4 flex">
        <div class="w-1/2 text-center">
          <h2 class="headers">Upcoming Events</h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8efebd0299c5219ac7241d1733eb566c01872d330bfe41744f4647ecf810ba0f%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            class="border-0 w-[800px] h-[600px] mx-auto "
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div class="w-1/2 pr-4">
          <div class="chat">
            <div data-time="16:35" class="msg sent pb-8">
              What even is CLAID?
            </div>
            <div data-time="16:36" class="msg rcvd">
              We're a Chinese student org known for our dance showcase, food
              events, and cultural celebrations!
            </div>
            <div data-time="16:37" class="msg sent pb-8">
              Ok, but how is that different from every other org?
            </div>
            <div data-time="16:37" class="msg rcvd">
              You'll see at our events that we're REALLY focused on quality and
              our genuine connections with attendees
            </div>
            <div data-time="16:38" class="msg rcvd">
              We're really quality of events > quantity :){" "}
            </div>
            <div data-time="16:38" class="msg sent">
              Wow! I've always been hesitant to participate since I'm not
              Chinese. Is that okay?
            </div>
            <div data-time="16:38" class="msg sent">
              :')
            </div>
            <div data-time="16:38" class="msg rcvd">
              Of course! Our events are absolutely for everybody and are
              designed for that purpose! Everybody learns together
            </div>
            <div data-time="16:40" class="msg sent">
              Great! How can I learn more? 😍
            </div>
            <div data-time="16:41" class="msg rcvd">
              You're on the right website 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
