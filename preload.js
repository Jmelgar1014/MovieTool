const { contextBridge, ipcRenderer } = require("electron");

console.log("preload is running");
contextBridge.exposeInMainWorld("api", {
  getMovies: () => ipcRenderer.invoke("api:get-movies"),
  updateWatched: (id, watched) =>
    ipcRenderer.invoke("api:update-watched", id, watched),
});
