import React from "react";
import { styles } from "../styles";
const FarmTrace = () => {
  return (
    <>
      <div className="bg-[#0B132B] rounded-xl p-10 mt-10">
        <h3 className={`${styles.sectionHeadText}`}>Farm Trace</h3>
        <section>
          <p className={`${styles.paragraph}`}>
            Farm trace is a farm activity tracking and traceability web app. It
            enables farm agents and extension officers to record and track
            farming activities of over 400 farmers in the North-East region of
            Ghana. Users can also enter a batch number to get further details on
            the package product.There are a total of 9 tracked farming
            activities. It begins with the Pre-Planting and ends with the
            shipment.
          </p>
        </section>
        <section>Image goes here</section>
        <section>
          <h3
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Process{" "}
          </h3>
          <p className={`${styles.paragraph}`}>
            The project was scoped into two phases. The first was to allow
            admins to capture the farmer and farm details and farm activities.
            The next phase is to enable users to enter a batch number to get
            information on the package product.
          </p>
          <p className={`${styles.paragraph}`}>
            My role was to develop the app's user interface and design the
            screens for the web using Figma. The backend developer and I worked
            together to integrate the API, I created an initial mockup of the
            user interface using Moqups and worked with the project manager to
            capture the user stories in Trello.
          </p>
        </section>
        <section>
          <h3
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Technologies used
          </h3>
          <ul className={`${styles.paragraph}`}>
            <li>Flowbite React for building User Interface</li>
            <li>Tailwind css for rapid UI development and styling </li>
            <li>
              React router for dynamic and nested routing, loading data, and
              mutating form data
            </li>
            <li>JWT for user authentication </li>
            <li>Deployed on netlify</li>
          </ul>
        </section>
        <section>
          <h3
            className={`${styles.sectionSubText} pl-4 border-l-4 border-emerald-400 mt-4`}
          >
            Spotlight
          </h3>
          <p className={`${styles.paragraph}`}>
            Initial used the useState, useContext, and useReducer hooks to
            manage state and the state update logic. React Router was being used
            for client side routing only. However, I noticed it does a good job
            loading data to a specified route, capturing form data, as well as
            mutating data. I switched to React router and that improved the code
            structure and readablity.
          </p>
        </section>
      </div>
    </>
  );
};

export default FarmTrace;
