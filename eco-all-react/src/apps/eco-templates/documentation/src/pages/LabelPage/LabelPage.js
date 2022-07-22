import React from "react";
import Layout from "../../layout/Layout";
import Label from "../../../../../eco-elements/Label/Label";

const LabelPage = () => {
  return (
    <Layout>
      <h1>Label Element</h1>
      <p>A text element</p>
      <hr />
      <div>
        <Label label="Heading" type="heading" />
        <Label label="Subheading" type="subheading" />
        <Label
          label="This is a normal text that is used in paragraphs"
          type="text"
        />
        <Label label="Subtext" type="subtext" />
      </div>
    </Layout>
  );
};

export default LabelPage;
