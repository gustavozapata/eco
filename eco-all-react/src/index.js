import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as LandingPage } from "./apps/eco-templates/landing page/pages/Home";
import { default as Documentation } from "./apps/eco-templates/documentation/src/pages/Home";
import ComponentPage from "./apps/eco-templates/documentation/src/pages/ComponentPage/ComponentPage";
import App from "./App";
import LabelPage from "./apps/eco-templates/documentation/src/pages/LabelPage/LabelPage";
import ButtonPage from "./apps/eco-templates/documentation/src/pages/ButtonPage/ButtonPage";
import FormEntryPage from "./apps/eco-templates/documentation/src/pages/FormEntryPage/FormEntryPage";
import DropdownPage from "./apps/eco-templates/documentation/src/pages/DropdownPage/DropdownPage";
import Form from "./apps/eco-templates/landing page/pages/Form";
import "./index.css";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/templates/landing-page" element={<LandingPage />} />
      <Route path="/templates/landing-page/form" element={<Form />} />
      <Route path="/templates/documentation" element={<Documentation />} />
      <Route path="/templates/documentation/Label" element={<LabelPage />} />
      <Route path="/templates/documentation/Button" element={<ButtonPage />} />
      <Route
        path="/templates/documentation/Dropdown"
        element={<DropdownPage />}
      />
      <Route
        path="/templates/documentation/Form-Entry"
        element={<FormEntryPage />}
      />
      <Route
        path="/templates/documentation/:componentName"
        element={<ComponentPage />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
