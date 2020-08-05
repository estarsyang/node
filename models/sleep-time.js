const mongodb = require('../lib/db')
const { Schema } = require('mongoose')


const schema = new Schema({
  time: {
    type: String,
    required: true
  },
  user: {
    type: String,
    require: true
  }
}, {
  collection: 'sleeptime'
})

module.exports = mongodb.model('sleeptime', schema)