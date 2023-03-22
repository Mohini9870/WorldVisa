import React from "react";
import { Link } from "react-router-dom";
import "./Packages.css";
const Banner = () => {
  return (
    <>
      <div className="banner-bg">
        <div className="container-fluid container-fluid-padding">
          <div className="row">
            <div className="col-sm-6">
              <div className="banner-content package-banner">
                <div className="package-img">
                  <img src="./packages/star.png" alt="" />
                  <img src="./packages/star.png" alt="" />
                  <img src="./packages/star.png" alt="" />
                </div>
                <div className="package-content">
                  <h5>
                    Immigration?
                    <br /> now you can
                    <br /> ‘Do-it-Yourself’!
                  </h5>
                  <p>
                    ‘Personalized’ immigration kits that allow you to complete
                    most immigration matters on your own. Easy to follow
                    step-by-step guides for each and every immigration pathway
                    that will help you take charge of your own application. You
                    can complete most immigration matters yourself with our
                    kits. However, there can be some issues that are so complex
                    or so unique that you cannot foresee them. That is where we
                    come in. Our experts will be with you every step of the way,
                    from preparing forms and documents to collecting supporting
                    documents, submitting your application, and following it to
                    ensure its success. Your first eligibility assessment is on
                    us. Take a free assessment to know your PR eligibility to
                    Australia, Canada, Germany or UK
                  </p>

                  <div className="worldclass-services-box-button buy-now-btn">
                    <Link to={"#"}>Take a free assessment</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <img
                src="./packages/img2.png"
                alt="Banner Girl"
                className="img-fluid text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
