import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
//import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";

import Subclass189 from "./Subclass189";
import Subclass190 from "./Subclass190";

import { Container } from "@mui/system";

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

export default function Immigration() {
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
      <Container>
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
                label=" Subclass 189( Skilled Independent Visa "
                {...a11yProps(0)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />

              <Tab
                label=" Subclass 190 ( Skilled Independent Visa) "
                {...a11yProps(1)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label=" Subclass 491( Skilled Work Regional (Provisional) Visa "
                {...a11yProps(2)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label="  Subclass 494 : Skilled Employer Sponsored Regional (Provisional)  Visa "
                {...a11yProps(3)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label=" Subclass 491( Skilled Work Regional (Provisional) Visa-Subsequent Entrant"
                {...a11yProps(4)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label="Subclass 858: Global Talent Visa"
                {...a11yProps(5)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label="Subclass 155: (Resident Return Visa)"
                {...a11yProps(6)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
              <Tab
                label=" Subclass 887"
                {...a11yProps(7)}
                sx={{ fontSize: "0.55rem", fontWeight: "700" }}
              />
            </Tabs>
          </div>

          {/* Right section */}
          <div className="right-section">
            {" "}
            <TabPanel value={value} index={0}>
              <Subclass189 />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Subclass190 />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
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
          </TabPanel> */}
          </div>
        </div>
      </Container>
    </>
  );
}
