import React from "react";
import Container from "../../../../eco-layout/layout/Container/Container";
import Page from "../../../../eco-layout/layout/Page/Page";
import Section from "../../../../eco-layout/layout/Section/Section";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Page className="Layout">
      <Container>
        <Section position="fixed-top" />
        <Section position="fixed-left">
          <nav>
            <ul>
              <h3>Elements</h3>
              <li>
                <Link
                  to="/templates/documentation/Label"
                  state={{ component: "Label" }}
                >
                  Label
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Button"
                  state={{ component: "Button" }}
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Input"
                  state={{ component: "Input" }}
                >
                  Input
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Checkbox"
                  state={{ component: "Checkbox" }}
                >
                  Checkbox
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Radio"
                  state={{ component: "Radio" }}
                >
                  Radio
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Toggle"
                  state={{ component: "Toggle" }}
                >
                  Toggle
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Avatar"
                  state={{ component: "Avatar" }}
                >
                  Avatar
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Icon"
                  state={{ component: "Icon" }}
                >
                  Icon
                </Link>
              </li>
              <h3>Components</h3>
              <li>
                <Link
                  to="/templates/documentation/Form-Entry"
                  state={{ component: "FormEntry" }}
                >
                  Form Entry
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Dropdown"
                  state={{ component: "Dropdown" }}
                >
                  Dropdown
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Modal"
                  state={{ component: "Modal" }}
                >
                  Modal
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Card"
                  state={{ component: "Card" }}
                >
                  Card
                </Link>
              </li>
              <li>
                <Link
                  to="/templates/documentation/Search-Bar"
                  state={{ component: "Search Bar" }}
                >
                  Search Bar
                </Link>
              </li>
            </ul>
          </nav>
        </Section>
      </Container>
      <Section className="main-section" position="main">
        {children}
      </Section>
    </Page>
  );
};

export default Layout;
