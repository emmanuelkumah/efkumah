import React from "react";
import { styles } from "../styles";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Chirrpy = () => {
  return (
    <>
      <div className="bg-[#001B2E] rounded-xl p-10 mt-10">
        <h2 className={`${styles.sectionHeadText}`}>Chirrpy</h2>
        <p className={`${styles.paragraph}`}>
          Chirppy is an AI-powered voice recognition app that converts speech to
          accurate text.
        </p>
        <section>
          <LiteYouTubeEmbed id="pBanoEHxIao" title="Chirrpy web app demo" />

          <h2
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Why Chirrpy
          </h2>
          <p className={`${styles.paragraph}`}>
            A 2017 World Wide Web Consortium (W3C) study found that
            approximately 20% of the world's population has some form of
            disability that could impact their ability to use a keyboard. Of
            this group, approximately 10% are estimated to have significant
            difficulties using a keyboard. This voice recognition app will
            provide accessibility to those with disabilities. For instance,
            users with chronic conditions such as carpal tunnel syndrome can use
            their voice to prevent the repetitive stresses of typing.
          </p>
        </section>
        <section>
          <h2
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Use Cases
          </h2>
          <p className={`${styles.paragraph}`}>
            <span className="text-emerald-500">
              Note-taking and Transcription:
            </span>{" "}
            Valuable for professionals, students, and individuals who need to
            capture spoken information in written form.
          </p>
          <p className={`${styles.paragraph}`}>
            <span className="text-emerald-500">
              Assistive Technology for Hands-Free Interaction:
            </span>
            Chirrppy is an assistive technology for individuals with difficulty
            using their hands due to trauma or physical limitations.
          </p>
        </section>
        <section>
          <h2
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Development Process
          </h2>
          <ul className={`${styles.paragraph}`}>
            <li>Get audio from the microphone</li>
            <li>Stream the audio to AssemblyAI</li>
            <li>Process the transcription stream</li>
          </ul>
        </section>
        <section>
          <h2
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Features
          </h2>
          <ul className={`${styles.paragraph}`}>
            <li>Summarize text</li>
            <li>Detect topic</li>
            <li>Download transcript as PDF and docx</li>
            <li>Sentiment Analysis</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Chirrpy;
