import React from "react";
import { MdCheck, MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { TaskComponent, ButtonRounded } from "./styles";

export default function Task({ title, children, datetime }) {
  const modalDispatch = useDispatch();
  const HandlerClickEditTask = (e) => {
    e.preventDefault();
    modalDispatch({ type: "OPEN_MODAL", target: "EDIT_TASK" });
  };

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
        <ButtonRounded onClick={HandlerClickEditTask}>
          <i className="menu">
            <MdMenu />
          </i>
        </ButtonRounded>
        <small>{datetime}</small>
      </div>
    </TaskComponent>
  );
}
