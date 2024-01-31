//引入VueRouter
import VueRouter from "vue-router";

//引入组件
import WyAbout from "../pages/WyAbout";
import WyHome from "../pages/WyHome";
import WyNews from "../pages/WyNews";
import WyMessage from "../pages/WyMessage";
import WyDetail from "../pages/WyDetail";

//创建并暴露
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: WyAbout,
      meta: { title: "关于" },
    },
    {
      path: "/home",
      component: WyHome,
      meta: { title: "主页" },
      children: [
        {
          path: "news",
          component: WyNews,
          meta: { isAuth: true, title: "消息" },
          beforeEnter(to, from, next) {
            console.log("beforeEach", to, from);
            if (to.meta.isAuth) {
              //判断当前的路由是否需要进行权限控制
              if (localStorage.getItem("school") === "ecust") {
                //权限控制的具体规则
                next(); //放行
              } else {
                alert("暂无权限查看");
              }
            } else {
              next();
            }
          },
        },
        {
          path: "message",
          component: WyMessage,
          meta: { isAuth: true, title: "短信" },
          children: [
            {
              name: "xiangqing", //给路由命名
              //传递params参数得这样写,占位符
              path: "detail/:id/:title",
              component: WyDetail,
              //props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给Detail组件
              // props:{a:1,b:'hello'}

              //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有prarms参数，以props的形式传给Detail组件
              // props:true

              //props的第三种写法，值为函数
              props({ params: { id, title } }) {
                return { id, title };
              },
            },
          ],
        },
      ],
    },
  ],
});
export default router;
//全局前置守卫：初始化时执行，每次路由切换前执行
// router.beforeEach((to, from, next) => {
//   console.log("beforeEach", to, from);
//   if (to.meta.isAuth) {
//     //判断当前的路由是否需要进行权限控制
//     if (localStorage.getItem("school") === "ecust") {
//       //权限控制的具体规则
//       next(); //放行
//     } else {
//       alert("暂无权限查看");
//     }
//   } else {
//     next();
//   }
// });
//全局后置守卫：初始化时执行，每次路由切换后执行
router.afterEach((to, from) => {
  console.log("afterEach", to, from);
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "ww";
  }
});
