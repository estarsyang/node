const Koa = require('koa');
const app = new Koa();
const router = require('./routers');
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(router.routes())
app.listen(3000);