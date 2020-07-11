import React, { useState, useEffect } from "react";
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
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setTime(({ minutes, seconds }) => {
        if (seconds < 60) {
          seconds++;
        } else {
          seconds = 0;
          if (minutes < 25) minutes++;
          else minutes = 0;
        }
        return {
          minutes: minutes,
          seconds: seconds,
        };
      });
    }, 1000);
  }, []);

  return (
    <ContainerModified maxWidth="324px">
      <Content>
        <Stopwatch>
          <span>
            {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
            {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
          </span>
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
