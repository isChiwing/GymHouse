<script lang="ts" setup>
import { ref } from 'vue'
import LoginButton from './LoginButton.vue'
import router from "../router";
import { User } from "@element-plus/icons-vue";
import * as Apis from "../request/apis/index";
import {
  ElMessage,
} from "element-plus";

const jumpLoginPage = ()=>{
  router.push("/login")
}

const jumpUser = ()=>{
  Apis.users.checkUser().then((res) => {
    if(res.data.status ==200){
      //console.log(res);
      const userData = JSON.parse(res.data.message);
      if(userData.userType == 0){
        router.push("/admin")
      }else{
        router.push("/user")
      }
      console.log(userData);
    }else{
      ElMessage({
          message: "请重新登录",
          type: "error",
        });
      router.push("/login")
    }
  });
}

</script>

<template>
  <div class="topbar">
    <div class="logo">
      <img src="@/assets/logo.png" class="logo-img" />
      <span class="logo-title">GymHouse</span>
    </div>

    <div class="right-content">
      <ul class="navbar">
        <li>
          <router-link to="/" active-class="active">首页</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="active">关于</router-link>
        </li>
        <li>
          <router-link to="/order" active-class="active">预约</router-link>
        </li>
        <li>
          <router-link to="/repairs" active-class="active">报修</router-link>
        </li>
        <li>
          <router-link to="/article" active-class="active">资讯</router-link>
        </li>
      </ul>
      <LoginButton @click="jumpLoginPage">登入/注册</LoginButton>
      <div class="user" @click="jumpUser"><el-icon><User/></el-icon></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import '@/assets/styles/index.scss';

.topbar {
  width: calc(100% - 2rem);
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 0.9rem;
  border-bottom: 1px #eee solid;
  background-color: #fff;
  .logo {
    display: flex;
    margin-left: 5rem;
    .logo-img {
      width: 50px;
      height: 50px;
    }
    .logo-title {
      color: var(--theme-color);
      font-size: 20px;
      padding-top: 15px;
      padding-left: 10px;
      font-family: Helvetica;
    }
  }
  .user{
    width: 20px;
    height: 20px;
    margin-left: 20px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: var(--theme-color);
    }
  }
  .right-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5rem;

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      list-style: none;
      

      li {
        padding: 0.5rem 0.5rem;

        a {
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #000;
          text-decoration: none;
          transition: 0.3s;
          position: relative;

          &.acrive.router-link-exact-active::after,
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 50%;
            background: var(--theme-color);
            height: 3px;
            transform: translateX(-50%) scaleX(0);
            transition: 0.3s;
          }

          &.active.router-link-exact-active,
          &:hover {
            color: var(--theme-color);

            &::after {
              transform: translateX(-50%) scaleX(1);
            }
          }
        }
      }
    }
  }
}
</style>
