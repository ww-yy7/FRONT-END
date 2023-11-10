// //在DT里创建场景
const { THREE, TWEEN, scene, setLoop } = DT;

// //寻找模型ID
function findModel(id) {
  let target = "";
  scene.children.forEach((n) => {
    if (n.modelToken === id) {
      target = n;
    }
  });
  return target;
}

// const model1=findModel('6Frs5VmBafTkc_nfYL4Ts')
// console.log(model1)
// 模型ID数组
const modelIDs = [
  "6Frs5VmBafTkc_nfYL4Ts",
  "xCrr1OaZq_NQVz8en1S_q",
  "-w5pI2CCjPCm4kmvghDu7",
  "Le9Q_HssWINc37AQtq_JT",
  "vrJo8KtRNTHDk2NriRrfN",
  "Dl1Ik5IU77gJoPqEPAvUd",
  "PEIouJpgNjadCChFJw9ls",
];

//连接websocket
const socket = new WebSocket("ws://localhost:3085");

// 监听 WebSocket 连接打开事件
socket.onopen = function () {
  console.log("WebSocket 连接已打开");
};

// 监听 WebSocket 连接关闭事件
socket.onclose = function () {
  console.log("WebSocket 连接已关闭");
};

// 监听 WebSocket 接收消息事件
socket.onmessage = function (event) {
  const message = event.data;

  // 解析接收到的消息
  const data = JSON.parse(message);

  // 根据模型ID找到并设置可见状态
  function setModelsVisibility(modelIDs, visible) {
    modelIDs.forEach(function (id) {
      const model = findModel(id);
      console.log(model);
      if (model !== null) {
        model.visible = visible;
        console.log("找到了模型,ID为:" + id);
      } else {
        console.log("未找到模型,ID为:" + id);
      }
    });
  }
  //将模型ID数组中的模型设置为可见状态
  setModelsVisibility(modelIDs, data.modelstatus);
  console.log(data.modelstatus);
};
