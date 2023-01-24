<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";

//表单
const formData = reactive({
  name: "",
  phone: "",
  date: "",
  time:"",
  address: "",
  trainer: "",
  note: "",
});

//门店数据
const addressData = reactive(["同心圆店", "同乐园店", "同德园店"]);

//教练数据
const trainerData = reactive([
  "自由训练",
  "Tony",
  "Jenney",
  "Ben",
  "Devin",
  "Lucy",
]);

//禁选日期
const disabledDate = (time: Date) => {
  return time.getTime() < Date.now();
};

//提交
const submit = () =>{
  console.log(formData);
}
</script>

<template>
  <div class="order">
    <div class="title"><span>ORDER</span> FORM</div>

    <div class="form">
      <el-form
        label-position="right"
        label-width="100px"
        :model="formData"
        style="max-width: 460px"
        size="large"
      >
        <el-form-item label="姓名">
          <el-input v-model="formData.name" placeholder="请输入您的称呼" />
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="formData.phone" placeholder="请输入您的电话" />
        </el-form-item>

        <el-form-item label="到店日期">
          <el-date-picker
            v-model="formData.date"
            type="date"
            placeholder="请选择到店日期"
            value-format="YYYY-MM-DD"
            format="YYYY-MM-DD"
            :disabled-date="disabledDate"
          />
        </el-form-item>

        <el-form-item label="到店时间">
          <el-select v-model="formData.time" placeholder="请选择到店时间段">
            <el-option label="上午场 9:30 - 12:00" value="上午场" />
            <el-option label="下午场 14:00 - 18:30" value="下午场" />
            <el-option label="夜晚场 18:30 - 22:30" value="夜晚场" />
          </el-select>
        </el-form-item>

        <el-form-item label="门店">
          <el-select v-model="formData.address" placeholder="请选择预约门店">
            <el-option
              v-for="item in addressData"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="选择教练">
          <el-select
            v-model="formData.trainer"
            placeholder="请选择训练方式或教练"
          >
            <el-option
              v-for="item in trainerData"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="备注">
          <el-input
            v-model="formData.note"
            :rows= "3"
            type="textarea"
            resize="none"
            placeholder="请输入备注"
          />
        </el-form-item>
      </el-form>

      <div class="submit">
        <LgBtn @click="submit">提交</LgBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order {
  height: calc(100vh - 61px);
  width: 100%;
}

.title {
  padding-top: 8vh;
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

.form {
  width: 60%;
  margin: 0 auto;
  margin-top: 7vh;
  
  .submit{
    margin-top: 30px;
    width: 150px;
  }
}
</style>
