<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";
import { User, Key, Iphone } from "@element-plus/icons-vue";
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
const regData = reactive({
  phone: "",
  username: "",
  password: "",
});

//表单手机验证
var checkPhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("手机号不能为空"));
  } else {
    //验证手机号
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    //验证区号
    const phoneReg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
    console.log(reg.test(value));
    if (reg.test(value) || phoneReg.test(value)) {
      callback();
    } else {
      return callback(new Error("请输入正确的联系电话"));
    }
  }
};

//表单验证
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
  password: [{ required: true, message: "请输入用户名", trigger: "blur" }],
});

//提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      console.log(regData);
      //提示框
      ElMessage({
        message: "注册成功！",
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
      <span>REGISTER TO</span> <br />
      GYMHOUSE
    </div>
    <div class="form">
      <el-form
        ref="ruleFormRef"
        label-position="top"
        label-width="100px"
        :model="regData"
        style="max-width: 460px"
        size="large"
        :rules="rules"
      >
        <el-form-item label="用户名 UserName" prop="username">
          <el-input v-model="regData.username" placeholder="请填写用户名">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="电话 Phone" prop="phone">
          <el-input v-model="regData.phone" placeholder="请填写手机号">
            <template #prefix>
              <el-icon class="el-input__icon"><Iphone /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码 PassWord" prop="password">
          <el-input
            v-model="regData.password"
            placeholder="请填写密码"
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
      <LgBtn @click="submitForm(ruleFormRef)">注册</LgBtn>
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
  padding-top: 2vh;
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
