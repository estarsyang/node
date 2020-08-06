const sleepTimeService = require('../service/sleep-time')
const utils = require('../utils/util')

module.exports = {
  async list (ctx, next) {
    const list = await sleepTimeService.find()
    ctx.body = list
  },
  async add (ctx, next) {
    const { body:{user} } = ctx.request
    const params = {
      user: utils.decrypt(user),
      time: new Date().valueOf()
    }
    const list = await sleepTimeService.add(params)
    ctx.body = list
  }
}