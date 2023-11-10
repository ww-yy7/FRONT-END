const mqtt = require("mqtt");

// 连接到 MQTT 代理服务器
const client = mqtt.connect("mqtt://localhost");
client.subscribe("model/visibility");

// 连接成功的回调函数
client.on("connect", function () {
  console.log("Connected to MQTT broker");

  // 定时切换状态
  setInterval(toggleStatus, 5000);
});

// 初始状态
let isVisible = false;

// 切换状态的函数
function toggleStatus() {
  if (isVisible === false) {
    setStatus2();
    isVisible = true;
  } else {
    setStatus1();
    isVisible = false;
  }
}

// 设置状态1的值
function setStatus1() {
  const message = "true";
  client.publish("model/visibility", message);
  console.log("model/visibility", message);
}

// 设置状态2的值
function setStatus2() {
  const message = "false";
  client.publish("model/visibility", message);
  console.log("model/visibility", message);
}
