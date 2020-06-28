import React from "react";
import { MdHistory } from "react-icons/md";
import { SleepIcon, Arrow, LastTime, Target } from "./ilustrations";
import { PlayButton, PauseButton, StopButton } from "../../timeControllers";
import { Task } from "../../index";
import {
  ContainerModified,
  Content,
  Stopwatch,
  CycloList,
  BoxControllers,
} from "./styles";

export default function SidebarTimer() {
  return (
    <ContainerModified maxWidth="324px">
      <Content>
        <Stopwatch>
          <span>15:34</span>
        </Stopwatch>
        <CycloList>
          <li>
            <i>
              <MdHistory />
            </i>
          </li>
          <li>
            <i>
              <SleepIcon />
            </i>
          </li>
          <li>
            <i>
              <MdHistory />
            </i>
          </li>
          <li>
            <i>
              <SleepIcon />
            </i>
          </li>
          <li>
            <i>
              <MdHistory />
            </i>
          </li>
          <li>
            <i>
              <SleepIcon />
            </i>
          </li>
          <li>
            <i>
              <MdHistory />
            </i>
          </li>
        </CycloList>
        <i className="arrow-icon">
          <Arrow />
        </i>
        <i className="lastTime-icon">
          <LastTime />
        </i>
        <hr className="separator" />
        <BoxControllers>
          <PauseButton />
          <PlayButton />
          <StopButton />
        </BoxControllers>
        <div className="currentTarget">
          <div>
            <h2 className="targetTitle">Foco atual:</h2>
            <i>
              <Target />
            </i>
          </div>
          <Task title="Title Example" datetime="12/05/2020 15:25hrs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            gravida proin tempus ut amet, donec a lectus. Ornare duis in ut
            porttitor quisque et semper tincidunt netus.
          </Task>
        </div>
      </Content>
    </ContainerModified>
  );
}
