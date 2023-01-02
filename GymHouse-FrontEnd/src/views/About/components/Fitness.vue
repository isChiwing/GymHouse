<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";

const dataList = reactive([
  {
    id: 0,
    state: false,
    name: "DREAMHOUSE - 同心圆店",
    phone: "020-83465151",
    img: "https://qbox.youplus.net.cn/about_p4_liuyang.png?imageslim",
    address: "广州市黄埔区同心圆路416号整栋",
  },
  {
    id: 1,
    state: false,
    name: "DREAMHOUSE - 同乐圆店",
    phone: "020-82413624",
    img: "https://qbox.youplus.net.cn/about_p4_liuyang.png?imageslim",
    address: "广州市黄埔区同乐圆路21号广商购物中心5楼",
  },
  {
    id: 2,
    state: false,
    name: "DREAMHOUSE - 同德圆店",
    phone: "020-85392403",
    img: "https://qbox.youplus.net.cn/about_p4_liuyang.png?imageslim",
    address: "广州市黄埔区同德圆路416号康达广场3楼",
  },
]);
</script>

<template>
  <div id="#slide">
    <div class="fitness-box">
      <div class="title"><span>OUR</span> CONTACT</div>
      <div class="main-box">
        <div class="banner"></div>
        <div class="content">
          <div class="content-msg" v-for="item in dataList">
            <div class="fitness-name">{{ item.name }}</div>
            <div class="fitness-msg">联系电话：{{ item.phone }}</div>
            <div class="fitness-msg">地址：{{ item.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fitness-box {
  height: 100vh;
  width: 100%;
}

.title {
  padding-top: 8vh;
  margin-left: 10%;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;

  span {
    color: transparent;
    font-size: 50px;
    -webkit-text-stroke: 1px var(--theme-color);
    padding-right: 8px;
  }
}

.main-box {
  width: 80%;
  height: 70vh;
  margin-left: 10%;
  margin-top: 5vh;
  display: flex;

  .banner {
    width: 40%;
    height: 100%;
    background-color: pink;
    margin-right: 30px;
  }

  .content {
    width: 55%;
    height: 100%;

    .content-msg {
      width: 100%;
      height: 30%;
      border: 2px solid #ccc;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      padding-left: 30px;

      &:hover {
        border: 2px solid var(--theme-color);
      }

      .fitness-name{
        margin-top: 25px;
        font-size: 20px;
      }
      .fitness-msg{
        margin-top: 25px;
        font-size: 18px;
      }
    }
  }
}
</style>
