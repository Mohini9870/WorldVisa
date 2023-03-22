import React from "react";

const AtlanticImmigrationProgram = () => {
  return (
    <>
      <div className="mb-5">
        <h2 style={{ textAlign: "left", marginLeft: "90px" }}>
          Atlantic Immigration Program
        </h2>
      </div>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", color: "#C5C5C5" }}
      >
        <p style={{ fontSize: "14px" }}>
          Atlantic Canada has its own immigration program called the Atlantic
          Immigration Program (AIP). The AIP allows employers to attract and
          retain foreign talent. Atlantic Canada includes four provinces:
        </p>

        <ul style={{ fontSize: "14px" }}>
          <li>New Brunswick</li>
          <li>Newfoundland and Labrador</li>
          <li>Nova Scotia</li>
          <li>Prince Edward Island</li>
        </ul>
        <p style={{ fontSize: "14px", marginBottom: "3rem" }}>
          Employers who wish to benefit from the AIP must find a suitable
          candidate and offer them a job. They do not need to conduct a labour
          market impact assessment. Once the candidate accepts the offer, the
          employer must connect the candidate with a designated organization
          that will help him or her develop a settlement plan. Employers who
          wish to quickly fill the position may also have access to a temporary
          work permit.
        </p>
      </div>
    </>
  );
};

export default AtlanticImmigrationProgram;
