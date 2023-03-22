import React from "react";
import Button from "react-bootstrap/esm/Button";
// import Link from "react-router-dom";

const ApplyNow = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid container-fluid-padding">
          <div className="row justify-content-center">
            <div className=" col-xl-8 col-lg-10 col-md-10 col-sm-12 col-12">
              <div className="apply-now">
                <h4>apply now</h4>
                <h6>
                  Your immigration overseas is just a click away. Check your
                  eligbility for free.
                </h6>
                <Button variant="primary" className="services-button">
                  Take a free assessment
                </Button>
                {/* <div className="worldclass-services-box-button">
                  <Link to={"#"}>Take a free assessment</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
