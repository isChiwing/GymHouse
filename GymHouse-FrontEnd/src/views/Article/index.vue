<script lang="ts" setup>
import { ElPagination, ElTag } from "element-plus";
import { Ref, ref, reactive } from "vue";

//表单
const articleList = reactive([
  {
    title: "文章标题文章标题文章标题",
    type: 0,
    author: "admin",
    date: "2023-01-29",
    text: "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
  },
  {
    title: "文章标题2文章标题2文章标题",
    type: 1,
    author: "admin",
    date: "2023-01-29",
    text: "文章内容2文章内容2文章内容2文章内容2文章内容文章内容文章内容文章内容文章内容",
  },
  {
    title: "文章标题3文章标题3文章标题",
    type: 0,
    author: "admin",
    date: "2023-01-29",
    text: "文章内容2文章内容2文章内容2文章内容2文章内容文章内容文章内容文章内容文章内容",
  },
]);
</script>

<template>
  <div class="article">
    <div class="title"><span>ARTICLE</span> LIST</div>

    <div class="box">
      <!-- 内容 -->
      <div class="content" v-for="item in articleList">
        <div class="basic-msg">
          <div class="tag-title">
            <div class="tag-part">
              <el-tag class="tag" v-if="item.type==0">文章</el-tag>
              <el-tag class="ml-2" type="warning" v-if="item.type==1">通知</el-tag>
            </div>
            <div class="article-title">{{ item.title }}</div>
          </div>

          <div class="abstract">
            {{ item.text }}
          </div>
        </div>

        <div class="date-author">
          <div class="date">日期：{{ item.date }}</div>
          <div class="author">作者：{{ item.author }}</div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="page">
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  min-height: calc(100vh - 61px);
  width: 100%;
}

.title {
  padding-top: 5vh;
  margin-left: 10%;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;

  span {
    color: transparent;
    font-size: 48px;
    -webkit-text-stroke: 1px var(--theme-color);
    padding-right: 8px;
  }
}

.box {
  width: 55%;
  margin: 0 auto;
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
      width: 22%;
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

  .page {
    margin-top: 30px;
    margin-bottom: 50px;
    position: relative;
    left: 32%;
  }
}
</style>
