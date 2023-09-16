const { app, BrowserWindow } = require('electron');
const { loadServices } = require('./services.ts');
const { isDevelopment } = require('./utils.ts');

app.commandLine.appendSwitch('force_high_performance_gpu');

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = async () => {
	await loadServices();

	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
		icon: '/assets/icon.png',
	});

	// and load the index.html of the app.
	mainWindow.loadURL(
		isDevelopment() ? 'http://localhost:2023' : MAIN_WINDOW_WEBPACK_ENTRY,
	);
	// // Open the DevTools.
	if (isDevelopment()) mainWindow.webContents.openDevTools();

	mainWindow.on('ready-to-show', async () => {
		mainWindow.show();
		mainWindow.maximize();
	});
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
