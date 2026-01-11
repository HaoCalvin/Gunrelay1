// server.js — 最小 Gun relay（持久化到 radata）
const express = require('express');
const Gun = require('gun');

const app = express();
const port = process.env.PORT || 8765;

app.get('/', (req, res) => res.send('Gun relay running'));

// 可选：静态目录
app.use(express.static('public'));

const server = require('http').createServer(app);

const gun = Gun({
  web: server,
  file: 'radata' // 持久化到磁盘文件 radata
});

server.listen(port, () => {
  console.log('Gun relay listening on port', port);
});