const { app, BrowserWindow, Menu, MenuItem, ipcMain} = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const mode_menu_template = [
  {
    label: 'Random Height and Color',
    click: () => { event.sender.send('mode-menu-command', 'randomHC') }
  },
  {
    label: 'Rise Up Effect',
    click: () => { event.sender.send('mode-menu-command', 'riseUp') }
  },
  // {
  //   label: 'Mode 3',
  //   click: () => { event.sender.send('mode-menu-command', 'mode_3') }
  // },
]
let win


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 200,
    height: 970,
    alwaysOnTop: true,
    //resizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile('src/index.html')
  win.setMenu(null)

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('show-mode-menu', (event) => {
  const menu = Menu.buildFromcontext_menu_template(mode_menu_template)
  menu.popup(BrowserWindow.fromWebContents(event.sender))
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.