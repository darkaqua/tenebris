const { platform } = require('os');
const { app } = require('electron');

export const getDirectory = () => {
	let dirname = '';
	switch (platform()) {
		case 'win32':
			dirname = process.env.APPDATA;
			break;
		case 'darwin':
			dirname = `${process.env.HOME}/Library/Application Support`;
			break;
		case 'linux':
			dirname = `${process.env.HOME}/.local/share`;
			break;
		default:
			throw new Error('Unsupported platform!');
	}
	return dirname + '/voidpixel';
};

export const getDenoExecutableName = () =>
	platform() === 'win32' ? 'deno.exe' : 'deno';

export const isDevelopment = (): boolean => Boolean(!app.isPackaged);
