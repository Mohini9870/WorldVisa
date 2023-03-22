import React from "react";

const ExpressEntry = () => {
  return (
    <>
      {" "}
      <div className="mb-5">
        <h2 style={{ textAlign: "left", marginLeft: "6rem" }}>Express Entry</h2>
      </div>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", color: "#C5C5C5" }}
      >
        <p style={{ fontSize: "14px" }}>
          Express Entry is Canada’s main way of managing skilled worker
          applications through the three main economic class immigration
          programs:
        </p>

        <ul style={{ fontSize: "14px" }}>
          <li>Federal Skilled Worker Program (FSWP)</li>
          <li>Canadian Experience Class (CEC)</li>
          <li>Federal Skilled Trades Program (FSTP)</li>
        </ul>
        <p style={{ fontSize: "14px" }}>
          Candidates who are eligible for Express Entry can upload their profile
          onto the federal government’s website.
        </p>
        <p style={{ fontSize: "14px" }}>
          Candidates receive a Comprehensive Ranking System (CRS) score based on
          criteria such as their age, education, language skills, and work
          experience.
        </p>
        <p style={{ fontSize: "14px", marginBottom: "3rem" }}>
          Approximately every two weeks, Immigration, Refugees and Citizenship
          Canada (IRCC) invites candidates with the highest CRS scores to apply
          for permanent residence. IRCC aims to process permanent residence
          applications in six months or less. Under its Immigration Levels Plan,
          Canada seeks to welcome an average of 110,000 immigrants through
          Express Entry each year.
        </p>
      </div>
    </>
  );
};

export default ExpressEntry;
