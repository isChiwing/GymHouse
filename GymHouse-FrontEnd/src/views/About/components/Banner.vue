<script lang="ts" setup>
const jumpFitnessPart: any = () => {
  const intention: any = document.getElementById("#slide");
  intention.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="box">
    <div class="black-bg">
      <div class="content">
        <div class="title">服务至上 运动至上</div>
        <div class="down" @click="jumpFitnessPart"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: calc(100vh - 61px);
  width: 100%;
  background: url(../../../assets/banner-about.jpg) no-repeat;
  background-size: cover;
  position: relative;
  .black-bg {
    background-color: rgba(2, 2, 2, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    //opacity: 0.6;
    .content {
      position: relative;
      height: calc(100% - 100px);
      animation-name: titleMove;
      animation-duration: 1s;
      margin: 0 auto;
      .title {
        color: #fff;
        font-size: 48px;
        letter-spacing: 2px;
        font-family: "微软雅黑";
        margin-top: 38vh;
      }
      .down {
        background: url(../../../assets/down.png) no-repeat;
        width: 50px;
        height: 50px;
        background-size: cover;
        margin: 0 auto;
        margin-top: 200px;
        cursor: pointer;
      }
    }
  }

  @keyframes titleMove {
    from {
      top: 20px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
}
</style>
