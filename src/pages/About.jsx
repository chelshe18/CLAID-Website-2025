import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import events from "../components/events.json";
import tutoring from "../components/tutoring.json";
import performance from "../components/performance.json";
import finance from "../components/finance.json";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const BranchInfo = (branch) => {
  const branch_ = JSON.parse(JSON.stringify(branch)).branch;
  if (branch_ === "Events") {
    return (
      <>
        <h2 class="headers">Welcome to Events!</h2>
        <div class="mx-auto flex justify-center py-4">
          <p class="headers max-w-prose">
            We're in charge of planning all social, cultural, and team bonding
            events! Some of our past events include the Mid-Autumn festival,
            food making competitions, game nights, and more!
          </p>
        </div>
        <div class="w-screen flex justify-center">
          {events.map((member, index) => (
            <Profile key={index} member={member} />
          ))}
        </div>
      </>
    );
  }
  if (branch_ === "Tutoring") {
    return (
      <>
        <h2 class="headers">Welcome to Tutoring!</h2>
        <div class="mx-auto flex justify-center py-4">
          <p class="headers max-w-prose">
            We're known for our weekly Chinese conversation corners and
            organizing our one-on-one tutoring! Come find us in the Illini Union
            basement and converse with our tutors and learners of all skill
            levels!
          </p>
        </div>
        <div class="w-screen flex justify-center">
          {tutoring.map((member, index) => (
            <Profile key={index} member={member} />
          ))}
        </div>
      </>
    );
  }
  if (branch_ === "Performance") {
    return (
      <>
        <h2 class="headers">Welcome to Performance!</h2>
        <div class="mx-auto flex justify-center py-4">
          <p class="headers max-w-prose">
            We plan our annual CLAID Chinese New Year Performance full of
            different shows, acts, and talents from all across campus! If you're
            interested in dancing, be sure to participate!
          </p>
        </div>
        <div class="w-screen flex justify-center">
          {performance.map((member, index) => (
            <Profile key={index} member={member} />
          ))}
        </div>
      </>
    );
  }
  if (branch_ === "Finance") {
    return (
      <>
        <h2 class="headers">Welcome to Finance!</h2>
        <div class="mx-auto flex justify-center py-4">
          <p class="headers max-w-prose">
            We walk so the rest of the board can run. We put the band for band
            in CLAID
          </p>
        </div>
        <div class="w-screen flex justify-center">
          {finance.map((member, index) => (
            <Profile key={index} member={member} />
          ))}
        </div>
      </>
    );
  }
};

const ProfileModal = ({ show, handleClose, member }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{member.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="modal_pic" src={member.imageUrl} alt="Board Member" />
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
            Why CLAID: <span className="modal_answer">{member.whyClaid}</span>
          </p>
          <p className="modal_question">
            Hobbies: <span className="modal_answer">{member.hobbies}</span>
          </p>
          <p className="modal_question">
            Fun fact: <span className="modal_answer">{member.funFact}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Profile = ({ member }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="board_div flex flex-col items-center mx-[50px]">
        <a onClick={handleShow}>
          <img
            class="board_pic"
            src={`${process.env.PUBLIC_URL}${member.imageUrl}`}
          />
        </a>
        <h3>{member.name}</h3>
        <div class="board_title_box">
          <p id="board_title">{member.position}</p>
        </div>
        <ProfileModal show={show} handleClose={handleClose} member={member} />
      </div>
    </>
  );
};

const ImageWithDropdown = ({ branchName, imageURL, setSelectedBranch }) => {
  const handleImageClick = () => {
    setSelectedBranch((prevState) => {
      const updatedState = { ...prevState };
      //make sure if clicked twice, state of branch = false
      updatedState[branchName] = !updatedState[branchName];
      if (updatedState[branchName]) {
        Object.keys(updatedState).forEach((key) => {
          if (key !== branchName) {
            updatedState[key] = false;
          }
        });
      }
      return updatedState;
    });
  };

  return (
    <div class="w-1/2 flex justify-center">
      <div class="w-full flex flex-col items-center">
        <h2 class="headers text-center">{branchName}</h2>
        <img
          class="transform hover:scale-105 transition-transform duration-300 cursor-pointer w-3/4 aspect-[2/1] my-8 object-cover"
          onClick={handleImageClick}
          src={`${process.env.PUBLIC_URL}` + imageURL}
        />
      </div>
    </div>
  );
};

const About = () => {
  const [selectedBranch, setSelectedBranch] = useState({
    Events: false,
    Performance: false,
    Finance: false,
    Tutoring: false,
  });

  return (
    <div>
      <h1 class="headers">Meet the board!</h1>
      <h3 class="headers">Click each branch and board member to learn more!</h3>
      <div class="flex flex-wrap">
        <ImageWithDropdown
          branchName="Events"
          imageURL={"/images/social/noodle.png"}
          setSelectedBranch={setSelectedBranch}
        />
        <ImageWithDropdown
          branchName="Performance"
          imageURL={"/images/events/performance.png"}
          setSelectedBranch={setSelectedBranch}
        />
        <div class="w-full py-4">
          <TransitionGroup>
            {selectedBranch.Events && (
              <CSSTransition key="Events" timeout={300} classNames="fade-scale">
                <div>
                  <BranchInfo branch="Events" />
                </div>
              </CSSTransition>
            )}
            {selectedBranch.Performance && (
              <CSSTransition
                key="Performance"
                timeout={300}
                classNames="fade-scale"
              >
                <div>
                  <BranchInfo branch="Performance" />
                </div>
              </CSSTransition>
            )}
            {selectedBranch.Finance && (
              <CSSTransition
                key="Finance"
                timeout={300}
                classNames="fade-scale"
              >
                <div>
                  <BranchInfo branch="Finance" />
                </div>
              </CSSTransition>
            )}
            {selectedBranch.Tutoring && (
              <CSSTransition
                key="Tutoring"
                timeout={300}
                classNames="fade-scale"
              >
                <div>
                  <BranchInfo branch="Tutoring" />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <ImageWithDropdown
          branchName="Finance"
          imageURL={"/images/cultural/tangyuan.png"}
          setSelectedBranch={setSelectedBranch}
        />
        <ImageWithDropdown
          branchName="Tutoring"
          imageURL={"/images/social/chinese.png"}
          setSelectedBranch={setSelectedBranch}
        />
      </div>
    </div>
  );
};

export default About;
