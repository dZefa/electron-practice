const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1280, height: 800 });
  win.loadURL(path.resolve(__dirname, './dist/index.html'));
});
