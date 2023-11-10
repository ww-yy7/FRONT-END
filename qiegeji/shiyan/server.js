const WebSocket = require("ws");

const port = "8080";

const ws = new WebSocket.Server({ port });

ws.on("connection", (ws) => {
    console.log(`WebSocket server is listening on port: ${port}`);
  // 监听客户端发送的消息
  ws.on("message", (message) => {
    // 处理客户端发送的消息
    handleMessage(ws, message);
  });

  // 当连接关闭时触发
  ws.on("close", () => {
    // 清理相关资源
  });

  // 发送欢迎消息给客户端
  ws.send("连接成功");
});

function handleMessage(ws, message) {
  // 根据收到的消息内容进行相应的处理
  if (message === "show") {
    // 显示模型的代码
    // 例如：向客户端发送显示指令
    ws.send("show_model");
  } else if (message === "hide") {
    // 隐藏模型的代码
    // 例如：向客户端发送隐藏指令
    ws.send("hide_model");
  }
}
