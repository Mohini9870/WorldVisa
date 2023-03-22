import React from "react";

const ProvincialNomineeProgram = () => {
  return (
    <>
      {" "}
      <div className="mb-5">
        <h2 style={{ textAlign: "left", marginLeft: "90px" }}>
          Provincial Nominee Program (PNP)
        </h2>
      </div>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", color: "#C5C5C5" }}
      >
        <p style={{ fontSize: "14px" }}>
          Through the Provincial Nominee Programs (PNP), Canada’s provinces and
          territories can nominate people who wish to immigrate to Canada and
          reside in a particular province. Canada seeks to welcome over 80,000
          immigrants per year under the PNP.
        </p>

        <p style={{ fontSize: "14px" }}>
          All provinces and territories, except for Quebec and Nunavut, has its
          own PNP. Each province determines its own criteria for choosing
          eligible candidates. PNPs operate Expression of Interest (EOI)
          systems, similar to Express Entry, and invite the highest scoring
          candidates in regular draws.
        </p>
        <p style={{ fontSize: "14px" }}>
          You do not need to have an Express Entry profile to apply. You can
          apply directly to a PNP stream. These are called ‘base’ streams.
        </p>
        <p style={{ fontSize: "14px" }}>
          You can also apply to PNP streams that are aligned with Express Entry.
          These are called ‘enhanced’ streams. The benefit of applying to an
          enhanced stream is that it gives you more options.
        </p>
        <p style={{ fontSize: "14px", marginBottom: "3rem" }}>
          Receiving a provincial nomination through these streams awards Express
          Entry candidates an additional 600 Comprehensive Ranking System (CRS)
          points. This practically guarantees receiving an invitation to apply
          for permanent residence in a subsequent Express Entry draw.
        </p>
      </div>
    </>
  );
};

export default ProvincialNomineeProgram;
