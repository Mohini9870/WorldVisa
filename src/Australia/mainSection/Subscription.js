import { Button } from "@mui/material";
import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <>
      <div className="subs">
        <div className="contactone">
          <h2 className="help mb-3" style={{ color: "#fff" }}>
            Subscription to our newsletter
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.1
            <br /> Beatae impedit totam possimus aspernatur optio cumque?
          </p>
        </div>
        <div className="send mt-5">
          <input type="email" placeholder="Your Mail" className="email" />
          <Button variant="contained" className="btn">
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
