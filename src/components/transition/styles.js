import styled from "styled-components";

export const TransitionComponent = styled.section`
  background: ${(props) => props.theme.BackgroundTheme};
  position: fixed;
  top: 0;
  transform: translateX(100vw);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  z-index: 20;
  h1 {
    margin-top: calc(20vh + 30px);
    font: normal 72px "Roboto", sans-serif;
  }
  h2 {
    font: 300 47px "Roboto", sans-serif;
  }
  @media screen and (max-width: 428px) {
    h2 {
      font-size: 36px;
    }
  }
`;
