import React from "react";
// @ts-ignore
import css from "./header.module.scss";
import {cn, CrossIcon, LineIcon, SquareIcon, useElectronAPI} from "shared";

export const Header = () => {
  const { send } = useElectronAPI()
  const onClickClose = () => send('close')
  const onClickMinimize = () => send('minimize')
  const onClickMaximize = () => send('maximize')
  
  return <div className={css.header}>
    <img className={css.logo} src='assets/logo.png'/>
    <div className={css.dragBar}/>
    <div className={css.actions}>
      <div className={css.action} onClick={onClickMinimize}>
        <LineIcon strokeWidth={8} className={css.icon}/>
      </div>
      <div className={css.action} onClick={onClickMaximize}>
        <SquareIcon strokeWidth={8} className={css.icon}/>
      </div>
      <div className={cn(css.action, css.close)} onClick={onClickClose}>
        <CrossIcon strokeWidth={8} className={css.icon}/>
      </div>
    </div>
  </div>;
};
