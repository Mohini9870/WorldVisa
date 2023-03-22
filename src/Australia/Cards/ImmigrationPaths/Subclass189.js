import React from "react";
import "./immigration.css";
const Subclass189 = () => {
  return (
    <>
      <div className="subclass">
        <h2 className="head" style={{ color: "#000", fontWeight: "600" }}>
          Subclass 189
        </h2>
        <ul className="list" style={{}}>
          <li>
            Allows invited workers with requisite skills to live and work
            permanently anywhere in ausytralia.
          </li>
          <li>
            For applicants who are not sponsored by family members or employers
            or nominated by state government
          </li>
          <li>
            PR for 5 years and allowed to live in any part of the country{" "}
          </li>
        </ul>
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
      {/* <div className="mb-5" style={{ width: "100%" }}>
        <div>
          <h2
            style={{
              textAlign: "left",
              marginLeft: "50px",
              marginBottom: "3rem",
            }}
          >
            Suvclass 189
          </h2>
        </div>

        <ul className="list" style={{ color: "#C5C5C5" }}>
          <li>
            Allows invited workers with requisite skills to live and work
            permanently anywhere in ausytralia.{" "}
          </li>
          <li>
            For applicants who are not sponsored by family members or employers
            or nominated by state government
          </li>
          <li>
            PR for 5 years and allowed to live in any part of the country{" "}
          </li>
        </ul>
       
      </div> */}
    </>
  );
};

export default Subclass189;
