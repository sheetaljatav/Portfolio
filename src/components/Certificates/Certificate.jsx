import React from "react";
import styles from "./Certificate.module.css";

export const Certificate = () => {
  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/your-profile/", "_blank"); // Replace with your LinkedIn profile
  };

  return (
    <section className={styles.certificatesSection} id="certificates">
      <div className={styles.certificateContent}>
        <h3 className={styles.sectionTitle}>Certificates</h3>
        <div className={styles.certificateDetails}>
           <div className={styles.job} onClick={handleRedirect}>
            <h3>Web Development</h3>
            <ul>
              <li>IBM SkillsBuild</li>
            </ul>
          </div>

          
          <div className={styles.job} onClick={handleRedirect}>
            <h3>Machine Learning</h3>
            <ul>
              <li>Stanford University</li>
            </ul>
          </div>

          <div className={styles.job} onClick={handleRedirect}>
            <h3>Database Foundation</h3>
            <ul>
              <li>Oracle Academy</li>
            </ul>
          </div>

          <div className={styles.job} onClick={handleRedirect}>
            <h3>The Complete Network Fundamentals Course</h3>
            <ul>
              <li>Udemy</li>
            </ul>
          </div>

           <div className={styles.job} onClick={handleRedirect}>
            <h3>Google Cloud</h3>
            <ul>
              <li>Coursera</li>
            </ul>
          </div>

           <div className={styles.job} onClick={handleRedirect}>
            <h3>Python</h3>
            <ul>
              <li>HackerRank</li>
            </ul>
          </div>

          <div className={styles.job} onClick={handleRedirect}>
            <h3>Web Analytics</h3>
            <ul>
              <li>Great Learning Academy</li>
            </ul>
          </div>

          <div className={styles.job} onClick={handleRedirect}>
            <h3>HRM - Human Resource Management</h3>
            <ul>
              <li>Great Learning Academy</li>
            </ul>
          </div>

          <div className={styles.job} onClick={handleRedirect}>
            <h3>UI-UX</h3>
            <ul>
              <li>Great Learning Academy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
