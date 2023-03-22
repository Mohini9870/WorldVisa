import React, { useState } from "react";
import "./AusCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FcRight } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import WhychooseAus from "../Cards/WhychooseAus";
import Immigration from "../Cards/ImmigrationPaths/Immigration";
const AusCard = () => {
  const [showResults, setHideCards] = useState(true);
  // console.log(showResults);
  const [classNameClicked, setClassName] = useState("");
  console.log(classNameClicked);
  const onClick = (e) => {
    e.preventDefault();
    const cName = e.target.className;
    setHideCards(false);
    if (cName === "whyaus btn btn-link") {
      setClassName("whyaus");
    } else if (cName === "immigration btn btn-link") {
      setClassName("immigration");
    }
  };

  return (
    <div>
      {" "}
      <Stack direction="horizontal" gap={3}>
        {showResults && (
          <div>
            <Card
              className="card shadow p-1 mb-5 mt-5 bg-white rounded"
              style={{ width: "26rem", marginLeft: "300px" }}
            >
              <Card.Body>
                <img src="../../img/img_iconbookdatabase.svg" alt="not found" />
                <Card.Title className="card-title">
                  Why Choose Australia?
                </Card.Title>

                <Card.Text className="card-text">
                  Australia'srich culture, well-paying employment, excellent
                  hearthchare system, minimal air pollution, excellent
                  educational system.......
                </Card.Text>
                <Button variant="link" onClick={onClick} className="whyaus">
                  Read more <FcRight />
                </Button>
              </Card.Body>
            </Card>
            {/* {active === "firstcard" && <CardCanada />} */}
          </div>
        )}
        {showResults && (
          <div>
            <Card
              className="card shadow p-1 mb-5 mt-5 bg-white rounded"
              style={{ width: "22rem", height: "14rem" }}
            >
              <Card.Body>
                <img src="../../img/img_signal_blue_a700.svg" alt="not found" />
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
        <Col>
          {showResults && (
            <Card
              className="card shadow p-1 mb-5 bg-white rounded"
              style={{ width: "50rem", height: "15rem", marginLeft: "295px" }}
            >
              <Card.Body>
                <img src="../../img/img_trash_blue_a700.svg" alt="not found" />
                <Card.Title>Immigration Pathways</Card.Title>

                <Card.Text className="card-text">
                  The process of constructing and using data werehouse.
                  <br /> Data Werehouse and data marts design and
                  implementation.
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
      {!showResults && classNameClicked === "whyaus" && (
        <WhychooseAus onClose={() => setHideCards(true)} />
      )}
      {!showResults && classNameClicked === "immigration" && <Immigration />}
    </div>
  );
};

export default AusCard;
