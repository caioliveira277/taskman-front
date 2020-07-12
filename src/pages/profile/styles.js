import styled from "styled-components";
import Container from "../../components/container/styles";

export const ContainerModified = styled(Container)`
  background: url(${process.env.PUBLIC_URL}/assets/images/ilustracao-perfil-curvas.svg)
    top left no-repeat;
  background-size: 330px;
  padding: 35px 50px;
  hr {
    border: 1px solid #e4e4e4;
  }
  & > hr {
    margin: 45px 0;
    @media screen and (max-width: 768px) {
      border: 0px;
      margin: 25px 0;
    }
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  figure {
    img {
      margin: 0 auto;
      display: block;
      @media screen and (min-width: 768px) {
        box-shadow: ${(props) => props.theme.BoxShadow1},
          ${(props) => props.theme.BoxShadow2};
      }
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
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  form {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    h2 {
      color: #bdbdbd;
      font: normal 22px "Roboto", sans-serif;
      margin-bottom: 30px;
    }
    hr {
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    label {
      margin: 40px 0;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin: 0 20px;
    li {
      margin-bottom: 40px;
      font: normal 18px "Roboto", sans-serif;
      text-align: center;
      p {
        color: ${(props) => props.theme.ColorVariant1};
      }
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  a {
    text-decoration: none;
  }
  button {
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
