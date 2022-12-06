<script lang="ts" setup>
import { ref } from 'vue'
import LoginButton from './LoginButton.vue'
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
      <LoginButton>登入/注册</LoginButton>
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
