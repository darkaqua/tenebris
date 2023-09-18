const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
	send: (eventName, data) => ipcRenderer.send(eventName, data),
	read: (eventName, callback) => ipcRenderer.once(eventName, (_, data) => callback(data))
})