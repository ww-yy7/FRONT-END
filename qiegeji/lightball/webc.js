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
      const min = -2130;
      const max = 0;
      const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

      const min2 = -400;
      const max2 = 0;
      const randomInteger2 =
        Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

      const min3 = -6000;
      const max3 = 0;
      const randomInteger3 =
        Math.floor(Math.random() * (max3 - min3 + 1)) + min3;

      const min4 = -1315;
      const max4 = 0;
      const randomInteger4 =
        Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
      const min5 = -385;
      const max5 = 0;
      const randomInteger5 =
        Math.floor(Math.random() * (max5 - min5 + 1)) + min5;
      ws.send(
        JSON.stringify({
          // // modelstatus: false,
          // // qudong: Math.round(Math.random()),
          // // xplay: -220,
          // // zplay: -1150,
          // // yplay: 0,
          // //1号切割机的数据
          // PositionX1: -2130,
          // PositionY1: -200,
          // PositionZ1: -21,
          // arcOn1: Math.random() < 0.5,
          // //2号切割机的数据
          // PositionX2: -1331,
          // PositionY2: -20,
          // PositionZ2: 0,
          // arcOn2: Math.random() < 0.5,
          // //3号切割机的数据
          // PositionX3: -330,
          // PositionY3: -20,
          // PositionZ3: 0,
          // arcOn3: Math.random() < 0.5,
          // //4号切割机的数据
          // PositionX4: -530,
          // PositionY4: -20,
          // PositionZ4: 0,
          // arcOn4: Math.random() < 0.5,
          // //5号切割机的数据
          // PositionX5: -330,
          // PositionY5: -20,
          // PositionZ5: 0,
          // arcOn5: Math.random() < 0.5,
          // //6号切割机的数据
          // PositionX6: -330,
          // PositionY6: -200,
          // PositionZ6: 0,
          // arcOn6: Math.random() < 0.5,

          PositionX1: randomInteger,
          PositionZ3: 0,
          PositionX2: randomInteger,
          PositionZ4: 0,
          PositionZ1: 0,
          PositionZ2: 0,
          PositionX5: randomInteger,
          PositionX6: randomInteger,
          PositionZ5: 0,
          PositionX3: randomInteger,
          PositionX4: randomInteger,
          PositionZ6: 0,
          timestamp: "2023-11-15 15:36:37",
          PositionY2: randomInteger2,
          PositionY3: randomInteger2,
          PositionY1: randomInteger2,
          PositionY6: randomInteger2,
          PositionY4: randomInteger2,
          PositionY5: randomInteger2,
          arcOn3: Math.random() < 0.5,
          arcOn4: Math.random() < 0.5,
          arcOn1: Math.random() < 0.5,
          arcOn2: Math.random() < 0.5,
          arcOn5: Math.random() < 0.5,
          arcOn6: Math.random() < 0.5,
          PositionX7: randomInteger3,
          PositionY7: randomInteger4,
          PositionZ7: randomInteger5,
        })
      );
    }, 1000 * 5);
  });
  // console.log(modelStatus);
});
