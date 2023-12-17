const WebSocket = require("ws");
const ws = new WebSocket("ws://2ae2266b.r3.cpolar.top/otis/websocket/pisx11");

// 监听WebSocket连接事件
ws.addEventListener("open", (event) => {
  console.log("WebSocket连接已经建立");
});
ws.onopen = function (event) {
  ws.send("Hello server!");
};

// 监听WebSocket消息事件
ws.addEventListener("message", (event) => {
  console.log("接收到WebSocket消息：", event.data);

  // 判断消息类型并执行相应的操作
  if (event.data === "show_model") {
    // 显示模型的代码
    // 例如：将模型的 visible 属性设置为 true
    object.visible = true;
  } else if (event.data === "hide_model") {
    // 隐藏模型的代码
    // 例如：将模型的 visible 属性设置为 false
    object.visible = false;
  }
});

ws.addEventListener("close", (event) => {
  console.log("WebSocket连接已经关闭");
});

ws.addEventListener("error", (event) => {
  console.log("WebSocket连接错误");
});
