import React from "react";
// @ts-ignore
import css from "./label.module.scss";
import {cn} from "shared/utils";

type Props = {
  className: string
};
export const Label: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <label className={cn(css.label, className)} {...props}>{children}</label>
  );
};
