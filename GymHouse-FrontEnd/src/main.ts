import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { start, close } from "./script/utils/nprogress";

createApp(App).use(router).mount("#app");

//设置路由导航
router.beforeEach((to, from, next) => {
  start();
  if (to.meta.title) {
    document.title = "GymHouse - " + to.meta.title;
  } else {
    document.title = "GymHouse";
  }


  next();
});

//路由加载结束
router.afterEach(() => {
  close();
});