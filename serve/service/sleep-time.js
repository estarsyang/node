const sleepTimeModel = require('../models/sleep-time')

module.exports = {

  async find(params) {
    const list = await sleepTimeModel.find(params)
    return list
  },
  // 新增分类
  async add (params = {}) {
    const res = await sleepTimeModel.create(params)
    return res
  },
}
