import React from "react";
import "./immigration.css";
const Subclass190 = () => {
  return (
    <>
      <div className="subclass">
        <h2 className="head" style={{ color: "#000", fontWeight: "600" }}>
          Subclass 190(Skilled Nominated Visa)
        </h2>
        <p className="mb-3 m-3" style={{ textAlign: "start" }}>
          For skilled workers who wish to live and work in regional Australia.
        </p>
        <p className="m-3" style={{ textAlign: "start" }}>
          Must live and work in the nominating state for at least for 2 year.
        </p>

        <h3 style={{ textAlign: "start", color: "#000", fontWeight: "600" }}>
          Eligibility
        </h3>

        <h5 style={{ color: "#C5C5C5", textAlign: "start" }}>Applicant must</h5>

        <ul className="list" style={{ color: "#C5C5C5" }}>
          <li>
            Be a nominated occupation listed on the skilled occupation list
          </li>
          <li>Positive skill assessment from a relevant designated body</li>
          <li>Satisfy the points test-currently 60 points</li>
          <li>Competent English language proficiency.</li>
          <li>Be below the age of 45 years at the time of your application.</li>
        </ul>
      </div>
    </>
  );
};

export default Subclass190;
