class ApiModel {
  constructor (data, errcode = 0, message) {
    this.data = data
    this.errcode = errcode
    this.message = message || ErrorMessage[errcode] || ''
  }
}


const ErrorCode = {
  SUCCESS: 0, // 成功
  PARAM_ABSENT: 20001,
  ADD_FAIL: 20002
}

const ErrorMessage = {
  [ErrorCode.SUCCESS]: 'success',
  [ErrorCode.PARAM_ABSENT]: 'param sbsent',
  [ErrorCode.ADD_FAIL]: 'add fail',
}

module.exports = {
  ApiModel,
  ErrorCode
}