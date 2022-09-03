import React from "react";
import CodeSnippet from "../../../../../eco-components/Z/CodeSnippet";
import Input from "../../../../../eco-elements/elements/Input/Input";
import Column from "../../../../../eco-layout/layout/Column/Column";
import Row from "../../../../../eco-layout/layout/Row/Row";
import Layout from "../../layout/Layout";

const FormEntryPage = () => {
  return (
    <Layout>
      <h1>Input Element</h1>
      <p>To collect input from users</p>
      <hr />
      <Row>
        <Column>
          <p>Default input</p>
          <Input placeholder="Placeholder" />
        </Column>
      </Row>
      <CodeSnippet code={`<Input placeholder="Placeholder"/>`} />
    </Layout>
  );
};

export default FormEntryPage;
