import React from "react";
import "./Layout.css";
import Button from "react-bootstrap/esm/Button";
const WorldclassService = () => {
  return (
    <>
      <div className="Container-fluid container-fluid-padding">
        <div className="row">
          <div className="col-sm-12 col-lg-5 col-md-5">
            <div className="service-left">
              <img src="./home/men.png" alt="not found" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-7 col-md-7">
            <div className="services-right">
              <h4>Worldclass services</h4>
              <h5>
                Services trusted by Over 10 Lakh clients all across the globe{" "}
              </h5>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="service-card">
                  <div className="img-logo">
                    <img src="./home/consultation.svg" alt="not found" />
                  </div>
                  <h5>Consultation</h5>
                  <p>
                    We assist our clients by providing legal immigration
                    guidance right from your application process to getting the
                    proper authorization for the same. Our Legal Experts provide
                    stage-specific consultation for a hassle-free experience
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="service-card">
                  <div className="img-logo">
                    <img src="./home/assessment.svg" alt="" />
                  </div>
                  <h5>Assessment</h5>
                  <p>
                    Discover if you're eligible to take your profession to
                    Australia by taking the assessment. Individuals need at
                    least 65 points to be eligible. Check your eligibility
                    today!
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="service-card">
                  <div className="img-logo">
                    <img src="immigration-lawyers.svg" alt="" />
                  </div>
                  <h5>Immigration Lawyers</h5>
                  <p>
                    With over 50+ years of combined experience in the industry,
                    our Immigration experts and lawyers are MARA/ICCRC certified
                    and ready to guide you at each step of the way
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="service-card">
                  <div className="img-logo">
                    <img src="./home/premium.svg" alt="" />
                  </div>
                  <h5>Premium services</h5>
                  <p>
                    From pre-departure orientation, to file maintence, Legal
                    representation, discounts on travel partner bookings and
                    much more. Our premium services cater to a worldclass
                    experience curated just for you, like none other.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <Button variant="primary" className="ms-auto mb-3 services-btn">
                  Check out our Immigration Services
                </Button>
                {/* <div className="worldclass-button">
                    <Link to={"#"}>Check out our Immigration Services</Link>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldclassService;
