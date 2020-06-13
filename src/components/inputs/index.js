import React from "react";
import { LabelComponent } from "./styles";

function LabelInput({ title, type = "text", name, id, placeholder, width }) {
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
      />
    </LabelComponent>
  );
}

export { LabelInput };
