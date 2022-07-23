import React from "react";
import FormEntry from "../../../eco-components/FormEntry/FormEntry";
import Section from "../../../eco-layout/Section/Section";

const Form = () => {
  return (
    <div className="Form">
      <h1>Form Entry</h1>
      <Section>
        <FormEntry
          label="First name"
          description="Same as appears on your passport"
        />
        <FormEntry
          label="Last name"
          description="Same as appears on your passport"
        />
      </Section>
    </div>
  );
};

export default Form;
