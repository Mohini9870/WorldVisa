import React, { useState } from "react";
import "./Navbar.css";
import { FiCheck } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FcRight } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
// import { useNavigate } from "react-router-dom";
import CardCanada from "../Card/CardCanada";
import ImmigrationPathways from "../Card/ImmigrationPathways/ImmigrationPathways";
import MainCard from "./MainCard";
import Contact from "../Contact/Contact";

const Canada = () => {
  // const navigate = useNavigate();
  // const [active, setActive] = useState("");
  const [showResults, setHideCards] = useState(true);
  // console.log(showResults);
  const [classNameClicked, setClassName] = useState("");
  console.log(classNameClicked);
  const onClick = (e) => {
    e.preventDefault();
    const cName = e.target.className;
    setHideCards(false);
    if (cName === "whycanada btn btn-link") {
      setClassName("whycanada");
    } else if (cName === "immigration btn btn-link") {
      setClassName("immigration");
    }
  };

  return (
    <>
      {/* Start Main Section */}
      {/* <div className="w-100"> */}
      <div className="link p-3">
        <a style={{ color: "#808080" }} href="#home">
          Home
        </a>
        &emsp;
        <span style={{ color: "#808080" }}>|</span>
        &emsp;
        <a style={{ color: "#808080" }} href="#immigration">
          Immigration
        </a>
      </div>
      <div>
        <div>
          <a className="immi" href="#immigration">
            Immigration
          </a>
        </div>
        <div className="main">
          <h1 className="heading-canada">Canada</h1>
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
        {/* <button className="btn">Take a FREE assesment</button> */}
        {/* <div>
            <Button variant="primary">Primary</Button>
          </div>{" "} */}

        <Stack direction="horizontal" gap={3}>
          {showResults && (
            <div>
              <Card className="card cardone shadow p-1 mb-5 mt-5 bg-white rounded">
                <Card.Body>
                  <img
                    src="../../img/img_iconbookdatabase.svg"
                    alt="not found"
                  />
                  <Card.Title className="card-title">
                    Why Choose Canada?
                  </Card.Title>

                  <Card.Text className="card-text">
                    Australia'srich culture, well-paying employment, excellent
                    hearthchare system, minimal air pollution, excellent
                    educational system.......
                  </Card.Text>
                  <Button
                    variant="link"
                    onClick={onClick}
                    className="whycanada"
                  >
                    Read more <FcRight />
                  </Button>
                </Card.Body>
              </Card>
              {/* {active === "firstcard" && <CardCanada />} */}
            </div>
          )}
          {showResults && (
            <div>
              <Card className="card cardtwo shadow p-1 mb-5 bg-white rounded">
                <Card.Body>
                  <img
                    src="../../img/img_signal_blue_a700.svg"
                    alt="not found"
                  />
                  <Card.Title>Calculate PR Score</Card.Title>

                  <Card.Text className="card-text">
                    Check your Egibility to Migrate to Australia for Free{" "}
                  </Card.Text>
                  <Button variant="link" onClick={onClick} className="prscore">
                    Read more <FcRight />
                  </Button>
                </Card.Body>
              </Card>
            </div>
          )}
        </Stack>

        <Row className="mb-3">
          {showResults && (
            <Col>
              <Card className="card cardthree shadow p-1 mb-5 bg-white rounded">
                <Card.Body>
                  <img src="../../img/img_trash.svg" alt="not found" />
                  <Card.Title>PR Application Process</Card.Title>

                  <Card.Text className="card-text">
                    Big data infrastructure setup and support; big data quality
                    and security management; big data capture, analysis and
                    reporting.
                  </Card.Text>
                  <Button
                    variant="link"
                    onClick={onClick}
                    className="whycanada"
                  >
                    Read more <FcRight />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
          <Col>
            {showResults && (
              <Card className="card cardfourth shadow p-1 mb-5 bg-white rounded">
                <Card.Body>
                  <img
                    src="../../img/img_trash_blue_a700.svg"
                    alt="not found"
                  />
                  <Card.Title>Immigration Pathways</Card.Title>

                  <Card.Text className="card-text">
                    Migrate to Canada Depanding on you
                  </Card.Text>
                  <Button
                    variant="link"
                    //  onClick={() => setActive("fourcard")}
                    onClick={onClick}
                    className="immigration"
                  >
                    Read more <FcRight />
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
        <Row className="mb-3">
          {showResults && (
            <Col>
              <Card className="card cardfive shadow p-1 mb-5 bg-white rounded">
                <Card.Body>
                  <img
                    src="../../img/img_clock_blue_a700.svg"
                    alt="not found"
                  />
                  <Card.Title>Useful Canadian Resources</Card.Title>

                  <Card.Text className="card-text">
                    Big data infrastructure setup and support; big data quality
                    and security management; big data capture, analysis and
                    reporting.
                  </Card.Text>
                  <Button
                    variant="link"
                    //  onClick={() => setActive("fivecard")}
                  >
                    Read more <FcRight />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {!showResults && classNameClicked === "whycanada" && <CardCanada />}
        {!showResults && classNameClicked === "immigration" && (
          <ImmigrationPathways />
        )}
      </div>
      {/* <section>
          <div>
            <div className="split left">
              <img src="./image/australia-migration.jpg" alt="Not found" />
            </div>
            <div
              className="split right"
              style={{
                backgroundColor: "#edf4f7",
              }}
            >
              <h2>Why Choose us?</h2>
            </div>
          </div>
        </section> */}

      <Row className="g-0">
        <Col>
          <img
            className="left"
            src="./image/australia-migration.jpg"
            alt="Not found"
          />
        </Col>
        <Col
          className="right  me-0"
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
              Experience and Expertise
            </h5>
            <p style={{ color: "#C5C5C5" }} className="ms-5">
              Carring nearly 100+ year of combined experise in the immigration
              industry, our team of professional migration lawyers and
              solicitors is here to guide you step of the
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
              Strong Track Record
            </h5>
            <p style={{ color: "#C5C5C5" }} className="ms-5">
              With a 98.9% success rate, WorldVisa has been the trusted
              consultancy for lakhs of clients from across the globe.
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
              Flexible and pocket-friendly pricing models
            </h5>
            <p style={{ color: "#C5C5C5" }} className="ms-5">
              Whether you choose to take charge of your own application or
              require handheld guidance along the way,we offer several
              immigration toolkit options that are customised just for you.
            </p>
          </div>
        </Col>
      </Row>

      <div>
        <MainCard />
      </div>
      <div>
        <Contact />
      </div>
      {/* </div> */}
      {/* End Main Section */}
    </>
  );
};

export default Canada;
