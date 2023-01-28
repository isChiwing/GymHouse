<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const showForm = ref(true);

//切换登录注册
let switchForm = ref().value;
switchForm = () => {
  showForm.value = !showForm.value;
  //console.log(showForm.value);
};

</script>

<template>
  <div class="login">
    <div class="img">
      <img
        src="http://n.sinaimg.cn/sports/2_img/upload/cf0d0fdd/320/w2048h3072/20200723/7223-iwtqvyk4166040.jpg"
      />
    </div>

    <div class="box">
      <!-- 登录表单 -->
      <div class="login-form" v-if="showForm">
        <LoginForm></LoginForm>
      </div>

      <!-- 注册表单 -->
      <div class="login-form" v-if="!showForm">
        <RegisterForm></RegisterForm>
      </div>

      <div class="msg" @click="switchForm" v-show="showForm">
        没有账号？点击注册
      </div>
      <div class="msg" @click="switchForm" v-show="!showForm">
        已有账号？点击登录
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: calc(100vh - 61px);
  width: 100%;
  display: flex;

  .img {
    width: 45%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      box-shadow: 5px 5px 10px #ccc;
    }
  }

  .box {
    width: calc(100% - 45%);
    padding-left: 2%;

    .login-form {
      margin-top: 10vh;
      margin-left: 8%;
    }

    .msg {
      margin-top: 15px;
      margin-left: 11%;
      font-size: 14px;
      cursor: pointer;
      width: 150px;

      &:hover {
        color: var(--theme-color);
        text-decoration: underline;
      }
    }
  }
}
</style>
