const userModel = require('../models/user')

module.exports = {

  // 新增用户
  async add (params = {}) {
    const res = await userModel.create(params)
    return res
  },
  // 是否存在
  async exists (params) {
    const ret = await userModel.exists(params)
    return ret
  }
}
