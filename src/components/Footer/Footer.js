import React from "react";
// import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="container mt-5 ">
        <div className="row  gy-5">
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <div className="footer-content">
              <Link to={"/"}>
                <img
                  src="./home/worldVisaLogo.png"
                  alt=""
                  className="img-fluid"
                />
              </Link>
              <p>Your Partners in immigration success</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <div className="footer-content">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Refund Policy</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <div className="footer-content">
              <h5>Contact</h5>
              <ul>
                <li>
                  <Link to="#">Help/FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <div className="footer-content">
              <h5>More</h5>
              <ul>
                <li>
                  <Link to="#">Immigration Packages</Link>
                </li>
                <li>
                  <Link to="#">Migrate to Australia</Link>
                </li>
                <li>
                  <Link to="#">Migrate to Canada</Link>
                </li>
                <li>
                  <Link to="#">Free Assessment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-12">
          <div className="copy-rights">
            <p>All rights reserved@worldvisa.in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
