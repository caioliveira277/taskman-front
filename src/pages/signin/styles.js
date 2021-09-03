import styled from "styled-components";
import Container from "../../components/container/styles";

export const ContainerModified = styled(Container)`
  background: url(${process.env.PUBLIC_URL}/./build/assets/images/ilustracao-cadastro-curvas-1.svg)
      bottom left no-repeat,
    url(${process.env.PUBLIC_URL}/./build/assets/images/ilustracao-cadastro-curvas-2.svg)
      top right no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  justify-content: space-around;
  a {
    font: 400 18px "Roboto", sans-serif;
    color: #0279e7;
    &:hover {
      transition: 200ms ease-out;
      color: #3295f0;
    }
  }
  form {
    width: 100%;
    margin: 0 auto;
    padding: 0px 9%;
    h1 {
      font: normal 24px "Roboto", sans-serif;
      margin: 34px 0px;
      text-align: center;
    }
    label {
      margin: 23px 0px;
      font-size: 18px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      label {
        width: 48%;
        @media screen and (max-width: 580px) {
          width: 100%;
        }
      }
    }
    button {
      margin: 50px auto;
    }
  }
`;
