import React from "react";
// @ts-ignore
import css from "./button.module.scss";
import {Label} from "shared/components/label";
import {cn} from "shared/utils";

type Props = {
  className: string;
  children: React.ReactElement
  onClick: () => void;
};
export const Button: React.FC<Props> = ({ children, onClick, className }) => (
  <button className={cn(css.button, className)} onClick={onClick}>
    <Label className={css.label}>{children}</Label>
  </button>
)