import React from "react";
import { styles } from "../styles";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiDevToLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="border my-10 rounded-xl p-10">
        <h2>
          Let's <span className={`${styles.sectionHeadText}`}>build </span>{" "}
          something
          <span className={`${styles.sectionHeadText}`}>together</span>
        </h2>
        <div>
          <p className={`${styles.paragraph}`}>
            My strong communication and problem-solving skills would be a great
            asset to a new and challenging position.
          </p>
          <p className={`${styles.paragraph}`}>
            Feel free to reach out if you are looking for a developer, have a
            question, or just want to connect
          </p>
        </div>
        <div className="flex gap-10 my-10">
          <a
            href="https://www.linkedin.com/in/emmanuelfkumah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/emmanuelkumah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/emmanuelfkumah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a href="https://dev.to/efkumah">
            <PiDevToLogoFill />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
