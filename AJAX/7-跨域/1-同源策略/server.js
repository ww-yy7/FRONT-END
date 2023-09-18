const express = require("express");
const app = express();
app.get("/home", (request, response) => {
  //响应一个页面
  //__dirname
  //   response.setHeader("Access-Control-Allow-Origin", "*");
  //   //设置响应头
  //   response.setHeader("Access-Control-Allow-Headers", "*");
  response.sendFile(__dirname + "/index.html"); //要加/
});

app.get("/data", (request, response) => {
  //   response.setHeader("Access-Control-Allow-Origin", "*");
  //   //设置响应头
  //   response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("用户数据");
});
app.listen(9000, () => {
  console.log("服务已经开启");
});
