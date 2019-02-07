# Project Setup
Download or clone the project and run:
```
npm install
```

# Setting Up Electron
## Install Electron in the project
Install Electron by running:
```
npm install electron --save-dev
```
## Build the Ionic Project
We need to do this to build the project so that it can be opened in Electron. Build by running:
```
ionic build
```
You should now have a 'www' directory in your project

## Modify www/index.html
Don't confuse this with the `index.html` inside of the `src` directory. This file exists inside of the `www` directory, which will only exist after you run the command above.

In the file, find `<base href="/">` modify it to `<base href="./">`

## Create a main.js file
In the root directory of your project, create a `main.js` file. Into the file you need to copy the code below

```
const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 400, 
    height: 700,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
//change logo if needed

  win.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
```
## Add to the package.json in project root directory
```
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "license": "MIT",
  "main": "main.js", // <-- add this line
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "electron": "electron .", // <-- add this line
    "electron-build": "ionic build && electron ." // <-- add this to build and run electron 
  },
  // the other stuff in package.json
}
```
## Run the app
Run the app using
```
npm run electron
```
Build the Ionic project and run electron
```
npm run electron-build
```

# Problems
The Electron app does not auto reload when you change the ionic and angular code (unlike when using `ionic serve` command).