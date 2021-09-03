import styled from "styled-components";
import Container from "../../components/container/styles";

export const ContainerModified = styled(Container)`
  background: url(${process.env.PUBLIC_URL}/./build/assets/images/ilustracao-login-curvas.svg)
    right no-repeat;
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
  a.modalLink {
    text-align: end;
  }
  form {
    max-width: 100%;
    margin: 0 auto;
    & > :nth-child(2) {
      margin-top: 20px;
    }
    figure img {
      display: block;
      margin: 20px auto;
    }
    label {
      margin: 40px 0px;
    }
    button {
      margin: 50px auto;
    }
  }
`;

export const FormModal = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 758px) {
    justify-content: center !important;
  }
  figure img {
    width: 100%;
  }
  div {
    width: 325px;
    @media screen and (max-width: 758px) {
      margin-top: 28px;
    }
    p {
      margin-bottom: 14px;
      font: normal 20px "Roboto", sans-serif;
    }
    button {
      margin: 40px 0 0 auto;
    }
  }
`;
