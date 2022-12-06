<script lang="ts" setup>
import { Ref, ref } from "vue";
import router from "../../router";
import LgBtn from "@/components/LoginButton.vue";

//首页按钮跳转
const goOrder:any = () => {
  router.push('/about');
};
</script>

<template>
  <div class="home-page">
    <div class="left-part">
      <div class="title">
        <div class="title-redPart">PERFECT WORKOUT</div>
        <div class="title-text">GYMHOUSE IS</div>
        <div class="title-text">DREAMHOUSE</div>
        <div class="title-slogan">把健身房当成梦想的家</div>
      </div>
      <div class="btn" @click="goOrder">
        <LgBtn>了解我们 →</LgBtn>
      </div>
    </div>

    <div class="right-part">
      <img class="banner" src="../../assets/banner.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  height: calc(100vh - 61px);
  width: 100%;
  display: flex;
}

.left-part {
  height: 100%;
  width: 100%;
  background-color: #fff;
  margin-left: 150px;
  .title {
    margin-top: 20vh;
    position: relative;
    animation-name: titleMove;
    animation-duration: 1s;
    .title-redPart {
      color: transparent;
      font-size: 50px;
      -webkit-text-stroke: 1px var(--theme-color);
      font-family: Arial, Helvetica, sans-serif;
    }
    .title-text {
      font-size: 50px;
      margin-top: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 500;
    }
    .title-slogan {
      color: var(--theme-color);
      margin-top: 20px;
      font-size: 20px;
      //font-family: "Times New Roman", Times, serif;
    }
  }
  .btn {
    margin-top: 80px;
    margin-left: -20px;
    animation-name: imgMove;
    animation-duration: 1s;
  }
}

@keyframes titleMove {
  from {
    top: 100px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.right-part {
  height: 100%;
  width: 100%;
  animation-name: imgMove;
  animation-duration: 1s;
  //background-color: pink;

  .banner {
    margin-top: 100px;
    width: 800px;
  }
}

@keyframes imgMove {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
