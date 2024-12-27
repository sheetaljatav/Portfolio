import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HI, I am Sheetal</h1>
        <p className={styles.description}>
          Hi, I'm Sheetal Jatav, a Full Stack Developer and UI/UX Designer skilled in the MERN stack and Java, Spring Boot. I create responsive, user-friendly web applications and intuitive designs, with several projects showcasing these skills. Currently, I'm interning with Unified Mentor and BWS as a Full Stack Web Developer. Let’s connect and collaborate on innovative projects!
        </p>
        <a
         href="mailto:sheetal4444jatav@gmail.com?subject=Let's%20Connect&body=Hi%20Sheetal,"
         className={styles.contactBtn}
          
        >
          Contact me
        </a>
        <a
          href="public/my-resume-.pdf"
          className={styles.resumeBtn}
          download="Sheetal-Jatav-Resume"
        >
          Download My Resume
        </a>
      </div>
      <img
        src="assets/about/cursorIcon.png"
        alt="Hero image of me"
        className={styles.cursorIcon}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
