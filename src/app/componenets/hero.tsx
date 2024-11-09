'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import profilepic from '../public/profilepic.jpg';
import styles from '../style/skill.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Hi, I am <span className={styles.highlight}>Sana Khalid</span>
        </h1>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: ['Web Developer', 'JavaScript Lover', 'UI/UX Designer', 'Web Application Expert'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className={styles.description}>
          I am a web developer and UI expert. I specialize in creating intuitive and visually appealing web applications.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={profilepic}
          alt="Sana Khalid"
          width={300}
          height={300}
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default Hero;
