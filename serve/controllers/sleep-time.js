const sleepTimeService = require('../service/sleep-time')
const userService = require("../service/user");
const utils = require('../utils/util')
const { ApiModel, ErrorCode } = require('../lib/response')

module.exports = {
  async list (ctx, next) {
    const { body:{user,sort={time:-1},pageNumber= 1, pageSize = 10  } } = ctx.request
    const list = await sleepTimeService.find({user},sort,pageNumber,pageSize)
    ctx.body = new ApiModel(list)
  },
  async add (ctx, next) {
    const { body:{user} } = ctx.request
    const name = utils.decrypt(user)
    const isExist = await userService.exists({ name })
    if(isExist) {
      const params = {
        user: name,
        time: new Date().valueOf()
      }
      const res = await sleepTimeService.add(params)
      if(res._id) {
        ctx.body = new ApiModel(null)
      } else {
        ctx.body = new ApiModel(null, 20002, '打卡失败')
      }
    } else {
      ctx.body = new ApiModel(null, 20003, '参数错误')
    }
    
  }
}