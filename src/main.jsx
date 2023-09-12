// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./components/LanguageContext";
ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("root")
);
