<template>
  <div class="content">
    <div class="handle">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-button type="primary" class="clock">打卡</mt-button>
    </div>
    
    <div class="list">
      <p>打卡记录</p>
    </div>
    
  </div>
</template>


<script>
import {getListApi} from '@/api/card';
export default {
  data() {
    return {
      username:''
    }
  },
  methods: {
    getList() {
      getListApi({}).then(res => {
        console.log(res);
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  .content {
    padding: 24px;
  }
  .clock {
    margin-top: 24px;
  }
  .list {
    margin-top: 24px;
  }
</style>