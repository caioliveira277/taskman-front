import styled from "styled-components";
import Container from "../../container/styles";

export const ContainerModified = styled(Container)`
  background: url(${process.env.PUBLIC_URL}/assets/images/ilustracao-painel-curvas-1.svg)
    bottom no-repeat;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
  figure {
    img {
      margin: 0 auto;
      display: block;
      box-shadow: ${(props) => props.theme.BoxShadow1},
        ${(props) => props.theme.BoxShadow2};
      border-radius: 50%;
      width: 190px;
      height: 190px;
    }
    figcaption {
      font: normal 38px "Roboto", sans-serif;
      text-align: center;
      margin-top: 10%;
    }
  }
  hr {
    border: 1px solid #c8c8c8;
    width: 95%;
    margin: 50px 0;
  }
  .resultados {
    h2 {
      font: normal 28px "Roboto", sans-serif;
      color: #4d4d4d;
      margin-bottom: 30px;
    }
    div {
      text-align: center;
      margin-bottom: 18px;
      h3 {
        font: 300 normal 22px "Roboto", sans-serif;
        margin-bottom: 10px;
      }
      span {
        font: normal 44px "Roboto Mono", monospace;
        color: ${(props) => props.theme.ColorVariant1};
        i {
          color: #505050;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const ButtonToggle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 32px;
  height: 32px;
  align-self: flex-end;
  :active {
    transform: scale(0.98);
  }
  i {
    font-size: 32px;
    color: ${(props) => props.theme.ColorVariant1};
    :hover {
      color: ${(props) => props.theme.ColorVariant2};
    }
  }
`;

export const ButtonAddTask = styled.button`
  border: none;
  background: ${(props) => props.theme.BackgroundTheme};
  border-radius: 5px;
  font: 600 18px "Roboto", sans-serif;
  transition: all 200ms;
  color: #ffffff;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 10px #00000045;
  text-align: center;
  max-width: 140px;
  margin-bottom: 50px;
  :hover {
    box-shadow: 0px 5px 10px #00000045;
  }
  :active {
    box-shadow: 0px 3px 10px #00000045;
  }
  i {
    font-size: 28px;
    margin-right: 5px;
  }
`;