import React, { useState, useEffect } from "react";
import { SidebarProfile, SidebarTimer, Task } from "../../components";
import { GridTasks } from "./styles";

export default function Panel() {
  const [dataTasks, setDataTasks] = useState([]);
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida
  proin tempus ut amet, donec a lectus. Ornare duis in ut porttitor
  quisque et semper tincidunt netus.`;

  useEffect(() => {
    let data = [];
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
    </>
  );
}
