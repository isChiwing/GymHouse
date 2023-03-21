import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const history = createWebHistory();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/index.vue"),
    meta: {
      title: "首页",
      index: "1",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About/index.vue"),
    meta: {
      title: "关于",
      index: "2",
    },
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/Order/index.vue"),
    meta: {
      title: "预约",
      index: "3",
    },
  },
  {
    path: "/repairs",
    name: "repairs",
    component: () => import("../views/Repairs/index.vue"),
    meta: {
      title: "报修",
      index: "4",
    },
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../views/Article/index.vue"),
    meta: {
      title: "资讯",
      index: "5",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/index.vue"),
    meta: {
      title: "登录/注册",
      index: "6",
    },
  },
  {
    path: "/admin",
    name: "adimin",
    component: () => import("../views/Admin/index.vue"),
    meta: {
      title: "管理员中心",
      index: "7",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User/index.vue"),
    meta: {
      title: "用户中心",
      index: "8",
    },
  },
  
];

const router = createRouter({ history, routes });

export default router;