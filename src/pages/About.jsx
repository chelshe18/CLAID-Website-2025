import React from "react";
import members from "../components/board.json";

const Profile = ({ member }) => {
  return (
    <div class="board_div">
      <img
        class="board_pic"
        src={`${process.env.PUBLIC_URL}${member.imageUrl}`}
      />
      <h3>{member.name}</h3>
      <div class="board_title_box">
        <p id="board_title">{member.position}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1 class="headers">Meet the board!</h1>
      <div class=""></div>
      <div>
        {members.map((member, index) => (
          <Profile key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default About;
