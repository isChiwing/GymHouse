import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { start, close } from "./script/utils/nprogress";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'default-passive-events'

createApp(App).use(router).use(ElementPlus).mount("#app");

//设置路由导航
router.beforeEach((to, from, next) => {
  start();

  //设置标题
  if (to.meta.title) {
    document.title = "GymHouse - " + to.meta.title;
  } else {
    document.title = "GymHouse";
  }

  //导航跳转回到顶部
  document.body.scrollTop = 0; // firefox
  document.documentElement.scrollTop = 0; // safari
  window.pageYOffset = 0;

  next();
});

//路由加载结束
router.afterEach(() => {
  close();
});