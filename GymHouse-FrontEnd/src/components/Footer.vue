<script lang="ts" setup></script>

<template>
  <div class="footer">
    <div class="box">
      <div class="logo">
        <img src="@/assets/logo.png" class="logo-img" />
        <span class="logo-title">GymHouse</span>
      </div>
      <div class="thanks">
        <div class="thanks-title">特别鸣谢</div>
        <div class="thanks-item">
          <div>
            <span>广州商学院</span><br />
            <span>广商现代信息产业学院</span><br />
            <span>广商华为ICT学院</span>
          </div>
          <div>
            <span>广商33栋公寓527全体成员</span><br />
            <span>现院全体老师及辅导员</span><br />
            <span>制作人@chiwing</span>
          </div>

          
        </div>
      </div>
    </div>
    <div class="idNum">粤ICP备xxxxxxxx号-01 学号: 201912320048</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 35vh;
  width: 100%;
  border-top: 1px solid #eee;
}

.box {
  width: 70%;
  height: 80%;
  align-self: center;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  .logo {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;
    .logo-img {
      width: 80px;
      height: 80px;
    }
    .logo-title {
      color: var(--theme-color);
      font-size: 30px;
      padding-top: 5px;
      padding-left: 10px;
      font-family: Helvetica;
    }
  }
  .thanks {
    width: 500px;
    align-self: center;
    margin-left: 5rem;
    .thanks-title {
      color: var(--theme-color);
      font-size: 18px;
      margin-bottom: 20px;
    }
    .thanks-item {
      color: #333;
      display: flex;
      font-size: 16px;
      span {
        line-height: 28px;
        padding-right: 2rem;
      }
    }
  }
}

.idNum {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
