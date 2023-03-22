import React from "react";
import "./Layout.css";
import Button from "react-bootstrap/Button";
const Layout = () => {
  return (
    <>
      <div className="banner-bg">
        <div className="container-fluid container-fluid-padding">
          <div className="row">
            <div className="col-sm-6">
              <div className="banner-content">
                <h4>Immigration process made simple. just for you.</h4>
                <h5>
                  Introducing world’s first{" "}
                  <span>
                    <img
                      src="./home/text-underline.png"
                      alt=""
                      className="img-fluid"
                    />
                    ‘Personalised’
                  </span>{" "}
                  Immigration Toolkits
                </h5>
                <p>
                  All-in-one DIY Immigration toolkits, personalised to meet your
                  Immigration goals and help you take charge of your own
                  application, at each and every step.
                </p>

                <Button variant="warning" className="btn">
                  Find out more
                </Button>
                <div>
                  <Button variant="link" className="btn-v">
                    <span>
                      <img
                        src="./home/play.svg"
                        alt="not found"
                        className="img-fluid"
                      />
                    </span>
                    Watch a video
                  </Button>
                </div>
                <div>
                  <Button variant="primary" className="m-4 btn-assessment">
                    Take a free Assesment
                  </Button>
                </div>
              </div>
            </div>
            <div className=" col-sm-6">
              <img
                src="./home/banner-girl.png"
                alt="not found"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
