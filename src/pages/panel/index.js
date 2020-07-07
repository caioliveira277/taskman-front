import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  SidebarProfile,
  SidebarTimer,
  Task,
  Mask,
  Modal,
  LabelInput,
  LabelTextArea,
  Button,
} from "../../components";
import { GridTasks, TaskComponent, FormEditTask } from "./styles";

export default function Panel() {
  const [dataTasks, setDataTasks] = useState([]);
  const toggleModal = useSelector((state) => [
    state.Toggles.modal,
    state.Toggles.target,
  ]);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    let data = [];
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida
    proin tempus ut amet, donec a lectus. Ornare duis in ut porttitor
    quisque et semper tincidunt netus.`;

    for (let index = 0; index < 22; index++) {
      let lorems = [];
      for (
        let countLorems = 0;
        countLorems < getRandomIntInclusive(1, 5);
        countLorems++
      ) {
        lorems.push(lorem);
      }
      data.push(
        <Task key={index} title="Title Example" datetime="12/05/2020 15:25hrs">
          {lorems.join(" ")}
        </Task>
      );
    }
    setDataTasks(data);
  }, []);

  return (
    <>
      <SidebarProfile />
      <GridTasks>{dataTasks}</GridTasks>
      <SidebarTimer />
      {toggleModal[0] === "OPEN" ? (
        toggleModal[1] === "EDIT_TASK" ? (
          <Mask>
            <Modal maxWidth="800px" title="Editar tarefa:">
              <FormEditTask>
                <div className="inputs">
                  <LabelInput
                    id="editTitle"
                    name="title"
                    placeholder="Informe um título"
                    title="Título:"
                  />
                  <LabelTextArea
                    rows="6"
                    id="editTaskDescription"
                    name="description"
                    placeholder="Informe uma descrição"
                    title="Descrição:"
                  />
                </div>
                <div className="preview">
                  <TaskComponent>
                    <div className="header">
                      <h2># Title example</h2>
                    </div>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fames gravida proin tempus ut amet, donec a lectus. Ornare
                      duis in ut porttitor quisque et semper tincidunt netus.
                    </p>
                  </TaskComponent>
                  <hr className="separator" />
                  <h3>Data de criação:</h3>
                  <small>12/05/2020 15:25hrs</small>
                </div>
                <div className="footer">
                  <Button type="button" background="danger">
                    Deletar
                  </Button>
                  <Button type="submit" background="success">
                    Salvar
                  </Button>
                </div>
              </FormEditTask>
            </Modal>
          </Mask>
        ) : null
      ) : null}
    </>
  );
}
