import styled from "styled-components";

export const GridTasks = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap column;
  max-height: 960px;
  overflow: auto;
  & > div {
    margin: 20px;
  }
  scrollbar-width: thin;
`;
