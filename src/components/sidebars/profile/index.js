import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineClockCircle } from "react-icons/ai";
import { BsBookmarkPlus, BsBookmarkCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { TimelineLite, Back } from "gsap";
import { Modal, Mask, LabelInput, LabelTextArea, Button } from "../../index";
import {
  ContainerModified,
  Content,
  ButtonToggle,
  ButtonAddTask,
  FormModalCreateTask,
} from "./styles";

export default function SidebarProfile() {
  const toggleProfile = useRef(null);
  const toggleIcon = useRef(null);
  const modalDispatch = useDispatch();
  const profileContainer = useRef(null);
  const [toggleSidebarState, setToggleSidebarState] = useState(true);
  const toggleModal = useSelector((state) => [
    state.Toggles.modal,
    state.Toggles.target,
  ]);
  const animationTL = new TimelineLite({
    paused: true,
  })
    .to(profileContainer.current, {
      xPercent: -130,
      duration: 1,
      ease: Back.easeInOut,
    })
    .to(profileContainer.current, {
      xPercent: 0,
      width: 70,
      willChange: "width",
      duration: 1,
    });
  const animationTLReverse = new TimelineLite({
    paused: true,
    onComplete: () => setToggleSidebarState(true),
  })
    .to(profileContainer.current, {
      xPercent: -130,
      duration: 1,
      ease: Back.easeInOut,
    })
    .to(profileContainer.current, {
      xPercent: 0,
      width: "100%",
      willChange: "width",
      duration: 1,
    });

  const HandlerClickCreateTask = (event) => {
    event.preventDefault();
    modalDispatch({ type: "OPEN_MODAL", target: "CREATE_TASK" });
  };

  const HandlerToggleSideBar = () => {
    toggleIcon.current.classList.toggle("active");

    if (toggleSidebarState) {
      setToggleSidebarState(false);
      animationTL.play();
    } else {
      animationTLReverse.play();
    }
  };
  return (
    <ContainerModified maxWidth="324px" ref={profileContainer}>
      <Content className={toggleSidebarState ? "open" : "close"}>
        <ButtonToggle onClick={HandlerToggleSideBar} ref={toggleProfile}>
          <i ref={toggleIcon}>
            <AiOutlineArrowLeft />
          </i>
        </ButtonToggle>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/./build/assets/images/perfil-padrao.png`}
            alt="Foto de perfil"
          />
          <figcaption>Jhon Smith</figcaption>
        </figure>
        <hr />
        <ButtonAddTask className="addTask" onClick={HandlerClickCreateTask}>
          <i>
            <BsBookmarkPlus />
          </i>
          <p>Nova tarefa</p>
        </ButtonAddTask>
        <div className="resultados">
          <h2>Resultados diários</h2>
          <div>
            <h3>Cliclos completos</h3>
            <span>
              04
              <i>
                <AiOutlineClockCircle />
              </i>
            </span>
          </div>
          <div>
            <h3>Tarefas finalizadas</h3>
            <span>
              12
              <i>
                <BsBookmarkCheck />
              </i>
            </span>
          </div>
        </div>
      </Content>
      {toggleModal[0] === "OPEN" ? (
        toggleModal[1] === "CREATE_TASK" ? (
          <Mask>
            <Modal maxWidth="425px" title="Nova tarefa:">
              <FormModalCreateTask>
                <div>
                  <LabelInput
                    id="taskTitle"
                    name="title"
                    placeholder="Informe um título"
                    title="Título:"
                  />
                  <LabelTextArea
                    rows="6"
                    id="taskDescription"
                    name="description"
                    placeholder="Informe uma descrição"
                    title="Descrição:"
                  />
                  <Button type="submit" background="success">
                    Enviar
                  </Button>
                </div>
              </FormModalCreateTask>
            </Modal>
          </Mask>
        ) : null
      ) : null}
    </ContainerModified>
  );
}
