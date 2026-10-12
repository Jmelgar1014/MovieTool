import { app, BrowserWindow, ipcMain } from "electron";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("Preload path:", path.join(__dirname, "preload.js"));

const API_URL = "http://localhost:5242/movie";

ipcMain.handle("api:get-movies", async () => {
  const res = await fetch(`${API_URL}`);
  return res.json();
});

ipcMain.handle("api:update-favorite", async (event, id, favorite) => {
  const res = await fetch(`${API_URL}/${id}/watched`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favorite),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`PUT failed: ${res.status}`);
  }
  return res.ok;
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:5174");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
