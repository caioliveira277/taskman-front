import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.BackgroundColor};
  box-shadow: ${(props) => props.theme.BoxShadow1},
    ${(props) => props.theme.BoxShadow2};
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: all 200ms ease;
  :hover {
    transform: scale(1.04);
  }
  :active {
    transform: scale(1);
  }
  :focus {
    box-shadow: none;
  }
  i {
    display: block;
  }
`;
