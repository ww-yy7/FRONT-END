window.addEventListener("load", function () {
  //1.获取元素
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");
  var focusWidth = focus.offsetWidth;
  //2.鼠标经过focus就显示隐藏左右按钮
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    timer = setInterval(function () {
      //手动调用右侧按钮点击事件
      arrow_r.click();
    }, 2000);
  });
  //3.动态生成小圆圈
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    //创建一个li
    var li = document.createElement("li");
    //记录当前小圆圈的索引号，通过自定义属性来做
    li.setAttribute("index", i);
    //把li插入到ol里面去
    ol.appendChild(li);
    //4.排他思想
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      //点击小圆圈，移动图片，移动的是ul
      //ul的移动距离，就是小圆圈的索引号乘以图片的宽度，往左边滑动，是负值。
      //当我们点击了某个小li，就拿到了当前li的索引号
      var index = this.getAttribute("index");
      num = index;

      // console.log(focusWidth);
      // console.log(index);
      animate(ul, -index * focusWidth);
      // console.log(-index * focusWidth); //target
      // var step = (-index * focusWidth - ul.offsetLeft) / 10;
      // console.log(ul.offsetLeft); //向左偏移的值
      // console.log((-index * focusWidth - ul.offsetLeft) / 10); //步长
      // console.log(ul.style.left); //left的值
      // console.log(Math.floor(step));
    });
  }
  //把ol里面的第一个li设置成白色的点current
  //克隆第一张图片，放最后面
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  ol.children[0].className = "current";
  //右侧按钮点击
  var num = 0;
  var circle = 0;
  //节流阀
  var flag = true;
  arrow_r.addEventListener("click", function () {
    //如果走到了最后复制的一张图片，此时的ul要快速复原，left改为0
    if (flag) {
      flag = false; //关闭节流阀
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
      //点击右侧按钮，小圆圈变化
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleChange();
    }
  });
  //左侧
  arrow_l.addEventListener("click", function () {
    //如果走到了最后复制的一张图片，此时的ul要快速复原，left改为0
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = num * focusWidth + "px";
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });

      //点击右侧按钮，小圆圈变化
      circle--;
      // if (circle < 0) {
      //   circle = ol.children.length - 1;
      // }
      circle = circle < 0 ? ol.children.length - 1 : circle;
      circleChange();
    }
  });
  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }

  //自动播放轮播图
  var timer = setInterval(function () {
    //手动调用右侧按钮点击事件
    arrow_r.click();
  }, 2000);
});

//节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发
//核心实现思路：利用回调函数，添加一个变量来控制，所著函数和解锁函数
//开始设置一个变量 var flag=true;
//if(flag){flag=false;do something}
//利用回调函数动画执行完毕
