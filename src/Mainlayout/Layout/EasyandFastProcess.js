import React from "react";
import Button from "react-bootstrap/esm/Button";
const EasyandFastProcess = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="processes">
              <h4>Easy and Fast Processes</h4>
              <h5>Start your pR Journey in 3 easy steps</h5>
            </div>
            <div className="col-sm-12">
              <div className="processes-inn-box">
                <div className="processes-img-box">
                  <img src="./home/consultation-easy.svg" alt="" />
                </div>
                <div className="processes-content">
                  <h5>Consultation</h5>
                  <p>
                    Our immigration experts are available 24*7 at each step of
                    the way.
                  </p>
                </div>
              </div>
              <div className="processes-inn-box">
                <div className="processes-img-box assessmen-repor-color">
                  <img src="./home/assessment-report.svg" alt="" />
                </div>
                <div className="processes-content">
                  <h5>Assessment Report</h5>
                  <p>
                    Printed Points, Skill/Profile Assessment with a detailed
                    walkthrough by the appointed expert
                  </p>
                </div>
              </div>
              <div className="processes-inn-box">
                <div className="processes-img-box immigration-guide">
                  <img src="./home/immigration-guide.svg" alt="" />
                </div>
                <div className="processes-content">
                  <h5>‘Personalised’ Immigration Guide</h5>
                  <p>
                    Purchase a suitable package from our 3 tiers of Immigration
                    toolkits, designed to guide you thoroughly and stay on track
                    each step of the way
                  </p>
                </div>
              </div>
            </div>
            <Button variant="primary" className="services-button buy-now-btn">
              Buy Now
            </Button>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="services-left processes-img">
              <img
                src="./home/easy-fast-processes.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyandFastProcess;
