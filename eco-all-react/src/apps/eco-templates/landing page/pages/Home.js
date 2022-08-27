import React from "react";
import Container from "../../../eco-layout/layout/Container/Container";
import Page from "../../../eco-layout/layout/Page/Page";
import Section from "../../../eco-layout/layout/Section/Section";
import Wrapper from "../../../eco-layout/layout/Wrapper/Wrapper";

const Home = () => {
  return (
    <Page>
      <Container>
        <Section>
          <h1>Section whole screen - &lt;Section no width prop /&gt;</h1>
        </Section>
        <Section width="50%">
          <h1>Section half screen - &lt;Section width="50%" /&gt;</h1>
        </Section>
        <Section width="25%">
          <h1>Section quater screen</h1>
        </Section>
        <Section width="75%">
          <Wrapper flex absolute>
            <h1>Section 75% screen</h1>
            <h2>And wrapped with Wrapper</h2>
          </Wrapper>
        </Section>
        <Section split={2}>
          <div>
            <h2>Half screen</h2>
          </div>
          <div>
            <h2>Half screen</h2>
          </div>
        </Section>
        <Section width="60%" split={3}>
          <div>
            <h2>third screen</h2>
          </div>
          <div>
            <h2>third screen</h2>
          </div>
          <div>
            <h2>third screen</h2>
          </div>
        </Section>
      </Container>

      <Section>
        <p>full screen width</p>
      </Section>
    </Page>
  );
};

export default Home;
