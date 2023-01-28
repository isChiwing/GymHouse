<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";
import { User, Key } from "@element-plus/icons-vue";
import {
  FormInstance,
  FormRules,
  ElMessage,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect,
  ElIcon,
} from "element-plus";

//表单
const loginData = reactive({
  username: "",
  password: "",
});

//表单验证
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入用户名", trigger: "blur" }],
});

//提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      console.log(loginData);
      //提示框
      ElMessage({
        message: "登录成功！",
        type: "success",
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div>
    <div class="title">
      <span>LOG IN TO</span> <br />
      GYMHOUSE
    </div>
    <div class="form">
      <el-form
        ref="ruleFormRef"
        label-position="top"
        label-width="100px"
        :model="loginData"
        style="max-width: 460px"
        size="large"
        :rules="rules"
      >
        <el-form-item label="用户名 UserName" prop="username">
          <el-input v-model="loginData.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码 PassWord" prop="password">
          <el-input
            v-model="loginData.password"
            placeholder="请输入密码"
            type="password"
            show-password
          >
            <template #prefix>
              <el-icon class="el-input__icon"><key /></el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="button">
      <LgBtn @click="submitForm(ruleFormRef)">登入</LgBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding-left: 2%;
  margin-top: 8vh;
}

.button {
  margin-top: 10vh;
}

.title {
  padding-top: 5vh;
  margin-left: 2%;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--theme-color);

  span {
    color: transparent;
    font-size: 50px;
    -webkit-text-stroke: 1px #000;
    padding-right: 8px;
    line-height: 60px;
  }
}
</style>
