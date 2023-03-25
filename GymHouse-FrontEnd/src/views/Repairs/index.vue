<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import LgBtn from "@/components/LoginButton.vue";
import * as Apis from "../../request/apis/index";
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
const formData:any = reactive({
  name: "",
  phone: "",
  date: "",
  area: "",
  address: "",
  equipment:"",
  note: "",
});

//门店数据
const addressData = reactive(["同心圆店", "同乐园店", "同德园店"]);

//教练数据
const areaData = reactive([
  "力量区",
  "瑜伽区",
  "有氧区"
]);

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

//禁选日期
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};

//表单验证
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  phone: [
    {
      required: true,
      trigger: "blur",
      validator: checkPhone,
    },
  ],
  date: [
    {
      required: true,
      message: "请选择日期",
      trigger: "change",
    },
  ],
  time: [
    {
      required: true,
      message: "请选择到店时间",
      trigger: "change",
    },
  ],
  address: [
    {
      required: true,
      message: "请选择门店",
      trigger: "change",
    },
  ],
  area: [
    {
      required: true,
      message: "请选择区域",
      trigger: "change",
    },
  ],
  equipment: [{ required: true, message: "请输入器材编号", trigger: "blur" }],
});

//提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      Apis.repairs.submitrepairs(formData).then((res) => {
        console.log(formData)
        //提示框
        ElMessage({
          message: "报修提交成功",
          type: "success",
        });
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

</script>

<template>
  <div class="repairs">
    <div class="title"><span>REPAIRS</span> FORM</div>

    <div class="form">
      <div class="elform">
        <el-form
          ref="ruleFormRef"
          label-position="right"
          label-width="100px"
          :model="formData"
          style="max-width: 460px"
          size="large"
          :rules="rules"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入您的称呼" />
          </el-form-item>

          <el-form-item label="电话" prop="phone">
            <el-input v-model="formData.phone" placeholder="请输入您的电话" />
          </el-form-item>

          <el-form-item label="到店日期" prop="date">
            <el-date-picker
              v-model="formData.date"
              type="date"
              placeholder="请选择到店日期"
              value-format="YYYY-MM-DD"
              format="YYYY-MM-DD"
              :disabled-date="disabledDate"
            />
          </el-form-item>

          <el-form-item label="门店" prop="address">
            <el-select v-model="formData.address" placeholder="请选择预约门店">
              <el-option
                v-for="item in addressData"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="选择区域" prop="area">
            <el-select
              v-model="formData.area"
              placeholder="请选择训练方式或教练"
            >
              <el-option
                v-for="item in areaData"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="器材编号" prop="equipment">
            <el-input v-model="formData.equipment" placeholder="请输入器材编号" />
          </el-form-item>

          <el-form-item label="改进建议">
            <el-input
              v-model="formData.note"
              :rows="3"
              type="textarea"
              resize="none"
              placeholder="请输入您的看法"
            />
          </el-form-item>
        </el-form>
      </div>

      <div class="form-img">
        <img
          src="https://pic.52112.com/180606/JPG-180606_23/Jvb6uFcFBY_small.jpg"
        />
      </div>
    </div>

    <div class="submit">
      <LgBtn @click="submitForm(ruleFormRef)">提交</LgBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repairs {
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
  width: 68%;
  margin: 0 auto;
  margin-top: 5vh;
  display: flex;

  .elform {
    width: 50%;
  }
  .form-img {
    width: 50%;
    display: flex;
    img {
      width: 75%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      //margin-left: 50px;
      margin: auto;
      box-shadow: 5px 5px 10px #ccc;
    }
  }
}
.submit {
  width: 68%;
  margin: 0 auto;
  margin-top: 40px;
}
</style>
