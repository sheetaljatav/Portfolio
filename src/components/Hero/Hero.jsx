import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, I'm Sheetal</h1>
        <p className={styles.heroDescription}>
          I'm a Full Stack Developer and UI/UX Designer skilled in the MERN stack,
          Java, and Spring Boot. I create responsive, user-friendly web applications
          and intuitive designs. Currently, I'm interning with Unified Mentor and BWS
          as a Full Stack Web Developer. Let's connect and build something amazing!
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:sheetal4444jatav@gmail.com?subject=Let's%20Connect&body=Hi%20Sheetal,"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="/assets/Sheetal-Jatav-Resume.pdf" // Fixed the path for production
            className={styles.resumeBtn}
            download="Sheetal-Jatav-Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src="/assets/hero/myImage.png" // Ensure image path is correct in production
          alt="Sheetal"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
