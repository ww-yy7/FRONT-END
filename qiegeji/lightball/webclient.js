// 创建 WebSocket 连接
const WebSocket = require("ws");
const ws = new WebSocket("ws://3aa28bf3.r1.cpolar.top/machine/websocket/clou");
// const ws = new WebSocket("ws://localhost:3085");

// 监听连接建立事件

ws.onopen = () => {
  ws.send("all");
  console.log("WebSocket 连接已建立");
};

// 监听消息接收事件
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log(message);
};

// ws.onerror = (error) => {
//   console.error("WebSocket 错误", error);
// };

// 监听连接关闭事件
ws.onclose = () => {
  console.log("WebSocket 连接已关闭");
};
