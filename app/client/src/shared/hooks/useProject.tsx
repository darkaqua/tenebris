import React, {
	ReactNode,
	useContext,
} from 'react';

type ProjectState = {
	ref: React.MutableRefObject<HTMLCanvasElement>;
	postMessage: (message: any) => void;
};

const ProjectContext = React.createContext<ProjectState>(undefined);

type ProviderProps = {
	children: ReactNode;
};

export const ProjectProvider: React.FunctionComponent<ProviderProps> = ({
	children,
}) => {
	const ref = React.useRef();

	const postMessage = (message: any) => {
	}
	
	return (
		<ProjectContext.Provider
			value={{
				ref,
				postMessage
			}}
			children={children}
		/>
	);
};

export const useProject = (): ProjectState => useContext(ProjectContext);
