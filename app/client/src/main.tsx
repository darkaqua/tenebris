import React, { useRef, useCallback } from 'react';
import { createRoot } from 'react-dom';

import css from './styles.module.scss'
export const Main = () => {
	const ref = useRef();
	
	const iframeSrc = 'http://localhost:2024';
	
	const onSubmit = useCallback((e) => {
		e.preventDefault()
		ref.current.contentWindow.postMessage({
			color: Number(e.target.elements.color.value) || 0x000000,
			polygon: JSON.parse(e.target.elements.polygon.value)
		}, iframeSrc)
	}, [])
	
	return (
		<div className={css.test}>
			<form onSubmit={onSubmit}>
				<input id='color' type='string' defaultValue='0xFF00FF'/>
				<input id='polygon' type='string' defaultValue='[0, 0, 10, 0, 10, 10, 0, 10]'/>
				<button type='submit'>submit</button>
			</form>
			<iframe ref={ref} className={css.iframe} src={iframeSrc}/>
		</div>
	)
}
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Main />);