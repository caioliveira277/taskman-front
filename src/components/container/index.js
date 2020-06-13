import React from "react";
import Container from "./styles";

export default function ContainerComponent({
  children,
  maxWidth,
  backgroundImage,
  bgPosition,
}) {
  return (
    <Container
      maxWidth={maxWidth}
      backgroundImage={backgroundImage}
      bgPosition={bgPosition}
    >
      {children}
    </Container>
  );
}
