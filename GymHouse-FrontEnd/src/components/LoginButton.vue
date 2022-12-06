<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 110px;
  height: 25px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-left: 1.5rem;
  cursor: pointer;
  padding-top: 10px;
  text-align: center;

  &:hover {
    color: #fff;
    background-color: var(--theme-color);
    border: 1px solid var(--theme-color);
  }
  &:active {
    color: #fff;
    background-color: var(--theme-color);
    border: 1px solid var(--theme-color);
  }
}
</style>
