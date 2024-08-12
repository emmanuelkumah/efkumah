import React from "react";
import { styles } from "../styles";
const Footer = () => {
  return (
    <>
      <footer>
        <h2 className={`${styles.sectionHeadText}`}>
          Let's build something together
        </h2>
        <div>
          <p>
            My strong communication and problem-solving skills would be a great
            asset to a new and challenging position. I am comfortable working in
            collaborative environments.
          </p>
          <p>
            Feel free to reach out if you are looking for a developer, have a
            question, or just want to connect
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
