import React from "react";
import { styles } from "../styles";
import { emma2 } from "../assets";
const About = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className={`${styles.sectionHeadText}`}>About me</h2>
        <h2 className={`${styles.sectionSubText}`}>My Tech Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <p className={`${styles.paragraph}`}>
              My first experience with web development was when a friend
              introduced me to building WordPress websites. After that, I read
              some book on PHP programming, but it was totally unscrutable to
              me. Later, I decided to focus on learning HTML and CSS to get the
              fundamental skills for coding websites. Without a detailed
              roadmap, and lacking the required staying power, I nearly
              abandoned a programming career.
            </p>
            <p className={`${styles.paragraph} mt-3`}>
              Since then, I have been honing my skills with JavaScript. I
              develop front-end web applications that meet business needs using
              JavaScript (React, NextJS, TypeScript).
            </p>
            <p className={`${styles.paragraph} mt-3`}>
              In my early career, I worked for a fin-tech startup as a Product
              Developer. Then, I transitioned into Product Operations
              (strengthening customer feedback and scaling product knowledge).
              Later, a role in digital strategy. That involved engaging with
              prospective and existing clients to understand their digital needs
              and provide bespoke digital solutions.
            </p>
          </div>
          <div>
            <img
              src={emma2}
              alt="profile"
              className="border-dotted border-8 border-accent rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
