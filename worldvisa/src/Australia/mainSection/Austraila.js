import React from "react";
import "./Australia.css";
import Button from "react-bootstrap/esm/Button";
import AusCard from "./AusCard";
import { FiCheck } from "react-icons/fi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCard from "../../components/Navbar/MainCard";
import Contact from "../../components/Contact/Contact";
import Subscription from "./Subscription";
const Austraila = () => {
  return (
    <div>
      <div className="link p-3">
        <a style={{ color: "#808080" }} href="#home">
          Home
        </a>
        &emsp;
        <span style={{ color: "#808080" }}>|</span>
        &emsp;
        <a style={{ color: "black" }} href="#immigration">
          Immigration
        </a>
      </div>
      <div>
        <div>
          <a
            href="#immigration"
            style={{ marginLeft: "640px", textDecoration: "none" }}
          >
            Immigration
          </a>
        </div>
        <div>
          <h1 style={{ marginLeft: "600px" }} className="p-3">
            Austraila
          </h1>
          <br />
          <p className="para">
            Between 2022 amd 2024, Canada aims to accept over 400,000 new
            immigraints. with one of the world's most open and dynamic
            immigration systems, Canada welcomes immigrants from all over the
            world. this page provides an overview of over 100 immigration routes
            for skilled workers, businesspeople, and families, and families. o
            you wosh to move to Canada?then you've arrivied to the right place.
            CanadaVisa can help you determine how to make your Canada dream a
            reality. thhere are sevrel reasons why people opt to immigrateto
            Canada. Wheter it's to seek a high-quality education, to feel secure
            with free universal healthcare, or to enjoy Canada's high Standard
            of living, Canadaa has it all.
          </p>
        </div>
        <div>
          <h1 className="heading mb-3">
            Take our FREE assesment to find out your egibility for Canada PR
          </h1>
        </div>
      </div>
      <div>
        <AusCard />
      </div>
      <div>
        <Row className="g-0">
          <Col className="">
            <img src="./image/australia-migration.jpg" alt="Not found" />
          </Col>
          <Col
            className="w-50 me-0"
            style={{
              backgroundColor: "#edf4f7",
            }}
          >
            <h2 className="heaing-us mt-5 ms-4 mb-5">Why Choose us?</h2>
            <div>
              <h5
                className="ms-5"
                style={{ fontSize: "15px", fontWeight: "700" }}
              >
                <FiCheck
                  className="me-2"
                  style={{
                    color: "blue",
                    fontWeight: "800",
                    fontSize: "25px",
                  }}
                />
                Machine learning
              </h5>
              <p style={{ color: "#C5C5C5" }} className="ms-5">
                Ar vero eos et accumsamus et iusto odio dignissious qui
                blandtiss praesentium voluptatum deleinit atque corrupati quos
                dolores.
              </p>
            </div>
            <div>
              <h5
                className="ms-5"
                style={{ fontSize: "15px", fontWeight: "700" }}
              >
                <FiCheck
                  className="me-2"
                  style={{
                    color: "blue",
                    fontWeight: "800",
                    fontSize: "25px",
                  }}
                />
                Embed analytics
              </h5>
              <p style={{ color: "#C5C5C5" }} className="ms-5">
                Ar vero eos et accumsamus et iusto odio dignissious qui
                blandtiss praesentium voluptatum deleinit atque corrupati quos
                dolores.
              </p>
            </div>
            <div className="mb-5">
              <h5
                className="ms-5"
                style={{ fontSize: "15px", fontWeight: "700" }}
              >
                <FiCheck
                  className="me-2"
                  style={{
                    color: "blue",
                    fontWeight: "800",
                    fontSize: "25px",
                  }}
                />
                Access controls
              </h5>
              <p style={{ color: "#C5C5C5" }} className="ms-5">
                Ar vero eos et accumsamus et iusto odio dignissious qui
                blandtiss praesentium voluptatum deleinit atque corrupati quos
                dolores.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <MainCard />
      </div>
      <div>
        {" "}
        <Contact />
      </div>
      <div>
        <Subscription />
      </div>
    </div>
  );
};

export default Austraila;
