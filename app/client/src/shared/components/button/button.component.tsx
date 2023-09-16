import React from "react";
// @ts-ignore
import css from "./button.module.scss";
import {Label} from "shared/components/label";

type Props = {
  children: React.ReactElement
  onClick: () => void;
};
export const Button: React.FC<Props> = ({ children, onClick }) => (
  <button className={css.button} onClick={onClick}>
    <Label className={css.label}>{children}</Label>
  </button>
)