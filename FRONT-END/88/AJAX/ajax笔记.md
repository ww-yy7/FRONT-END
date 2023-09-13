# AJAX 课程

## 原生 AJAX

### AJAX 简介

- Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指⼀种创建交互式⽹⻚应⽤的⽹⻚开发技术。
- Ajax 是⼀种⽤于创建快速动态⽹⻚的技术。
- Ajax 是⼀种在⽆需重新加载整个⽹⻚的情况下，能够更新部分⽹⻚的技术。（最大的优势）
- 通过在后台与服务器进⾏少量数据交换，Ajax 可以使⽹⻚实现异步更新。这意味着可以在不重新加载整个⽹⻚的情况下，对⽹⻚的某部分进⾏更新。

### XML 简介

- XML 可扩展标记语言（eXtensible Markup Language）
- XML 被设计用来传输和存储数据。
- 与 HTML 类似，但是 HTML 被设计用来显示数据，XML 里面是自定义标签，用来表示一些数据
- 被 JSON 取代

### AJAX 特点

- 可以无需刷新页面与服务器端进行通信
- 允许根据用户时间来更新页面部分内容
- 没有浏览历史，不能回退
- 存在跨域问题
- SEO 不友好

## HTTP

超文本传输协议（Hypertext Transfer Protocol，HTTP）是一个简单的请求-响应协议

### 请求报文

重点是格式与参数

行 POST /s?ie=utf-8 HTTP/1.1
头
HOST:atguigu.com
Cookie:name=guigu
Content-type: application/x-www-form-urlencoded
User-Agent:chrome 83
空行
体 GET 请求是空的，POST 可以不是空的

### 响应报文

行 HTTP/1.1 200 OK  
头
Content-type:
Content-length
Content-encoding
空行
体

<html>
<head>
</head>
</html>
、、、

###  响应状态码

- 404 服务器无法找到客户端需要访问的资源
- 403 服务器已经收到了客户端的请求，但是拒绝执行这个请求
- 401 请求需要用户的身份认证
- 500 服务器内部错误，无法完成请求
- 200:请求成功，一般用于get，和post
- 304：请求的资源未修改，此时服务器不会返回任何资源，客户端将使用本地缓存资源
