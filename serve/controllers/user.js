const userService = require("../service/user");
const { ApiModel, ErrorCode } = require('../lib/response')


module.exports = {
  async add (ctx, next) {
    const { body:{name,phone} } = ctx.request
    const params = {
      name,
      phone
    }
    const isExist = await userService.exists({ name })
    if (isExist) {
      ctx.body = new ApiModel(null, ErrorCode.EXIST, `${name}已存在`)
      return
    }
    const res = await userService.add(params)
    if(res._id) {
      ctx.body = new ApiModel(null)
    } else {
      ctx.body = new ApiModel('add fail', 20002)
    }
  }
}