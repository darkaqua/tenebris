import { useEffect, useState } from 'react';
import { isPrintableKeyEvent } from 'shared/utils';

type UseKeyDownProps = {
	key: string;
	shiftKey: boolean;
	isPrintable: boolean;
	timestamp: number;
};

export const useKeyDown = (
	active: boolean = false,
	stopPropagation: boolean = false
): UseKeyDownProps => {
	const { addEventListener, removeEventListener } = document;

	const [keyDown, setKeyDown] = useState<UseKeyDownProps | undefined>();

	useEffect(() => {
		const handleOnKeyDown = (event: KeyboardEvent) => {
			if (!active) return;

			if (stopPropagation) {
				event.stopPropagation();
				event.preventDefault();
			}
			setKeyDown({
				key: event.key,
				shiftKey: event.shiftKey,
				isPrintable: isPrintableKeyEvent(event),
				timestamp: Date.now(),
			});
		};

		addEventListener('keydown', handleOnKeyDown, true);
		return () => {
			removeEventListener('keydown', handleOnKeyDown, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return keyDown;
};
