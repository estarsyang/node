const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost/sleep', {useNewUrlParser: true}).then(()=> {
  console.log('db connetct sucess');
}).catch(()=> {
  console.log('db connetct fail!!!!!!');
})

const mongoInstance = mongoose.connection
module.exports = mongoInstance