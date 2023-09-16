import React from "react";
// @ts-ignore
import css from "./header.module.scss";

export const Header = () => {
  return <div className={css.header}>
    <img className={css.logo} src='assets/logo.png'/>
  </div>;
};
