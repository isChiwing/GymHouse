<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";

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
} from "element-plus";

//表单
const formData = reactive({
  title: "",
  author: "",
  type: "",
  content: "",
});

//门店数据
const articleType = reactive(["文章", "通知"]);

//表单验证
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  author: [
    {
      required: true,
      trigger: "blur",
      message: "请输入作者",
    },
  ],
  type: [
    {
      required: true,
      message: "请选择文章类型",
      trigger: "change",
    },
  ],
  content: [{ required: true, message: "请输入文章内容", trigger: "blur" }],
});

//提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      console.log(formData);
      //提示框
      ElMessage({
        message: "提交成功！我们会尽快改进",
        type: "success",
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div id="#write">
    <div class="repairs">
      <div class="title"><span>WRITE</span> FORM</div>

      <div class="form">
        <div class="elform">
          <el-form
            ref="ruleFormRef"
            label-position="right"
            label-width="100px"
            :model="formData"
            style="max-width: 50%"
            size="large"
            :rules="rules"
          >
            <el-form-item label="标题" prop="title">
              <el-input v-model="formData.title" placeholder="请输入文章标题" />
            </el-form-item>

            <el-form-item label="作者" prop="author">
              <el-input
                v-model="formData.author"
                placeholder="请输入文章作者"
              />
            </el-form-item>

            <el-form-item label="文章类型" prop="type">
              <el-radio-group v-model="formData.type">
                <el-radio label="文章" />
                <el-radio label="通知" />
              </el-radio-group>
            </el-form-item>

            <el-form-item label="文章内容" prop="content">
              <el-input
                v-model="formData.content"
                :rows="10"
                type="textarea"
                resize="none"
                placeholder="请填写文章内容"
              />
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="submit">
        <LgBtn @click="submitForm(ruleFormRef)">提交</LgBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repairs {
  padding-top: 61px;
  margin-left: 20%;
  min-height: calc(100vh - 61px);
}

.title {
  padding-top: 5vh;
  margin-left: 2%;
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
  width: 100%;
  margin-top: 5vh;

  .elform {
    width: 100%;
  }
}
.submit {
  width: 68%;
  margin-top: 40px;
}
</style>
