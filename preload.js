const { contextBridge, ipcRenderer } = require("electron");

console.log("preload is running");
contextBridge.exposeInMainWorld("api", {
  getMovies: () => ipcRenderer.invoke("api:get-movies"),
  updateFavorites: (id, favorite) =>
    ipcRenderer.invoke("api:update-favorite", id, favorite),
  markWatched: (id, watched) =>
    ipcRenderer.invoke("api:mark-watched", id, watched),
  searchInput: (title, format, genre) =>
    ipcRenderer.invoke("api-search-input", title, format, genre),
});
