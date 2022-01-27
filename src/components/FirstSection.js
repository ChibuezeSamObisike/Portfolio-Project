import React, { useEffect, useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';
import Zoom from 'react-reveal/Zoom';

const FirstSection = () => {
  let headerDetails = [
    'Frontend Engineer',
    'Chattered Software Consultant',
    'Embedded Systems Dev',
  ];
  const [index, setIndex] = useState(0);

  let indexVal = index % headerDetails.length;
  console.log(indexVal);

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000);
  }, []);

  return (
    <>
      <section className="fheader">
        <div className="containerDiv">
          <LightSpeed bottom big>
            <h1>Hello, I am a </h1>
          </LightSpeed>
          <LightSpeed bottom big spy={indexVal}>
            <h1 className="purple" style={{ height: '2em' }}>
              {headerDetails[indexVal]}
            </h1>
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
