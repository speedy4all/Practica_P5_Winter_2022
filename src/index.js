import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import AppProvider from "./context/App/AppProvider";

const root = document.getElementById("root");

const main = createRoot(root);

main.render(
  <AppProvider>
    <App />
  </AppProvider>
);
