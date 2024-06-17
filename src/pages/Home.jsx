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
    </div>
  );
};

export default Home;
