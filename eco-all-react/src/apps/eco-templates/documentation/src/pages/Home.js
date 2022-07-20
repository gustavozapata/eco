import React from "react";
import Layout from "../layout/Layout";
import "./DocumentationApp.css"; //FIXME: these styles will be app/template level e.g. Documentation will have glabal styles
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Documentation</h1>
        <h2>Elements</h2>
        <h2>Components</h2>
      </div>
    </Layout>
  );
};

export default Home;
