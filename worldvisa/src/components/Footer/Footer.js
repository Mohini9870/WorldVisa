import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {" "}
      <footer id="footer">
        <div className="leftFooter">
          <a href="/">
            <img alt="logo" src="./image/logo.png" width="250px" />
          </a>
          <p>Your Partner in Immigration Success</p>
        </div>

        <div className="midFooter">
          <h4>Company</h4>
          <div>
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              About
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Careers
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Mobile
            </a>{" "}
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Help/FAQ
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Press
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Affilates
            </a>
          </div>
        </div>
        <div className="rightFooter">
          <h4>More</h4>
          <div>
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Immigration
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Visa Categories
            </a>
            <br />
            <a href="/" style={{ color: "#808080", fontWeight: "bold" }}>
              Free Assessment
            </a>
          </div>
        </div>
        <div className="right-icon">
          <div className="icons d-flex justify-content-end ">
            <button className="btn shadow-sm p-3 mb-5 bg-white rounde me-2">
              <BsFacebook />
            </button>
            <button
              className="btn shadow-sm p-3 mb-5 bg-white rounde me-2"
              style={{ backgroundColor: "#808080" }}
            >
              <BsInstagram />
            </button>
            <button className="btn shadow-sm p-3 mb-5 bg-white rounde me-2">
              <BsTwitter />
            </button>
          </div>
        </div>
      </footer>
      <div className="copy">
        <small>&copy; Mohini, 2023. All rights reserved.</small>
      </div>
    </>
  );
};

export default Footer;
