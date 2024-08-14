import React from "react";
import { styles } from "../styles";
import FarmTrace from "./FarmTrace";
import Chirrpy from "./Chirrpy";

const Projects = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className={`${styles.sectionHeadText} `}>
          What I have been working on <span>💪🏽</span>
        </h2>
        <section>
          <FarmTrace />
          <Chirrpy />
        </section>
      </div>
    </>
  );
};

export default Projects;
