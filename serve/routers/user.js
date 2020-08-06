const Router = require('koa-router')
const user = require('../controllers/user')


const router = new Router()
router.post('/add', user.add)




module.exports = router