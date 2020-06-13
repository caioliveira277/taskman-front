import styled from "styled-components";

const Container = styled.section`
  background: ${(props) => props.theme.BackgroundColor}
    url(${(props) => props.backgroundImage || "none"})
    ${(props) => props.bgPosition} no-repeat;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  box-shadow: ${(props) => props.theme.BoxShadow1},
    ${(props) => props.theme.BoxShadow2};
  border-radius: 10px;
  margin: 20px;
  position: relative;
`;

export default Container;
