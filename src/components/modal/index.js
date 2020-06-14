import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TweenMax, Elastic } from "gsap";
import { ModalComponent, CloseButton } from "./styles";

export default function Modal({ title, children, maxWidth }) {
  const modal = useRef(null);
  const toggleDispatch = useDispatch();

  const HandlerClickCloseButton = () => {
    const animation = TweenMax.to(modal.current, {
      duration: 1,
      y: "-20vh",
      opacity: 0,
      ease: Elastic.easeInOut,
    });
    animation.eventCallback("onComplete", () => {
      toggleDispatch({ type: "CLOSE_MODAL" });
    });
  };

  useEffect(() => {
    TweenMax.to(modal.current, {
      duration: 1.1,
      y: 30,
      ease: Elastic.easeOut,
    });
  }, []);
  return (
    <ModalComponent maxWidth={maxWidth} ref={modal}>
      <div className="modal-header">
        <h2>{title}</h2>
        <CloseButton type="button" onClick={HandlerClickCloseButton}>
          <span></span>
        </CloseButton>
      </div>
      <hr />
      {children}
    </ModalComponent>
  );
}
