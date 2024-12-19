import React from 'react'

import styles from "./About.module.css";

export const About = () => {
  return <section className= {styles.container} id= "about">
    <h2 className= {styles.title}>About</h2>
    <div className= {styles.content}>
        <img src="assets/about/aboutImage.png" alt="Me sitting with a laptop" className={styles.aboutImage}/>
    <ul className= {styles.aboutItems}>
        <li className= {styles.aboutItem}>
            <img src ="assets/about/cursorIcon.png" alt="Cursor icon" />
    <div className={styles.aboutItemText}>
        <h3>Frontend Developer</h3>
        <p>I create responsive and interactive websites using HTML, CSS, JavaScript, and React.js, focusing on seamless user experiences across devices.</p>
        </div>
        </li>
        <li className = {styles.aboutItem}>
            <img src="assets/about/serverIcon.png" alt="Server icon" />
    <div className={styles.aboutItemText}>
        <h3>Backend Developer</h3>
        <p>I build scalable, secure web applications with Node.js,Express.js and Java ,Spring Boot, handling server-side logic, databases, and API integration.I am proficient in databases such as MongoDB, Firebase, and SQL, and have experience building responsive websites.</p>
        </div>
        </li>
        <li className = {styles.aboutItem}>
            <img src="assets/about/uiIcon.png" alt="Ui icon" />
    <div className={styles.aboutItemText}>
        <h3>UI-UX developer</h3>
        <p>I design intuitive, visually appealing user interfaces using Figma and Adobe XD, ensuring easy navigation and a smooth user experience.</p>
        </div>
        </li>
        </ul>
    </div>
  </section>
}
