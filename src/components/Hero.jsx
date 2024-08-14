import React from "react";
import { styles } from "../styles";
const Hero = () => {
  return (
    <>
      <section className="relative w-full">
        <div className=" flex flex-row items-start gap-5 mt-10">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-accent" />
            <div className="w-1 sm:h-80 h-40 green-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className="text-accent">Emmanuel</span> 👋
            </h1>
            <p className="text-xl text-accent">Software Developer & Educator</p>
            <p className={`${styles.heroSub} mt-2 text-white-100`}>
              I build customer-centered digital products that meet business
              needs. <br /> While on it,
              <span className="text-accent">
                teaching the next generation of digital enthusiasts
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
