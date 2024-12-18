import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

export const Experience = () => {
  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/your-profile/", "_blank"); // Replace with your LinkedIn profile
  };

  return (
    <section className={styles.experienceSection} id= "experience">
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
          <div className={styles.experienceDetails} onClick={handleRedirect}>
            <div className={styles.job}>
              <h3>Full Stack Web Development Intern, Unified Mentor</h3>
              <p>Oct 2024 - Present</p>
              <ul>
                <li>Worked on live projects of company , used database like firebase,mongo db</li>
                <li> Designed an Supermall website</li>
              </ul>
            </div>
            <div className={styles.job}>
              <h3>Web Development Inter, BWS</h3>
              <p>Oct 2024 - Present</p>
              <ul>
                <li> Learned a lot , and built full stack projects,</li>
                <li>By integrating AI tools into my workflow, I have significantly reduced completion time, enhancing productivity and efficiency</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
