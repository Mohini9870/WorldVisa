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
          <li>Have an occupation on the relevant skilled list</li>
          <li>
            Have suitable skills assessment for the occupation from designated
            body
          </li>
          <li>
            Satisfy the points test-currently 60 points, including 5 points from
            the state, once invited
          </li>
          <li>Must be below 45 years of age at the time of application</li>
          <li>Competent English language proficienty</li>
        </ul>
      </div>
    </>
  );
};

export default Subclass190;
