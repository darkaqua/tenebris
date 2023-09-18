import React from "react";
// @ts-ignore
import css from "./create-component.module.scss";
import {useCanvas} from "shared";

type Props = {
  className: string
}

export const EntityList: React.FC<Props> = ({ className }) => {
  const { postMessage } = useCanvas()
  
  const onSubmit = React.useCallback((e) => {
  	e.preventDefault()
    postMessage({
  		color: Number(e.target.elements.color.value) || 0x000000,
  		polygon: JSON.parse(e.target.elements.polygon.value)
  	})
  }, [])
  
  
  return (
    <div className={className}>
      <div>
        <label>Entity List</label><input/>
        <form onSubmit={onSubmit}>
          <input id='color' type='string' defaultValue='0xFF00FF'/>
          <input id='polygon' type='string' defaultValue='[0, 0, 10, 0, 10, 10, 0, 10]'/>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};
