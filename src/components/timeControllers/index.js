import React from "react";
import { PlayIcon, PauseIcon, StopIcon } from "./controllerIcons";
import { Button } from "./styles";

export function PlayButton() {
  return (
    <Button>
      <i>
        <PlayIcon />
      </i>
    </Button>
  );
}
export function PauseButton() {
  return (
    <Button>
      <i>
        <PauseIcon />
      </i>
    </Button>
  );
}
export function StopButton() {
  return (
    <Button>
      <i>
        <StopIcon />
      </i>
    </Button>
  );
}
