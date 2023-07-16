import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";  NOT Supported in React 18
//import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
