import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { neomorphic, GlobalStyle } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={neomorphic}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
