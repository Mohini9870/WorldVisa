import React from "react";

const HelpfulCanada = () => {
  return (
    <>
      <div className="mb-4">
        <h2 style={{ textAlign: "left", marginLeft: "40px" }}>
          Helpful Canada Immigration Resources
        </h2>
      </div>
      <div
        className="mb-3"
        style={{ marginLeft: "70px", marginRight: "100px", color: "#C5C5C5" }}
      >
        <ol type="1" style={{ fontSize: "14px" }}>
          <li> Immigration, Refugees and Citizenship Canada's Website</li>
          <p style={{ fontSize: "14px" }}>
            1. Immigration, Refugees and Citizenship Canada's Website IRCC's
            website provides information on all of Canada's permanent and
            temporary visa pathways. It also has FAQs, contact information, and
            the forms you need to submit your Canadian immigration application.
          </p>

          <li>Worldvisa Immigration toolkits and Resources</li>
          <p style={{ fontSize: "14px" }}>
            Worldvisa offers many additional tools and resources to support your
            immigration journey. These include:
          </p>
          <ul style={{ fontSize: "14px" }}>
            <li>
              Immigration Assessment Form: Find out if you are eligible for
              skilled worker immigration.
            </li>
            <li>
              Express Entry CRS Calculator: Calculate your Express Entry
              Comprehensive Ranking System (CRS) score.
            </li>
            <li>
              Improve your Express Entry CRS Score: Learn how you can maximize
              your CRS score.
            </li>
            <li>
              Canada PNP Finder: Learn more about all of Canada's Provincial
              Nominee Program streams.
            </li>
            <li>
              Family Sponsorship: Discover Canadian family class sponsorship
              options.
            </li>
            <li>
              Canada Work Permits: Read our section on how to work in Canada on
              a temporary basis
            </li>
            <li>
              Canada Study Options: Learn how to study in Canada as an
              international student.
            </li>
            <li>cicnews.com: Find the latest Canada immigration news.</li>
          </ul>
        </ol>
      </div>
    </>
  );
};

export default HelpfulCanada;
