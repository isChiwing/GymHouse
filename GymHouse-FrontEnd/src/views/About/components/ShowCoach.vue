<script lang="ts" setup>
import { ref, Ref, reactive, h } from "vue";

const oWapper = ref("");
const index = ref(0);
const nextBtn = ref("");
const reBtn = ref("not-allowed");

const trainerList = reactive([
  {
    name: "Tony",
    job: "金牌教练",
    fitness: "同心圆店",
    introduce: "擅长增肌、燃脂、核心功能等训练",
    image: "https://photo.tuchong.com/1718686/f/58001393.jpg",
  },
  {
    name: "Jenney",
    job: "瑜伽教练",
    fitness: "同心圆店",
    introduce: "擅长瑜伽、燃脂、塑身等训练",
    image:
      "https://n.sinaimg.cn/sports/2_img/upload/cf0d0fdd/29/w1080h1349/20191024/2772-ihmipqw0168369.jpg",
  },
  {
    name: "Ben",
    job: "高级教练",
    fitness: "同德圆店",
    introduce: "擅长增肌、燃脂、核心功能等训练",
    image:
      "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0818%2Fbbfaed09j00qy0wo9001pc000hs00oyg.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
  },
  {
    name: "Devin",
    job: "高级教练",
    fitness: "同德圆店",
    introduce: "擅长增肌、燃脂、核心功能等训练",
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp53329156.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675685630&t=ee3e42cf1aabf42cf3f45af5dd808da1",
  },
  {
    name: "Lucy",
    job: "高级教练",
    fitness: "同乐圆店",
    introduce: "擅长增肌、燃脂、核心功能等训练",
    image:
      "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0402%2F509ccb04j00r9otfw002ic000hs00l7m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
  },
]);

/**
 * 往右滑动按钮
 */
const handleNext: any = () => {
  if (index.value == trainerList.length - 3) {
    nextBtn.value = "not-allowed";
  } else {
    index.value++;
    oWapper.value = "translateX(" + index.value * -345 + "px)";
    reBtn.value = "pointer";
    if (index.value == 6 - 3) {
      nextBtn.value = "not-allowed";
    }
  }
};

/**
 * 往左滑动按钮
 */
const handleRe: any = () => {
  if (index.value == 0) {
    reBtn.value = "not-allowed";
    nextBtn.value = "pointer";
  } else {
    index.value--;
    oWapper.value = "translateX(" + -index.value * +345 + "px)";
    nextBtn.value = "pointer";
    if (index.value == 0) {
      reBtn.value = "not-allowed";
    }
  }
};
</script>

<template>
  <div class="coach-box">
    <div class="title"><span>OUR</span> TRAINER</div>

    <div class="main-box">
      <div
        class="left"
        @click="handleRe"
        :style="{
          cursor: reBtn,
        }"
      >
        ＜
      </div>

      <div class="content">
        <div
          class="trainer-box"
          v-for="item in trainerList"
          :style="{
            transform: oWapper,
          }"
        >
          <div class="photo">
            <img :src="item.image" />
          </div>
          <div class="name">
            {{ item.name }}
          </div>
          <div class="job">{{ item.job }}</div>
          <div class="msg"><span>所在门店：</span>{{ item.fitness }}</div>
          <div class="msg"><span>个人介绍：</span>{{ item.introduce }}</div>
        </div>
      </div>

      <div
        class="right"
        @click="handleNext"
        :style="{
          cursor: nextBtn,
        }"
      >
        ＞
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coach-box {
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
  justify-content: center;
  .left {
    width: 30px;
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    align-self: center;
    font-size: 30px;
    color: #fff;
    margin-right: 20px;
  }
  .right {
    width: 30px;
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    align-self: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    margin-left: 20px;
  }
  .content {
    width: calc(100% - 60px);
    max-width: 1025px;
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-wrap: nowrap;
    .trainer-box {
      width: 310px;
      height: 80%;
      border: 2px solid #000;
      align-self: center;
      margin: 0 15px;
      border-radius: 8px;
      flex-shrink: 0;
      transition: 0.5s ease;

      .photo {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        margin-top: 50px;
        img {
          width: 150px;
          height: 150px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 22px;
        text-align: center;
        margin-top: 20px;
        font-family: Arial, Helvetica, sans-serif;
      }
      .job{
        font-size: 18px;
        text-align: center;
        margin-top: 25px;
      }
      .msg{
        margin: 0 auto;
        margin-top: 15px;
        line-height: 28px;
        text-align: center;
        padding: 0 15px;
        span{
          color: var(--theme-color);
        }
      }
    }
  }
}
</style>
