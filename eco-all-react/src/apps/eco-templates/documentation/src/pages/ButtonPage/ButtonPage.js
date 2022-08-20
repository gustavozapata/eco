import React from "react";
import Layout from "../../layout/Layout";
import Button from "../../../../../eco-elements/elements/Button/Button";

const ButtonPage = () => {
  return (
    <Layout>
      <h1>Button Element</h1>
      <p>The button is a clickable element</p>
      <hr />
      <div>
        <Button label="Button" />
      </div>
      <div>
        <p>Long and short label</p>
        <Button label="Buy tickets today" />
        <br />
        <Button label="OK" />
      </div>
      <div>
        <p>Disabled</p>
        <Button label="Button" disabled />
      </div>
      <div>
        <p>Secondary</p>
        <Button label="Button" variant="secondary" />
      </div>
      <div>
        <p>Left icon</p>
        <Button label="Button" leftIcon="folder" />
      </div>
    </Layout>
  );
};

export default ButtonPage;
