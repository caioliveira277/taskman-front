import styled from "styled-components";

const types = {
  danger: "#E6513C",
  success: "#58D644",
};
const typesHover = {
  danger: "#DA6858",
  success: "#79DA69",
};

export const ButtonTheme = styled.button`
  display: block;
  width: ${(props) => props.width || "140px"};
  background: ${(props) =>
    types[props.background] || props.theme.BackgroundTheme};
  height: 40px;
  font: normal bold 18px "Roboto", sans-serif;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow1},
    ${(props) => props.theme.BoxShadow2};
  cursor: pointer;
  &:hover {
    transition: all 200ms ease-out;
    background: ${(props) =>
      typesHover[props.background] || props.theme.BackgroundThemeHover};
  }
  &:active {
    transform: scale(0.97);
  }
`;
