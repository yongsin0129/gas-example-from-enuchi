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