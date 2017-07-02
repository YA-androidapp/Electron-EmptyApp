'use strict';

var electron = require('electron');
var path = require('path');
var url = require('url');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('activate', function () {
    if (mainWindow === null) {
        onCreate();
    }
});

app.on('ready', function () {
    onCreate();
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin')
        app.quit();
});

function onCreate() {
    mainWindow = new BrowserWindow({ width: 400, height: 300 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // mainWindow.loadURL('https://github.com/'); // 定数であればそのまま埋め込んでもいいか

    // デバッグ用
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

//  Copyright (c) 2017 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
