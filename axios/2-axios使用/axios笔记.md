# axios 从入门到源码分析

## axios 的理解和使用

### axios 是什么？

- 前端最流行的 ajax 请求库

* axios#request(config)  Axios 类的核心方法，也就是 request 方法，axios 通过 request 方法来发起真实网络请求。
* axios#get(url[, config])  get请求
* axios#delete(url[, config])  删除数据
* axios#head(url[, config])
* axios#options(url[, config])
* axios#post(url[, data[, config]]) 添加数据
* axios#put(url[, data[, config]])  更新数据
* axios#patch(url[, data[, config]])  
* axios#getUri([config])

1. get：获取服务端数据（常用）
2. post：向服务端提交数据（常用）
3. put(全部修改)/patch(局部修改)：修改服务端的数据.
   put请求提交数据：{"hasUserPickUp": false, "hasShopDelivery": false}.
   patch请求提交数据：{"hasShopDelivery": false}.
4. delete：删除服务端数据
5. head：查看响应头
6. options：查看支持的请求发方式
7. trace：查询自己的请求数据
8. connect：预留方法，代购，代替你去访问某个接口，讲接口返回数据也一起给你
