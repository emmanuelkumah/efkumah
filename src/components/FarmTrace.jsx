import React from "react";

const FarmTrace = () => {
  return (
    <>
      <h3>Farm Trace</h3>
      <section>
        <p>
          Farm trace is a farm activity tracking and traceability web app. It
          enables farm agents and extension officers to record and track farming
          activities of over 400 farmers in the North-East region of Ghana. to
          It also allow users to enter a batch number to get further details on
          the package product.
        </p>
        <p>
          There are a total of 9 farming activities. It begins with the
          Pre-Planting and ends with the shipment.
        </p>
      </section>
      <section>Image goes here</section>
      <section>
        <h3>Process </h3>
        <p>
          My role was to develop the user interface of the app, and also design
          the screens for web and mobile. I colloborate with the backend
          developer to integrate the api, and worked with the project manager to
          define the user stories and create an initial mockup of the user
          interface.
        </p>
        <p>
          The project was scoped into two phases. The first was to allows the
          admins to capture the farmer and farm details, and well as capture the
          activities on each farm.The next phase is to allow users to enter a
          batch number to get further details on the package product.
        </p>
      </section>
      <section>
        <h2>Technologies used</h2>
        <ul>
          <li>Flowbite React for User Interface</li>
          <li>React router for Routing</li>
          <li>JWT for user authentication </li>
          <li>Deployed on netlify</li>
        </ul>
      </section>
      <section>
        <h2>Spotlight</h2>
        <p>
          Initial used the useState, useContext, and useReducer hooks to manage
          state and the state update logic. React Router was being used for
          client side routing only. However, I noticed it does a good job
          loading data to a specified route, capturing form data, as well as
          mutating data. I switched to React router and that improved the code
          structure and readablity.
        </p>
      </section>
    </>
  );
};

export default FarmTrace;
