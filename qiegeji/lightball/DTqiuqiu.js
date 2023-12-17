// //在DT里创建场景
const { THREE, TWEEN, scene, setLoop } = DT;

// // //寻找模型ID
// function findModel(id) {
//   let target = "";
//   scene.children.forEach((n) => {
//     if (n.modelToken === id) {
//       target = n;
//     }
//   });
//   return target;
// }
// //在DT里创建场景

// //寻找模型ID
function findModel(id) {
  let target = "";
  scene.traverse((n) => {
    if (n.fileData?.modelToken === id) {
      target = n;
    }
  });
  return target;
}

// const model1=findModel('6Frs5VmBafTkc_nfYL4Ts')
// console.log(model1)
// 模型ID数组
const modelIDs = [
  "sxqN8xUDDXEaebINolONm", //正方体
  "I4joviC0526ltmmSD4wng", //发光球
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
    modelIDs.forEach((id) => {
      const model = findModel(id);
      console.log("111", model, visible);
      if (model) {
        model.visible = visible;
        console.log("找到了模型,ID为:" + id);
      } else {
        console.log("未找到模型,ID为:" + id);
      }
    });
  }
  //将模型ID数组中的模型设置为可见状态
  setModelsVisibility(modelIDs, data.modelstatus);
};

// //在DT里创建场景
//const { THREE, TWEEN, scene, setLoop } = DT;

// //寻找模型ID
function findModel(id) {
  let target = "";
  scene.traverse((n) => {
    if (n.fileData?.modelToken === id) {
      target = n;
    }
  });
  return target;
}

// const model1=findModel('6Frs5VmBafTkc_nfYL4Ts')
// console.log(model1)
// 模型ID数组
const modelIDs1 = [
  'E79u5JklsZADZM3-oaZRS',//1
];
const modelIDs2 = [
  'AIZ-NwwZe1MpP0xYitdM3',//2
];
const modelIDs3 = [
  'U6KTffnqVPIsx_u6Pv0hY',//3
];
const modelIDs4 = [
  '_OkDLTgJYSxZ2KNRKA0fL',//4
];
const modelIDs5 = [
  '38yaTKzBceXX5Lo4MyLCO',//5号
];
const modelIDs6 = [
  '2nkFwD1qOEiYrtTiVO1jy',//6
];
// const modelIDs = [
//   '38yaTKzBceXX5Lo4MyLCO',//5号
//   '2nkFwD1qOEiYrtTiVO1jy',//6
//   'E79u5JklsZADZM3-oaZRS',//1
//   'AIZ-NwwZe1MpP0xYitdM3',//2
//   'U6KTffnqVPIsx_u6Pv0hY',//3
//   '_OkDLTgJYSxZ2KNRKA0fL',//4
// ];


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
    modelIDs.forEach((id) => {
      const model = findModel(id);
      console.log('111', model, visible);
      if (model) {
        model.visible = visible;
        console.log("找到了模型,ID为:" + id);
      } else {
        console.log("未找到模型,ID为:" + id);
      }
    });
  }
  //将模型ID数组中的模型设置为可见状态
  setModelsVisibility(modelIDs1, data.arcOn1);
  setModelsVisibility(modelIDs2, data.arcOn2);
  setModelsVisibility(modelIDs3, data.arcOn3);
  setModelsVisibility(modelIDs4, data.arcOn4);
  setModelsVisibility(modelIDs5, data.arcOn5);
  setModelsVisibility(modelIDs6, data.arcOn6);
};
