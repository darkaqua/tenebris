import React from "react";
// @ts-ignore
import css from "./container.module.scss";
import {cn} from "shared/utils";

type Props = {
  className: string
  direction: 'row' | 'column'
};
export const Container: React.FC<Props> = (
  {
    className,
    children,
    direction = 'row',
    ...props
  }
) => {
  return (
    <div className={cn(css.container, className, {
      [css.column]: direction === 'column'
    })} {...props}>{children}</div>
  );
};
