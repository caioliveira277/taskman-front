import styled from "styled-components";

const Container = styled.section`
  background-color: ${(props) => props.theme.BackgroundColor};
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  box-shadow: ${(props) => props.theme.BoxShadow1},
    ${(props) => props.theme.BoxShadow2};
  border-radius: 10px;
  margin: 20px;
  position: relative;
`;

export default Container;
