import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./axios/globalinstance"; // for global instance have to import this file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
