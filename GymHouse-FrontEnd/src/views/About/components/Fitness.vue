<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";

const dataList = reactive([
  {
    id: 0,
    state: true,
    name: "DREAMHOUSE - 同心圆店",
    phone: "020-83465151",
    img: "https://big.justeasy.cn/effect/202101/20210127111104_6010d9c8efba8.png",
    address: "广州市黄埔区同心圆路416号整栋",
  },
  {
    id: 1,
    state: false,
    name: "DREAMHOUSE - 同乐圆店",
    phone: "020-82413624",
    img: "https://img95.699pic.com/photo/50112/3775.jpg_wh860.jpg",
    address: "广州市黄埔区同乐圆路21号广商购物中心5楼",
  },
  {
    id: 2,
    state: false,
    name: "DREAMHOUSE - 同德圆店",
    phone: "020-85392403",
    img: "https://5b0988e595225.cdn.sohucs.com/images/20181210/9bbdb69f0e394b379ea2a7da55ee939f.jpeg",
    address: "广州市黄埔区同德圆路416号康达广场3楼",
  },
]);

const onMouseEnter: any = (index: number) => {
  //console.log(index);
  dataList[0].state = false;
  for (let i = 0; i < dataList.length; i++) {
    dataList[i].state = false;
    if (i == index) {
      dataList[i].state = true;
      //console.log(dataList);
    }
  }
};
</script>

<template>
  <div id="#slide">
    <div class="fitness-box">
      <div class="title"><span>OUR</span> CONTACT</div>

      <div class="main-box">
        <div class="banner">
          <img
            v-for="(item, index) in dataList"
            :key="index"
            :src="item.img"
            v-show="item.state"
          />
        </div>

        <div class="content">
          <div
            class="content-msg"
            v-for="(item, index) in dataList"
            :key="index"
            @mouseenter="onMouseEnter(index)"
            :class="item.state?'borderHover':'borderNull'"
          >
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
  padding-top: 13vh;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1 / 1;
      box-shadow: 5px 5px 10px #ccc
    }
  }

  .content {
    width: 55%;
    height: 100%;

    .content-msg {
      width: 100%;
      height: 30%;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      padding-left: 30px;
      cursor: pointer;

      // &:hover {
      //   border: 2px solid var(--theme-color);
      // }
      .fitness-name {
        margin-top: 25px;
        font-size: 20px;
      }
      .fitness-msg {
        margin-top: 25px;
        font-size: 18px;
      }
    }
    .borderNull {
      border: 2px solid #ccc;
    }
    .borderHover {
      border: 2px solid var(--theme-color);
      box-shadow: 5px 5px 10px #ccc
    }
  }
}
</style>
