const WebSocket = require("ws");

const port = "3085";

const wss = new WebSocket.Server({ port });

const { v4: uuidv4 } = require("uuid"); // 使用 UUID v4 版本

const connections = new Map();
// 连接成功的回调函数

wss.on("listening", () => {
  console.log(`WebSocket server is listening on port: ${port}`);

  //   // 初始状态值
  //   let modelstatus = Math.random() < 0.5;

  wss.on("connection", function connection(ws, req) {
    const clientUUID = uuidv4();

    // 存储连接和对应的 UUID
    connections.set(clientUUID, ws);

    // 设置连接的超时时间
    const connectionTimeout = setTimeout(() => {
      console.log(`Connection with UUID ${clientUUID} timed out`);
      ws.terminate(); // 关闭连接
      connections.delete(clientUUID);
    }, 60000); // 60秒超时

    console.log("req", req);
    const ip = req.socket.remoteAddress;
    const port = req.socket.remotePort;
    const clientName = ip + port;

    console.log("%s is connected ", clientName);
    let i = 0;

    setInterval(() => {
      i += 1;

      ws.send(
        JSON.stringify({
          state: "start",
          data: i,
        })
      );
    }, 1000 * 2);

    function isJSON(data) {
      try {
        JSON.parse(data);
        return true;
      } catch (error) {
        return false;
      }
    }

    wss.on("open", function open() {
      console.log("connected");
    });

    wss.on("close", (close) => {
      console.log("disconnected");
      clearTimeout(connectionTimeout); // 清除超时定时器
      connections.delete(clientUUID);
    });

    ws.on("error", (error) => {
      console.error(`Error with client UUID ${clientUUID}:`, error.message);
      clearTimeout(connectionTimeout); // 清除超时定时器
      ws.terminate(); // 关闭连接
      connections.delete(clientUUID);
    });

    // 监听数据返回
    wss.on("message", function incoming(message) {
      console.log("received: %s from %s", message, clientName);
      if (message instanceof Buffer) {
        // 如果接收到的是 Buffer，将其转换为字符串
        const textData = message.toString("utf8"); // 使用 utf8 编码解析
        // const updatedDataArray = data.map((n) => {
        //   n.status = 1;
        //   return n;
        // });
        if (isJSON) {
          ws.send(
            JSON.stringify({
              state: JSON.parse(textData).key,
              data,
            })
          );
        }
      }
    });
  });
});
