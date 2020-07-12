import React from "react";
import Proptypes from "react-proptypes";
import Container from "./styles";

export default function ContainerComponent({ children, maxWidth }) {
  return <Container maxWidth={maxWidth}>{children}</Container>;
}

ContainerComponent.propTypes = {
  children: Proptypes.element,
  maxWidth: Proptypes.string,
};
