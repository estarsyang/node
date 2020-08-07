<template>
  <div>
    <p>打卡时间</p>
    <ul class="list">
      <li v-for="item in list" :key="item.time" class="time-item">{{item.clearTime}}</li>
    </ul>
    <div class="handle">
      <mt-button size="small" type="primary" @click="pre" :disabled="query.pageNumber < 2">上一页</mt-button>
      <mt-button size="small" type="primary" @click="next" :disabled="list.length < 10">下一页</mt-button>
    </div>
  </div>
</template>


<script>
import {getListApi} from '@/api/time';
import moment from 'moment'
export default {
  name: 'more',
  data() {
    return{
      list: [],
      query: {
        pageSize:10,
        pageNumber: 1
      }
    }
  },
  watch: {
    'query.pageNumber':function(){
      this.getList()
    }
  },
  methods: {
    getList() {
      getListApi({user: this.$route.query.user, ...this.query}).then(list => {
        this.list = list.map(item => {
          item.clearTime = moment(item.time - 0).format('YYYY-MM-DD HH:mm:ss')
          return item
        })
      }).catch(err => {
        const {message} = err
        this.$toast(message)
      })
    },
    pre() {
      this.query.pageNumber -= 1
    },
    next() {
      this.query.pageNumber += 1
    }
  },
  created() {
    this.getList()
  }
}
</script>


<style lang="scss" scoped>
  .list {
    margin-top: 24px;
    .time-item {
      padding: 2px 0;
      border-bottom: 1px solid #ddd;
    }
  }
  .handle {
    margin-top: 24px;
    display:flex;
    justify-content: space-around;
  }
</style>