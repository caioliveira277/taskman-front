import styled from "styled-components";

const LabelComponent = styled.label`
  font: 500 24px "Roboto", sans-serif;
  display: block;
  input,
  textarea {
    font: normal 18px "Roboto", sans-serif;
    width: ${(props) => props.width || "100%"};
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.BackgroundColor};
    padding: 18px 0px 18px 14px;
    box-shadow: ${(props) => props.theme.BoxShadow1},
      ${(props) => props.theme.BoxShadow2};
    margin-top: 24px;
  }
`;

export { LabelComponent };
