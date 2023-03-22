import React from "react";
import { Link } from "react-router-dom";
const ImmigrationNews = () => {
  return (
    <>
      <div className="container-fluid container-fluid-padding">
        <div className="col-lg-12">
          <div className="immigration-news-heading">
            <h4>Immigration News</h4>
            <h5>Top Announcements</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="immigration-news-card">
                  <div className="immigration-news-card-img-box">
                    <img
                      src="./home/immigration-news-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="immigration-news-card-content">
                    <h6>Italy</h6>
                    <Link to="#">
                      <img src="./home/share.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="immigration-news-card">
                  <div className="immigration-news-card-img-box">
                    <img
                      src="./home/immigration-news-img2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="immigration-news-card-content">
                    <h6>
                      London, UK <span>$4.2k</span>
                    </h6>
                    <Link to="#">
                      <img src="./home/share.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="immigration-news-card">
                  <img
                    src="./home/decore.png"
                    alt=""
                    className="img-fluid decore-img"
                  />
                  <div className="immigration-news-card-img-box">
                    <img
                      src="./home/immigration-news-img3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="immigration-news-card-content">
                    <h6>
                      Italy <span>$15k</span>
                    </h6>
                    <Link to="#">
                      <img src="./home/share.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImmigrationNews;
