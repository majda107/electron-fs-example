const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronFs', {
    listFolder: path => ipcRenderer.invoke('listFolder', path)
})