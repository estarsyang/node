const sleepTimeService = require('../service/sleep-time')
const utils = require('../utils/util')
const { ApiModel, ErrorCode } = require('../lib/response')

module.exports = {
  async list (ctx, next) {
    const { body:{user} } = ctx.request
    const list = await sleepTimeService.find({
      user
    })
    ctx.body = new ApiModel(list)
  },
  async add (ctx, next) {
    const { body:{user} } = ctx.request
    const params = {
      user: utils.decrypt(user),
      time: new Date().valueOf()
    }
    const res = await sleepTimeService.add(params)
    if(res._id) {
      ctx.body = new ApiModel(null)
    } else {
      ctx.body = new ApiModel('add fail', 20002)
    }
  }
}