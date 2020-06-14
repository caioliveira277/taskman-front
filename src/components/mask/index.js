import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TweenMax } from "gsap";
import { MaskComponent } from "./styles";

export default function Mask({ children }) {
  const mask = useRef(null);
  useEffect(() => {
    TweenMax.to(mask.current, {
      duration: 0.4,
      opacity: 1,
    });
  }, []);
  return createPortal(
    <MaskComponent ref={mask}>{children}</MaskComponent>,
    document.body
  );
}
