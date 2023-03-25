<script lang="ts" setup>
import { ElPagination, ElTag } from "element-plus";
import { Ref, ref, reactive } from "vue";
import * as Apis from "../../../request/apis/index";

//表单
const orderList: any = ref({
  userName: "",
  phone: "",
  date: "",
  time: "",
  address: "",
  trainMode: "",
  notes: "",
});

const page = 1;
const count = ref(0);
const setPage = ref(1);

const getOrderList = () => {
  Apis.order.orderList(setPage.value).then((res) => {
    orderList.value = res.data.data;
    count.value = res.data.count;
  });
};
getOrderList();

const handleCurrentChange = (val: number) => {
  // console.log("val"+val)
  setPage.value = val++;
  getOrderList();
};
</script>

<template>
  <div id="#order">
    <div class="orderPart">
      <div class="title">
        <span>ORDER</span>
        OF USER
      </div>
      <div class="box">
        <!-- 内容 -->
        <div class="content" v-for="item in orderList">
          <div class="basic-msg">
            <div class="tag-title">
              <div class="tag-part">
                <el-tag class="tag">{{ item.trainMode }}</el-tag>
              </div>
              <div class="article-title">
                {{ item.address }} - {{ item.time }}
              </div>
            </div>

            <div class="abstract">
              到店日期：{{ item.date }} - 备注：{{ item.notes }}
            </div>
          </div>

          <div class="date-author">
            <div class="date">电话：{{ item.phone }}</div>
            <div class="author">预约人：{{ item.userName }}</div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="page">
          <el-pagination
            :currentPage="page"
            layout="prev, pager, next"
            :total="count"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderPart {
  padding-top: 20px;
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

.box {
  width: 55%;
  margin-top: 30px;

  .content {
    border: 2px solid #ccc;
    height: 90px;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;

    .basic-msg {
      margin-top: 10px;
      padding: 10px;
      width: 70%;
      .tag-title {
        display: flex;
        .tag-part {
          .tag {
            color: #409eff;
          }
        }
        .article-title {
          margin-left: 10px;
          font-size: 20px;
        }
      }
      .abstract {
        margin-top: 12px;
        white-space: nowrap; // 强制一行显示
        overflow: hidden; // 超出隐藏
        text-overflow: ellipsis;
        color: #999;
      }
    }

    .date-author {
      margin-top: 10px;
      padding: 10px;
      text-align: end;
      width: 25%;
      color: #666;
      font-size: 16px;
      .date {
        font-size: 16px;
      }
      .author {
        margin-top: 15px;
        font-size: 15px;
      }
    }
  }
}
</style>
