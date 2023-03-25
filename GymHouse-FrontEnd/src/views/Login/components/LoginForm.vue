<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";
import { User, Key, Phone } from "@element-plus/icons-vue";
import router from "../../../router";
import * as Apis from "../../../request/apis/index";
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
const loginData: any = reactive({
  phone: "",
  passWord: "",
});

//表单验证
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  phone: [{ required: true, message: "请输入您的电话号码", trigger: "blur" }],
  passWord: [{ required: true, message: "请输入用户名", trigger: "blur" }],
});

//提交
let loginType = 0;
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      Apis.users.login(loginData).then((res) => {
          //提示框
          ElMessage({
            message: "登录成功",
            type: "success",
          });
          if (loginType == 0) {
            router.push("/admin");
          } else if (loginType == 1) {
            router.push("/user");
          }
        })
        .catch((error: any) => {
          const errorData =JSON.parse(error.request.response);
          ElMessage({
            message: errorData.message,
            type: "error",
          });
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
        <el-form-item label="电话 Phone" prop="phone">
          <el-input v-model="loginData.phone" placeholder="请输入您的电话">
            <template #prefix>
              <el-icon class="el-input__icon"><Phone /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码 PassWord" prop="passWord">
          <el-input
            v-model="loginData.passWord"
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
