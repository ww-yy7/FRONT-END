//1. 引入express
const express = require("express");

//2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get("/server", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应
  response.send("HELLO");
});
app.post("/server", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应
  response.send("HELLO POST");
});
//json服务
app.all("/json-server", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = {
    name: "111",
  };
  //对对象进行字符串转换
  let str = JSON.stringify(data);
  //设置响应
  response.send(str);
});

//针对IE缓存
app.all("/ie", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应
  response.send("HELLO  IE");
});

//延时响应
app.get("/delay", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    response.send("延时响应");
  }, 3000); //设置响应
});

//jQuery服务
app.all("/jquery-server", (request, response) => {
  //设置响应头,设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  const data = { name: "ww" };
  response.send(JSON.stringify(data));
});

//axios服务
app.all("/axios-server", (request, response) => {
  //设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("HELLO  IE");
});

//用户名检测是否存在
app.all("/check-username", (request, response) => {
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
});

//监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动,8000端口监听中");
});
