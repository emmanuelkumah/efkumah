import React from "react";

const Chirrpy = () => {
  return (
    <>
      <h2>Chirrpy</h2>
      <p>
        Chirppy is an AI-powered voice recognition app that converts speech to
        accurate text.{" "}
      </p>
      <section>
        <h2>Why Chirrpy</h2>
        <p>
          A 2017 World Wide Web Consortium (W3C) study found that approximately
          20% of the world's population has some form of disability that could
          impact their ability to use a keyboard. Of this group, approximately
          10% are estimated to have significant difficulties using a keyboard.
          This voice recognition app will provide accessibility to those with
          disabilities. For instance, users with chronic conditions such as
          carpal tunnel syndrome can use their voice to prevent the repetitive
          stresses of typing.
        </p>
      </section>
      <section>
        <h2>Use Cases</h2>
        <p>
          Note-taking and Transcription: Valuable for professionals, students,
          and individuals who need to capture spoken information in written
          form.
        </p>
        <p>
          Assistive Technology for Hands-Free Interaction: Chirrppy is an
          assistive technology for individuals with difficulty using their hands
          due to trauma or physical limitations.
        </p>
      </section>
      <section>
        <h2>Development Process</h2>
        <ul>
          <li>Get audio from the microphone</li>
          <li>Stream the audio to AssemblyAI</li>
          <li>Process the transcription stream</li>
        </ul>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Summarize text</li>
          <li>Download transcript as PDF and docx</li>
          <li>Sentiment Analysis</li>
        </ul>
      </section>
    </>
  );
};

export default Chirrpy;
