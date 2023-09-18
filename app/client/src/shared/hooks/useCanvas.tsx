import React, {
	ReactNode,
	useContext,
} from 'react';
import {IFRAME_SRC} from "shared/utils";

type CanvasState = {
	ref: React.MutableRefObject<HTMLCanvasElement>;
	postMessage: (message: any) => void;
};

const CanvasContext = React.createContext<CanvasState>(undefined);

type ProviderProps = {
	children: ReactNode;
};

export const CanvasProvider: React.FunctionComponent<ProviderProps> = ({
	children,
}) => {
	const ref = React.useRef();

	const postMessage = (message: any) => {
		ref.current.contentWindow.postMessage(message, IFRAME_SRC)
	}
	
	return (
		<CanvasContext.Provider
			value={{
				ref,
				postMessage
			}}
			children={children}
		/>
	);
};

export const useCanvas = (): CanvasState => useContext(CanvasContext);
