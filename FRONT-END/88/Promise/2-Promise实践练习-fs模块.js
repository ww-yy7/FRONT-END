const { log } = require("console");
const fs = require("fs");

// //回调函数的形式
// fs.readFile("./resource/content.txt", (err, data) => {
//   //如果出错，则抛出错误
//   if (err) throw err;
//   //输出文件内容
//   console.log(data.toString());
// });

//Promise方法
let p = new Promise((resolve, reject) => {
  fs.readFile("./resource/content.txt", (err, data) => {
    //如果出错
    if (err) reject(err);
    resolve(data);
  });
});
//调用then
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);
