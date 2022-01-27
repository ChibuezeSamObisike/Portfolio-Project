import React, { useEffect, useState } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import Zoom from "react-reveal/Zoom";
const FirstSection = () => {
  let headerDetails = [
    "Frontend Engineer",
    "Chattered Software Consultant",
    "Embedded Systems Dev",
  ];
  const [index, setIndex] = useState(0);

  const changeInterval = () => {
    setInterval(() => {
      let indexVal = 0;
      !(indexVal + 1 > headerDetails.length - 1) ? indexVal++ : (indexVal = 0);
      setIndex(indexVal);
    }, 1000);
  };

  useEffect(() => {
    changeInterval();
  });
  return (
    <>
      <section className="fheader">
        <div className="containerDiv">
          <LightSpeed bottom big>
            <h1>Hello, I am a </h1>
            <h1 className="purple">{headerDetails[index]}</h1>
          </LightSpeed>
          <LightSpeed right cascade>
            <p className="headerP">
              I implement pixel perfect user interfaces and data driven
              applications.
            </p>
          </LightSpeed>
          <div className="icons-stuff">
            <a
              href="https://github.com/ChibuezeSamObisike"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon-font" />
            </a>
            <a
              href="https://www.linkedin.com/in/chibueze-sam-obisike/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon-font" />
            </a>
            <a
              href="https://twitter.com/unique_Chibueze"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="icon-font" />
            </a>
            <a href="mailto: samobisike@gmail.com">
              <MdMarkEmailRead className="icon-font" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
