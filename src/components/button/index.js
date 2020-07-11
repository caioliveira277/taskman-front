import React from "react";
import { ButtonTheme } from "./styles";

export function Button({ type = "button", children, background, width }) {
  return (
    <ButtonTheme type={type} background={background} width={width}>
      {children}
    </ButtonTheme>
  );
}
