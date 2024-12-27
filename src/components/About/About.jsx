// About.jsx
import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.jpg";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";


export const About = () => {
  const sections = [
    {
      icon: cursorIcon,
      title: 'Frontend Developer',
      description:
        'I create responsive and interactive websites using HTML, CSS, JavaScript, and React.js, focusing on seamless user experiences across devices.',
    },
    {
      icon: serverIcon,
      title: 'Backend Developer',
      description:
        'I build scalable, secure web applications with Node.js, Express.js, and Spring Boot, handling server-side logic, databases, and API integration.',
    },
    {
      icon: uiIcon,
      title: 'UI/UX Designer',
      description:
        'I design intuitive, visually appealing user interfaces using Figma and Adobe XD, ensuring easy navigation and a smooth user experience.',
    },
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className={styles.image}
          />
        </div>
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.iconWrapper}>
                <img src={section.icon} alt={`${section.title} icon`} />
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionDescription}>
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
