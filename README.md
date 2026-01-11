# gun-relay-minimal

最小 Gun relay，支持将数据持久化到 radata 文件。

运行：
- 本地：`node server.js`
- Docker / 云平台：按平台部署（Render / Railway / Fly 等），平台会给出 HTTPS 地址。

部署完成后，Gun endpoint 为：
`https://YOUR_DOMAIN/gun`
（把该地址放到前端 app.js 的 GUN_PEERS 中）