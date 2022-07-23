import React, { useState } from "react";
import FormEntry from "../../../../../eco-components/FormEntry/FormEntry";
import CodeSnippet from "../../../../../eco-components/Z/CodeSnippet";
import Column from "../../../../../eco-layout/Column/Column";
import Row from "../../../../../eco-layout/Row/Row";
import Layout from "../../layout/Layout";

const FormEntryPage = () => {
  const [value, setValue] = useState("Some value");
  return (
    <Layout>
      <h1>Input Element</h1>
      <p>To enter text and other input</p>
      <hr />
      <Row>
        <Column>
          {/* <h3>No value</h3> */}
          <FormEntry placeholder="Placeholder" />
        </Column>
        <Column>
          {/* <h3>Value</h3> */}
          <FormEntry
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            placeholder="Placeholder"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FormEntry label="Label" placeholder="Placeholder" />
        </Column>
        <Column>
          <FormEntry
            label="Label"
            description="Description"
            placeholder="Placeholder"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FormEntry
            disabled
            placeholder="Placeholder"
            feedback="This input is disabled"
          />
        </Column>
        <Column>
          <FormEntry placeholder="Placeholder" feedback="Error message" error />
          <CodeSnippet
            code={`<FormEntry placeholder="Placeholder" feedback="Error message" error />`}
          />
        </Column>
      </Row>
    </Layout>
  );
};

export default FormEntryPage;
