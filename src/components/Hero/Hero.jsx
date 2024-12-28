import React from "react";
import styles from "./Hero.module.css";
import myImage from "../../../assets/hero/myImage.png"; // Import image directly

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Sheetal</h1>
        <p className={styles.description}>
         Hi, I'm Sheetal Jatav, a motivated Full Stack Developer and UI/UX Designer skilled in the MERN stack, Java, and Spring Boot and Generative AI tools. I specialize in creating responsive, user-friendly web applications and intuitive designs, with several projects showcasing my expertise. I have completed an internship with Business Web Solutions (BWS) and am currently interning with Unified Mentor as a Full Stack Web Developer. I'm always ready to learn new skills and apply my knowledge to innovative projects. Let’s connect and collaborate!
        </p>
        <div className={styles.buttons}>
          <a
            href="mailto:sheetal4444jatav@gmail.com?subject=Let's%20Connect&body=Hi%20Sheetal,"
            className={styles.contactBtn}
          >
            Contact me
          </a>
          <a
            href="/Sheetal-Resume-.pdf"
            className={styles.resumeBtn}
            download="Sheetal-Jatav-Resume"
          >
            Download My Resume
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={myImage} // Image will be bundled during build
          alt="Sheetal"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
