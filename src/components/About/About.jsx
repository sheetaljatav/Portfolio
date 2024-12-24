import React from "react";

// Import images dynamically
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

import "./About.module.css";

export const About = () => {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <div className="aboutItems">
          <div className="aboutItem">
            <img
              src={cursorIcon}
              alt="Cursor icon"
              className="cursorIcon"
            />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I create responsive and interactive websites using HTML, CSS,
                JavaScript, and React.js, focusing on seamless user experiences
                across devices.
              </p>
            </div>
          </div>
          <div className="aboutItem">
            <img
              src={serverIcon}
              alt="Server icon"
              className="cursorIcon"
            />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I build scalable, secure web applications with Node.js, Express.js,
                Java, and Spring Boot, handling server-side logic, databases, and
                API integration. I am proficient in databases such as MongoDB,
                Firebase, and SQL, and have experience building responsive
                websites.
              </p>
            </div>
          </div>
          <div className="aboutItem">
            <img
              src={uiIcon}
              alt="UI icon"
              className="cursorIcon"
            />
            <div className="aboutItemText">
              <h3>UI/UX Developer</h3>
              <p>
                I design intuitive, visually appealing user interfaces using Figma
                and Adobe XD, ensuring easy navigation and a smooth user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
