const Router = require("koa-router");

const router = new Router()
const { sleepTime } = require('../controllers')


router.get('/list', sleepTime.list)

router.post('/add', sleepTime.add)


module.exports = router