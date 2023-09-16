import React from "react";
// @ts-ignore
import css from "./checkbox.module.scss";
import {CheckIcon} from "shared/components/icons";

type Props = {
  id: string;
  defaultValue: boolean;
};
export const Checkbox: React.FC<Props> = ({ id, defaultValue }) => {
  const [isChecked, setIsChecked] = React.useState(defaultValue);
  
  const onChange = React.useCallback(() => setIsChecked((prev) => !prev), [setIsChecked])
  
  return (
    <label className={css.checkbox} htmlFor={id}>
      <input
        id={id}
        type='checkbox'
        className={css.input}
        checked={isChecked}
        onChange={onChange}
        hidden
      />
        {isChecked ? <CheckIcon className={css.icon} strokeWidth={10}/> : ''}
    </label>
  );
};
