import { createGlobalStyle } from "styled-components";

const neomorphic = {
  BackgroundColor: "#ECF0F3",
  BackgroundTheme: "linear-gradient(93.83deg, #F46A5A 0.35%, #ED916D 96.77%)",
  BackgroundThemeHover:
    "linear-gradient(93.83deg,#f16f61 0.35%,#eb9877 96.77%)",
  BoxShadow1: "-10px -10px 20px #FFFFFF",
  BoxShadow2: "10px 10px 20px #D1D9E6",
  ColorVariant1: "#de7f5f",
  ColorVariant2: "#ee8b6a",
};
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background: ${neomorphic.BackgroundColor};
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
`;

export { neomorphic, GlobalStyle };
