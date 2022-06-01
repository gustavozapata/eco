import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as LandingPage } from "./apps/eco-templates/landing page/pages/Home";
import { default as Documentation } from "./apps/eco-templates/documentation/src/pages/Home";
import ComponentPage from "./apps/eco-templates/documentation/src/pages/ComponentPage/ComponentPage";
import App from "./App";
import Button from "./apps/eco-templates/documentation/src/pages/Button/Button";
import "./index.css";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/templates/landing-page" element={<LandingPage />} />
      <Route path="/templates/documentation" element={<Documentation />} />
      <Route path="/templates/documentation/Button" element={<Button />} />
      <Route
        path="/templates/documentation/:componentName"
        element={<ComponentPage />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
