import Icon from "./icon/icon";
import Input from "./input/input";
import s from "./navbar.module.css";
import Title from "./title/title";
import React from "react";

function Navbar() {
  return (
    <div className={s.navbar}>
      <Icon />
      <Title />
      <Input />
    </div>
  );
}

export default Navbar;
