import React from "react";
import styles from "./Experience.module.css";

// Importing images
import htmlImage from "../../../assets/skills/html.png";
import cssImage from "../../../assets/skills/css.png";
import reactImage from "../../../assets/skills/react.png";
import nodeImage from "../../../assets/skills/node.png";
import firebaseImage from "../../../assets/skills/firebase.png";
import mongodbImage from "../../../assets/skills/mongodb.png";
import figmaImage from "../../../assets/skills/figma.png";

export const Experience = () => {
  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/your-profile/", "_blank"); // Replace with your LinkedIn profile
  };

  const skills = [
    { title: "HTML", imageSrc: htmlImage },
    { title: "CSS", imageSrc: cssImage },
    { title: "React", imageSrc: reactImage },
    { title: "Node", imageSrc: nodeImage },
    { title: "Firebase", imageSrc: firebaseImage },
    { title: "MongoDB", imageSrc: mongodbImage },
    { title: "Figma", imageSrc: figmaImage },
  ];

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.experienceContent}>
        {/* Skills Section */}
        <div>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <img src={skill.imageSrc} alt={skill.title} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div className={styles.experienceDetails}>
            <div className={styles.job}>
              <h3>Full Stack Web Development Intern, Unified Mentor</h3>
              <p>Oct 2024 - Present</p>
              <ul>
                <li>Worked on live projects of the company, using databases like Firebase, MongoDB</li>
                <li>Designed a Supermall website</li>
              </ul>
            </div>
            <div className={styles.job}>
              <h3>Web Development Intern, BWS</h3>
              <p>Oct 2024 - Present</p>
              <ul>
                <li>Learned a lot and built full-stack projects</li>
                <li>By integrating AI tools into my workflow, I have significantly reduced completion time, enhancing productivity and efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
