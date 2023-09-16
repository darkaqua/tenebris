import * as process from 'process';
import fs from 'fs';

const { app } = require('electron');
const path = require('path');
const {
	getDirectory,
	getDenoExecutableName,
	isDevelopment,
} = require('./utils.ts');
const { spawn } = require('child_process');

export const loadServices = () => {
	if (isDevelopment()) return;
	
	const resourcesPath = process['resourcesPath'];
	const denoPath = path.join(
		getDirectory(),
		'scripts',
		getDenoExecutableName(),
	);

	fs.writeFileSync(
		path.join(getDirectory(), 'scripts', 'test.txt'),
		denoPath + ' run -A ' + path.join(resourcesPath, 'services.js'),
	);

	const ls = spawn(
		denoPath,
		['run', '-A', path.join(resourcesPath, 'services.js')],
		{
			env: {
				...process.env,
				AUTH_TOKEN: '...HERE TOKEN...',
			},
		},
	);

	app.on('window-all-closed', () => {
		ls.stdin.pause();
		ls.kill();
	});

	ls.stdout.on('data', data => {
		console.log(`stdout: ${data}`);
	});

	ls.stderr.on('data', data => {
		console.error(`stderr: ${data}`);
	});

	ls.on('close', code => {
		console.log(`child process exited with code ${code}`);
	});
};
