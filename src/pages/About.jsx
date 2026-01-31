import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import events from "../data/events.json";
import tutoring from "../data/tutoring.json";
import performance from "../data/performance.json";
import exec from "../data/exec.json";

const ProfileModal = ({ show, handleClose, member }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="headers">{member.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-row items-center">
          <img
            className="modal_pic mb-4"
            src={`${process.env.PUBLIC_URL}${member.imageUrl}`}
            alt={member.name}
          />
          <div className="w-full">
            <p className="modal_question">
              Major: <span className="modal_answer">{member.major}</span>
            </p>
            <p className="modal_question">
              Year: <span className="modal_answer">{member.grade}</span>
            </p>
            <p className="modal_question">
              From: <span className="modal_answer">{member.hometown}</span>
            </p>
            <p className="modal_question">
              Hobbies: <span className="modal_answer">{member.hobbies}</span>
            </p>
            <p className="modal_question">
              Fun fact: <span className="modal_answer">{member.funFact}</span>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Profile = ({ member }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="board_div flex flex-col items-center mx-4 my-6">
      <div
        className="cursor-pointer transition-transform hover:scale-105"
        onClick={() => setShow(true)}
      >
        <img
          className="board_pic"
          src={`${process.env.PUBLIC_URL}${member.imageUrl}`}
          alt={member.name}
        />
      </div>
      <h3 className="headers mt-2">{member.name}</h3>
      <div className="board_title_box">
        <p id="board_title">{member.position}</p>
      </div>
      <ProfileModal
        show={show}
        handleClose={() => setShow(false)}
        member={member}
      />
    </div>
  );
};

const BranchSection = ({ title, description, memberList }) => (
  <div className="w-full mb-12">
    <h2 className="headers text-center text-3xl mb-2">{title}</h2>
    <div className="mx-auto flex justify-center mb-6">
      <p className="headers max-w-prose text-center px-4">{description}</p>
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {memberList.map((member, index) => (
        <Profile key={index} member={member} />
      ))}
    </div>
    <hr className="w-1/2 mx-auto mt-10 opacity-20" />
  </div>
);

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12">
        <h1 className="headers text-5xl">Meet the board!</h1>
        <h3 className="headers text-xl opacity-80">
          Click on a member to learn more about them!
        </h3>
      </div>

      <BranchSection
        title="Executive Board"
        // description="We walk so the rest of the board can run. We put the band for band in CLAID."
        memberList={exec}
      />

      <BranchSection
        title="Performance"
        // description="We plan our annual CLAID Chinese New Year Performance full of different shows, acts, and talents from all across campus! If you're interested in dancing, be sure to participate!"
        memberList={performance}
      />

      <BranchSection
        title="Tutoring"
        // description="We're known for our weekly Chinese conversation corners and organizing our one-on-one tutoring! Come find us in the Illini Union basement and converse with our tutors and learners of all skill levels!"
        memberList={tutoring}
      />

      <BranchSection
        title="Events"
        // description="We're in charge of planning all social, cultural, and team bonding events! Some of our past events include the Mid-Autumn festival, food making competitions, game nights, and more!"
        memberList={events}
      />
    </div>
  );
};

export default About;
