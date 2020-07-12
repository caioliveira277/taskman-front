import styled from "styled-components";
export { TaskComponent } from "../../components/task/styles";

export const GridTasks = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap column;
  max-height: 980px;
  overflow: auto;
  & > div {
    margin: 20px;
  }
  scrollbar-width: thin;
`;

export const FormEditTask = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .inputs > :last-child {
    margin-top: 25px;
  }
  .preview {
    hr.separator {
      margin: 25px 0;
    }
    h3 {
      font: normal 16px "Roboto", sans-serif;
      margin-bottom: 15px;
    }
    small {
      font: 300 12px "Roboto", sans-serif;
    }
  }
  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 35px;
  }
`;
