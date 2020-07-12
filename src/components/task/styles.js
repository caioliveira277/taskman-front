import styled from "styled-components";

export const TaskComponent = styled.div`
  max-width: 305px;
  min-height: 150px;
  background: ${(props) => props.theme.ColorVariant2};
  padding: 6px 8px;
  box-shadow: 2px 4px 6px rgba(113, 113, 113, 0.3);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 200ms ease;
  transform-origin: bottom;
  :hover {
    box-shadow: 3px 10px 10px rgba(113, 113, 113, 0.3);
  }
  .header,
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #ffffff;
    h2 {
      font: 300 18px "Roboto", sans-serif;
    }
    small {
      font: 300 14px "Roboto", sans-serif;
    }
  }
  .footer {
    flex: 1;
    align-items: flex-end;
  }
  hr {
    border: 1px solid #efa5a5;
    margin: 3.5px 0;
    width: 100%;
  }
  p {
    font: normal 16px "Roboto", sans-serif;
    color: #ffffff;
    line-height: 139.5%;
    margin-bottom: 11px;
  }
`;

export const ButtonRounded = styled.button`
  border: none;
  background: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 200ms;
  box-shadow: 0px 4px 10px #2e2e2e25;
  :hover {
    transform: scale(1.3);
  }
  :active {
    transform: scale(1.1);
  }
  .check,
  .menu {
    display: block;
    font-size: 20px;
  }
  .check {
    color: #4bd63f;
  }
  .menu {
    color: ${(props) => props.theme.ColorVariant1};
  }
`;
