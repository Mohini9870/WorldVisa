import React from "react";
import ApplyNow from "./ApplyNow";
import EasyandFastProcess from "./EasyandFastProcess";
import ImmigrationNews from "./ImmigrationNews";
import Layout from "./Layout";
import WorldclassService from "./WorldclassService";

const Home = () => {
  return (
    <>
      <Layout />
      <WorldclassService />
      <ApplyNow />
      <EasyandFastProcess />
      <ImmigrationNews />
    </>
  );
};

export default Home;
