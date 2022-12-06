<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <top-bar></top-bar>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";

#nprogress .bar {
  background: var(--theme-color) !important; //自定义颜色
}

#nprogress .peg {
  box-shadow: 0 0 10px red, 0 0 5px red !important;
}
</style>
