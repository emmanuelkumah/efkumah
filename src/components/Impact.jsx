import React from "react";
import { styles } from "../styles";
import image3 from "../assets/efkumah.jpeg";
import image2 from "../assets/efkumah1.jpeg";
import coding from "../assets/coding.png";
const Impact = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <h2 className={`${styles.sectionHeadText}`}>Impact 💪🏽 </h2>
        <section>
          <h6 className="text-xl text-accent mt-2">
            Digital Skills for Women{" "}
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <section className={`${styles.paragraph}`}>
              <p>
                I devote my time to training young women, ages 18 to 35, digital
                literacy. I have taught more than 100 women digital skills,
                including how to use Canva for graphic design, WordPress and Wix
                for web building, and Figma for website design.
              </p>
              <p>
                I get great joy from assisting women in realizing their full
                potential in the digital realm. Seeing their "aha!" moments and
                the increased freedom these abilities provide is incredibly
                motivating.
              </p>
            </section>

            <div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <img
                    src={image3}
                    alt="efkumah_training1"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="efkumah_training2"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h6 className="text-xl text-accent mt-2">
            Kids Summer School in Web Programming
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div>
              <img
                src={coding}
                alt="efkumah_kids coding"
                style={{
                  width: "",
                  height: "",
                  borderRadius: "20px",
                }}
              />
            </div>

            <section className={`${styles.paragraph} mt-10`}>
              <p>
                I run a virtual summer school that teaches kids coding. The
                objective is to help these children (10–18 years) develop their
                problem-solving and critical-thinking skills through web
                programming.
              </p>
              <p>
                I believe these skills are essential for success in the digital
                age and that the earlier children develop them, the better. We
                also believe that these skills should be taught in a fun and
                engaging way.
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Impact;
