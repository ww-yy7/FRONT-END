const WebSocket = require("ws");

const port = "3085";

const wss = new WebSocket.Server({ port });

const { v4: uuidv4 } = require("uuid"); // 使用 UUID v4 版本

const connections = new Map();
// 连接成功的回调函数
wss.on("listening", () => {
  console.log(`WebSocket server is listening on port: ${port}`);
  // let modelStatus = Math.random() < 0.5;

  wss.on("connection", function connection(ws) {
    setInterval(() => {
      ws.send(
        JSON.stringify({
          // modelstatus: false,
          modelstatus: Math.random() < 0.5,
          // qudong: Math.round(Math.random()),
          xplay: 0,
          zplay: -1150,
          yplay: 0,
        })
      );
    }, 1000 * 3);
  });
  // console.log(modelStatus);
});

