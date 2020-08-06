const Router = require('koa-router')
const time = require('./time')
const user = require('./user')

const router = new Router()

router.use('/time',time.routes())
router.use('/user',user.routes())

module.exports = router