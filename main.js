const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1280, height: 800 });
  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.webContents.on('did-finish-load', () => {
    if (!win) {
      throw new Error('"win" is not defined');
    }

  win.show();
  win.focus();
  });

  win.on('closed', () => {
    win = null;
  });
});
