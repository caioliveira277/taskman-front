import React from "react";
import { LabelComponent } from "./styles";

function LabelInput({
  title,
  type = "text",
  name,
  id,
  placeholder,
  width,
  focus = false,
}) {
  return (
    <LabelComponent htmlFor={id}>
      {title}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        width={width}
        autoComplete="on"
        autoFocus={focus}
      />
    </LabelComponent>
  );
}
function LabelTextArea({ title, name, id, placeholder, width, rows }) {
  return (
    <LabelComponent htmlFor={id}>
      {title}
      <textarea
        rows={rows}
        name={name}
        id={id}
        placeholder={placeholder}
        width={width}
      ></textarea>
    </LabelComponent>
  );
}

export { LabelInput, LabelTextArea };
