const Router = require('koa-router')
const time = require('./time')

const router = new Router()

router.use(time.routes())

module.exports = router