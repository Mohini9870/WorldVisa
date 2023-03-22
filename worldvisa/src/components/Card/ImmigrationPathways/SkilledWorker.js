import React from "react";

const SkilledWorker = () => {
  return (
    <>
      <div className="mb-5" style={{ width: "100%" }}>
        <div>
          <h2
            style={{
              textAlign: "left",
              marginLeft: "90px",
              marginBottom: "3rem",
            }}
          >
            Skilled Worker Immigration Pathays
          </h2>
        </div>
        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
          <p style={{ fontSize: "1rem", width: "100%", color: "#C5C5C5" }}>
            Under its Immigration Levels Plan, Canada aims to welcome over
            400,000 immigrants every year. Some 60 per cent of these immigrants
            arrive as skilled workers. The main way skilled workers can
            immigrate to Canada is through the Express Entry application
            management system. The second main way is through the Provincial
            Nominee Program (PNP), followed by Quebec’s skilled worker programs,
            and then a few other targeted federal programs. Skilled Workers Can
            Move to Canada with their Family Skilled workers can also bring
            close family members with them to Canada. These family members also
            gain permanent resident status. Close family members include:
          </p>

          <ul style={{ fontSize: "14px", color: "#C5C5C5" }}>
            <li>your spouse or common-law partner</li>
            <li>dependent children</li>
            <li>dependent children of your spouse or common-law partner</li>
            <li>dependent children of dependent children</li>
          </ul>
          <h5 style={{ color: "#C5C5C5" }}>Dependent children are:</h5>

          <ul style={{ fontSize: "14px", color: "#C5C5C5" }}>
            <li>under 22 years old and not a spouse or common law partner</li>
            <li>
              22 years of age or older, depended significantly on financial
              support from their parents b efore the age of 22 and can not
              support themselves financially due to a physical or mental
              condition
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkilledWorker;
