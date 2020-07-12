import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import Store from "./stores";
import { ThemeProvider } from "styled-components";
import { neomorphic, GlobalStyle } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={neomorphic}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
