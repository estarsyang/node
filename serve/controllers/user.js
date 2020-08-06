const userService = require("../service/user");
const { ApiModel, ErrorCode } = require('../lib/response')
const utils = require('../utils/util')

const demoPassword = 'testdemo'

module.exports = {
  async add (ctx, next) {
    const { body:{name = '',phone='', password} } = ctx.request
    if(!name || !password || demoPassword !== password) {
      ctx.body = new ApiModel(null, 20001)
      return
    }
    const isExist = await userService.exists({ name })
    if (isExist) {
      ctx.body = new ApiModel(null, ErrorCode.EXIST, `操作异常`)
      return
    }
    const params = {
      name,
      phone
    }
    const res = await userService.add(params)
    if(res._id) {
      ctx.body = new ApiModel(null)
    } else {
      ctx.body = new ApiModel('add fail', 20002)
    }
  }
}