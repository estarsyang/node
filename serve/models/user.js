const mongodb = require('../lib/db')
const { Schema } = require('mongoose')


const schema = new Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: String
  }
}, {
  collection: 'user'
})

module.exports = mongodb.model('user', schema)