import { KEYS } from './keys/keys';

const ALL_KEYS: string[] = Object.keys(KEYS).reduce(
	(all: string[], category) => all.concat(KEYS[category]),
	[]
);

export const isPrintableKeyEvent = (event: KeyboardEvent): boolean => {
	return ALL_KEYS.indexOf(event.key) === -1;
};
