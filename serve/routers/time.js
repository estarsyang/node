const Router = require("koa-router");
const { sleepTime } = require('../controllers')
const router = new Router()



router.post('/list', sleepTime.list)

router.post('/add', sleepTime.add)


module.exports = router