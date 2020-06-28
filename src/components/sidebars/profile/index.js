import React from "react";
import { AiOutlineArrowLeft, AiOutlineClockCircle } from "react-icons/ai";
import { BsBookmarkPlus, BsBookmarkCheck } from "react-icons/bs";
import {
  ContainerModified,
  Content,
  ButtonToggle,
  ButtonAddTask,
} from "./styles";

export default function SidebarProfile() {
  return (
    <ContainerModified maxWidth="324px">
      <Content>
        <ButtonToggle>
          <i>
            <AiOutlineArrowLeft />
          </i>
        </ButtonToggle>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/perfil-padrao.png`}
            alt="Foto de perfil"
          />
          <figcaption>Jhon Smith</figcaption>
        </figure>
        <hr />
        <ButtonAddTask>
          <i>
            <BsBookmarkPlus />
          </i>
          Nova tarefa
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
    </ContainerModified>
  );
}
