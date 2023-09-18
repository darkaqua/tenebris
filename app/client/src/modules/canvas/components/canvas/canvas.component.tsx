import React from "react";
// @ts-ignore
import css from "./canvas.module.scss";
import {cn, IFRAME_SRC, useCanvas} from "shared";

type Props = {
  className: string
}

export const Canvas: React.FC<Props> = ({ className }) => {
  const { ref } = useCanvas();
  
  return <iframe ref={ref} className={cn(css.canvas, className)} src={IFRAME_SRC} />;
};
