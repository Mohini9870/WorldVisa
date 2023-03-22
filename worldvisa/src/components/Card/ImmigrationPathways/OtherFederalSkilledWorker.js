import React from "react";

const OtherFederalSkilledWorker = () => {
  return (
    <>
      <div className="mb-5">
        <h2 style={{ textAlign: "left", marginLeft: "90px" }}>
          Other Federal Skilled Worker Programs
        </h2>
      </div>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", color: "#C5C5C5" }}
      >
        <p style={{ fontSize: "14px" }}>
          Additional targeted federal skilled worker programs exist that help
          certain immigration candidates gain permanent residence. The
          additional federal programs include:
        </p>

        <ul style={{ fontSize: "14px" }}>
          <li>Rural and Northern Immigration Pilot (RNIP)</li>
          <li>Agri-Food Immigration Pilot</li>
          <li>Home Child Care Provider Pilot</li>
          <li>Home Support Worker Pilot</li>
        </ul>
        <p style={{ fontSize: "14px" }}>
          The RNIP allows small and remote communities across Canada to attract
          and retain foreign workers. Participating communities take the lead in
          attracting new immigrants and matching them with suitable jobs.
        </p>
        <p style={{ fontSize: "14px" }}>
          The Agri-Food Immigration Pilot provides a pathway to Canadian
          permanent residence to eligible temporary foreign workers in the
          Agriculture and Agri-Food industry. In order to be eligible,
          candidates need to have completed 12 months of work experience, hold a
          high school diploma and meet minimum language requirements.
        </p>
        <p style={{ fontSize: "14px", marginBottom: "3rem" }}>
          The remaining immigration programs provide pathways to permanent
          residence for foreign caregivers, including childcare providers and
          home support workers. Caregivers are required to have at least two
          years of work experience relevant to the program they are applying
          for.
        </p>
      </div>
    </>
  );
};

export default OtherFederalSkilledWorker;
