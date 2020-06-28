import styled from "styled-components";
import Container from "../../container/styles";

export const ContainerModified = styled(Container)``;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
  .arrow-icon {
    align-self: flex-end;
    color: #c4c4c4;
    margin-right: 4px;
    margin-top: -15px;
  }
  .lastTime-icon {
    margin-top: -47px;
  }
  hr.separator {
    width: 95%;
    border: 1px solid #c8c8c8;
    margin: 50px 0;
  }
  .currentTarget {
    margin-top: 50px;
    width: 100%;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2.targetTitle {
        color: #4d4d4d;
        font: normal 28px "Roboto", sans-serif;
        margin-bottom: 24px;
      }
    }
  }
`;

export const Stopwatch = styled.span`
  margin-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${(props) => props.theme.BackgroundTheme};
  font: normal 48px "Roboto Mono", monospace;
  color: #ffffff;
  position: relative;
  &::after,
  &::before,
  span::after,
  span::before {
    content: "";
    width: 10px;
    height: 3px;
    border-radius: 18px;
    background: #ffffff;
    position: absolute;
  }
  &::before {
    transform: rotate(90deg);
    top: 8px;
  }
  &::after {
    transform: rotate(90deg);
    bottom: 8px;
  }
  span {
    &::after,
    &::before {
      top: 50%;
    }
    &::before {
      left: 4px;
    }
    &::after {
      right: 4px;
    }
  }
`;

export const CycloList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  li {
    i {
      color: #bfbfbf;
      font-size: 30px;
    }
  }
`;

export const BoxControllers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
