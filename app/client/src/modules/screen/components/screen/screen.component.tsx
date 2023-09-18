import React from "react";
import {Header} from "modules/header";
import {Canvas} from "modules/canvas";
import {SidePanel} from "modules/side-panel";
// @ts-ignore
import css from "./screen.module.scss";
import {CanvasProvider} from "shared";
import {ProjectProvider} from "shared/hooks/useProject";

export const Screen = () => (
  <ProjectProvider>
    <CanvasProvider>
      <div className={css.screen}>
        <Header/>
        <div className={css.content}>
          <Canvas className={css.canvas}/>
          <SidePanel className={css.sidePanel}/>
        </div>
      </div>
    </CanvasProvider>
  </ProjectProvider>
)