<template>
  <div class="content">
    <div class="handle">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      
      <div><mt-button type="primary" class="clock" @click="submit">打卡</mt-button></div>
      <div><mt-button type="primary" class="clock" @click="getList">查看</mt-button></div>
    </div>
    
    <div class="list" v-if="list.length > 0">
      <p>打卡记录  <a style="color: #26a2ff" @click="goMore">查看更多</a></p>
      <ul class="time-list">
        <li v-for="item in list" :key="item.time" class="time-item">{{item.clearTime}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import {getListApi,clockTimeApi} from '@/api/time';
import moment from 'moment'
 
import {encrypt} from '@/utils/util'
export default {
  data() {
    return {
      username:'ddayang',
      list: [],
      query: {
        pageNumber: 1,
        pageSize:2,
        sort: {
          time: -1
        }
      },
      disableHand: {
        previous: false,
        next: false
      }
    }
  },
  methods: {
    getList() {
      if(!this.valid()) return
      getListApi({user:this.username, ...this.query}).then(res => {
        this.list = res.map(item => {
          item.clearTime = moment(item.time - 0).format('YYYY-MM-DD HH:mm:ss')
          return item
        })
      })
    },
    submit() {
      if(!this.valid()) return

      clockTimeApi({
        user: encrypt(this.username)
      }).then(() => {
        this.$toast('打卡成功')
        this.getList()
      }).catch(err => {
        const {message} = err
        this.$toast(message)
      })
    },
    valid() {
      if(!this.username) {
        this.$toast('请输入用户名称')
        return false
      }
      return true
    },
    goMore() {
      this.$router.push({ path: 'more', query: { user: this.username }})
    }
  },
  created() {
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
    .time-item {
      padding: 2px 0;
      border-bottom: 1px solid #ddd;
    }
  }
</style>