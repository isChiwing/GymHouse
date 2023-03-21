<script lang="ts" setup>
import orderPart from "./components/orderPart.vue";
import repairsPart from "./components/repairsPart.vue";
import writePart from "./components/writePart.vue";
import { Calendar, Edit, MessageBox } from "@element-plus/icons-vue";

const jumpOrderPart: any = () => {
  const intention: any = document.getElementById("#order");
  intention.scrollIntoView({ behavior: "smooth" });
};

const jumpRepairsPart: any = () => {
  const intention: any = document.getElementById("#repairs");
  intention.scrollIntoView({ behavior: "smooth" });
};

const jumpWritePart: any = () => {
  const intention: any = document.getElementById("#write");
  intention.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="leftPart">
    <div class="botton" @click="jumpOrderPart">
      <el-icon><Calendar /></el-icon>
    </div>
    <div class="botton" @click="jumpRepairsPart">
      <el-icon><MessageBox /></el-icon>
    </div>
    <div class="botton" @click="jumpWritePart">
      <el-icon><Edit /></el-icon>
    </div>
  </div>
  <orderPart></orderPart>
  <repairsPart></repairsPart>
  <writePart></writePart>
</template>

<style lang="scss" scoped>
.leftPart {
  width: 18%;
  //background-color: var(--theme-color);
  position: fixed;
  .botton {
    width: 20px;
    height: 20px;
    border: #999 1px solid;
    border-radius: 50%;
    text-align: center;
    margin-top: 25px;
    margin-left: 50px;
    padding: 8px;
    color: #666;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      border: var(--theme-color) 1px solid;
      color: var(--theme-color);
    }
  }
}
</style>
