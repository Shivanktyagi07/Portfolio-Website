import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SHIVANK TYAGI</h1>
        <p className={styles.description}>
        Full MERN Stack-Developer | Transforming ideas into web solutions. Proficient in React, Node.js, and MongoDB. Committed to Innovation and continuous Learning . Let's connect and collaborate!
        </p>
        <a href="mailto:shivanktyagi976@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/image-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
