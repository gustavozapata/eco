import React, { useState } from "react";
import Dropdown from "../../../../../eco-components/Dropdown/Dropdown";
import Column from "../../../../../eco-layout/Column/Column";
import Row from "../../../../../eco-layout/Row/Row";
import Layout from "../../layout/Layout";

const FormEntryPage = () => {
  const [action, setAction] = useState({
    value: "",
    label: "Select action",
  });
  const [city, setCity] = useState({
    value: "",
    label: "Select city",
  });

  return (
    <Layout>
      <h1>Dropdown Component</h1>
      <p>To select from an array of options</p>
      <hr />
      <Row>
        <Column>
          <p>Default dropdown</p>
          <Dropdown
            name="City"
            options={[
              { value: "cali", label: "Cali" },
              { value: "london", label: "London" },
              { value: "bogota", label: "Bogota" },
            ]}
          />
        </Column>
        <Column>
          <p>Custom dropdown</p>
          <Dropdown
            name="City"
            isCustom
            selected={city}
            handleSelect={(option) => setCity(option)}
            options={[
              { value: "cali", label: "Cali" },
              { value: "london", label: "London" },
              { value: "bogota", label: "Bogota" },
            ]}
          />
        </Column>
        <Column>
          <p>Custom dropdown 2</p>
          <Dropdown
            name="Option"
            isCustom
            selected={action}
            handleSelect={(option) => setAction(option)}
            options={[
              { value: "buy", label: "Buy", icon: "cart", command: "⌘B" },
              { value: "link", label: "Link", icon: "link", command: "⌘L" },
            ]}
          />
        </Column>
      </Row>
    </Layout>
  );
};

export default FormEntryPage;
