import styled from "styled-components";
import Container from "../../container/styles";

export const ContainerModified = styled(Container)`
  background: url(${process.env.PUBLIC_URL}/./build/assets/images/ilustracao-painel-curvas-1.svg)
    bottom no-repeat;
  min-height: 960px;
  .close {
    h2,
    h3,
    figcaption,
    p {
      display: none;
    }
    button:not(addTask) {
      align-self: center;
      margin-bottom: 35px;
    }
    hr {
      margin: 35px 0;
    }
    button.addTask {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      i {
        margin-bottom: -8px;
        margin-right: 0px;
        margin-left: 3px;
      }
    }
    .resultados i {
      font-size: 2.3rem;
      span {
        display: flex;
        flex-flow: column-reverse;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  figure {
    img {
      margin: 0 auto;
      display: block;
      box-shadow: ${(props) => props.theme.BoxShadow1},
        ${(props) => props.theme.BoxShadow2};
      border-radius: 50%;
      max-width: 190px;
      width: 100%;
      height: auto;
    }
    figcaption {
      font: normal 38px "Roboto", sans-serif;
      text-align: center;
      margin-top: 10%;
    }
  }
  hr {
    border: 1px solid #e4e4e4;
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
    svg {
      transition: transform 200ms ease;
    }
  }
  i:not(active) {
    svg {
      transform: rotate(0deg);
    }
  }
  i.active {
    svg {
      transform: rotate(-180deg);
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

export const FormModalCreateTask = styled.form`
  div {
    margin: 8px 8px;
    display: flex;
    flex-direction: column;
    & > label :last-child {
      margin: 22px 0;
    }
    button {
      align-self: flex-end;
      margin-top: 15px;
    }
  }
`;
