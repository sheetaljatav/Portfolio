import React from "react";
import styles from "./Contact.module.css";

// Import images directly
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out! I’d love to connect.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:sheetal4444jatav@gmail.com">sheetal4444jatavgmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sheetal-jatav-14817720a/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" />
          <a href="https://github.com/sheetaljatav" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </li>
      </ul>
    </footer>
  );
};
