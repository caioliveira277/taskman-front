import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { TweenMax, Back } from "gsap";
import { TransitionComponent } from "./styles";

export default function Transition({ children }) {
  const transition = useRef(null);

  useEffect(() => {
    TweenMax.to(transition.current, {
      duration: 1,
      x: 0,
      ease: Back.easeInOut,
    }).eventCallback("onComplete", () => {
      TweenMax.to(transition.current, {
        delay: 1.2,
        duration: 0.9,
        x: "100vw",
        ease: Back.easeIn,
      }).eventCallback("onComplete", () => {
        transition.current.remove();
      });
    });
  }, []);
  return createPortal(
    <TransitionComponent ref={transition}>{children}</TransitionComponent>,
    document.body
  );
}
