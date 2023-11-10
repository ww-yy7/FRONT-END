// const tween1 = new DT.TWEEN.Tween(model.position).to({ z:-100}, 1000).start();

// 创建 WebSocket 连接
const ws = new WebSocket("ws://localhost:3085");

// 监听连接建立事件
ws.onopen = () => {
  console.log("WebSocket 连接已建立");
};

// 监听消息接收事件
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log("收到服务器的消息:", message);

  // 处理位置信息
  if (message.hasOwnProperty("z")) {
    const targetZ = message.z;
    moveModelAlongZ(targetZ);
    console.log(targetZ);
  }
};

// 模型移动函数
function moveModelAlongZ(targetZ) {
  const tween1 = new DT.TWEEN.Tween(model.position)
    .to({ z: targetZ }, 1000)
    .start();
}

moveModelAlongZ();
