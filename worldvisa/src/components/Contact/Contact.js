import { Button } from "@mui/material";
import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactone">
          <h3 className="help">Do you need help?</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.1
            <br /> Beatae impedit totam possimus aspernatur optio cumque?
          </p>
          <Button variant="contained" className="btn">
            Contact us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
