import React from "react";
// @ts-ignore
import css from "./create-component.module.scss";

type Props = {
  className: string
}

export const ComponentList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <label>Name</label><input/>
      </div>
    </div>
  );
};
