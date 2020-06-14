import React from "react";
import Container from "./styles";

export default function ContainerComponent({ children, maxWidth }) {
  return <Container maxWidth={maxWidth}>{children}</Container>;
}
