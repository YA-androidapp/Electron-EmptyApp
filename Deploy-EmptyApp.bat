REM  Copyright (c) 2017 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

REM 作成前
npm -g install electron
mkdir EmptyApp
cd EmptyApp
npm init -y



REM
REM index.jsとindex.htmlを作成・編集
REM



REM 作成後

REM 実行
electron .

REM デプロイ
cd ..
npm install electron-packager -g
electron-packager EmptyApp EmptyApp --platform=win32 --arch=x64 --overwrite --electron-version=1.6.11
