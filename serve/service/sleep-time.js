const sleepTimeModel = require('../models/sleep-time')

module.exports = {

  async find(params, sort,pageNumber,pageSize) {
    const list = await sleepTimeModel.find(params,'time -_id').sort(sort).skip((pageNumber-1)*pageSize).limit(pageSize)
    return list
  },
  // 新增分类
  async add (params = {}) {
    const res = await sleepTimeModel.create(params)
    return res
  },
}
