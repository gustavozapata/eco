import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import "./ComponentPage.css";

const ComponentPage = () => {
  const location = useLocation();

  return (
    <Layout>
      <h1>Component Page</h1>
      <h2>{location.state.component}</h2>
    </Layout>
  );
};

export default ComponentPage;
