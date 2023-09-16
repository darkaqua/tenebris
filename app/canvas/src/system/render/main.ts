import * as PIXI from "libs/pixi.mjs";
import { System } from "system";
import { Event } from "libs/enums";
import { spriteSheet } from "system/render/sprite-sheet";
import { Size2d } from "libs/types";
import { ticker } from "./ticker";

const SCALE = 6;

export const render = () => {
  let app: PIXI.Application;
  let lastFPS = 0;

  const _spritesheet = spriteSheet();
  const _ticker = ticker();

  const load = async () => {
    if (app) return;

    app = new PIXI.Application({
      backgroundColor: 0xFFFFFF,
      antialias: true,
      autoDensity: true,
      sharedTicker: true,
      resizeTo: window,
    });
    app.stage.sortableChildren = true;
    app.stage.eventMode = "static";

    app.ticker.add(tickerUpdate);

    // Renders crisp pixel sprites
    PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;
    PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = true;

    document.body.appendChild(app.view);

    await _spritesheet.load();
    _ticker.load();
  };

  const tickerUpdate = (delta: number) => {
    const currentFPS = getFPS();

    if (currentFPS !== lastFPS) {
      System.events.emit(Event.FPS, currentFPS);
      lastFPS = currentFPS;
    }
  };

  const getFPS = () => Math.round(PIXI.Ticker.shared.FPS);

  const getStage = (): PIXI.Container => app.stage;

  const getScale = (): number => SCALE;

  return {
    load,
    getFPS,
    getStage,
    getScale,

    spriteSheet: _spritesheet,
    ticker: _ticker,
  };
};
