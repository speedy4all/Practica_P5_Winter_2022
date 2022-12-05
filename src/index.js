import React from "react";
import { createRoot } from "react-dom/client";
import App from './containers/App';

const root = document.getElementById("root");

const main = createRoot(root);

main.render(<App />);
