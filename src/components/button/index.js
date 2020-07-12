import React from "react";
import Proptypes from "react-proptypes";
import { ButtonTheme } from "./styles";

export function Button({ type = "button", children, background, width }) {
  return (
    <ButtonTheme type={type} background={background} width={width}>
      {children}
    </ButtonTheme>
  );
}

Button.propTypes = {
  type: Proptypes.string,
  children: Proptypes.oneOfType([Proptypes.array, Proptypes.string]),
  background: Proptypes.string,
  width: Proptypes.string,
};
