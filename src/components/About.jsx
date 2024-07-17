import React from "react";
import { styles } from "../styles";
import { emma2 } from "../assets";
const About = () => {
  return (
    <>
      <div className="container max-auto mt-10">
        <h2 className={`${styles.sectionHeadText}`}>About me</h2>
        <h2 className={`${styles.sectionSubText}`}>My Tech Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <p className={`${styles.paragraph}`}>
              My first experience with web development was building WordPress
              websites. After that, I learned some PHP programming, but I had
              trouble understanding it. I decided to focus on learning HTML and
              CSS. This allowed me to build more complex websites with more
              functionality. I also started learning more about responsive
              design and user experience.
            </p>
            <p className={`${styles.paragraph} mt-3`}>
              Now, programming is an obsession. I develop front-end web
              applications that meet business needs using JavaScript (React,
              NextJS, TypeScript).
            </p>
            <p className={`${styles.paragraph} mt-3`}>
              In my early career, I worked for a fin-tech startup as a Product
              Developer. Then, I transitioned into Product Operations
              (strengthening customer feedback and scaling product knowledge).
              Later, a role in digital strategy. That involved engaging with
              prospective and existing clients to understand their digital
              needs.
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
