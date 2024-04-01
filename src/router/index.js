import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout";

//获取文件下的子路由
function getfilesRouters(files) {
  const children = files.keys().reduce((modules, modulePath) => {
    const value = files(modulePath);
    return [...modules, ...value.default];
  }, []);
  return children;
}

//layout页面
const children = getfilesRouters(require.context("./modules", false, /\.js$/));
console.log(children);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "home" },
      },
      {
        path: "/hello",
        name: "hello",
        component: () => import("@/views/hello/index.vue"),
        meta: { title: "hello" },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_WEB_BASE_URL,
  routes,
});

export default router;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) {
    return originalPush.call(this, location, resolve, reject);
  }

  return originalPush.call(this, location).catch((err) => {
    console.log(err);
  });
};
