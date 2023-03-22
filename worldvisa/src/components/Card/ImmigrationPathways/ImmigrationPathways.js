import React from "react";
import "./ImmigrationPathways.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
import SkilledWorker from "./SkilledWorker";
import ExpressEntry from "./ExpressEntry";
import ProvincialNomineeProgram from "./ProvincialNomineeProgram";
import QuebecImmigration from "./QuebecImmigration";
import AtlanticImmigrationProgram from "./AtlanticImmigrationProgram";
import OtherFederalSkilledWorker from "./OtherFederalSkilledWorker";
import BusinessImmigration from "./BusinessImmigration";
import FamilyClassSponsorship from "./FamilyClassSponsorship";
import HelpfulCanada from "./HelpfulCanada";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>

    //  <ul className="bs-docs-sidenav nav">
    //   <li>
    //     <a href="/SkilledWorker">Skilled Worker Immigration Pathways</a>
    //   </li>
    //   <li>
    //     <a href="/ExpressEntry">Express Entry</a>
    //   </li>
    //   <li>
    //     <a href="/ProvincialNomineeProgram">Provincial Nominee Program</a>
    //   </li>
    //   <li>
    //     <a href="/QuebecImmigration">Quebec Immigration</a>
    //   </li>
    //   <li>
    //     <a href="/AtlanticImmigrationProgram">Atlantic Immigration Program</a>
    //   </li>
    //   <li>
    //     <a href="/OtherFederalSkilledWorker">
    //       {" "}
    //       Other Federal Skilled Worker Programs
    //     </a>
    //   </li>
    //   <li>
    //     <a href="/BusinessImmigration">Business Immigration</a>
    //   </li>
    //   <li>
    //     <a href="/FamilyClassSponsorship">Family Class Sponsorship</a>
    //   </li>
    //   <li>
    //     <a href="/HelpfulCanada"> Helpful Canada Immigration Resources</a>
    //   </li>
    // // </ul>
    //  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    //   <h2
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       marginTop: "10px",
    //       marginBottom: "15px",
    //     }}
    //   >
    //     Immigration Pathways
    //   </h2>
    //   <Row style={{ marginLeft: "90px" }}>
    //     <Col sm={3}>
    //       <Nav variant="pills" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link eventKey="first">
    //             Skilled Worker Immigration Pathways
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link eventKey="second">Express Entry</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="third">Provincial Nominee Program</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="fourth">Quebec Immigration</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="five">
    //             Atlantic Immigration Program
    //           </Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="six">
    //             Other Federal Skilled Worker Programs
    //           </Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="seven">Business Immigration</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="eight">Family Class Sponsorship</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="nine">
    //             {" "}
    //             Helpful Canada Immigration Resources
    //           </Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Col>
    //     <Col sm={9}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first">
    //           <SkilledWorker />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="second">
    //           <ExpressEntry />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="third">
    //           <ProvincialNomineeProgram />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="fourth">
    //           <QuebecImmigration />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="five">
    //           <AtlanticImmigrationProgram />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="six">
    //           <OtherFederalSkilledWorker />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="seven">
    //           <BusinessImmigration />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="eight">
    //           <FamilyClassSponsorship />
    //         </Tab.Pane>

    //         <Tab.Pane eventKey="nine">
    //           <HelpfulCanada />
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ImmigrationPathways() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            fontWeight: "bold",
          }}
        >
          Immigration Pathays
        </h2>
      </div>
      <div className="container-main fluid">
        {/* Left section */}
        <div className="left-section ms-5">
          {" "}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className="me-5"
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              label="Skilled Worker Immigration Pathways"
              {...a11yProps(0)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label="Express Entry"
              {...a11yProps(1)}
              //  sx={{ width: "50px" }}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label="Provincial Nominee Program"
              {...a11yProps(2)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label="Quebec Immigration"
              {...a11yProps(3)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label=" Atlantic Immigration Program"
              {...a11yProps(4)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label=" Other Federal Skilled Worker Programs"
              {...a11yProps(5)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label="Business Immigration"
              {...a11yProps(6)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label="Family Class Sponsorship"
              {...a11yProps(7)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
            <Tab
              label=" Helpful Canada Immigration Resources"
              {...a11yProps(8)}
              sx={{ fontSize: "0.55rem", fontWeight: "700" }}
            />
          </Tabs>
        </div>

        {/* Right section */}
        <div className="right-section">
          {" "}
          <TabPanel value={value} index={0}>
            <SkilledWorker />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ExpressEntry />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProvincialNomineeProgram />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <QuebecImmigration />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <AtlanticImmigrationProgram />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <OtherFederalSkilledWorker />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <BusinessImmigration />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <FamilyClassSponsorship />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <HelpfulCanada />
          </TabPanel>
        </div>
      </div>

      {/* <div classname="container">
        <Row >
          <Col
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 550,
              // width: 600,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              className="me-5 w-50"
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                label="Skilled Worker Immigration Pathways"
                {...a11yProps(0)}
                sx={{ fontSize: "10px" }}
              />
              <Tab
                label="Express Entry"
                {...a11yProps(1)}
                //  sx={{ width: "50px" }}
              />
              <Tab label="Provincial Nominee Program" {...a11yProps(2)} />
              <Tab label="Quebec Immigration" {...a11yProps(3)} />
              <Tab label=" Atlantic Immigration Program" {...a11yProps(4)} />
              <Tab
                label=" Other Federal Skilled Worker Programs"
                {...a11yProps(5)}
              />
              <Tab label="Business Immigration" {...a11yProps(6)} />
              <Tab label="Family Class Sponsorship" {...a11yProps(7)} />
              <Tab
                label=" Helpful Canada Immigration Resources"
                {...a11yProps(8)}
              />
            </Tabs>
          </Col>
          <Col className="w-50" sx={{ width: 700, marginRight: "8rem" }}>
            <TabPanel value={value} index={0}>
              <SkilledWorker />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ExpressEntry />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ProvincialNomineeProgram />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <QuebecImmigration />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <AtlanticImmigrationProgram />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <OtherFederalSkilledWorker />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <BusinessImmigration />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <FamilyClassSponsorship />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <HelpfulCanada />
            </TabPanel>
          </Col>
        </Row>
      </div> */}
    </>
  );
}
