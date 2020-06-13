import styled from "styled-components";

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
