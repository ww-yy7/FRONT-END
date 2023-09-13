// // 动画里面必须加定位
// // 缓动动画
// // obj目标对象，traget目标位置
// // 回调函数，目前函数接下来要执行的函数
// function animate(obj, target, callback) {
//   // console.log(callback);   callback = function() {}  调用的时候 callback()

//   // 先清除以前的定时器，只保留当前的一个定时器执行，防止多次点击，速度加快
//   clearInterval(obj.timer);
//   obj.timer = setInterval(function () {
//     // 计算步长
//     var step = (target - obj.offsetLeft) / 10;
//     step = step > 0 ? Math.ceil(step) : Math.floor(step);
//     if (obj.offsetLeft == target) {
//       // 停止动画 本质是停止定时器
//       clearInterval(obj.timer);
//       // 回调函数写到定时器结束里面
//       // if (callback) {
//       //     // 调用函数
//       //     callback();
//       // }
//       callback && callback();
//     }
//     // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
//     obj.style.left = obj.offsetLeft + step + "px";
//   }, 15);
// }
function animate(obj, target, callback) {
  clearInterval(obj.timer); //不加清除会导致只能点击一次，接下来的图片会非常抖动，只保留当前的一个定时器执行，防止多次点击，速度加快
  obj.timer = setInterval(function () {
    // 步长值改成整数，往上取整，Math.cell
    //var step = Math.ceil((target - obj.offsetLeft) / 10);
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      callback && callback();
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
