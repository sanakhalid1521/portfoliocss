
import React from 'react';
import styles from '../style/about.module.css'

const About = () => {
    return (
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutDescription}>
            I am Sana Khalid, a passionate and dedicated web developer with a strong focus on crafting visually appealing, user-friendly, and responsive web applications. My journey in web development is driven by a deep appreciation for both the technical and creative sides of the field, allowing me to bring unique ideas to life through clean, modern code and intuitive design.
          </p>
          <p className={styles.aboutDescription}>
            With a solid foundation in the latest web technologies and a commitment to best practices, I strive to build digital experiences that not only meet but exceed user expectations. From developing interactive interfaces to ensuring seamless navigation across devices, my aim is always to enhance user engagement and satisfaction. I approach each project with meticulous attention to detail and a keen eye for design, ensuring that every element aligns with the overall vision and objectives.
          </p>
          <p className={styles.aboutDescription}>
            I’m particularly motivated by opportunities to work on challenging projects that push me to expand my skill set and explore innovative solutions. Collaborating with others fuels my creativity and broadens my perspective, as I believe that teamwork often leads to the best outcomes. In addition, I am a lifelong learner who eagerly embraces new frameworks, tools, and techniques to stay updated in this ever-evolving industry.
          </p>
          <p className={styles.aboutDescription}>
            In my free time, I enjoy diving into technical blogs, experimenting with new coding practices, and honing my design abilities to keep up with the latest trends in web development. My dedication to continuous improvement allows me to deliver refined, high-quality solutions that are adaptable to the dynamic digital landscape. Ultimately, my goal is to contribute to the creation of meaningful, impactful applications that connect with users and bring value to businesses.
          </p>
        </div>
      </section>
    );
};

export default About;
