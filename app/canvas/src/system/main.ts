import { render as systemRender } from "system/render/main";
import { events } from "system/events/main";
import { io } from "system/io/main";
import { production } from "system/production";
import { Utils } from "utils";
import { Environment } from "libs/enums";
import {engine} from "system/engine.ts";
import * as PIXI from 'libs/pixi.mjs'

export const System = (() => {
  const render = systemRender();

  const _events = events();
  const _io = io(_events);
  const _production = production();
  const _engine = engine();

  const load = async () => {
    await _io.load();
    await render.load();

    const isDevelopment =
      Utils.environment.get(Environment.ENVIRONMENT) === "DEVELOPMENT";
    if (!isDevelopment) _production.load();
    
    window.addEventListener(
      "message",
      ({data}) => {
        console.log(data)
        const graphics = new PIXI.Graphics();
        graphics.clear();
        graphics
          .beginFill(data.color)
          .drawPolygon(data.polygon)
          .endFill();
        
        System.render.getStage().addChild(graphics)
      },
      false,
    );
  };

  return {
    load,

    events: _events,
    io: _io,
    render,
    engine: _engine
  };
})();
