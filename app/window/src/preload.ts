const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
	send: (eventName, data) => ipcRenderer.send(eventName, data)
})