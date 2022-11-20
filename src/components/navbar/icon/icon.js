import s from "./icon.module.css";
import icon from "./icon.png";
import React from "react";

function Icon() {
  return (
    <div>
      <img id={s.logo} src={icon} alt="icon" />
    </div>
  );
}

export default Icon;
