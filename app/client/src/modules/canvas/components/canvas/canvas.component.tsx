import React, { useRef } from "react";
// @ts-ignore
import css from "./canvas.module.scss";
import {cn} from "shared";

type Props = {
  className: string
}

export const Canvas: React.FC<Props> = ({ className }) => {
  const ref = useRef();
  const iframeSrc = "http://localhost:2024";

  // const onSubmit = useCallback((e) => {
  // 	e.preventDefault()
  // 	ref.current.contentWindow.postMessage({
  // 		color: Number(e.target.elements.color.value) || 0x000000,
  // 		polygon: JSON.parse(e.target.elements.polygon.value)
  // 	}, iframeSrc)
  // }, [])

  /*
	<div className={css.test}>
			<form>
				<input id='color' type='string' defaultValue='0xFF00FF'/>
				<input id='polygon' type='string' defaultValue='[0, 0, 10, 0, 10, 10, 0, 10]'/>
				<button type='submit'>submit</button>
			</form>
			<Canvas/>
		</div>
	 */

  return <iframe ref={ref} className={cn(css.canvas, className)} src={iframeSrc} />;
};
