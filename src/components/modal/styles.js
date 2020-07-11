import styled from "styled-components";

export const ModalComponent = styled.div`
  background: ${(props) => props.theme.BackgroundColor};
  border-radius: 10px;
  width: 100%;
  margin: 15px;
  max-width: ${(props) => props.maxWidth || "100%"};
  transform: translateY(-80px);
  .modal-header {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 22px;
    h2 {
      font: 300 normal 24px "Roboto", sans-serif;
    }
  }
  hr {
    border: 1px solid #dbdbdb;
  }
  & > :nth-child(3) {
    padding: 5%;
  }
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  width: 36px;
  height: 36px;
  transition: all 200ms ease;
  :hover {
    span {
      ::after,
      ::before {
        background: ${(props) => props.theme.ColorVariant1};
      }
    }
  }
  span {
    display: block;
    ::before,
    ::after {
      content: "";
      display: block;
      width: 36px;
      height: 3px;
      border-radius: 20px;
      background: ${(props) => props.theme.ColorVariant2};
    }
    ::before {
      transform: rotate(45deg) translate(3px, 1px);
    }
    ::after {
      transform: rotate(135deg) translate(1px, 0);
    }
  }
`;
