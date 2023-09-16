import React from "react";
import {cn, ComponentIcon, EntityIcon, SystemIcon, TabContainer} from "shared";
// @ts-ignore
import css from "./side-panel.module.scss";
import {CreateComponent} from "modules/side-panel";

type Props = {
  className: string
}

export const SidePanel: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, css.sidePanel)}>
      <div>defaults</div>
      <TabContainer items={[
        {
          key: 'components',
          icon: <ComponentIcon className={css.icon} strokeWidth={4}/>,
          children: <CreateComponent/>
        },
        {
          key: 'entities',
          icon: <EntityIcon className={css.icon} strokeWidth={4}/>,
          children: <div><EntityIcon strokeWidth={4}/></div>
        },
        {
          key: 'entities',
          icon: <SystemIcon className={css.icon} strokeWidth={4}/>,
          children: <div><SystemIcon strokeWidth={4}/></div>
        }
      ]}/>
    </div>
  );
};
