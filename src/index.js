import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme, Defaults } from "./styles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Defaults />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
