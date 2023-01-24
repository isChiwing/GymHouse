<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import TopBar from "@/components/TopBar.vue";
import FooterVue from "@/components/Footer.vue";
</script>

<template>
    <div style="width: 100%; height: 61px;">
      <top-bar></top-bar>
    </div>
    
    <router-view/>

    <footer-vue></footer-vue>
  
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";

.topbar{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}

#nprogress .bar {
  background: var(--theme-color) !important; //自定义颜色
}

#nprogress .peg {
  box-shadow: 0 0 10px red, 0 0 5px red !important;
}
</style>
