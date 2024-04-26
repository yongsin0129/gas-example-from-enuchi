# 前言

forked from https://github.com/enuchi/React-Google-Apps-Script

# 安裝方法

1. `clone project`
2. `npm install`
3. `npm run login`
4. `cp .clasp.json.SAMPLE .clasp.json`
5. `enter your scriptId into .clasp.json`

# 開發模式

前置 : `npm run setup:https` (產生 certs folder)

1. `npm run start` (包含 build:dev , deploy:dev , run webpack serve)
2. `npm run dev-tool` (確認 index.html 有沒有加入 `<script src="http://localhost:8097"></script>`)

# 部署

1. `npm run deploy (用於 production)` (記得把 `<script src="http://localhost:8097"></script>` 去掉)

# todoList sheet data
| id  | text   | completed |
| --- | ------ | --------- |
| 1   | 吃飯   | FALSE     |
| 2   | 睡覺   | FALSE     |
| 3   | 打東東 | FALSE     |

sheet name : sheet1

id column `=ARRAYFORMULA(IF(ISBLANK(B2:B),,row(A2:A)))`

# client side debug 

1. 打開 webpack config 的 source map 設定

[webpack.config.js#L250](https://github.com/yongsin0129/gas-example-from-enuchi/blob/master/webpack.config.js#L250)
```
// webpack.config.js#L250
devtool: isProd ? 'none' : 'inline-source-map'
```

2. 使用 edge or chrome ，打開 source , 使用 search 找到檔案名稱，下斷點

# server side debug

1. 打開 webpack config 的 minimize 設定，改為 false
[webpack.config.js#L366](https://github.com/yongsin0129/gas-example-from-enuchi/blob/master/webpack.config.js#L366)

```
// webpack.config.js#L366
    minimize: true,
```