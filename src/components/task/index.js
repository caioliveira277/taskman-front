import React from "react";
import { MdCheck, MdMenu } from "react-icons/md";
import { TaskComponent, ButtonRounded } from "./styles";

export default function Task({ title, children, datetime }) {
  return (
    <TaskComponent>
      <div className="header">
        <h2># {title}</h2>
        <ButtonRounded>
          <i className="check">
            <MdCheck />
          </i>
        </ButtonRounded>
      </div>
      <hr />
      <p>{children}</p>
      <div className="footer">
        <ButtonRounded>
          <i className="menu">
            <MdMenu />
          </i>
        </ButtonRounded>
        <small>{datetime}</small>
      </div>
    </TaskComponent>
  );
}
